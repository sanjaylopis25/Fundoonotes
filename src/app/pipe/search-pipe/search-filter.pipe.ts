import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: [], args ?: any): any {
    if(!args){
    return value;
  }
  console.log(args)
    console.log(value)
    return value.filter((item:any) =>{
      return item.title.toLowerCase().includes(args) | item.description.toLowerCase().includes(args);
    })
  }

}
