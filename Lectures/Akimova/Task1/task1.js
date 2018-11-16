// Listen for button click
document.getElementById('submit').addEventListener('click', init);

// output DOM elements
const number = document.getElementById('number');
const longest = document.getElementById('longest');
const shortest = document.getElementById('shortest');
const average = document.getElementById('average');

/**
 * Call multiple functions on click
 * @returns void
 */
function init() {
    countNumberOfWords(convertToArray());
    countMaximunLength(convertToArray());
    countMinimumLength(convertToArray());
    countAverageLength(convertToArray())
};

/**
 *Validate input string and split it by whitespace
 *
 * @param {String} str - value of user input
 * @returns {Array} arr - array of words
 */
function convertToArray(str) {
    str = document.getElementById('input').value;
    return arr = str
                    .trim()
                    .replace(/\n/gi,' ')//convert new lines into spaces
                    .replace(/[ ]{2,}/gi,' ')// convert 2 or more spaces into 1
                    .replace(/r"(\b[-',]\b)|[\W_]+"|[\.]|,\s+|\s+-\s+/g, ' ')
                    .split(' ')
                    .filter(e => e != '');
};

/**
 * Calculate number of words in the text
 *
 * @param {Array} arr - array of words
 * @returns {number}
 */
function countNumberOfWords (arr) {
    return number.innerHTML = arr.length;
};

/**
 * Calculate number of letters in the longest word
 *
 * @param {Array} words - number of words 
 * @returns {number}
 */
function countMaximunLength (words) {
    //Count the length of each word            
    words = arr.map(w => w.length);
    return longest.innerHTML = Math.max(...words);
};

/**
 * Calculate number of letters in the shortest word
 *
 * @param {Array} words - number of words
 * @returns {number}
 */
function countMinimumLength (words) {
    words = arr.map(w => w.length);
    return shortest.innerHTML = Math.min(...words);
}; 

/**
 * Calculate average length of the words in the text
 *
 * @param {Array} words - number of words
 * @returns {number}
 */
function countAverageLength (words) {
    words = arr.map(w => w.length);
    // Count the sum of characters
    let sum =  words.reduce((a, b) => a + b, 0);
    let avg = Math.round(sum / words.length);
    return average.innerHTML = avg;
};    
   