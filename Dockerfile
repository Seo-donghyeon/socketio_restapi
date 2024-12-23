From node:16

# app directory 생성
WORKDIR /usr/src/app

# app 의존성 설치
COPY package*.json ./

RUN npm install

# app source 추가

COPY . .

EXPOSE 8000
CMD ["node", "index.js"]
