## 타입스크립트 프로그래밍

###  20.12.04 : 1장 타입스크립트와 개발환경 만들기

1. tsconfig.json 옵션
- module : 동작 대상 플랫폼이 웹 브라우저인지 노드제이에스인지 구분해 맞는 모듈 방식으로 컴파일 하려는 목적으로 설정하는 값 (웹 브라우저에서 동작 : amd, 노드제이에스에서 동작 : commonjs)
- moduleResolution : module 키 값이 commonjs면 node, amd면 classic으로 지정
- target : 트랜스파일할 대상 자바스크립트의 버전을 설정
- baseUrl, outDir : 트랜스파일된 ES5 자바스크립트 파일을 저장하는 디렉터리를 설정 
- paths : 소스 파일의 import 문에서 from 부분을 해석할 때 찾아야 하는 디렉터리를 설정
- esModuleInterop : `chance`와 같은 AMD 방식을 전제로 구현된 라이브러리는 commonjs 방식으로 동작하는 타입스크립트 코드에 혼란을 줄 수 있어서 이런 경우를 대비해 키 값을 `true`로 설정
- sourceMap : 키 값이 true면 트랜스파일 디렉터리에는 .js 이외에도 .js.map 파일이 생성, 자바스크립트 코드가 타입스크립트 코드의 어디에 해당하는지 알려주는 지표, 디버깅 시 사용
- downlevellteration : generator 문법을 사용하기 위해 `true` 설정
- noImpliciAny : false 설정 시 타입을 지정하지 않더라도 문제로 인식하지 않음

### 깊은 복사와 얕은 복시
- 순수 함수를 구현할 때는 매개변수가 불변성을 유지해야 하므로 매개변수를 가공하려고 할 때 `깊은 복사`를 실행해 `매개변숫값이 변경되지 않게 해야 함`
- 깊은 복사는 대상 변숫값이 바뀔 때 `원본 변숫값은 그대로인 형태로 동작`
