import count from "./count";
import "./css/index.scss";
import axios, { AxiosResponse } from "axios";

(async (): Promise<void> => {
  const data: AxiosResponse<any, any> = await axios.get("http://naver.com");
  console.log(data);
})();

const countElem: HTMLSpanElement = document.getElementById("count");
countElem.innerHTML = `${count.getCount()}`;
countElem.classList.add("even");

document.getElementById("count-btn").onclick = (e: PointerEvent): void => {
  countElem.innerHTML = count.increment().toString();
  if (count.getCount() % 2) {
    countElem.classList.remove("even");
    countElem.classList.add("odd");
  } else {
    countElem.classList.add("even");
    countElem.classList.remove("odd");
  }
  if (count.getCount().toString().indexOf("3") != -1) {
    countElem.classList.add("third");
  } else if (countElem.classList.contains("third")) {
    countElem.classList.remove("third");
  }
};
