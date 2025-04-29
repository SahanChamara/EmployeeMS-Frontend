export interface Employee {
    id?: number,
    name: string,
    email: string,
    department: DepartmentType,
    createAt: string,
    updatedAt: string,
}

export enum DepartmentType  {
    HR = "  HR",
    IT = "IT",
    FINANCE = "FINANCE",
    OPERATIONS = "OPERATIONS",
}