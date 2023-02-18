let hipsterfy = function(sentence){
    let words = sentence.split(" ");
    let newWord = [];

    for (let i = 0; i < words.length; i++){
        newWord.push(lastVowel(words[i]));
    }
    return newWord.join(" ");
};

let lastVowel = function(word){
    let vowel = "aeiou";
    let newWord = "";

    for (let i = word.length - 1; i => 0; i--){
        if (vowel.includes(word[i])) {
            newWord += word.slice(0, i ) + word.slice(i + 1);
            return newWord;
        }
    }
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
