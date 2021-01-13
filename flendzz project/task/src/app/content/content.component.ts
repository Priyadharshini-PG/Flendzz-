import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestapiService } from '../restapi.service';
import { spec } from '../bean/spec' 
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DetailsComponent } from '../details/details.component';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../shared/shared.service'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<spec>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort; 

  constructor(private service:RestapiService,public dialog:MatDialog,private shared:SharedService) { }

  ngAfterViewInit(): void {
    // for sorting
    this.dataSource.sort = this.sort;
   //  pagination
    this.dataSource.paginator = this.paginator;
 }

  ngOnInit(): void {
    this.service.List().subscribe( (res) => {
      this.dataSource.data = res as spec[];
    })

  }

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'view'];

  public view(id:number){
    this.dialog.open(DetailsComponent);
    // this.router.navigate(['viewProduct',id]);
    console.log(id);
    this.shared.setID(id);
  }

}
