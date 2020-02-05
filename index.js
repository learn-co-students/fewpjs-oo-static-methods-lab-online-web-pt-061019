class Formatter {
  //add static methods here
  static capitalize(str){
    // capitalizes first letter
    return str.charAt( 0 ).toUpperCase() + str.slice( 1 )
  }

  static sanitize(str){
    // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
    return str.replace( /[^A-Za-z0-9 '-]/g, '' );
  }

  static titleize(str) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let newStr = [];
    let arrWords = str.split( " " )
    for ( let i = 0; i < arrWords.length; i++ ) {
      if ( i == 0 ) {
        newStr.push( this.capitalize( arrWords[i] ) )
      } else {
        if ( exceptions.includes( arrWords[i] ) ) {
          newStr.push( arrWords[i] )
        } else {
          newStr.push( this.capitalize( arrWords[i] ) )
        }
      }

    }
    return newStr.join( " " );
  }

}