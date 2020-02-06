class Formatter {
  //add static methods here

  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(string){
    let excepted = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = string.split(" ")
    let finalSentence = []

    finalSentence.push(this.capitalize(words[0]))
    for (let i = 1; i < words.length; i++){
        if(excepted.includes(words[i].toLowerCase())){
          finalSentence.push(words[i])
        }else{
          finalSentence.push(this.capitalize(words[i]))
        }
      }
      return finalSentence.join(" ");
    }
  
  }