import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';


@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  notesarchive:any
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.GetAllArchiveNotes()
  }
  GetAllArchiveNotes(){
    this.notesService.getarchivenotes().subscribe((Response:any)=>{
      this.notesarchive=Response.data.data;
      console.log(this.notesarchive);
      })
    
  
}
}
