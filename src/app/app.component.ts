import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ViewEmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'employee_management_app';

  ngOnInit(): void {
    initFlowbite();
  }
}
