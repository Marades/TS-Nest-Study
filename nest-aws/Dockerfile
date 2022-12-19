# Production Dockerfile
# This Dockerfile allows to build a production Docker image of the NestJS application.
# It can be used to Amazon ECS task definitions to launch containers.

FROM node:18.12-alpine as builder

WORKDIR /app

COPY . .
RUN npm install -g pnpm
RUN pnpm install

RUN pnpm run build && pnpm prune --prod

# ---

FROM node:16.5-alpine

WORKDIR /app
COPY --from=builder --chown=node:node /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

WORKDIR /app/dist/
EXPOSE 3000

CMD [ "node", "main.js" ]