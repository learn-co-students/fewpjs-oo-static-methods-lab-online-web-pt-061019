class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str) { 
    let exc = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = str.split(" ")
    let updatedStr = []

    updatedStr.push(this.capitalize(words[0]))
    for (let i = 1; i < words.length; i++){
        if(exc.includes(words[i].toLowerCase())){
          updatedStr.push(words[i])
        }else{
          updatedStr.push(this.capitalize(words[i]))
        }
      }
      return updatedStr.join(" ");
    }
}



// 3.  Write a method `static titleize` that takes in a string and capitalizes all
//     words in a sentence except the, a, an, but, of, and, for, at, by, and from; and
//     always capitalizes the first word.