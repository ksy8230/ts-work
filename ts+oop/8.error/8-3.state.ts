/**
 * 에러의 종류가 세부적으로 나뉘어져있는 경우
 */
{
  // class TimeOutError extends Error {}
  // class OfflineError extends Error {}

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };
  type SuccessState = {
    result: 'success';
  };
  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClint {
    tryConnect(): ResultState {
      // 상황 설정
      return {
        result: 'fail',
        reason: 'offline',
      };
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
      return this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      const status = this.userService.login();
      if (status.result === 'fail' && status.reason === 'offline') {
        console.log('offline 에러!');
      }
      if (status.result === 'fail' && status.reason === 'timeout') {
        console.log('timeout 에러!');
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
   * 에러 종류가 다양하고 이것들을 세부적으로 알려주고 싶다면?
   * -> throw를 남발하면
   * 😫 어플리케이션까지 왔을 때 이게 어떤 에러인지 읽을 수가 없다
   * 세부적으로 어떤 에러가 발생했는지 어플리케이션으로 전달을 해주기 위해선
   * 👍 에러 state를 만들어 에러의 이유를 코드를 짤 때 미리 제공한다
   */
}
