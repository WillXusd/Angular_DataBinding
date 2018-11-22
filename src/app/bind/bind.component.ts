import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  imgUrl: string = "http://placehold.it/400x220";
  size: number = 2;
  divClass: string;
  isBig: boolean = false;
  divNgClass: any = {
    a: false,
    b: false,
    c:false
  };
  divStyle: any = {
    color: 'red',
    background: 'yellow'
  };
  name: string;

  constructor() {
    setTimeout(() => {
      this.divClass = " a b c"
      this.isBig = true;
      this.divNgClass = {
        a: true,
        b: true,
        c: true
      };

      this.divStyle = {
        color: 'yellow',
        background:'red'
      }
    },3000)

    setInterval(() => {
      this.name = "Tom";
    },3000)
  }

  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  //HTML属性和DOM属性的关系

  //少量HTML属性和DOM属性之间，如colspan
  //有些DOM属性没有对应的HTML属性，如textContent
  //就算名字相同，HTML属性和DOM属性也不是同一样东西
  //*HTML属性的值指定了初始值；DOM属性的值表示当前值
  //*DOM属性的值可以改变，HTML属性的值不能改变
  //*模板绑定是通过DOM属性和事件来工作的，而不是HTML属性
  doOnInput(event: any) {
    console.log(event.target.value);//DOM属性，指向变化值
    console.log(event.target.getAttribute('value'));//HTML属性，指向初始值
  }


  doOnInputToWay(event) {
    this.name = event.target.value;
  }

}
