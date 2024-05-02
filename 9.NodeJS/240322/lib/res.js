const makeHeader = (type, length) => `HTTP/1.1 200 Ok
Content-Type: ${type}
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

module.exports = { makeResponse, redirect };
