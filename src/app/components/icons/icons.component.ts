import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';
import { ActivatedRoute } from '@angular/router';
import { ArchiveNotesComponent } from '../archive-notes/archive-notes.component';
import { TrashNotesComponent } from '../trash-notes/trash-notes.component';


@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
@Input() iconnote:any;
@Output() changeColorOfNote = new EventEmitter<any>();
@Output() trashNoteToRefresh= new EventEmitter<any>();
@Output() archiveNoteToRefresh= new EventEmitter<any>();


isArchiveNotesComponent=false;
isTrashNotesComponent=false;
  constructor(private notesService: NotesService, private router:ActivatedRoute) { }
 

  ngOnInit(): void {
    console.log(this.iconnote)
    let Component = this.router.snapshot.component;
    if (Component == ArchiveNotesComponent) {
      this.isArchiveNotesComponent = true;
      console.log(this.isArchiveNotesComponent);
    }
    if (Component == TrashNotesComponent) {
      this.isTrashNotesComponent = true;
      console.log(this.isTrashNotesComponent);
    }
  }
  deletenote(){
    let reqdata = {
      noteIdList: [this.iconnote.id],
      isDeleted: true,
    }
    this.notesService.delete(reqdata).subscribe((response: any) => {
      console.log(response);
      this.trashNoteToRefresh.emit(Response)
    })
    
  }
  restorenote(){
    let reqdata = {
      noteIdList: [this.iconnote.id],
      isDeleted: false,
    }
    this.notesService.delete(reqdata).subscribe((response: any) => {
      console.log(response);
      this.changeColorOfNote.emit(response)
    })
    
  }
  deleteforever(){
    let reqdata = {
      noteIdList: [this.iconnote.id],
      isDeleted: true,
    }
    this.notesService.deleteperm(reqdata).subscribe((response: any) => {
      console.log(response);
      this.changeColorOfNote.emit(response)
    })
    
  }
  archivenote(){
    let reqdata = {
      noteIdList: [this.iconnote.id],
      isArchived: true,
    }
    this.notesService.archive(reqdata).subscribe((response: any) => {
      console.log(response);
      this.archiveNoteToRefresh.emit(Response)
    })
  }
  colors = [{bgColorValue:'#fff'},
  {bgColorValue:'#f28b82'},
  {bgColorValue:'#fbbc04'},
  {bgColorValue:'#fff475'},
  {bgColorValue:'#ccff90'},
  {bgColorValue:'#a7ffeb'},
  {bgColorValue:'#cbf0f8'},
  {bgColorValue:'#aecbfa'},
  {bgColorValue:'#d7aefb'},
  {bgColorValue:'#fdcfe8'},
  {bgColorValue:'#e6c9a8'},
  {bgColorValue:'#e8eaed'}
  ];
  changeColor(noteColor:any){
    
    this.iconnote.noteColor= noteColor;
    let reqdata={
      
      noteIdList: [this.iconnote .id],  
      color: noteColor
    }

    this.notesService.usercolor(reqdata).subscribe((response:any) =>{
      console.log(response);

     this.changeColorOfNote.emit(noteColor)
      

    })
    
  }
  unarchivenote(){
    let reqdata = {
      noteIdList: [this.iconnote.id],
      isArchived: false,
    }
    this.notesService.archive(reqdata).subscribe((response: any) => {
      console.log(response);
      this.changeColorOfNote.emit(response)
    })
   
  }
}
