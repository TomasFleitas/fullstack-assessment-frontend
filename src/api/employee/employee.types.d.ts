interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  hireDate: string;
  department: Department;
  status: EmployeeStatusEnum;
  phone: string;
  photoUrl: string;
  address: string;
  departmentHistory?: DepartmentHistory[];
}

interface CreateEmployee {
  firstName: string;
  lastName: string;
  hireDate: string;
  departmentId: number;
  phone?: string;
  address: string;
}

interface UpdateEmployee {
  firstName?: string;
  lastName?: string;
  hireDate?: string;
  departmentId?: number;
  phone?: string;
  address?: string;
}
