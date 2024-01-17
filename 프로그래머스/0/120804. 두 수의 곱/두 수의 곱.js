function solution(num1, num2) {
    var numOne = (0 <= num1 && num1 <= 100);
    var numTwo = (0 <= num2 && num2 <= 100);
    if(numOne && numTwo){
        var answer = num1 * num2;
        return answer;
    }
}