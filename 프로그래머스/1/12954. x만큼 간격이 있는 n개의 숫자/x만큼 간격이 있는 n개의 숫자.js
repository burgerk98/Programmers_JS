function solution(x, n) {
    // 배열을 만들기 위해 초기화
    var answer = [];
    // n개를 반환하기 위해 n만큼 반복(자연수는 1부터)
    for(let i = 1; i <= n; i++ ){
        //x부터 시작해 x씩 증가하는 숫자를 배열에 추가.
        answer.push(x*i);
    }
    return answer;
}