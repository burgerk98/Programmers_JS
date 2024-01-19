function solution(n) {
    var answer = 0;
    var num = []
    for(let x = 1; x <= n; x++)
        if(n % x === 1){
            num.push(x)
            answer = Math.min(...num)
        }
    return answer;
}