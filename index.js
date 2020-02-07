class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z\s-']+/g, '');
  }

  static titleize(string) {
    // Write a method static titleize that takes in a string and capitalizes all words
    // in a sentence except the, a, an, but, of, and, for, at, by, and from;
    // and always capitalizes the first word.

    let exceptions = ["the","a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = string.split(' ')
    let titlizedArray = []

    words.forEach((word, i) => {

      // For each word that is pass into the loop, see if it is one of the exception words
      let result = exceptions.find( function(x) { return word === x })

      // If it's the first word, capitalize the first letter and move on
      // If it's not the first word, but is a reserved word, add it to the array without changing it
      // Else, capitalize the first character only

      if (i == 0) {

        let newWord = word.charAt(0).toUpperCase() + word.slice(1)
        titlizedArray.push(newWord)
        return titlizedArray

      } else if (result) {

        titlizedArray.push(word)
        return titlizedArray

      } else {

        let newWord = word.charAt(0).toUpperCase() + word.slice(1)
        titlizedArray.push(newWord)
        return titlizedArray

      }

    });

    let titlizedString = titlizedArray.join(' ')

    return titlizedString

  }
}
