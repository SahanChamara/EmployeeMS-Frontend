import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';

export const routes: Routes = [
    {
        path:"addEmployee",
        component: AddEmployeeComponent
    },
    {
        path: "",
        component: ViewEmployeeComponent
    }

];
