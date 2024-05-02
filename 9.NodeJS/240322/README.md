# Buffer

- 16진수로 된 데이터의 모음 << 이걸로 외우자
- 컴퓨터가 다루는 직접적인 데이터
- 이후 파일을 가져오거나 요청/응답을 통해 데이터를 주고 받을 때 사용하게 된다.

## Unicode

- UTF-8, EUC-KR, EUC-JP, EUC-CH, ...
- 우리가 주로 쓰는 건 UTF-8
- Buffer로 데이터를 받지 않고 String으로 처리했을 때 길이가 맞지 않아서 오류가 발생했었다.
- UTF-8은 1~4 byte, 4 byte UTF-16
- a~z, A~Z << 1 byte << 이것만 따로 모아둔, ff, 1 byte만을 가질 수 있는 언어포멧? => ASCII(아스키)

# JSON

- 문자열이다.
- Javascript Object Notation

```json
{
  "a": 1,
  "b": "b"
}
```

```javascript
{
  a: 1,
  b: "b"
}
```
