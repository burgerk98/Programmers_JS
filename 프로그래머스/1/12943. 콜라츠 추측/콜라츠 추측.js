function solution(num) {
    var answer = 0;
    //카운트라서 1부터
    var count = 1;
    
    //num이 1이 아닌 경우 반복
    while(num !== 1){
        //num이 짝수라면 2로 나누기    
        if(num % 2 === 0){
            num /=2;
         //num이 홀수라면 3곱하고 1 더하기   
        }else{
            num = num * 3 + 1;
        }
        //몇번했는지 세어주세요.
        answer = count++;
        
        //count가 500번 될 때 까지 1이 되지 않으면 -1 반환.
        if(count >= 500){
            answer = -1;
            break;
        }
    }

    
 return answer;
}