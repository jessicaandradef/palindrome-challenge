function palindrome(word) {
  let wordSeparation = word.split("");
  let invertWord = wordSeparation.reverse();
  invertWord = invertWord.join("");

  if (word === invertWord) {
    console.log(`the word ${word} is a palindrome`);
  } else {
    console.log(`the word ${word} isnt a palindrome, try another one`);
  }
}
palindrome("ava");
