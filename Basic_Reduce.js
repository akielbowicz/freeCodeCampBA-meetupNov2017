function countWords(inputWords) {
     // SOLUTION GOES HERE

     function count(obj,word){
       if (obj[word]==undefined){obj[word]=0}
        obj[word] += 1
        return obj
      }
      return inputWords.reduce(count,{})
   }
   module.exports = countWords
