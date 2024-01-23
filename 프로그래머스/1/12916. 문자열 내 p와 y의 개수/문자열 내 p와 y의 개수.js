function solution(s){
    // 모두 소문자로 변환
    s = s.toLowerCase();
    var answer = true;
    // split은 특정 구분자를 기준으로 나누어 배열해주는 메소드이다.
    // 따라서 문자를 구분자로 사용하면 그 문자가 나타날때마다 문자열이 나누어진다.
    // 그래서 -1을 하면 특정문자의 수를 알 수 있다.
    var pCount = s.split("p").length -1;
    var yCount = s.split("y").length -1;
    
    // 초기값이 true이기때문에 둘의 값이 맞지 않으면 false.
    if(pCount !== yCount){
        answer = false;
    }

    return answer;
}