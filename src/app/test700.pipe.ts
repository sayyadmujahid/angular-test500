import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test700'
})
export class Test700Pipe implements PipeTransform {

  transform(data:any,searchText:string): any {
    if(searchText==undefined){
      return data;
    }
    return data.filter((text=>{
      return text.title.toLowerCase().match(searchText.toLowerCase());
    }))
  }

}
