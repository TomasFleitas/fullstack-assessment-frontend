import { Form, Input, Button, Card, Row, Col, Checkbox } from 'antd';
import { useSession } from 'context/sessionContext';
import style from './index.module.scss';

const LoginPage = () => {
  const { login } = useSession();

  const onFinish = (values: any) => {
    const sessionData = {
      user: { id: 1, name: 'Tomás Fleitas', email: 'test@test.com' },
    };
    const persistSession = values.remember;

    login(sessionData, persistSession);
  };

  return (
    <div className={style['login-page']}>
      <Card className={style['login-card']}>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your email!',
                type: 'email',
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
