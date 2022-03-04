import { Component, OnInit,Input } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

export class getNotesList {
  constructor(
    public title: any,
    public description:any
  ){}   
  }
  
 



@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
 @Input() data:any
 
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
  }

}
