import { checkPassword } from "./checkPassword";

[
  {password: '123456'},
  {password: '124'},
  {},
  {pa: '1234556'}
].forEach((target, index) => {
  const [value, failureReason] = checkPassword(target);
  if(failureReason) {
    console.log(index, 'validation fail.', failureReason)
  } else {
    console.log(index, 'validation ok.', value)
  }
});

/**
 *  0 validation ok. { password: '123456' }
    1 validation fail. [ '비밀번호는 최소 6자리입니다' ]
    2 validation fail. [ '비밀번호는 빈값일 수 없습니다', '비밀번호는 최소 6자리입니다' ]
    3 validation fail. [ '비밀번호는 빈값일 수 없습니다', '비밀번호는 최소 6자리입니다' ]
 */