import { Component,Input,Output } from '@angular/core';

@Component({
  selector: 'app-watch-list',
  imports: [],
  templateUrl: './watch-list.html',
  styleUrl: './watch-list.css',
})
export class WatchList {
  @Input() name1='';
  @Input() price1=0;
  @Input() rating1=0;
  @Input() url1='';
}
