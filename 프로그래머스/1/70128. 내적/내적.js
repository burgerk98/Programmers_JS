function solution(a, b) {
    var answer = 0;
    //내적..?: a의 n번째값과 b의 n번째값이 곱해서 더해져야하는것 같다..
    for(let i = 0; i < a.length; i++){
        answer += a[i] * b[i]
    }
    
    return answer;
}