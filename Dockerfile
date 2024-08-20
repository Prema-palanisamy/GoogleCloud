# Base image
FROM node:latest as node

# Working directory
WORKDIR /app

# Copy app source
COPY . .

# Install dependencies
RUN npm install

RUN npm run build --base-href .

FROM nginx:alpine
COPY --from=node /dist/anuglar-app/browser/ /usr/share/nginx/html