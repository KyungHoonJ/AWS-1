const makeHeader = (type, length) => `HTTP/1.1 200 Ok
Content-Type: ${type}; charset=UTF-8
Content-Length: ${length}`;

const makeResponse = (type, body) => {
  body = Buffer.from(body);
  return `${makeHeader(type, body.length)}

${body.toString()}`;
};

const redirect = () => {
  return `HTTP/1.1 301 Moved Permenently
Content-Type: text/html
Content-Length: 0
Connection: Close
Location: /

`;
};
// 010101 => R : 1, G : 1, B : 1
//
const sendFile = (type, body) => {
  const headerBuffer = Buffer.from(`${makeHeader(type, body.length)}

`); // '\r\n'
  // `${name}${age}`
  const tempBuffer = Buffer.concat(
    [headerBuffer, body],
    headerBuffer.length + body.length
  );
  return tempBuffer;
};

module.exports = { makeResponse, redirect, sendFile };
