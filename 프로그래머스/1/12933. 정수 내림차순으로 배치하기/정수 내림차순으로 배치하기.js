function solution(n) {
    var answer = 0;
    //n을 각각의 문자열로 변경, sort를 사용해 내림차순 정리.
    //join('')을 통해 빈 문자열로 결합. 기본은','으로 쉼표로 구분됨.
    //그 값을 parseInt로 받아 정수로 변환.
    var num = String(n).split('').sort((a, b) => b - a);
    answer = parseInt(num.join(''));
    
    return answer;
}

// String(n).split('').sort((a, b) => b - a)
// String(n).split('').sort().reverse()