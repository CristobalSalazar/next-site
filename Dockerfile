FROM node:12
ARG BACKEND_URL
ARG PEXELS_KEY
ENV BACKEND_URL $BACKEND_URL
ENV PEXELS_KEY $PEXELS_KEY
WORKDIR /app
COPY ./package.json .
COPY ./yarn.lock .
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build
CMD ["yarn", "start"]