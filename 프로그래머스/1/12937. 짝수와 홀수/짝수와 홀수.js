function solution(num) {
    var answer;
    var remainder = parseInt(num % 2);
    if(remainder === 0){
        answer = "Even"
    }else{
        answer = "Odd"
    };
    return answer;
};