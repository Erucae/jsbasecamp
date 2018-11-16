function handler() {
   
    const str = document.getElementById('text').value;
    const words = separateStrIntoArr(str);
    const minCount = findMinWord(words);
    const maxCount = findMaxWord(words);
  
    const average = findAverageCountOfWords(words);
    
    document.getElementById('countOfWords').innerHTML = `Number of words: <${words.length}>`;
    document.getElementById('maxWord').innerHTML = `Length of the maximal word: <${maxCount}>`;
    document.getElementById('minWord').innerHTML = `Length of the minimal word: <${minCount}>`;
    document.getElementById('average').innerHTML = `Average length of words: <${average}>`;
};

function separateStrIntoArr(str) {
    const words = str.match(/\w*\S*\w+/g);            //Retrieve all words from sentence (multi-line - 1 word, multi - line 2 words and multi,line - 1 word)

    return words;
};

function findMinWord(words){
    let minWordLength = words[0].length || 0;
    
     words.forEach( word => 
        minWordLength = Math.min(minWordLength, word.length)
    );
    
    return minWordLength;
};

function findMaxWord(words) {
    let maxWordLength = 0;
    
    words.forEach( word => 
        maxWordLength = Math.max(maxWordLength, word.length)
    );
    
    return maxWordLength;
};

function findAverageCountOfWords(words) {
    const average = Math.round(words.reduce((sum, word) => sum += word.length, 0) / words.length);
    
    return average;
};