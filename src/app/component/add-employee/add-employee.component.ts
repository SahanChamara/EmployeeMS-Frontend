import { Component, inject, Inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from '../../service/employee-service.service';

@Component({
  selector: 'app-add-employee',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent {

  postEmployeeForm!: FormGroup;
  employeeService = inject(EmployeeServiceService);

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.postEmployeeForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      department: [null, [Validators.required]],
    })
  }

  addEmployee(){
    console.log(this.postEmployeeForm?.value); 
    this.employeeService.addEmployee(this.postEmployeeForm.value).subscribe((data) => {
      console.log("saved Employee",data);
      
    })
  }

}
