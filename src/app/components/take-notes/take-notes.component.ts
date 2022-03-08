import { Component, OnInit,Output,EventEmitter } from '@angular/core';

import { NotesService } from 'src/app/services/noteService/notes.service';


@Component({
  selector: 'app-take-notes',
  templateUrl: './take-notes.component.html',
  styleUrls: ['./take-notes.component.scss']
})
export class TakeNotesComponent implements OnInit {
  @Output() autorefreshEvent = new EventEmitter<string>();
  title: any;
  description: any;
  submitted = false;

    
  constructor( private notesService:NotesService) { }

  ngOnInit(): void {    
  }
  isShow: boolean=false;

  takeanote() {    
    console.log(this.isShow);
    return this.isShow==true ? (this.isShow = false) : (this.isShow = true);
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
