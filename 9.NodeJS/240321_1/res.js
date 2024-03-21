const makeHeader = (type, length) => `HTTP/1.1 200 Ok
Content-Type: ${type}
Content-Length: ${length}`;

const makeResponse = (type, body) => {
  body = Buffer.from(body);
  return `${makeHeader(type, body.length)}

${body.toString()}`;
};

module.exports = { makeResponse };
