FROM node:12
ARG BACKEND_URL
ENV BACKEND_URL $BACKEND_URL
WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build
CMD ["yarn", "start"]