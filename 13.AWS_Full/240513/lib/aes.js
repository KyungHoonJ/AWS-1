// 양방향 암호화 중 하나.
// 대칭키 || 비대칭키
// 키 : 암호화 || 복호화 때 사용되는 열쇠
// 대칭키 : 양쪽의 키가 같다, 즉 하나의 키로 암호화와 복호화를 진행한다.

import crypto from "crypto";

const key = crypto.scryptSync("암호", "소금", 32);
console.log(key.length);

const iv = crypto.randomBytes(16);
console.log(iv.length);
// initialization vector

const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
let result = cipher.update("sdfsadf", "utf-8", "hex");
result += cipher.final("hex");
console.log(result);

const decipher = crypto.createDecipheriv("aes-256-gcm", key, iv);
let result2 = decipher.update(result, "hex", "utf-8");
// result2 += decipher.final("utf-8"); // hex -> base64 암호화의 경우 필요
console.log(result2);
