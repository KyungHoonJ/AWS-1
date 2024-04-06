const makeHeader = (type, length) => `HTTP/1.1 200 Ok
Content-Type: ${type}; charset=UTF-8
Content-Length: ${length}`;
let cookie = "";

const setCookie = (name, value) => {
  cookie = name + "=" + value;
};

const getCookie = () => {
  if (cookie) {
    return `
Set-Cookie: ${cookie}`;
  } else return "";
};

const makeResponse = (type, body) => {
  body = Buffer.from(body);
  return `${makeHeader(type, body.length)}${getCookie()}

${body.toString()}`;
};

const redirect = (path) => {
  return `HTTP/1.1 301 Moved Permenently
Content-Type: text/html
Content-Length: 0
Connection: Close
Location: ${path}

`;
};

const sendFile = (type, body) => {
  const headerBuffer = Buffer.from(`${makeHeader(type, body.length)}

`);

  const tempBuffer = Buffer.concat(
    [headerBuffer, body],
    headerBuffer.length + body.length
  );
  return tempBuffer;
};

module.exports = { makeResponse, redirect, sendFile, setCookie };
