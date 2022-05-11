function palindrome(str) {
    var str2B = [];
    str = str.replace(/[^a-z0-9]/gi,"");
    str = str.toLowerCase();
    str =str.split("");
    if(str.length%2 === 0){
        var str1 = str.slice(0,str.length/2);
        var str2 = str.slice(str.length/2);
    }
    if(str.length%2 !== 0){
        var str1 = str.slice(0,(str.length-1)/2);
        var str2 = str.slice(str.length/2+1);
    }
    for(let i=str2.length-1;i>=0;i--){
        str2B.push(str2[i]);
    }
    
    return str1.toString() === str2B.toString();
}

console.log(palindrome("2A3*3a2"));