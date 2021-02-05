/**
 * Type Inference
 */

 let text = 'hello';
 function print(msg = 'hello') { // msg는 string으로 추론이 된다
     console.log(msg);
 }

 print('hello~');
 // print(1);