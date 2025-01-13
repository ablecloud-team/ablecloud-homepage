FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/
COPY . /app

RUN pnpm install
RUN pnpm build

CMD ["pnpm", "start", "-p", "80"]
EXPOSE 80
