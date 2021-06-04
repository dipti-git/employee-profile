import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
 
})

export class EmployeeComponent implements OnInit {
data= ['e1','e2','e3', 'e4','e5','e6','e7','e8','e9']

employeeDetails = [];
employees = [];
abcd: employee [] = []


// constructor( 
// private httpClient: HttpClient,
// ) { }

ngOnInit(): void {
  // this.getEmployees();
}

// getEmployees(){
//     this.httpClient.get<any>('https://60b5b568fe923b0017c8475e.mockapi.io/api/ang/employee').subscribe(
//       response => {
//         console.log(response);
//         this.employees = response.Employees;
//         // this.employeeDetails = response.Employees;
//         console.log(this.employees);

//       }      
//     );
//   }

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content:any) {
    this.modalService.open(content);
  }

}

export interface employee{
  uid: '',
  name:'',
  role:'',

}

































    // data = { userId: '',
    //       jobTitleName: '',
    //       firstName: '',
    //       lastName:'',
    //       preferredFullName: '',
    //       employeeCode: '',
    //       region: '',
    //       phoneNumber: '',
    //       emailAddress: ''}


// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';

// export class employee {
//   constructor(
//     public userId: number,
//     public jobTitleName: string,
//     public firstName: string,
//     public lastName:string,
//     public preferredFullName: string,
//     public employeeCode: number,
//     public region: string,
//     public phoneNumber: number,
//     public emailAddress: string
//   ) {

//   }
// }

// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css']
// })
// export class EmployeeComponent implements OnInit {

//   employee: [] = [];
//   constructor(
//     private httpClient: HttpClient
//   ) { }

//   ngOnInit(): void {
//     this.getEmployees();
//   }

//   getEmployees(){
//     this.httpClient.get<any>('https://60b5b568fe923b0017c8475e.mockapi.io/api/ang/employee').subscribe(
//       response => {
//         console.log(response);
//         this.employee = response;

//       }      
//     );
//   }

// }










