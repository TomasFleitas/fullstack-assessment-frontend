import { Breadcrumb } from 'antd';
import { HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { ROUTE } from 'routers/routeData';
import style from './index.module.scss';

export const BreadCrumb = () => {
  return (
    <div className={style['bread-crumb']}>
      <Breadcrumb
        items={[
          {
            href: ROUTE.employeeList,
            title: <HomeOutlined />,
          },
          {
            href: ROUTE.employeeList,
            title: (
              <>
                <UsergroupAddOutlined />
                <span>List of employees</span>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};
