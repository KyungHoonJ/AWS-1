// hash라는 건 단방향 암호화를 얘기한다.
// hash : 칼질하다. / 해시(고기와 감자를 잘게 다져 섞어 요리하여 따뜻하게 차려 낸 것)
// 유일값으로 변경된다.
//   - a => a1
// 언제 쓸까?
//   - 개인정보 저장할 때

import crypto from "crypto";
// 암호화에 대한 내장 모듈

const hashAlgorithm = crypto.createHash("sha256");
// hash 암호화 객체를 만든다. sha256은 hash 종류 중 하나.
const hashing = hashAlgorithm.update("a");
const hashedString = hashing.digest("hex");
console.log(hashedString);
// 7ccaad95173599a6a35c61e14f50a5760703c36ea448d37e37fb653d6e6e017e

const hashAlgorithm2 = crypto.createHash("sha256");
// hash 암호화 객체를 만든다. sha256은 hash 종류 중 하나.
const hashing2 = hashAlgorithm2.update("a ");
const hashedString2 = hashing2.digest("hex");
console.log(hashedString2);
// sha256 => 256 bits => 32 bytes => 64자
// FF
// 2 ** 256 => 요즘은 컴퓨터가 빨라서 이걸 다 넣어두고 찾는 방법도 있다.
// - 레인보우 테이블

const hashAlgorithm3 = crypto.createHash("sha512");
const hashing3 = hashAlgorithm3.update("a");
const hashedString3 = hashing3.digest("hex");
console.log(hashedString3);
// 종류 : MD5, SHA-1, SHA-2(SHA-256), SHA-512

const salt = "sadfsdafsadf";
const hashAlgorithm4 = crypto.createHash("sha512");
const hashing4 = hashAlgorithm4.update("a" + salt);
const hashedString4 = hashing4.digest("hex");
console.log(hashedString4);

// salt, 소금, 암호화에 있어서 의미 없는, 필요 없는 등의 문자열을 포함하여 진행한다.
//   - 해커가 쉽게 암호를 추측할 수 없게 만든다.
//   - 각 솔트가 다 다르게 넣는 게 일반적이다.

// 키 스트레칭 : 해시화를 반복한다.
// pbkdf2, bcrypt, scrypt
// bcrypt : 가장 기본적인 키 스트레칭 암호화 함수
// pbkdf2 : 가장 많이 사용되는 암호화 함수
// scrypt : 요즘 뜨는 함수

const salt2 = (await crypto.randomBytes(64)).toString("base64");

crypto.pbkdf2(
  "비밀번호를 입력", // 암호화할 데이터
  salt2, // 소금
  10000, // 반복 횟수
  64, // 암호화에 필요한 Bytes 길이
  "sha512", // 암호화 알고리즘
  (err, key) => {
    // 함수, 콜백 함수, pbkdf2 메서드가 언제 끝날지 모른다.
    console.log("key : ", key.toString("hex"));
  }
);
// key :  e3e4844fbeca4cc0f171efd8b2807d4820f303467bcb213e5965e7cba038823308be59d029b0b046327b36aa41930be31562126b6168789d03ca9b38b1103c34
// key :  467e230f21b4ac13ad6be25c2e357efee0e63027ebcbac09e7953ee2fca05fd34ecb502db8ad124d96d02c9f792b98563c68e35a52e6241e8a6ee378d33fe2af

// 비동기가 아니라 동기로 실행
const pbkdf2 = crypto.pbkdf2Sync(
  "비밀번호를 입력", // 암호화할 데이터
  salt2, // 소금
  10000, // 반복 횟수
  64, // 암호화에 필요한 Bytes 길이
  "sha512" // 암호화 알고리즘
);
console.log("pbkdf2 : ", pbkdf2.toString("hex"));

// Hash는 생각보다 중요한 개념이다.
// HashMap
