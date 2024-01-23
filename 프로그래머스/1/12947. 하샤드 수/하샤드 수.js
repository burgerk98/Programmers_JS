function solution(x) {
    var answer = true;
    var sum = 0;
    
    //x의 자릿수 합 구하기.
    Array.from(String(x), Number).forEach(function(num){
        sum += num;
    })
    //x가 자릿수 합으로 나눠지지않으면 false.
    if(x % sum !== 0){
       answer = false;
    }
    
    return answer;
}

/*
하샤드 수? 양의 정수 중에서, 그 수 자체의 각 자릿수의 합으로 나누어떨어지는 수.
18의 각 자릿수의 합: 1 + 8 = 9
18은 9로 나누어 떨어지므로, 18은 하샤드 수
*/