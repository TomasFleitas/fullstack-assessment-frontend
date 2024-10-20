import { Modal, Form, Input, Select, DatePicker } from 'antd';
import { employeeApi } from 'api/employee';
import { getAllKey } from 'api/employee/emploee.keys';
import dayjs from 'dayjs';
import { useDepartments } from 'hook/useDepartments';
import { useMutation } from 'react-query';
import { queryClient } from 'utilities/const';
import { disableFutureDates, showNoti } from 'utilities/tools';

const { Option } = Select;

type CreateEditEmployeeModalProps = {
  onCancel: () => void;
  open: boolean;
  employee?: Employee;
};

export const CreateEditEmployeeModal = ({
  onCancel,
  open,
  employee,
}: CreateEditEmployeeModalProps) => {
  const isEditing = !!employee;
  const [form] = Form.useForm<CreateEmployee>();

  const { departments } = useDepartments();

  const { mutate: createEmployee, isLoading: isCreating } = useMutation({
    ...employeeApi.create(),
    onSuccess: () => {
      queryClient.refetchQueries(getAllKey);
      showNoti('success', 'Employee successfully created.');
      form.resetFields();
      onCancel();
    },
    onError: () => showNoti('error', 'Error creating employee.'),
  });

  const { mutate: updateEmployee, isLoading: isUpdating } = useMutation({
    ...employeeApi.update(),
    onSuccess: () => {
      queryClient.refetchQueries(getAllKey);
      showNoti('success', 'Employee successfully updated.');
      form.resetFields();
      onCancel();
    },
    onError: () => showNoti('error', 'Error updating employee.'),
  });

  const handleCreate = () => {
    form.validateFields().then(values => {
      values.hireDate = values.hireDate
        ? dayjs(values.hireDate).format('YYYY-MM-DD')
        : null;
      isEditing
        ? updateEmployee({ id: employee.id, data: values })
        : createEmployee(values);
    });
  };

  const initialValues = {
    firstName: employee?.firstName,
    lastName: employee?.lastName,
    hireDate: employee?.hireDate ? dayjs(employee.hireDate) : undefined,
    departmentId: employee?.department?.id,
    phone: employee?.phone,
    address: employee?.address,
  };

  return (
    <Modal
      title={
        isEditing
          ? `Update ${employee.firstName} ${employee.lastName}`
          : 'Create a New Employee'
      }
      okText={isEditing ? 'Update' : 'Create'}
      open={open}
      cancelText="Cancel"
      onCancel={onCancel}
      confirmLoading={isCreating || isUpdating}
      onOk={handleCreate}
    >
      <Form
        form={form}
        layout="vertical"
        name={`${isEditing ? 'edit' + employee.id : 'create'}_employee_form`}
        initialValues={initialValues}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            { required: true, message: 'Please enter the first name' },
            { max: 50, message: 'First name cannot exceed 50 characters' },
          ]}
        >
          <Input maxLength={50} showCount placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[
            { required: true, message: 'Please enter the last name' },
            { max: 50, message: 'Last name cannot exceed 50 characters' },
          ]}
        >
          <Input maxLength={50} showCount placeholder="Last Name" />
        </Form.Item>
        <Form.Item
          name="hireDate"
          label="Hire Date"
          rules={[{ required: true, message: 'Please select the hire date' }]}
        >
          <DatePicker
            disabledDate={disableFutureDates}
            style={{ width: '100%' }}
          />
        </Form.Item>
        <Form.Item
          name="departmentId"
          label="Department"
          rules={[{ required: true, message: 'Please select the department' }]}
        >
          <Select placeholder="Select a department">
            {departments.map(department => (
              <Option key={department.id} value={department.id}>
                {department.name}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[
            {
              required: true,
              message: 'Please enter a valid phone number',
            },
          ]}
        >
          <Input placeholder="+54911111111" maxLength={20} showCount />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please enter the address' }]}
        >
          <Input maxLength={255} placeholder="Street 123" />
        </Form.Item>
      </Form>
    </Modal>
  );
};
