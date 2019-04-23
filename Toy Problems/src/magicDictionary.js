/*
Implement a magic dictionary with buildDict, and search methods.

For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.

For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.

Example 1:
Input: buildDict(["hello", "leetcode"]), Output: Null
Input: search("hello"), Output: False
Input: search("hhllo"), Output: True
Input: search("hell"), Output: False
Input: search("leetcoded"), Output: False
*/

var MagicDictionary = function() {
  this.dict = {};
};

MagicDictionary.prototype.buildDict = function(words) {
  for (var i = 0; i < words.length; i++) {
    this.dict[words[i].length]
  }
};

MagicDictionary.prototype.search = function(word) {

};