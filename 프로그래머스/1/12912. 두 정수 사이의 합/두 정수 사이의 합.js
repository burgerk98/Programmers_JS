// 두 정수 사이의 합
function solution(a, b) {
    var answer = 0
// a가 b보다 작거나 같으면 a부터 b까지의 수 더하기
    if(a <= b){
        for(let i = a; i <= b; i++){
            answer += i
        }
// b가 a보다 작으면 b부터 a까지의 수 더하기
    }else{
        for(let i = b; i <= a; i++){
            answer += i
        }
    }

    return answer;
}