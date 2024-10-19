import { Modal, Form, Input, Select, DatePicker } from 'antd';
import { CreateEmployee, employeeApi, getAllKey } from 'api/employee';
import dayjs from 'dayjs';
import { useDepartments } from 'hook/useDepartments';
import { useMutation } from 'react-query';
import { queryClient } from 'utilities/const';
import { showNoti } from 'utilities/tools';

const { Option } = Select;

type CreateEmployeeModalProps = {
  onCancel: () => void;
  open: boolean;
};

export const CreateEmployeeModal = ({
  onCancel,
  open,
}: CreateEmployeeModalProps) => {
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

  const handleCreate = () => {
    form.validateFields().then(values => {
      values.hireDate = values.hireDate
        ? dayjs(values.hireDate).format('YYYY-MM-DD')
        : null;
      createEmployee(values);
    });
  };

  return (
    <Modal
      title="Create a New Employee"
      okText="Create"
      open={open}
      cancelText="Cancel"
      onCancel={onCancel}
      confirmLoading={isCreating}
      onOk={handleCreate}
    >
      <Form
        form={form}
        layout="vertical"
        name="create_employee_form"
        initialValues={{
          firstName: '',
          lastName: '',
          hireDate: null,
          departmentId: undefined,
          phone: '',
          address: '',
        }}
      >
        <Form.Item
          name="firstName"
          label="First Name"
          rules={[{ required: true, message: 'Please enter the first name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="lastName"
          label="Last Name"
          rules={[{ required: true, message: 'Please enter the last name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="hireDate"
          label="Hire Date"
          rules={[{ required: true, message: 'Please select the hire date' }]}
        >
          <DatePicker style={{ width: '100%' }} />
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
            {
              pattern: /^\+?[1-9]\d{1,14}$/,
              message: 'Please enter a valid international phone number',
            },
          ]}
        >
          <Input placeholder="+54911111111" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: 'Please enter the address' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};
