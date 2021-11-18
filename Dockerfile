FROM quay.io/ibmgaragecloud/node:lts-stretch

RUN mkdir -p /app
WORKDIR /app

# copy source files
# COPY . .

COPY package*.json .
# install dependencies
RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
