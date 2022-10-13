import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemploye',
  templateUrl: './addemploye.component.html',
  styleUrls: ['./addemploye.component.css']
})
export class AddemployeComponent implements OnInit {

  constructor() { }
  employeeCode=""
  employeeName=""
  employeeDesignation=""
  employeeGender=""
  companyName=""
  salary=""
  doj=""
  companyAddress=""
  mobileNumber=""
  email=""
  expericence=""
  bloodGroup=""
  dob=""
readValues=()=>{
  let data={
    "employeeCode":this.employeeCode,
    "employeeName":this.companyName,
    "employeeDesignation":this.employeeDesignation,
    "employeeGender":this.employeeGender,
    "companyName":this.companyName,
    "salary":this.salary,
    "doj":this.doj,
    "companyAddress":this.companyAddress,
    "mobileNumber":this.mobileNumber,
    "mail":this.email,
    "expericence":this.expericence,
    "bloodGroup":this.bloodGroup,
    "dob":this.dob
  }
  console.log(data)
}
  ngOnInit(): void {
  }

}
