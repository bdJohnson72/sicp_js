/**
 * My attempt to implement the Scheme pigl program in the UC Berkley webcast
 * https://archive.org/details/ucberkeley_webcast_l28HAzKy0N8
 */

function pigLatin(word){
     return isVowel(word) ?  word + 'ay' : pigLatin(moveFirstLetterToEnd(word));
}

function isVowel(word){
    const vowels = new Set("aeiou");
    return vowels.has(word.substring(0,1));

}

function moveFirstLetterToEnd(word){
    const firstletter = word.substring(0, 1);
    return word.substring(1) + firstletter;
}

module.exports = {moveFirstLetterToEnd, isVowel, pigLatin}