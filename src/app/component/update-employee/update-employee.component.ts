import { Component, inject, Inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { EmployeeServiceService } from '../../service/employee-service.service';

@Component({
  selector: 'app-update-employee',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  updateEmployeeForm!: FormGroup;
  employeeService = inject(EmployeeServiceService);
  id!: number;

  constructor(private fb: FormBuilder, private readonly activatedRoute: ActivatedRoute, private readonly router: Router) { }

  ngOnInit() {
    this.updateEmployeeForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      department: [null, [Validators.required]],
    })
    this.id = this.activatedRoute.snapshot.params["id"]

    this.getEmployeeById();
  }

  getEmployeeById(){
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      console.log("emp byID", data);
      this.updateEmployeeForm.patchValue(data);
      
    })
  }

  updateEmployee() {
    console.log(this.updateEmployeeForm?.value);
    this.employeeService.updateEmployee(this.id, this.updateEmployeeForm.value).subscribe((data) => {
      console.log("update Employee", data);
      if(data.id != null){
        this.router.navigateByUrl("")
      }

    })
  }

}
