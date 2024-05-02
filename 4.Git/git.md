# Git

- 모르겠으면 아래 참고

```bash
git add .
git commit -m "feat: ???"
git push origin branchName
```

- add는 Staging Area에 변경 사항을 추가한다.
- commit은 Local Repository에 Staging의 내용을 추가하여 commit(Snapshot)을 남긴다.
- push는 원격 저장소에 branch를 업로드한다.

## 브렌치 컨벤션

- 기능을 나타내는 영어
  - develop -> login
  - develop -> logout
  - develop -> createBoard
  - develop -> readBoard
- 이슈 사항에 있어서 긴급 대처의 경우 fix를 많이 사용한다.
  - develop -> fix_login

## 커밋 메시지 컨벤션

- -m "커밋 메시지"
- 아래와 같이 해당 커밋이 어떤 건지 분류해준다.
  - feat: 추가
  - fix: 긴급 수정
  - edit: 수정
  - del: 삭제
- 여러가지 컨벤션이 있다.
  - ex)
    - feat: add login
    - feat: create logout
    - feat: add user-info 24.03.12
    - feat: add board 24.03.12 11:44
    - fix: 로그인 오류남
    - edit: 디비 추가
    - feat: add board 24.03.12 11:44
      add board list
      add board edit
- 등등의 많은 컨벤션이 있다.
