import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { ViewEmployeeComponent } from './component/view-employee/view-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';

export const routes: Routes = [
    {
        path:"addEmployee",
        component: AddEmployeeComponent
    },
    {
        path: "",
        component: ViewEmployeeComponent
    },
    {
        path:"updateEmployee/:id",
        component: UpdateEmployeeComponent
    },

];
