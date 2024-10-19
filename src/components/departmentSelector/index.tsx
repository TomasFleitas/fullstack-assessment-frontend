import { Button, Select } from 'antd';
import style from './index.module.scss';
import { useDepartments } from 'hook/useDepartments';
import { useState } from 'react';

const { Option } = Select;

type DepartmentSelectorProps = {
  defaultValue?: number;
  onUpdate: (value: number) => void;
};

export const DepartmentSelector = ({
  defaultValue,
  onUpdate,
}: DepartmentSelectorProps) => {
  const { departments } = useDepartments();
  const [selected, setSelected] = useState<number>();

  const isDisable = !selected || defaultValue === selected;

  const innerOnUpdate = () => onUpdate(selected);

  return (
    <div className={style.selector}>
      <h4>Update department</h4>
      <div className={style.container}>
        <Select
          value={selected || defaultValue}
          style={{ width: 200 }}
          onChange={value => setSelected(value)}
        >
          {departments.map(dep => (
            <Option key={dep.id} value={dep.id}>
              {dep.name}
            </Option>
          ))}
        </Select>
        <Button disabled={isDisable} onClick={innerOnUpdate}>
          Update
        </Button>
      </div>
    </div>
  );
};
