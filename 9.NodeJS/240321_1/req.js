const makeReq = (data) => {
  const tempArr = data.toString().split("\r\n");
  const [method, path, protocol] = tempArr[0].split(" ");
  const temp = { method, path, protocol };
  //   GET /favicon.ico HTTP/1.1
  //   Host: localhost:3000
  //   Connection: keep-alive
  //   sec-ch-ua: "Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"
  //   sec-ch-ua-mobile: ?0
  //   User-Agent: Mozilla/5.0 (Windows NT
  //   10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36
  //   sec-ch-ua-platform: "Windows"
  //   Accept: image/avif,image/webp,image//apng,image/svg+xml,image/*,*/*;q=08.8Sec-Fetch-Site: same-origin
  //   Sec-Fetch-Mode: no-cors
  //   Sec-Fetch-Dest: image
  //   Referer: http://localhost:3000/test..html
  //   Accept-Encoding: gzip, deflate, br,  zstd
  //   Referer: http://localhost:3000/test.h
  //   Accept-Encoding: gzip, deflate, br, z
  //   Accept-Language: ko-KR,ko;q=0.9,en-US
  //
  //   {body}
  let i = 1;
  for (; i < tempArr.length; ++i) {
    if (tempArr[i].length == 0) break;
    const tempIdx = tempArr[i].indexOf(": ");
    temp[tempArr[i].slice(0, tempIdx)] = tempArr[i].slice(tempIdx + 2);
  }

  console.log(tempArr[i + 1]);
  if (tempArr[i + 1].length > 0) {
    const body = {};
    // id=sarvaserv&pw=earser
    const bodyArr = tempArr[i + 1].split("&");
    // ["id=sarvaserv", "pw=earser"]
    bodyArr.forEach((item) => {
      // "id=sarvaserv"
      const tempArr = item.split("=");
      // ["id", "%E3%85%A0%E3%84%B7%E3%84%B4%E3%85%81%E3%84%B1%E3%84%B7"]
      body[tempArr[0]] = decodeURI(tempArr[1]);
    });
    //   const tempObj = {}
    //   tempObj[0] = 'test'
    //   tempObj[1] = 'test2'
    temp.body = body;
  }
  return temp;
};

module.exports = { makeReq };
