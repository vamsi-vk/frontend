import { Component,ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MasterService } from 'src/app/services/master.service';
import { MatSort } from '@angular/material/sort';
import { NgToastService } from 'ng-angular-popup';
import { MatTableDataSource } from '@angular/material/table';
import { MetrialModule } from 'src/app/metrial/metrial.module';
import { MatDialog } from '@angular/material/dialog';
import { Course } from '../Model/course';
import { UserdetailsComponent } from '../userdetails/userdetails.component';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  dataSource: any;
   customerlist !: Course[];
  displayedColumns: string[] = ["ID", "course",  "status", "action"];
  @ViewChild(MatPaginator) paginatior !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(private service: MasterService,  private dialog: MatDialog, private toast :NgToastService) { 
    
 }
 loadcustomer() {
  this.service.GetCustomer({}).subscribe(res => {
    this.customerlist = res;
    this.dataSource = new MatTableDataSource<Course>(this.customerlist);
    console.log(this.dataSource)
    this.dataSource.paginator = this.paginatior;
    this.dataSource.sort = this.sort;
  });
}

Filterchangeid(data: Event) {
  const value1 = (data.target as HTMLInputElement).value;
  this.dataSource.filter = value1;
  const obj={id:value1}
  this.service.GetCustomer(obj).subscribe((res: any) => {
  console.log(res);
  this.dataSource.data = res;
  });
}
Filterchangecourse(data: Event) {
  const value1 = (data.target as HTMLInputElement).value;
  const obj={title:value1}
    this.service.GetCustomer(obj).subscribe((res: any) => {
    console.log("filter",res)
  this.dataSource.data=res;
  }); 
}
Filterchangestatus(data: Event) {
  const value1 = (data.target as HTMLInputElement).value;
  const obj ={completed:value1}
  this.service.GetCustomer(obj).subscribe((res: any) => {
    console.log(res);
    this.dataSource.data = res;
  });  
}
details(code: any) {
  const vk = this.dialog.open(UserdetailsComponent,{
    data:code})
    console.log("details"+code)
}

delete1(data:any){
  console.log(data)
  this.service.deletecourse(data).subscribe((res:any) => {
    this.toast.success({detail:"Successs",summary:res})
    this.loadcustomer()
  },
    err=>{
      this.toast.error({detail:"error",summary:"please enter proper values"})

    }
    );
}
addcourse(){
  this.Openpopup(0, 'Add Customer',PopupComponent);
}



}
