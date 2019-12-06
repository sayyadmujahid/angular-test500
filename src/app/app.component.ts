import { Component, OnInit } from '@angular/core';
import { Test700Service } from './test700.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listData: any;
  id: any;
  rowJSONData: any;
constructor(private test700service:Test700Service){
}
getListData(){
  this.test700service.getListData().subscribe(res=>{
    this.listData=res.hits;
  })
}
getCurrentRowData(item){
this.rowJSONData=item;
}
ngOnInit(){
  this.getListData();
  this.id = setInterval(() => {
    this.getListData();
  }, 5000);
}
ngOnDestroy() {
  if (this.id) {
    clearInterval(this.id);
  }
}
}
