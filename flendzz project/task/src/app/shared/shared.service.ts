import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  id!:any;
  cid:any; 
  setID(data:any){
    console.log("++++"+data),
    this.id = data;
  }
  getId(){
    return this.id;
  }

  setCID(data: any){
    this.cid = data;
    console.log(data);
  }
  getCId(){
    return this.cid;
  }

}
