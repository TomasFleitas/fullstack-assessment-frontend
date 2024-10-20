interface Department {
  id: number;
  name: string;
  employees?: Employee[];
}

interface DepartmentHistory {
  id: number;
  department: Department;
  changedAt: string;
}
