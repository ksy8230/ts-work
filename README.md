## 폴더별 내용
## 🧾 타입스크립트 프로그래밍 (서적)

**/ch01-08** ts 개발 환경, 프로젝트 생성 및 관리, 객체와 타입, 함수와 메서드, 배열과튜플, 반복기와 생성기, Promise, async await, 함수 조합

**/ch09**
람다 라이브러리

**/ch010**
제네릭 프로그래밍

## 🧾 타입스크립트 + 객체지향 프로그래밍 (엘리 드림 코딩)

**/ts+oop** ts로 객체지향프로그래밍 연습한 파일


##  🛠 타입스크립트와 개발환경 만들기3
vscode (편집기) 설치   
nodejs 설치   

*tsc : ts 파일을 js 파일로 변환해 주는 명령어

tsconfig.json 파일 만들기   
```
tsc --init
```
폴더 안에 있는 모든 ts 파일들 지켜보면서 변환
```
tsc -w
```


tsconfig.json 옵션 설정

<details>
<summary>옵션 리스트 설명</summary>

1. incremental : 수정된 부분만 컴파일 하겠다 (대신 디스크에 저장용량을 사용한다)   

2. target : 변환할 자바스크립트의 버전을 설정   

3. module : 컴파일할 때 모듈을 어떻게 구현할 것인지 결정 (웹 브라우저에서 동작 : amd, 노드제이에스에서 동작 : commonjs)   

4. lib: 옵션값이 없으면 target에 있는 버전의 모든 것들을 사용 가능하고, 옵션값이 있으면 해당 라이브러리만 사용한다. (보통은 false로 둔다)   

5. allowJs : 프로젝트 안에서 js를 같이 쓸 건지 결정   
6. checkJs : js 파일에서 에러를 잡고 싶을 때 설정   
7. jsx : react에 관련된 것을 사용할 것인지 설정   
8. declaration : 내가 만든 코드를 다른 사람에게 제공하는 라이브러리 형식으로 바꿀 것인지 설정 (보통은 사용하지 않는다)   
9. sourceMap : 브라우저 소스 탭에 나온 자바스크립트 코드가 실제로 타입스크립트 코드 중 어디에 해당하는지 알려주는 지표, 디버깅 시 사용!   
10. outFile : 작성한 파일을 한 파일로 합칠 때 설정   
11. outDir : 트랜스파일된 ES5 자바스크립트 파일을 저장하는 디렉터리를 설정 
12. composite : incremental이 true이면 이전에 빌드된 정보들을 기억해서 더 빠르게 빌드하도록 설정   
13. tsBuildInfoFile : incremental이 true이면 관련된 정보들을 담을 수 있는 파일 지정   
14. removeComments : 코멘트를 전부 삭제   
15. noEmit : 에러 체크만 하고 js 변환하지 않는다   
16. importHelpers : ts를 엄청 예전 버전의 js로 변환할 때 문제가 되는 부분들이 있을 수 있는데 이 설정을 true로 두면 코드를 더 더해서 변환을 도와줄 때 설정   
17. isolatedModules : 각각의 파일을 다른 모듈로 변환할 때 설정   
18. noImpliciAny : false 설정 시 타입을 지정하지 않더라도 문제로 인식하지 않음   
19. strict : true 권장, 엄격한 확인을 하고 싶을 때 설정   
20. downlevellteration : generator 문법을 사용하기 위해 `true` 설정
21. moduleResolution : module 키 값이 commonjs면 node, amd면 classic으로 지정   
22. esModuleInterop : `chance`와 같은 AMD 방식을 전제로 구현된 라이브러리는 commonjs 방식으로 동작하는 타입스크립트 코드에 혼란을 줄 수 있어서 이런 경우를 대비해 키 값을 `true`로 설정   
23. paths : 소스 파일의 import 문에서 from 부분을 해석할 때 찾아야 하는 디렉터리를 설정   




</details>

### 기본 타입
[기본 타입 예시 코드](https://github.com/ksy8230/ts-work/commit/a9e8eabf52bf734c2e38c9a895fa3fa34f197a90)

1. number, string, boolean, undefined, null, unknown, any, void, never, object 타입이 존재한다.
2. undefined는 값이 있는지 없는지 결정이 안 된 상태고 단독으로 타입 지정을 하지 않는다. 데이터타입이 있고 없을 때 주로 사용하고, 함수에서 무언가를 찾을 때 리턴값으로 사용한다.
3. null는 텅 빈 값이 있는 상태고 단독으로 타입 지정을 하지 않는다. 
4. 알 수 없는 타입을 의미하는 unknown과 모든 타입을 허용하는 any의 사용은 지양한다
5. void는 어떤 값도 리턴하지 않을 때 사용하고 타입 생략이 가능하다.
6. never는 에러 핸들링을 할 때 사용한다.
6. object는 세부 타입 지정을 하지 않기 때문에 사용을 지양한다.

[차별화된 유니언 예시 코드](https://github.com/ksy8230/ts-work/commit/289909a48b20e185800da176a31e3361cabe259e#diff-ed36cc08ffd3f563c5b73015e75d4b38de411053eca3b18ae2cfb08e0eccce59)

1. 어떤 타입이냐에 따라서 다르게 출력시키고 싶을 때 사용한다.
2. 타입 엘리어스를 유니언으로 지정해 사용하고, 타입 엘리어스들이 공통된 프로퍼티를 가지게 한다.
### 제네릭 프로그래밍
[함수형 예시 코드](https://github.com/ksy8230/ts-work/commit/c3e5df591e0e1405141d8c2861b993f84447ce11#diff-98c5f3b7ea5425b3af6737542b0e09c6d146bc05def735af02ab4a0269db46aa)

[클래스형 예시 코드](https://github.com/ksy8230/ts-work/commit/37ebf3be2c45da272e6ddc2c50fe455601e3f836#diff-6d1736f167db480fd7f3e7cc85f035ea3716d395064a0732f6fd30e48ea94f27)

[조건부 제네릭 예시 코드](https://github.com/ksy8230/ts-work/commit/50da3648ad258817892165c4d6cc000d4ca395ec)

1. 타입을 보장하면서 재사용성을 높여주는 타입 지정 방식이다
2. 함수나 클래스에서 사용할 타입을 그 함수나 클래스를 사용할 때 결정하는 기법이다

### Error State
[예시 코드](https://github.com/ksy8230/ts-work/commit/89fa18cb32e6624a4ff8109a844892a518f27407#diff-474ef08f3363240d8aef7bfe49e4f18df75b1025e661f14fbb85606df9acfa4c)

1. 에러 처리는 에러가 발생하는 곳보다는 에러를 읽어하는 코드에 걸어둔다
2. 에러의 세부 사항을 전달하기 위해서 Error State를 사용하는 법

### 객체지향 프로그래밍
[composition 예시 코드](https://github.com/ksy8230/ts-work/commit/7b0007a269e90f1deabe2da171271e007319451c)

1. composition을 사용하는 이유는 클래스의 상속이 깊어질수록 부모 클래스를 수정하면 상속 받는 모든 자식들에게 영향을 미칠 수 있고, 타입스크립트에서는 한 가지 이상의 부모클래스를 상속 받을 수 없다.
2. composition 방식을 사용해 확장성을 가진 클래스를 만든다.
3. composition은 외부에서 주입 받아 사용하는 방식으로 `Dependency Injection`이라고 한다.
4. 타입스크립트에서 `Dependency Injection`를 만드는 방법은 반복 혹은 공통적으로 사용하는 함수 이름을 인터페이스로 지정한 뒤 클래스에 확장(implements) 하여 사용한다.

### Type vs Interface 
[예시 코드](https://github.com/ksy8230/ts-work/commit/2d0794602db0b47923eac3352e21d4d72e1d4836#diff-ecd99cca1a0053f031ca35fe1bf5a98d2c5748992c105b8ed4b078638fc7b055)   

**공통점**
1. 둘 다 객체를 정의하고 타입을 할당할 수 있다.
2. 둘 다 클래스를 구현할 수 있다.
3. 둘 다 확장이 가능하다.

**차이점**
1. interface만 중복 타입을 이용한 결합이 가능하다.
2. type만 프로퍼티를 이용한 계산이 가능하다
3. type만 유니언 타입 지정이 가능하다.

Interface는 특정한 규격을 정의하는 경우에 사용하는 것이 더 정확하다.  (ex. 커피메이커 클래스는 makeCoffee라는 메서드를 사용해야 한다) 규격 사항을 정할 때 사용한다. 🧾   
type은 어떤 데이터의 타입을 담을 때 사용하는 것이 정확하다. 데이터의 모습, 타입을 결정한다. 🎁

### Map Type
[예시 코드](https://github.com/ksy8230/ts-work/commit/f6b1ad652f874d2d5b10ca05e577b5adef8c4d7f#diff-38cb2b6452122a39ee0afd059ae9648d26d951f5725372b9698847654ad4ecce)   
type 객체 안에서 [] 배열 키를 사용하면 순차적으로 순회를 하면서 타입을 매핑해준다.   
이미 지정한 타입을 optional하게 바꾸고 싶을 때 유용할 것 같다. ✨

### Condition Type
[예시 코드](https://github.com/ksy8230/ts-work/commit/eb83e3a0d946976bb0774b90b26ed3d81720aa40#diff-345f3a14dd3df6d59eda6577e7b410b3ee39a326a11fb1ea7e0743fbb65dfd22)   
조건이 맞으면 어떤 타입을 지정한다

### Partial, Pick, Omit Type
[Partial 예시 코드](https://github.com/ksy8230/ts-work/commit/cc4f267e8fce01d09bf4ed51711062f56a7fea08#diff-da3a91ef35a73df98100d52f70200d2e795b7de637106f3f1f90b852dae60ee9)   
지정한 타입의 모든 키가 선택사항으로 적용이 된다

[Pick 예시 코드](https://github.com/ksy8230/ts-work/commit/38c701d3b3d73f6ec7e10b76f83f3817bf12754f#diff-cbbae8624bb8b5a51c7823eb75d757f0c91b574071d3a6cefce8ab511e584b16)   
지정한 타입에서 특정 타입만 빼서 제한적으로 지정해 주고 싶을 때 사용한다

[Omit 예시 코드](https://github.com/ksy8230/ts-work/commit/38c701d3b3d73f6ec7e10b76f83f3817bf12754f#diff-6c41de691989f1682772ee3169dc30950f3f3f884b092e2b398fdaa7f7bcc455)   
지정한 타입에서 특정 타입만 제외시키고 지정해 주고 싶을 때 사용한다

### 내 프로젝트 만들어보기
- 레이아웃 + 세팅

### 토막 지식
#### DOM
✨ 돔은 html, body, head와 같은 태그들을 자바스크립트가 이해할 수 있는 객체로 만든 트리 구조의 모델!   
html을 작성하면 그에 맞는 자바스크립트 객체로 변환이 된다. 이 변환된 태그를 `노드`라고 한다.   
`노드` 객체는 이벤트타겟이라는 객체를 상속하기 때문에, 돔에서 발생할 수 있는 모든 이벤트를 이벤트타겟이 갖고 있듯 노드도 갖게 되는 것이다.   
html을 브라우저에서 읽게되면 이 태그들이 돔트리로 변환이 된다. 돔트리의 유닛 단위인 노드는 각각 Element 객체이다.


---
### 깊은 복사와 얕은 복사

순수 함수를 구현할 때는 매개변수가 불변성을 유지해야 하므로 매개변수를 가공하려고 할 때 `깊은 복사`를 실행해 `매개변숫값이 변경되지 않게 해야 함`

깊은 복사는 대상 변숫값이 바뀔 때 `원본 변숫값은 그대로인 형태로 동작`

### 반복기와 생성기

반복기의 특징
-  next 라는 이름의 메서드를 제공
-  next 메서드는 value와 done 이라는 두 개의 속성을 가진 객체를 반환

생성기
- `function*` 키워드로 만든 함수를 생성기라고 함
- 자동으로 반복 실행되지 않는 세미코루틴 (next를 호출 할 때 한 번 실행되고 멈춤)
- 함수 몸통 안에 `yield` 문이 있음
- `yield` 키워드를 사용해 반복기를 자동으로 만들어 줌 (반복기 제공자 역할을 수행)


### Ramda
R.range 함수 :

R.tap 디버깅용 함수 : 설계대로 조합한 함수가 동작하지 않을 때 논리적 디버깅 시 사용, 람다가 제공하는 R.tap 함수는 2차 고차 함수 형태로, 현재 값을 파악할 수 있게 함

`chance` 패키지 : 가짜 데이터를 만들어주는 라이브러리

### Lens
하스켈 언어의 Control.Lens 라이브러리 내용 중 js에서 동작할 수 있는 getter, setter 기능만을 람다 함수로 구현한 것

객체의 속성값을 얻거나 설정하는 등의 작업 가능

1. R.lens 함수로 객체의 특정 속성에 대한 렌즈를 만든다
2. 렌즈를 R.view 함수에 적용해 속성값을 얻는다
3. 렌즈를 R.set 함수에 적용해 속성값이 바뀐 새로운 객체를 얻는다
4. 렌즈와 속성값을 바꾸는 함수를 R.over 함수에 적용해 값이 바뀐 새로운 객체를 얻는다

- `R.prop` : 객체의 특정 속성값을 가져오는 함수 (getter의 역할)
- `R.assoc` : 객체의 특정 속성값을 변경하는 함수 (setter의 역할)


### 모나드
코드 설계 패턴으로 몇 개의 인터페이스를 구현한 클래스를 의미
모나드 클래스의 조건은 아래와 같다
1. 펑터 (Functor) : map이라는 인스턴스 메서드를 갖는 클래스
2. 어플라이 (Apply) : 펑터이면서 ap이라는 인스턴스 메서드를 갖는 클래스
3. 애플리커티브 (Applicative) : 어플라이이면서 of라는 클래스 메서드를 갖는 클래스
4. 체인 (Chain) : 애클리커티브이면서 chain이라는 메서드를 갖는 클래스

#### Maybe모나드, Validate모나드
Maybe모나드 : 데이터유무에 따라 코드가 적절하게 동작하는가

Validate모나드 : 데이터가 유효한가
