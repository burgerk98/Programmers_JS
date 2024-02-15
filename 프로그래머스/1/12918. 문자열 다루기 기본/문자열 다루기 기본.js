function solution(s) {
    //inNaN을 반대로 써 숫자인경우 거짓 숫자가 아닌 경우 참
    return (s.length === 4 || s.length === 6)&& !isNaN(s) && !s.includes("e");
    //아스키뭐시기때문에 e가 포함되어있는경우도 처리해줘야한다고 합니도.. 그걸 왜 명시를 ㅇㄴ해두는거야
    
}
    

    //isFinite(): 괄호 안이 유한한 숫자이면 true, 무한한 숫자 또는 숫자가 아니면 false를 반환
    // answer = isFinite(str)
    // if(isFinite(str) === true){
    //     if(str.length === 4 || str.length === 6){
    //         answer = true
    //     }else{
    //         answer = false
    //     }
    // }


// function solution(s) {
//     var answer = true;
//     //inNaN을 반대로 써 숫자인경우 거짓 숫자가 아닌 경우 참
//     if((s.length === 4 || s.length === 6)&& !isNaN(parseInt(s))){
//         answer = true;
//     }else{
//         answer = false;
//     }
    
//     return answer;
// }

// function solution(s) {
//     //Number사용해서 숫자타입인지 문자타입인지 확인해봄.
//     return (s.length === 4 || s.length === 6)&& Number(s) ? true : false
// }

//     //inNaN을 반대로 써 숫자인경우 거짓 숫자가 아닌 경우 참
//     return (s.length === 4 || s.length === 6)&& !isNaN(Number(s)) ? true : false
//     ansewr = true;
