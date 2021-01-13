import { Component, OnInit } from '@angular/core';
import { spec } from '../bean/spec';
import { RestapiService } from '../restapi.service';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private service:RestapiService, private shared:SharedService) { }
  spcification! : spec[];
  name:any;
  email:any;
  test!:spec;
  
  ngOnInit(): void {
    console.log(this.name);
    this.service.ListArray().subscribe( res => {
      // this.dataSource.data = res as spec[];
      this.test = res ;
      this.spcification = res as unknown as spec[];
      this.spcification.forEach(element => {
        console.log("----"+this.shared.getId())
        if(element.id === this.shared.getId()){
            
            this.name = element.name;
            this.email = element.email;
            console.log("---"+this.name);
            
        }
      });
    })
  }

}
