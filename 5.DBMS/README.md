# DBMS

- DataBase Management System
- 데이터베이스 관리 시스템

# DataBase

- 데이터를 저장하는 곳?
- 파일
- Data + Base, 데이터의 기초가 되는 것
- 컴퓨가 없다. 무언가 기억해둬야한다. 정확하게. -> 종이 적는다. -> 보관, 서랍장에?
- 예~전에.... 컴퓨터가 없을 때, 컴퓨터가 보급되지 않았을 때 -> 문서작성해서 문서함 같은 곳에 저장 -> 회사로 따지자면 사람에 대한 이력서라든가 회사 내의 문서, 필수적인 자료 등
  - 문서 == 데이터베이스
  - 관리자 == DBMS
  - 어떤 문서가 필요하다. -> 관리자에게 요청 -> 찾아서 갖다준다.
- 우리가 구글 드라이브나 아이클라우드 같은 곳에 저장된 문서, 사진, 동영상 등등의 파일 == 데이터 -> 정리한 폴더들은 == 데이터베이스 -> 크롬 등의 브라우저로 접속해서 해당 파일들을 이동 업로드 수정 등등을 진행 -> 웹페이지 == DBMS
  - 데이터들을 효과적으로 관리하지 못한다.
  - 용량이나 위치 등을 적절하게 조절하지 못한다.
- 메모리 단위까지 계산해서 데이터들을 정리하기 시작했다. => 데이터베이스
- 이미지 등 파일들 봤을 때 데이터라고 볼 수 있는가? => 데이터베이스 얘기하는 데이터란 무엇일까? -> 짤막한 정보들이다.
  - 박성민 / 34 / 남자 / 대한민국 / 학생 / 군필 / CarrotEasy0214 << 정보, 데이터 => 정리가 가능하고 다른 객체들과 공통되게 사용할 수 있는 것들

# DBMS(DataBase)의 특징

- 보안 << 계정에 대한 권한을 다양하게 설정
- 데이터의 일관성

  ```javascript
  let a = 1;
  a = "2";
  ```

  - 특정한 데이터에 대해서 형식 등을 고정시킬 수 있다.
  - 그럼으로써 정확성을 높일 수 있다.

- 성능 최적화 << 캐시 등의 기술로 성능을 높인다.
- 데이터의 중앙화 & 공유
- 백업 & 복구

# DBMS 종류

## 망형 DBMS

- 지금은 안쓰인다.
- WWW(Would Wide Web)
- 거미줄

## 계층형 DBMS

- 지금은 안쓰인다.
- 회사의 직급 -> HTML 구조
  ```html
  <html>
    <div></div>
    <div></div>
  </html>
  ```
  ```mermaid
  flowchart TB
    A[html] --> B[div]
    A[html] --> C[div]
  ```

## 관계형 DBMS => RDBMS

- Relation DataBase Management System
- mySQL, Oracle DB
- table, 표로 정리한다.
- 각 테이블이 서로 간에 관계 시스템을 맺어 서로를 찾거나 수정할 수 있다.

  | id  |  이름  | 형제 |
  | :-: | :----: | :--: |
  |  1  | 이승배 |  2   |
  |  2  | 이정배 |  1   |
  |  3  | 박성민 |      |
  |  4  | 박지완 |      |
  |  5  | 김강문 |      |
  |  6  | 이동찬 |      |
  |  7  | 손민복 |      |

- SQL을 사용한다.

## noSQL DBMS

- SQL을 사용하지 않는다.
- 비관계형 DB
- table에 맞추지 않아도 된다.
  - 유연한 형태(스키마)를 가진다.
- Mongo DB, Redis

## RDBMS VS noSQL

|        RDBMS         |       비교       |    noSQL     |
| :------------------: | :--------------: | :----------: |
|        table         | 데이터 정리 방식 | Object(JSON) |
|         높음         |  정확도&안정성   |     낮음     |
|         느림         |       속도       |     빠름     |
| 정리가 필요한 데이터 |    주 사용처     |     로그     |

# SQL

- Structured Query Language
- 구조적 쿼리 언어
  - 명령어다.
- 구조를 갖고 있는 말
  - cd 이름
  - 이름 폴더로 이동해줘
  - create user 'aws1'@'localhost' identified by '1234';
  - create table 'test';
- Query : 이름과 값으로 연결된 언어

## querystring

- URL : 주소
- test=1&a=3&name=정경훈

# 설치

- Ubuntu에서

```bash
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install mysql-server -y
```

- mac의 terminal에서

```bash
brew update
brew upgrade
brew install mysql
```

# 상태 확인

- Ubuntu에서

```bash
sudo service mysql status
```

- mac의 terminal에서

```bash
mysql.server status
```

# 시작

- Ubuntu에서

```bash
sudo service mysql start
```

- mac의 terminal에서

```bash
mysql.server start
```

# mySQL 기본 설정

```bash
mysql_secure_installation
```

# mySQL 접속

```bash
sudo mysql -u root -p
```

# root 계정의 비밀번호 변경

- Ubuntu에서

```sql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '1234qwer';
```

- mac의 terminal에서

```sql
ALTER USER 'root'@'localhost' IDENTIFIED BY '1234qwer';
```

# mysql 종료

```sql
exit
```

# UbuntuRoot

# 상태 확인

- Ubuntu에서

```bash

```

- mac의 terminal에서

```bash

```
