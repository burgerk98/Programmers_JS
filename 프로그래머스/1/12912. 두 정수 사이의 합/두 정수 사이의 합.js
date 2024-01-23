function solution(a, b) {
    var answer = 0;
    
    // a가 b보다 작을때와 그 반대일경우 if문으로 적용.
    if(a < b){
        // a에서 b까지 더하기.
        while(a <= b ){
            answer += a;
            a++;
        }
    }else{
         // b에서 a까지 더하기.
        while(b <= a ){
            answer += b;
            b++;
        }
    }

    
    return answer;
}

/*
지피티가 줄여줬다... 나는 ㅂr보..
function solution(a, b) {
    var answer = 0;

    while (a !== b) {
        answer += (a < b) ? a++ : b++;
    }

    return answer + a; // a와 b가 같은 경우, 둘 중 아무 수나 리턴
}
*/
