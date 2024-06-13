```bash
npm init -y
npm i -D typescript
npx tsc --init # tsconfig.json 생성

npm i express
npm i -D @types/node @types/express

npx tsc

npm i -D ts-node
npx ts-node src/server.ts
```

```json
{
  "rootDir": "./src",
  "outDir": "./build"
}
```
