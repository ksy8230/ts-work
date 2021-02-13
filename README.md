## 폴더별 내용
## 🧾 타입스크립트 프로그래밍 (서적)

**/ch01-08** ts 개발 환경, 프로젝트 생성 및 관리, 객체와 타입, 함수와 메서드, 배열과튜플, 반복기와 생성기, Promise, async await, 함수 조합

**/ch09**
람다 라이브러리

**/ch010**
제네릭 프로그래밍

## 🧾 타입스크립트 + 객체지향 프로그래밍 (엘리 드림 코딩)

**/ts+oop** ts로 객체지향프로그래밍 연습한 파일


##  🛠 타입스크립트와 개발환경 만들기
vscode (편집기) 설치   
nodejs 설치   
package.json   
```javascript
{
  "name": "09-3",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    // npm run dev -> src 내에 있는 ts 파일 실행
    "dev": "ts-node src", 
    // ts를 js로 컴파일해서 dist폴더에 변환된 파일들 생성
    "build": "tsc && node dist"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^12.12.26",
    "ts-node": "^8.6.2",
    "typescript": "^3.7.5"
  }
}
```
tsconfig.json 옵션 설정

<details>
<summary>옵션 리스트 설명</summary>

module : 동작 대상 플랫폼이 웹 브라우저인지 노드제이에스인지 구분해 맞는 모듈 방식으로 컴파일 하려는 목적으로 설정하는 값 (웹 브라우저에서 동작 : amd, 노드제이에스에서 동작 : commonjs)

moduleResolution : module 키 값이 commonjs면 node, amd면 classic으로 지정

target : 트랜스파일할 대상 자바스크립트의 버전을 설정

baseUrl, outDir : 트랜스파일된 ES5 자바스크립트 파일을 저장하는 디렉터리를 설정 

paths : 소스 파일의 import 문에서 from 부분을 해석할 때 찾아야 하는 디렉터리를 설정

esModuleInterop : `chance`와 같은 AMD 방식을 전제로 구현된 라이브러리는 commonjs 방식으로 동작하는 타입스크립트 코드에 혼란을 줄 수 있어서 이런 경우를 대비해 키 값을 `true`로 설정

sourceMap : 키 값이 true면 트랜스파일 디렉터리에는 .js 이외에도 .js.map 파일이 생성, 자바스크립트 코드가 타입스크립트 코드의 어디에 해당하는지 알려주는 지표, 디버깅 시 사용

downlevellteration : generator 문법을 사용하기 위해 `true` 설정

noImpliciAny : false 설정 시 타입을 지정하지 않더라도 문제로 인식하지 않음
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


## 깊은 복사와 얕은 복사

순수 함수를 구현할 때는 매개변수가 불변성을 유지해야 하므로 매개변수를 가공하려고 할 때 `깊은 복사`를 실행해 `매개변숫값이 변경되지 않게 해야 함`

깊은 복사는 대상 변숫값이 바뀔 때 `원본 변숫값은 그대로인 형태로 동작`

## 반복기와 생성기

반복기의 특징
-  next 라는 이름의 메서드를 제공
-  next 메서드는 value와 done 이라는 두 개의 속성을 가진 객체를 반환

생성기
- `function*` 키워드로 만든 함수를 생성기라고 함
- 자동으로 반복 실행되지 않는 세미코루틴 (next를 호출 할 때 한 번 실행되고 멈춤)
- 함수 몸통 안에 `yield` 문이 있음
- `yield` 키워드를 사용해 반복기를 자동으로 만들어 줌 (반복기 제공자 역할을 수행)


## Ramda
R.range 함수 :

R.tap 디버깅용 함수 : 설계대로 조합한 함수가 동작하지 않을 때 논리적 디버깅 시 사용, 람다가 제공하는 R.tap 함수는 2차 고차 함수 형태로, 현재 값을 파악할 수 있게 함

`chance` 패키지 : 가짜 데이터를 만들어주는 라이브러리

## Lens
하스켈 언어의 Control.Lens 라이브러리 내용 중 js에서 동작할 수 있는 getter, setter 기능만을 람다 함수로 구현한 것

객체의 속성값을 얻거나 설정하는 등의 작업 가능

1. R.lens 함수로 객체의 특정 속성에 대한 렌즈를 만든다
2. 렌즈를 R.view 함수에 적용해 속성값을 얻는다
3. 렌즈를 R.set 함수에 적용해 속성값이 바뀐 새로운 객체를 얻는다
4. 렌즈와 속성값을 바꾸는 함수를 R.over 함수에 적용해 값이 바뀐 새로운 객체를 얻는다

- `R.prop` : 객체의 특정 속성값을 가져오는 함수 (getter의 역할)
- `R.assoc` : 객체의 특정 속성값을 변경하는 함수 (setter의 역할)


## 모나드
코드 설계 패턴으로 몇 개의 인터페이스를 구현한 클래스를 의미
모나드 클래스의 조건은 아래와 같다
1. 펑터 (Functor) : map이라는 인스턴스 메서드를 갖는 클래스
2. 어플라이 (Apply) : 펑터이면서 ap이라는 인스턴스 메서드를 갖는 클래스
3. 애플리커티브 (Applicative) : 어플라이이면서 of라는 클래스 메서드를 갖는 클래스
4. 체인 (Chain) : 애클리커티브이면서 chain이라는 메서드를 갖는 클래스

### Maybe모나드, Validate모나드
Maybe모나드 : 데이터유무에 따라 코드가 적절하게 동작하는가

Validate모나드 : 데이터가 유효한가
