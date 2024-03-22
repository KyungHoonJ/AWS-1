const parseHeader = (str) => {
  const arr = str.split("\r\n");
  const [method, path, protocol] = arr[0].split(" ");
  const temp = { method, path, protocol };

  for (let i = 1; i < arr.length; ++i) {
    const tempIdx = arr[i].indexOf(": ");
    temp[arr[i].slice(0, tempIdx)] = arr[i].slice(tempIdx + 2);
  }

  return temp;
};

const parseBody = (str) => {
  if (str.length == 0) return {};

  const body = {};
  const bodyArr = str.split("&");

  bodyArr.forEach((item) => {
    const [name, value] = item.split("=");
    body[name] = decodeURI(value);
  });

  return body;
};

const makeReq = (data) => {
  const tempStr = data.toString();
  const [headerStr, bodyStr] = tempStr.split("\r\n\r\n");

  return { header: parseHeader(headerStr), body: parseBody(bodyStr) };
};

module.exports = { makeReq };
