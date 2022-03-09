import { Pipe, PipeTransform } from '@angular/core';
import { DisplayNotesComponent } from './components/display-notes/display-notes.component';
import { NotesService } from './services/noteService/notes.service';


@Pipe({
  name: 'notesFilter'
})
export class NotesFilterPipe implements PipeTransform {

  transform(value :any[], filterString:string, propName:string): any[]{
    const result:any =[];
    if(!value || filterString==='' || propName===''){
      return value;
    }
    value.forEach((a:any)=>{
      if (a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(a);
      }
    });
    return result;
  }

}
