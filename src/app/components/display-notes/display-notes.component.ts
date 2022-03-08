import { Component, OnInit,Input } from '@angular/core';
import { NotesService } from 'src/app/services/noteService/notes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditdialogComponent } from '../editdialog/editdialog.component';


@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() allnotes : any;
  
  title:any
  description:any
  
  constructor(private note:NotesService, private dialog: MatDialog ) { }

  ngOnInit(): void {
  }
  openDialog(note:any) {
    const dialogRef = this.dialog.open(EditdialogComponent, {
      width: '600px',
      data:note
    });

    dialogRef.afterClosed().subscribe(result => {
      
      console.log('The dialog was closed');
      
    });
  }

}
