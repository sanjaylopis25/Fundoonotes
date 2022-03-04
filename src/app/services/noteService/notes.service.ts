import { Injectable } from '@angular/core';
import { HttpService } from '../httpServices/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor(private httpService:HttpService) { 
    this.token= localStorage.getItem("token")
  }

takenotes(data:any){
    let header = {
      headers: new HttpHeaders({
       'Content-Type': 'application/json',
       'Authorization': this.token
      })
   }
    console.log("signup called in user service");
    return this.httpService.postService('notes/addNotes',data,true,header)
  }
getnotes(data:any){
  let header = {
    headers: new HttpHeaders({
     'Content-Type': 'application/json',
     'Authorization': this.token
    })
 }
 console.log("signup called in user service");
  return this.httpService.getService()
}
}
