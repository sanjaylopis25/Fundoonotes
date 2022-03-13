import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditdialogComponent } from '../editdialog/editdialog.component';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() allnotes : any;
  @Output() updateNoteToRefresh= new EventEmitter<any>();
  @Output() changeColorOfNote = new EventEmitter<any>();
  @Output() trashNoteToRefresh = new EventEmitter<any>();
  @Output() archiveNoteToRefresh= new EventEmitter<any>();
  


  // searchKey:string="";
  title:any
  description:any
  public searchWord:any
  constructor(private note:NotesService, private dialog: MatDialog, private dataService:DataService ) { }

  ngOnInit(): void {
    this.dataService.recievedData.subscribe((response:any)=>{
    console.log("searched",response);
    this.searchWord=response
    })
  }

  openDialog(note:any) {
    const dialogRef = this.dialog.open(EditdialogComponent, {
      width: '600px',
      data:note
    });

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed');
      this.updateNoteToRefresh.emit(Response)
      
    });
  }
  palette(data:any){  
    console.log(data);  
    this.changeColorOfNote.emit(Response)
  }
  trash(data:any){  
    console.log(data);  
    this.trashNoteToRefresh.emit("hello")
  }
  archiverefresh(data:any){  
    console.log(data);  
    this.archiveNoteToRefresh.emit("hello")
  }
  
}
