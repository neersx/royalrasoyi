# Use Node.js 22.13-bullseye as the base image (Debian-based, compatible with Ubuntu)
FROM node:22.13-bullseye

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npm run build -c production

EXPOSE 4000

CMD ["node", "dist/server/server.mjs"]
