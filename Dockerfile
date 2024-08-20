# Base image
FROM node:latest as node

# Working directory
WORKDIR /app

# Copy app source
COPY . .

# Install dependencies
RUN npm install

RUN ng build --base-href .

FROM nginx:alpine
COPY --from=node /dist/simple-ng-app/browser/ /dist
