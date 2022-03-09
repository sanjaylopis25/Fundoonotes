import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  notestrash:any

  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.GetAllTrashNotes()
  }
  GetAllTrashNotes(){
    this.notesService.gettrashnotes().subscribe((Response:any)=>{
      this.notestrash=Response.data.data;
      console.log(this.notestrash);
      })
}
}