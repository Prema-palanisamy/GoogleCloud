# Base image
FROM node:latest as node
RUN echo "stage1"
# Working directory
WORKDIR /app
RUN echo "stage2"
# Copy app source
COPY . .
RUN echo "stage3"
# Install dependencies
RUN npm install
RUN echo "stage4"
RUN npm run build
RUN echo "stage5"
FROM nginx:alpine
RUN echo "stage6"
COPY --from=node app/dist/simple-ng-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80


