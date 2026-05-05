import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieCart } from './movie-cart/movie-cart';
import { CommonModule } from '@angular/common';
import { WatchList } from './watch-list/watch-list';

@Component({
  selector: 'app-root',
  imports: [MovieCart,CommonModule,WatchList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('movies');

  // temp='';
  // onMessageReceive(n : string){
  //   console.log(n);
  //   this.temp=n;
  // }

  // id=0;
  // onclick(id: number){
  //   this.id=id;
  // }

  text='View';
 

  list=[
    {name:"product 1",price:10,rating:10,url:"https://thfvnext.bing.com/th/id/OIP.3i3ElDRKPuAFLx5haLsvSwHaEy?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3%27%22"},
    {name:"product 2",price:20,rating:9,url:"https://thfvnext.bing.com/th/id/OIP.QnKwSkoRPYSIvblJ9Mu9WQHaFj?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3%27%22"},
    {name:"product 3",price:30,rating:8,url:"https://thfvnext.bing.com/th/id/OIP.gySZCCVBWTArCt6rUfZWEAHaE8?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3%27%22"},
    {name:"product 4",price:40,rating:7,url:"https://thfvnext.bing.com/th/id/OIP.0fDgdCMdegfaA_WuoBbu_AHaHN?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3%27%22"}
  ];
  
  flag1=true;
  onclick(){
    this.flag1=!this.flag1;
    if(this.flag1){
      this.text='View';
    }else{
      this.text='Close';
    }
  }

  newlist: any=[];

  function(n:any){
    const product = this.list.find(p => p.name === n);
    this.newlist.push(product);
    console.log('Added:', product);
  
  }
  
}
