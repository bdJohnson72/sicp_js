const functions = require('./piglatin')

describe('piglatin test suite', () => {
    it('should  move the first lettter', () => {
        const result = functions.moveFirstLetterToEnd('word');
        expect(result).toBe('ordw');
    })
    it('should find a vowel', function () {
        const result = functions.isVowel(functions.moveFirstLetterToEnd('word'));
        expect(result).toBe(true);
    });
    it('should not find a vowel', function () {
        const result = functions.isVowel('word');
        expect(result).toBe(false);
    });
    it('should return the piglatin version', () =>{
        const result = functions.pigLatin('ord');
        expect(result).toBe('orday');
    });
    it('should return the pig latin  -recursive test', function () {
        const result = functions.pigLatin('scheme');
        console.log(result)
        expect(result).toBe('emeschay');
    });
})