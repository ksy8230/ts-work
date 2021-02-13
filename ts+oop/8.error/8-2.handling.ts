/**
 * 에러의 종류가 세부적으로 나뉘어져있는 경우
 */
{
  class TimeOutError extends Error {}
  class OfflineError extends Error {}
  class NetworkClint {
    tryConnect(): void {
      throw new OfflineError('no network!');
    }
  }

  class UserService {
    private client: NetworkClint;
    private constructor(client: NetworkClint) {
      this.client = client;
    }

    static makeUserService(client) {
      return new UserService(client);
    }

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        if (error instanceof OfflineError) {
          // TypeScript에서 구현된 catch()에는 어떠한 타입정보도 전달되지 않아서 instanceOf를 사용할 수 없다
          console.log(error); // ❌ 콘솔에 아무것도 찍히지 않는다
        }
      }
    }
  }

  // 네트워크로 접속하려는 클라이언트
  const client = new NetworkClint();
  // 로그인 로직을 제공하는 유저 서비스
  const userService = UserService.makeUserService(client);
  // 유저 서비스를 받아온 어플리케이션 (시작하면 자동으로 로그인하는 어플리케이션)
  const app = new App(userService);

  // 어플리케이션 실행
  app.run();

  /**
   * 어디서 에러처리를 하는 게 좋을까?
   * -> 로그인 로직에서 에러를 처리하면
   * 😫 어플리케이션은 아무 의미 없이 유저 서비스 로그인 함수를 불러내게 된다
   * 조금 더 의미있게 에러를 처리하는 방법은
   * 👍 어플리케이션에서 유저 서비스 로그인을 시도할 때 try catch 사용함으로서
   * 어플리케이션이 에러를 읽도록 만들어준다
   *
   * 그런데 에러를 세부적으로 나누어서 찍고 싶은 경우는...?
   */
}
