// 数字/大小写字母混合验证码
function testCode(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        var num = parseInt(Math.random() * 123);
        if(num >= 0 && num <= 9){
            arr.push(num);
        }else if(num >= 65 && num <= 90 || num >= 97 && num <= 122){
            arr.push(String.fromCharCode(num));
        }else{
            i--;
        }
    }
    return arr.join("");
}


// 纯数字验证码
function numTestCode(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        var num = parseInt(Math.random() * 10);
        arr.push(num);
    }
    return arr.join("");
}
