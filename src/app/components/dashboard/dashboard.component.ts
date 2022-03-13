import {ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { NotesService } from 'src/app/services/noteService/notes.service';
import { DataService } from 'src/app/services/data-services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mobileQuery: MediaQueryList;
  isShow = false;
  // public searchTerm:string='';
  

  private _mobileQueryListener: () => void;
  constructor(private noteService:NotesService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router:Router, private dataService:DataService) { 
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  Archive(){
    this.router.navigateByUrl('dashboard/archive-notes')
  }
  Trash(){
    this.router.navigateByUrl('dashboard/trash-notes') 
    
  }
  // search(event:any){
  //   this.searchTerm=(event.target as HTMLInputElement).value; 
  //   console.log(this.searchTerm)
  //   this.noteService.search.next(this.searchTerm);
  // }
  logout() {    
    localStorage.removeItem('token')
    this.router.navigateByUrl('login'); 
  }
  search(event:any){
  console.log(event.target.value)
  this.dataService.sendData(event.target.value)
  }
  reload(){
    window.location.reload();
  }
  
}

