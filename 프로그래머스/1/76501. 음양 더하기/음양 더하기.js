function solution(absolutes, signs) {
    // var answer = 123456789; 왜 초기값이 123456789지?
    var answer = 0;
    
    //배열의 0번째부터 마지막까지 반복.
    for(let i = 0; i < absolutes.length; i++){
        //sign의 i번째 값이 참이면 absolute의 i번째 값은 양수, 거짓이면 음수.
        //그 값을 answer에 더해준다.
        answer += signs[i] ? absolutes[i] : -absolutes[i];    
    }
    
    return answer;
}