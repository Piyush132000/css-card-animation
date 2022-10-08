var isValid = function(s) {

    let obj = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let result = [];
    let check = true;
     for(let i =0 ; i < s.length; i++){

        if( check && result.length > 0){

        }
         
        if(result.length == 0 && i ==0){
            result.push(s[i]);
        }else if( obj[s[i]] == result[result.length-1]){
            result.pop();
        } else {
            result.push(s[i]);
        }
     }
 
     return  s.length- result.length;
     
 };

 console.log(isValid('(]'))