ARG PROJECT_DIR="/usr/src/app"

FROM node:18 AS builder
WORKDIR ${PROJECT_DIR}

COPY package*.json ./
COPY . .
RUN npm i -g pnpm
RUN pnpm i --frozen-lockfile
RUN pnpm run build


FROM node:18-alpine AS runner
ENV PORT=3000

WORKDIR ${PROJECT_DIR}
COPY --from=builder ${PROJECT_DIR}/dist ./dist
COPY --from=builder ${PROJECT_DIR}/node_modules ./node_modules
COPY env ./env

EXPOSE $PORT

CMD ["node", "dist/main"]
