class Clock {
  constructor(element) {
      this.el = element;
      this.el.addEventListener('click', () => this.changeFormat());
      this.fullDate = true;
  }
  render() {
      this.date = new Date()
      this.h = this.date.getHours() < 10 ? "0" + this.date.getHours() : this.date.getHours();
      this.m = this.date.getMinutes() < 10 ? "0" + this.date.getMinutes() : this.date.getMinutes();
      this.s = this.date.getSeconds() < 10 ? "0" + this.date.getSeconds() : this.date.getSeconds(); 
      this.el.innerText = this.fullDate ? + this.h + ":" + this.m + ":" + this.s : this.h + ":" + this.m;
  }
  changeFormat() {
      this.fullDate = !this.fullDate
  }
}

let time = document.querySelector('p')
let clock = new Clock(time);
clock.render()
setInterval(() => clock.render(), 250);