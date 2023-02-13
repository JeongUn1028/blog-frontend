blog 의 frontend 의 frontend 사이드 의 구현
 - 라우터를 이용해 경로를 설정했습니다.
 - style 은 styled-components 를 이용하여 스타일링 했습니다.
 - 리덕스를 이용하여 전역관리를 해주었고 immer 를 이용하여 불변성을 관리했습니다.
 - 그리고 각 UI를 만들었습니다.
 - snippet 을 이용하여 작업시간을 단축 하고자 했습니다.
 - 재사용성이 높은 코드는 따로 분리해 각 폴더의 common 으로 분리했습니다.
 - 비동기 관리 를 위해 redux-saga 를 이용했습니다.
  폴더의 분리는 components, containers, lib, modules, pages 로 구분했습니다.

1. 회원가입/로그인 기능을 구현했습니다.

 LoginPage - 로그인
 RegisterPage - 회원가입
 WritePage - 글쓰기
 PostPage - 포스트읽기
 PostListPage - 포스트 목록 입니다.
 
 
2. 글쓰기 기능을 Quill WYSIWYG 에디터를 이용해 구현했습니다.
  Editor UI 를 먼저 구현하고 하단 UI를 구현 했으며 리덕스로 글쓰기에 관한 상태를 관리했습니다.
  
3. 블로그 포스트의 목록을 보여주는 기능과 포스트를 읽는 기능을 구현했습니다.
   읽기, 목록 보기 기능을 각 UI를 먼저 구현하고 API를 연동하는 방향으로 구현했습니다.
   
4. 포스트를 수정하거나 삭제 할 수 있는 기능을 구현했습니다.
  포스트 수정 기능을 구현하고 삭제 기능을 구현했습니다. react-helmet-async 를 이용해 meta 태그를 설정했습니다.
