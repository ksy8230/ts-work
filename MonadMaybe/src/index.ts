import { IMaybe } from "./classes/Maybe"
import { getJokeAsMaybe } from "./getJokeAsMaybe"
import { getRandomJoke, JokeType } from "./getRandomJoke"
import * as R from 'ramda';

// json 결과값에서 joke 속성만 얻어오기
getRandomJoke()
  .then((JokerItem:JokeType) => {
    const joke = R.view(R.lensProp('joke'))(JokerItem);
    console.log('getRandomJoke:', joke);
  })
  .catch((e:Error) => console.log(e.message));

// getRandomJoke로 얻은 값을 Maybe를 이용해 가공
(async() => {
  const joke: IMaybe<string> = await getJokeAsMaybe()
  console.log('getJokeAsMaybe:', joke.getOrElse('something wrong')) // Chuck Norris doesn't use GUI, he prefers COMMAND line.
})()