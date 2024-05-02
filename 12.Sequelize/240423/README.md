# Transaction

- 일의 최소 단위
- 일 자체가 끝나야 적용한다.

## 실습

### 테이블 생성

```sql
CREATE TABLE user_crypto (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(50) UNIQUE NOT NULL,
    pw VARCHAR(64) NOT NULL,
    phone VARCHAR(13) NOT NULL
);
```

    - crypto : 암호화
        - encrypto | decrypto

```sql
CREATE TABLE user_info(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    nick VARCHAR(10) NOT NULL DEFAULT "무명",
    -- user_crypto_id INT UNSIGNED UNIQUE,
    FOREIGN KEY (id) REFERENCES user_crypto(id)
);
```

### 데이터 입력

```sql
START TRANSACTION; -- git checkout -b temp1
INSERT INTO user_crypto (user_id, pw, phone) VALUES ('test1','test1','test1');
INSERT INTO user_info (name, nick) VALUES ('test1','test1');
COMMIT; -- git merge temp1;

SELECT * FROM user_crypto;
SELECT * FROM user_info;

START TRANSACTION; -- git checkout -b temp1
INSERT INTO user_crypto (user_id, pw, phone) VALUES ('test2','test2','test2');
INSERT INTO user_info (name) VALUES ('test2');
ROLLBACK; -- git branch -D temp1
```

# Join

- 하나의 테이블만 가져오는 것이 아니라 2개 이상의 테이블을 하나의 목록(테이블)로 가져올 수 있게 해준다.

```sql
SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id;

SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id WHERE user_info.id IS NULL;

SELECT user_crypto.*, user_info.* FROM user_crypto INNER JOIN user_info ON user_crypto.id=user_info.id;

SELECT uc.id AS "번호", uc.user_id AS "아이디", uc.pw AS "비밀번호", uc.phone, ui.name, ui.nick FROM user_crypto AS uc INNER JOIN user_info AS ui ON uc.id=ui.id;

SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id UNION SELECT user_crypto.*, user_info.* FROM user_crypto RIGHT JOIN user_info ON user_crypto.id=user_info.id WHERE user_crypto.id IS NULL; -- 합집합

SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id WHERE user_info.id IS NULL UNION SELECT user_crypto.*, user_info.* FROM user_crypto RIGHT JOIN user_info ON user_crypto.id=user_info.id WHERE user_crypto.id IS NULL; -- 합집합 - 교지합
```
