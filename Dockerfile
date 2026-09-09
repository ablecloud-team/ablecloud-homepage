FROM node:18-alpine

RUN npm install -g pnpm@8.15.9

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/
COPY . /app

RUN pnpm install --frozen-lockfile
RUN pnpm build

CMD ["pnpm", "start", "-p", "80"]
EXPOSE 80
