function solution(arr) {
    var answer = [];
    answer = Math.min(arr)
    console.log(answer)
    
    return answer;
}



// function solution(arr) {
//     var answer = [];
//     //arr을 먼저 정렬해준다.
//     arr.sort((a,b)=>b-a)
//     //랭스가 1이면 -1을 넣어주고, 그렇지 않다면 뒤에서 한자리(작은 수)를 없에준다.
//     answer= arr.length === 1 ? [-1] : arr.slice(0,-1);
    
//     return answer;
// }