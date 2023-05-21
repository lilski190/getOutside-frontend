FROM node:16-alpine AS base

FROM base AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /getOutside-frontend

COPY package.json yarn.lock ./
RUN yarn install

FROM base AS builder
WORKDIR /getOutside-frontend
COPY --from=deps /getOutside-frontend/node_modules ./node_modules
COPY . .

RUN yarn build 

FROM base AS runner
WORKDIR /getOutside-frontend

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /getOutside-frontend/public ./public
COPY --from=builder --chown=nextjs:nodejs /getOutside-frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /getOutside-frontend/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /getOutside-frontend/.next ./.next
COPY --from=builder /getOutside-frontend/node_modules ./node_modules
COPY --from=builder /getOutside-frontend/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js", "npm", "start"]