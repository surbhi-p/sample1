import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  item = ["JavaScript","React", "Angular"];
  newItem="abc";
  pushItem= function(){
    if(this.newItem !=""){
      this.item.push(this.newItem);
      this.newItem="";
    }
  }
  popItem= function(index){
    this.item.splice(index, 1);
  }
}
