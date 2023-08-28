import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MasterService {


  constructor(private http: HttpClient) { }
  GetCustomer(payload:any):Observable<any>{
    console.log("services:",payload)
    return this.http.get("http://localhost:3000/course/",{params:payload});
  }
  search(key:any):Observable<any>{
    console.log(key)
    return this.http.get(`http://localhost:3000/course/`,{params:{title:key}})
  }
  editdata(data:any){
    //localStorage.setItem('data','klfjdkfjdfjdkvdkjvbekjfhewjkhdsjkvndjvkbfvjkdfbvjkfdbvdfjkvb')
    return this.http.patch(`http://localhost:3000/course/updatecourse/${data.id}`,data);
  }
  deletecourse(data: any) {
    console.log("service " + data);
    console.log(localStorage.getItem('data'))
    return this.http.delete(`http://localhost:3000/course/deletecourse/${data}`);
  }
  Savecustomer(data:any){
    console.log(data)
    return this.http.patch(`http://localhost:3000/course/updatecourse/${data.id}`,data);
  }
  addcourse(data:any){
    console.log(data)
    return this.http.post(`http://localhost:3000/course/addcourse/`,data);
  }

  
}
