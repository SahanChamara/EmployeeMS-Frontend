import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeServiceService } from '../../service/employee-service.service';
import { Employee } from '../../model/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-employee',
  imports: [RouterLink, CommonModule],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit{
  employeeService = inject(EmployeeServiceService);
  emploeeList: Employee[] = [];

  ngOnInit(): void{
    this.loadEmployees();

  }

  loadEmployees(): void{
    this.employeeService.loadEmployees().subscribe((data) => {
      this.emploeeList = data;
    })
  }

}
