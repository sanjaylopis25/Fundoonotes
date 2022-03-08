import { Component, OnInit, Input } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() iconnote:any;

  constructor(private notesService: NotesService) { }
 
  

  ngOnInit(): void {
    console.log(this.iconnote)
  }
  deletenote(){
    let reqdata = {
      noteIdList: [this.iconnote.id],
      isDeleted: true,
    }
    this.notesService.delete(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
  archivenote(){
    let reqdata = {
      noteIdList: [this.iconnote.id],
      isArchived: true,
    }
    this.notesService.archive(reqdata).subscribe((response: any) => {
      console.log(response);
    })
  }
}
