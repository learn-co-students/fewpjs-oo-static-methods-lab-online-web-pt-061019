class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)

  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string) {
    let nonCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let splitString = string.split(" ")
    let stringResult = [this.capitalize(splitString[0])]
    splitString = splitString.slice(1)
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