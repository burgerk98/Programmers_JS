function solution(s) {
    var answer = ''
    var middle = s.length/2
    
    if(s.length%2 === 0){
        answer = s.charAt(middle-1) + s.charAt(middle);
    }else{
        answer = s.charAt(middle);
    }
    

    return answer;
}

//charAt: n번째의 문자를 읽어낸다.