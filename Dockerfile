FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine as server
WORKDIR /app
COPY package*.json ./
RUN npm ci --production
COPY --from=builder ./app/dist ./dist
EXPOSE 8000
CMD ["npm", "start"]
