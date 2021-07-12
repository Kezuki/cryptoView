export default class ServiceFunctions {
  round = (num, x) => {
    num = +num;
    return num.toFixed(x);
  };

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  mySort = (data, field, reverse) => {
    data.sort((a, b) => {
      if (!isNaN(a[field]) && !isNaN(b[field])) {
        const x = +a[field];
        const y = +b[field];
        return x > y ? 1 : -1;
      } else {
        return a[field] > b[field] ? 1 : -1;
      }
    });

    if (reverse) {
      data.reverse();
    }
  };

  // for example  18741687 --> 18.74M
  formatNum = (num) => {
    num = +num;

    if (num >= 1000000000) {
      return this.round(num / 1000000000, 2) + "B";
    }

    if (num >= 1000000) {
      return this.round(num / 1000000, 2) + "M";
    }

    return num;
  };
}
