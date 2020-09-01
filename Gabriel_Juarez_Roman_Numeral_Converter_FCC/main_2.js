function convertToRoman(num) {

    const number_key = [
        1000,
        900,
        800,
        700,
        600,
        500,
        400,
        300,
        200,
        100,
        90,
        80,
        70,
        60,
        50,
        40,
        30,
        20,
        10,
        9,
        8,
        7,
        6,
        5,
        4,
        3,
        2,
        1
    ];

    const roman_key = [
        "M",
        "CM",
        "DCCC",
        "DCC",
        "DC",
        "D",
        "CD",
        "CCC",
        "CC",
        "C",
        "XC",
        "LXXX",
        "LXX",
        "LX",
        "L",
        "XL",
        "XXX",
        "XX",
        "X",
        "IX",
        "VIII",
        "VII",
        "VI",
        "V",
        "IV",
        "III",
        "II",
        "I"
    ];

    let answer = "";

    for (let i = 0; i < number_key.length; i++) {
        while (number_key[i] <= num) {
            answer += roman_key[i];
            num -= number_key[i];
            
        }
        
    }
    console.log(answer); 
     return answer; 

};

convertToRoman(555);



