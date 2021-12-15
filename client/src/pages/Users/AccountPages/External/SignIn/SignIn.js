import React from 'react';
import { Layout, Tabs } from 'antd';
import  { Redirect } from 'react-router-dom';
import Logo from '../../../../../assets/img/png/logo.png'; 
import LoginForm from '../../../../../components/Users/LoginForm/LoginForm';

import './SignIn.scss';


export default function  SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;

return (
    <Layout className="sign-in">
        <Content className="sign-in__content">
            <h1 className="sign-in__content-logo">
                <img src={Logo} alt="logo" centered/>
            </h1>
            <div className="sign-in__content-tabs">
            <Tabs type="card" centered>
                <TabPane tab={<span>Ingresar</span>} key="1">
                    <LoginForm />
                </TabPane>
                <TabPane tab={<span>Registrarse</span>} key="2">
                    {/* <RegisterForm />  */}
                </TabPane>
            </Tabs>

            </div>
        </Content>
    </Layout>
)
}