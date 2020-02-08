class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\s\-']+/g, '')
  }

  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]

    let splits = string.split(' ')

    let results = splits.map(word => {
      if(!exceptions.find(el => el === word)) {
        return Formatter.capitalize(word)
      }
      else if(splits[0] === word) {
        return Formatter.capitalize(word)
      }
      else {
        return Formatter.sanitize(word)
      }
    })

    return results.join(' ')
  }
}