import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-cart',
  imports: [],
  templateUrl: './movie-cart.html',
  styleUrl: './movie-cart.css',
})
export class MovieCart {
  // @Input()
  // title='';

  // @Input() title2='';

  // @Output()
  // name=new EventEmitter<string>();

  // click(){
  //   this.name.emit("added to watch list");
  // }

  // @Output() id=new EventEmitter<number>();   
  // // @Output() temp=new EventEmitter<string>()
  // count=0;
  // tempmethood(){
  //   this.count++;
  //   this.id.emit(this.count);
  //   // this.temp.emit("")
  // }

  @Input() name1='';
  @Input() price1=0;
  @Input() rating1=0;
  @Input() url1='';

  @Output() name2=new EventEmitter<string>();  
  onclick(){
    this.name2.emit(this.name1);
  }
}
