const buf1 = Buffer.from("abcdefghijklmnopqrstu");
console.log(buf1); // <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75>
console.log(buf1.toString());
console.log(buf1.length, buf1.toString().length);
const buf2 = Buffer.from("abcdefghijklmnopqrstu".toUpperCase());
console.log(buf2); // <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75>
console.log(buf2.toString());
console.log(buf2.length, buf2.toString().length);
const buf3 = Buffer.from("가나다라");
console.log(buf3);
console.log(buf3.length, buf3.toString().length);
const buf4 = Buffer.from("ㄱ");
console.log(buf4);
console.log(buf4.length, buf4.toString().length);
// 3 byte => 1 byte? == 8bit == 0~255 == 0~FF => Buffer 한칸?
console.log("ㄱ".charCodeAt().toString(16));
console.log("\u3131");
// https://dencode.com/

console.log(Buffer.from(' !"'));
