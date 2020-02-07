class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^- ''']+/g, '');
  }

  static titleize(string) {
    let words = string.split(' ')
    let firstWord = words[0]
    let shout = firstWord.toUpperCase()
    let newWords = words.unshift(shout)

    let newString = newWords.join(' ')

    return newString

  }
}
