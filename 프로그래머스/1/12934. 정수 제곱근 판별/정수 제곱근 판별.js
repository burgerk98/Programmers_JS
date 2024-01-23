function solution(n) {
    var answer = 0;
    // x는 n의 제곱근 값이다
    var x = Math.sqrt(n);
    
    // x의 제곱이 n이라면 x에 1을 더해 제곱하여 리턴, 아니면 -1을 리턴
    // 양의정수???ㅠㅠㅠ => isInteger을 사용해 정수인지, 그리고 양수인지 확인....
    if(n === Math.pow(x,2) && Number.isInteger(x) && x > 0){
        answer = Math.pow(x+1,2)
    }else{
        answer = -1
    }
    
    return answer;
}

//pow는 거듭제곱 값을 계산
//sqrt는 특정 숫자의 제곱근 값을 계산