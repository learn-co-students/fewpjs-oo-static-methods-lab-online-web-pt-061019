class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)

  }
  // removes any non alpha-numeric characters except dash and single quotes (apostrophes) and space
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
    // regex: add \s => /[^A-Za-z0-9-\s']+/ or Just add a space
  }

  static titleize(string) {
    let nonCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    // Split one who string into substrings:
    let splitString = string.split(" ")
    // capitalize first letter of each substring
    let stringResult = [this.capitalize(splitString[0])]
    //Take the first substring out; always capitalizes the first word
    splitString = splitString.slice(1)
    // check if nonCapitalize words exist
    for(const word of splitString) {
      if (!nonCapitalize.find(el => el === word)){
        stringResult.push(this.capitalize(word))
      } else {
        stringResult.push(word)
      }
    }
    return stringResult.join(" ");
  }
}