function palindrome(str) {

    let checkList = /[^a-z0-9]/g ;
    
    
    let word = str.toLowerCase().replace(checkList, ''); 
    let backwards = word.split("").reverse().join(""); 
    
   
    let length =word.length; 

   
    for (let i =0;i<length;i++){
        if (word[i] !== backwards[i]){
            console.log('False');
            return false;
        }
    }

    console.log('true'); 
            return true; 
}

  palindrome("1 eye for of 1 eye.");
