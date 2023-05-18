import { Button, Form, Input, Typography } from 'antd';

import './ForgotPasswordPage.scss';
import { RoutePaths } from 'src/routes/routes-constants';

const { Title, Text, Link } = Typography;

const ForgotPasswordPage = () => {
  return (
    <div className="ForgotPasswordPage">
      <div className="ForgotPasswordPage-container">
        <Title className="ForgotPasswordPage-title">Meetmax</Title>
        <Text className="ForgotPasswordPage-quote">Enter your email to get verification code</Text>
        <Form className="ForgotPasswordPage-form">
          <Form.Item name="email">
            <Input size="large" placeholder="Email address" />
          </Form.Item>
          <Form.Item>
            <Button className="ForgotPasswordPage-form__submitButton" type="primary" size="large" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className="ForgotPasswordPage-footer">
          <Link href={RoutePaths.LOGIN}>Sign In</Link>
          <Link href={RoutePaths.REGISTER}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
