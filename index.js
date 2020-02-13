class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const firstWord = this.capitalize(string.split(' ')[0]);

    const downCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(' ').slice(1);
    const upCaseWords = words.map(word => {
      if (!downCaseWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    }).join(" ")
    return firstWord + " " + upCaseWords;
  }
}

Formatter.titleize( "where the wild things are" )
Formatter.titleize( "chicken soup with rice and a few other songs" )
Formatter.titleize( "a tale of two cities" )