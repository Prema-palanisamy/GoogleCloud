# Base image
FROM node:latest as node

# Working directory
WORKDIR /app

# Copy app source
COPY . .

# Install dependencies
RUN npm install

RUN npm run build

FROM nginx:alpine
COPY --from=node /dist/simple-ng-app /dist