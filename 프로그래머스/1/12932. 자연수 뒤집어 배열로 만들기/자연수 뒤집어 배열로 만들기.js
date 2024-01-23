function solution(n) {
    var answer = [];
    //n문자열을 하나씩 분리해 배열을 뒤집었다.
    // 각각 하나의 문자들을 숫자로 바꾸어 배열에 넣어주었다.
    String(n).split("").reverse().forEach(function(num){
        answer.push(parseInt(num))
    })
    return answer;
}