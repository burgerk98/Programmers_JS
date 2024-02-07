function solution(s) {
    var answer = '';
    //s를 열어서 정렬.
    //sort함수를 문자에서 사용할 경우 a가 b보다 큰 경우 내림차순 과 같은 조건을 넣어줘야함.
    answer = s.split('').sort((a, b) => a > b ? -1 : 1).join('');
    
    
    return answer;
}