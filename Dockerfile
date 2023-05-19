FROM node:16-alpine AS base

# Install dependencies only when needed
FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /getOutside-frontend

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock ./
RUN yarn install

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /getOutside-frontend
COPY --from=deps /getOutside-frontend/node_modules ./node_modules
COPY . .

RUN yarn build 


# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /getOutside-frontend

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /getOutside-frontend/public ./public

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /getOutside-frontend/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /getOutside-frontend/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]