FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app

COPY pnpm-lock.yaml package.json ./
RUN pnpm install

COPY . .

FROM base AS build
RUN pnpm run build

FROM nginx:alpine AS production
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]