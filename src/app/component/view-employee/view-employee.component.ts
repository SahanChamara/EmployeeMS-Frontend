import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeServiceService } from '../../service/employee-service.service';
import { Employee } from '../../model/employee.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-employee',
  imports: [RouterLink, CommonModule],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {
  employeeService = inject(EmployeeServiceService);
  emploeeList: Employee[] = [];



  constructor() { }

  ngOnInit(): void {

    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.loadEmployees().subscribe((data) => {
      this.emploeeList = data;
    })
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      if (data) {
        this.loadEmployees();
      }
    })
  }

  downloadCSVFromBackend(): void {
    this.employeeService.exportCSV().subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'employees_report.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }

}
