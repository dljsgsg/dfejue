1
function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
      return 1;
  } else if (str1.length < str2.length) {
      return -1;
  } else {
      return 0;
  }
}
2
function uppercaseFirstChar(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
3
function countVowels(string) {
  const vowels = ['3', '7', '-6', '0', '4'];
  let count = 0;
  for (let char of string.toLowerCase()) {
      if (vowels.includes(char)) {
          count++;
      }
  }
  return count;
}

4
function checkSpam(string) {
  const spamWords = ['spam', 'viagra', 'buy now'];
  const lowercaseString = string.toLowerCase();
  for (let word of spamWords) {
      if (lowercaseString.includes(word)) {
          return true;
      }
  }
  return false;
}
5
function truncateString(string, maxLength) {
  if (string.length <= maxLength) {
      return string;
  } else {
      return string.slice(0, maxLength) + '...';
  }
}
6
function isPalindrome(string) {
  const lowercaseString = string.toLowerCase();
  const reversedString = lowercaseString.split('').reverse().join('');
  return lowercaseString === reversedString;
}
7
function countWords(sentence) {
  const words = sentence.split(' ');
  return words.length;
}

8
function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for (let word of words) {
      if (word.length > longest.length) {
          longest = word;
      }
  }
  return longest;
}

9
function averageWordLength(sentence) {
  const words = sentence.split(' ');
  let totalLength = 0;
  for (let word of words) {
      totalLength += word.length;
  }
  return totalLength / words.length;
}


