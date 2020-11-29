FROM node:12
WORKDIR /usr/app
COPY package.json .
COPY static ./
RUN npm install --quiet
COPY . .
CMD ["npm", "run", "start"]