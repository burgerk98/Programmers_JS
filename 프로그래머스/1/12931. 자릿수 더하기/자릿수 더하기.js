function solution(n)
{
    var answer = 0;
    //n문자열을 한문자씩 분리하여 배열로만들었다.
    //분리된 문자열을 숫자로 변환해 answer에 하나씩 더해줬다
    String(n).split("").forEach(function(num){
        answer += parseInt(num)
    })
    return answer;
}
