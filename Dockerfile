
FROM node:18-alpine3.18 AS deps

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install


FROM node:18-alpine3.18 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

COPY . .

COPY .env.production .env.production

ENV NODE_ENV=production
RUN npx next build


FROM node:18-alpine3.18 AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

CMD ["npx", "next", "start"]

