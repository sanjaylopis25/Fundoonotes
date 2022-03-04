import { Component, OnInit } from '@angular/core';

import { NotesService } from 'src/app/services/noteService/notes.service';


@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  title: any;
  description: any;
  submitted = false;
  message="Welcome"

  writenote: boolean=false;

  constructor( private notesService:NotesService) { }

  ngOnInit(): void {
    
  }
  takeanote() {
    console.log(this.writenote);
    return this.writenote==true ? (this.writenote = false) : (this.writenote = true);
  }
  close() {
    let reqData = {
      title: this.title,
      description: this.description
      
    }

    console.log(reqData)
    if (this.title && this.description) {
      this.notesService.takenotes(reqData).subscribe((Response: any) => {
        console.log(Response);
        localStorage.setItem("token", Response.id)
      }, error => { console.log(error); })
    }
    else {
      console.log("Form is not valid. Please Fill the form correctly");
    }
  }

}
