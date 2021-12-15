class Navigator {
  constructor() {
    this.forwardHistory = [];
    this.backHistory = [];
    this.current = '';
  }

  back() {
    this.forwardHistory.unshift(this.current);
    this.current = this.backHistory.pop();
    console.log(this.current);
  }

  go(str) {
    if (this.current) {
      this.backHistory.push(this.current);
      this.current = str;
    } else {
      this.current = str;
    }
  }

  forward() {
    this.backHistory.push(this.current);
    this.current = this.forwardHistory.shift();
    console.log(this.current);
  }
}

module.exports = Navigator;

// let test1 = new Navigator();

// test1.go('1');
// test1.go('2');
// test1.go('3');
// test1.back();

// let test2 = new Navigator();

// test2.go('1');
// test2.go('2');
// test2.back();
// test2.go('3');
// test2.back();

let test3 = new Navigator();

test3.go('1');
test3.go('2');
test3.go('3');
test3.go('4');

test3.back();
test3.forward();
test3.go('5');
test3.back();
