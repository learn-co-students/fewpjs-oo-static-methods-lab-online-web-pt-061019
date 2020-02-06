class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    const arr = string.split(" ");
    const fixedArr = arr.map(function(el) {
      console.log(el);
      if (el === arr[0]) {
        // console.log(el);
        return this.capitalize(el);
      }
      else if (el !== 'the' && el !== 'a' && el !== 'an' && el !== 'but' && el !== 'of' && el !== 'and' && el !== 'for' && el !== 'at' && el !== 'by' && el !== 'from') {
        return this.capitalize(el);
      } else {
        return el;
      }
    }, this)
    const fixedString = fixedArr.join(" ");
    return fixedString;
  }
}
