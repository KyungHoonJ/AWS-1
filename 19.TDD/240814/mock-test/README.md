# Mock

- setting

```bash
cd 19.TDD
mkdir -p 240814/mock-test
cd 240814/mock-test
npm init -y
npm i dotenv express mysql2 sequelize sequelize-typescript
npm i -D @types/express @types/jest @types/node @types/supertest jest nodemon supertest ts-jest ts-node typescript
cp -rfp ../../240812/express-jest/src ./src
cp -rfp ../../240813/sequelize-test/src/models ./src/models
cp ../../240813/sequelize-test/.env ./.env
cp ../../240813/sequelize-test/jest.config.js ./jest.config.js
cp ../../240813/sequelize-test/tsconfig.json ./tsconfig.json
echo >> ./.env
echo PORT=8080 >> ./.env
echo MESSAGE=Now Testing >> ./.env
```
