import * as R from 'ramda'
import {getRandomJoke, JokeType} from './getRandomJoke'
import {IMaybe, Maybe} from './classes/Maybe'

const _getJokeAsMaybe = async() => {
  const jokeItem: JokeType = await getRandomJoke()
  const joke = R.view(R.lensProp('joke'))(jokeItem)
  return joke
}

// getRandomJoke 함수로 얻은 데이터가 정상적이면 Maybe.just로
// 오류가 발생하면 reject를 호출하지 않고 Maybe.nothing을 반환
export const getJokeAsMaybe = () => new Promise<IMaybe<string>>((resolve, reject) => {
  _getJokeAsMaybe()
    .then((joke: string) => resolve(Maybe.Just(joke)))
    .catch(e => resolve(Maybe.Nothing))
})

export {IMaybe, Maybe}
