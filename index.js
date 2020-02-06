class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let splitStr = string.split(' ')
    let titleStr = []
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for(let i = 0; i < splitStr.length; i++){
      if(i == 0){
        titleStr.push(this.capitalize(splitStr[i]))
      }
      else{
        if(exceptions.includes(splitStr[i])){
          titleStr.push(splitStr[i])
        }
        else{
          titleStr.push(this.capitalize(splitStr[i]))
        }
      }
    }
  return titleStr.join(' ')
  }
}