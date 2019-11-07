window.onload = function () {
    const pigLatin = word => {
        word = word.toLowerCase().trim();
        let vowelPosition = 0;
        
        const vowels = ["a","e","i","o","u","y"];
        if(vowels.includes(word[0])){ // checks if first index includes any of vowels array
            return word + "yay";
        } else {
            for(let letter of word){ // loops through word by each letter
                if(vowels.includes(letter)){ // if letter of word is part of vowels array then...
                vowelPosition = word.indexOf(letter); // index value of "vowel" letter gets added to vowelPosition placeholder
                // console.log(vowelPosition);
                break; // must have break to stop loop after first occurence found
                }
            }
            return word.slice(vowelPosition) + word.slice(0, vowelPosition) + "ay"
        }    
    }
    document.getElementById("english").onsubmit = function (e) {
        e.preventDefault();
        const newWord = document.getElementById("output");
        newWord.innerHTML = pigLatin(document.getElementById('firstWord').value);
    }
   
}

// const form = document.querySelector("form");

// form.addEventListener("submit", e => {
  
//     const output = document.querySelector(".output");
//     output.innerHTML = "";

//     const pigLatin = word => {
       
//         e.preventDefault();
//         const formData = new FormData(form);
//         const firstWord = formData.get("firstWord");
//         const convert = {
//             firstWord
//         };
//         console.log(convert);
//         word = word.toLowerCase().trim();
//         let vowelPosition = 0;
      
//         const vowels = ["a","e","i","o","u","y"];
//         if(vowels.includes(word[0])){ // checks if first index includes any of vowels array
//           return word + "yay";
//         } else {
//           for(let letter of word){ // loops through word by each letter
//             if(vowels.includes(letter)){ // if letter of word is part of vowels array then...
//               vowelPosition = word.indexOf(letter); // index value of "vowel" letter gets added to vowelPosition placeholder
//               // console.log(vowelPosition);
//               break; // must have break to stop loop after first occurence found
//             }
//           }
//           return word.slice(vowelPosition) + word.slice(0, vowelPosition) + "ay"
//         }
        
//       }
// })

