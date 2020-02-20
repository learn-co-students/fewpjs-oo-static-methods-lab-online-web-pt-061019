class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize(string){
    let splitString = string.split(' ')
    let titleString = []
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    for(let i = 0; i < splitString.length; i++){
      if (i == 0) {
        titleString.push(this.capitalize(splitString[i]))
      } else {
        if (exceptions.includes(splitString[i])){
          titleString.push(splitString[i])
        } else {
          titleString.push(this.capitalize(splitString[i]))
        }
      }
    }
  return titleString.join(' ')
  }
}