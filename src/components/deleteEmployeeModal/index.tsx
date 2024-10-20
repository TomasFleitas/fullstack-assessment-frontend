import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined, CloseOutlined } from '@ant-design/icons';
import { employeeApi } from 'api/employee';
import { showNoti } from 'utilities/tools';
import { useMutation } from 'react-query';
import { queryClient } from 'utilities/const';
import { getAllKey } from 'api/employee/emploee.keys';

const { confirm } = Modal;

type DeleteEmployeeProps = {
  employee: Employee;
};

export const DeleteEmployeeModal = ({ employee }: DeleteEmployeeProps) => {
  const { mutate, isLoading } = useMutation({
    ...employeeApi.deleteEmployee(),
    onSuccess: () => {
      queryClient.refetchQueries(getAllKey);
      showNoti('success', 'Employee successfully deleted.');
    },
    onError: () => showNoti('error', 'Error deleting employee.'),
  });

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure you want to delete this employee?',
      icon: <ExclamationCircleOutlined />,
      content: `This action cannot be undone. You are about to delete ${employee.firstName} ${employee.lastName}.`,
      okText: 'Yes, Delete',
      okType: 'danger',
      cancelText: 'No, Cancel',
      onOk: () => mutate(employee.id),
    });
  };

  return (
    <Button loading={isLoading} type="text" danger onClick={showDeleteConfirm}>
      <CloseOutlined />
    </Button>
  );
};
