import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  notestrash:any
  @Output() outputEvent = new EventEmitter<any>();

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
restoreNote(e:any){
  this.GetAllTrashNotes();
}
trash(e:any){
  this.GetAllTrashNotes();
}

}