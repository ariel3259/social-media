FROM node:16-alpine
WORKDIR /usr/src/social-media
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD npm run dev
