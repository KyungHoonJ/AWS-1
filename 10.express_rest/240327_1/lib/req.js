const parseHeader = (str) => {
  const arr = str.split("\r\n");
  const [method, url, protocol] = arr[0].split(" ");

  let tempIdx = url.indexOf("?");
  if (tempIdx == -1) tempIdx = url.length;
  const path = url.slice(0, tempIdx);

  const temp = { method, url, path, protocol };
  // console.log(temp.path);

  if (path.indexOf(".jpg") > -1) {
    temp.ext = "jpg";
  }

  if (path.indexOf(".png") > -1) {
    temp.ext = "png";
  }

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
  console.log(tempStr);
  const [headerStr, bodyStr] = tempStr.split("\r\n\r\n");

  return { header: parseHeader(headerStr), body: parseBody(bodyStr) };
};

module.exports = { makeReq };
