class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }
  static titleize(string) {
    const lowerCase = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from"
    ];
    const splitArray = string.split(" ");
    const comparisonArray = [
      this.capitalize(splitArray[0]),
      ...splitArray.slice(1)
    ];
    return comparisonArray
      .map(word => {
        return lowerCase.includes(word) ? word : this.capitalize(word);
      })
      .join(" ");
  }
}
