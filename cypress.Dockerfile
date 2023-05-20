From cypress/included:12.3.0

WORKDIR /getOutsite-frontend

COPY ./cypress ./cypress
COPY ./cypress.config.js ./cypress.config.js 

RUN yarn cypress run