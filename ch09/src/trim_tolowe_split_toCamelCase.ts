import * as R from 'ramda';

const Trim_tolowe_split_toCamelCase = () => {
 
    // trim(문자열) : 문자열 앞뒤의 공백 제거
    const Rtrim_ = '\t hello \n';
    const Rtrim = R.trim('\t hello \n');
    console.log(Rtrim_)
    console.log(Rtrim)

    // split(구분자)(문자열)
    const words: string[] = R.split(' ')('Hello Peter!, i am World');
    console.log(words);

    // toCamelCase
    type StringToStringFunc = (string) => string;
    const toCamelCase = (delim: string): StringToStringFunc => {
        const makeFirstToCapital = (word: string) => {
            const characters = word.split('')
            return characters.map((c, index) => index == 0 ? c.toUpperCase() : c).join("")
        }

        // R.map의 콜백 함수에 index 매개변수 제공
        const indexedMap = R.addIndex(R.map); 
        return R.pipe(
            R.trim, // 문자열의 좌우 공백 문자를 제거합니다
            R.split(delim), // 문자열을 delim 문자를 근거로 배열로 전환합니다
            R.map(R.toLower), // 배열에 든 모든 문자열을 소문자열로 바꿉니다
            indexedMap((value:string, index:number) => index > 0 ? 
                makeFirstToCapital(value) : value // 배열에 담긴 두 번째 문자열부터 첫 문자만 대문자로 바꿉니다
            ),
            R.join('') as StringToStringFunc // 배열을 다시 문자열로 변환합니다.
        );
    };

    console.log(toCamelCase(' ')('Hello Wolrd')) // helloWolrd
    
};

export default Trim_tolowe_split_toCamelCase;
