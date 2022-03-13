import { Component, OnInit,Inject } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-editdialog',
  templateUrl: './editdialog.component.html',
  styleUrls: ['./editdialog.component.scss']
})
export class EditdialogComponent implements OnInit {
  
  title:any
  description:any
 noteId:any

  constructor(private notesService:NotesService,public dialogRef:MatDialogRef<EditdialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.title=this.data.title,
    this.description=this.data.description,
    this.noteId=this.data.id
  }
  
  close() {
    let reqData = {
      title: this.title,
      description: this.description,
      noteId:this.noteId
    } 
    this.dialogRef.close();
    console.log(reqData)
    if (this.title && this.description) {
      this.notesService.editnotes(reqData).subscribe((Response: any) => {
        console.log(Response);
        
        // localStorage.setItem("token", Response.id)
      }, error => { console.log(error); })
    }
    else {
      console.log("Form is not valid. Please Fill the form correctly");
    }  
  
  }

}
