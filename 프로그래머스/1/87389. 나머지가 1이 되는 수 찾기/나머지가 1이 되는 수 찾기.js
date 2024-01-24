function solution(n) {
    var answer = 0;
    var num = []
    //x가 자연수라고 해 1부터 설정.
    for(let x = 1; x <= n; x++)
        //n을 나눈 나머지가 1일 경우 num 배열에 추가하고 배열에서 작은 수를 리턴
        if(n % x === 1){
            num.push(x)
            answer = Math.min(...num)
        }
    return answer;
}
