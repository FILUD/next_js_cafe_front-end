"use client";

import { ConfigProvider, Form, FormProps, message, Modal, Tabs, TabsProps } from "antd"
import { useState } from "react"
import { InputText } from "../inputs/InputText";
import { motion } from "framer-motion";
import { ButtonCustomPeach } from "../button/ButtonCustomPeach";
import { ButtonCustomBrown } from "../button/ButtonCustomBrown";
import { LoginRequst } from "@/services/LoginRegisterSv";
import { SuccessModal } from "../notification/SuccessModal";
import Cookies from "js-cookie";

interface LoginRegisterProop {
    open: boolean,
    onClose: () => void;
}

type FieldLoginType = {
    email?: string;
    password?: string;
};

type FieldRegisterType = {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: string;
};

export const LoginRegister: React.FC<LoginRegisterProop> = ({ open, onClose }) => {
    const [items, setItems] = useState<TabsProps['items']>([
        {
            label: <p className="font-poppins text-custom_brown">Login</p>,
            key: '1',
            children: <LoginContent onClose={onClose} />,
        },
        {
            label: <p className="font-poppins text-custom_brown">Register</p>,
            key: '2',
            children: <RegisterContent onClose={onClose} />,
        },

    ]);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Tabs: {
                        itemActiveColor: '#FF902A'
                    },
                    Modal: {
                        contentBg: '#F6EBDA'
                    }
                },
            }}
        >
            <Modal
                open={open}
                footer={false}
                onCancel={onClose}
                maskClosable={false}
                width={600}
            >
                <main>
                    <Tabs
                        size={'large'}
                        centered
                        type="card"
                        style={{ marginBottom: 32 }}
                        items={items}
                    />
                </main>
            </Modal>
        </ConfigProvider>
    )
}


interface LoginContentProps {
    onClose: () => void;
}


const LoginContent: React.FC<LoginContentProps> = ({ onClose }) => {
    const [successLogin, setSussessLogin] = useState<boolean>(false);
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldLoginType>['onFinish'] = async (values) => {
        if (!values?.email || !values?.password) {
            console.error("Email or password is missing");
            return;
        }
        await handleLogin(values.email, values.password);
    };

    const onFinishFailed: FormProps<FieldLoginType>['onFinishFailed'] = (errorInfo) => {
        message.info('pls enter all data');
    };

    const handleLogin = async (email: string, password: string) => {
        try {
            onClose();
            const response = await LoginRequst(email, password);
            if (response.data.message == 'Login successful') {
                setSussessLogin(true);
                setTimeout(() => {
                    setSussessLogin(false);
                }, 1500);


                Cookies.set('token', response.data.token, { expires: 1 });


                localStorage.setItem('user', JSON.stringify(response.data.user));
                localStorage.setItem('jwt', JSON.stringify({
                    userId: response.data.user.member_id,
                    email: response.data.user.email,
                    userName: response.data.user.first_name,
                    userLastName: response.data.user.last_name,
                    iat: response.data.token.iat,
                    exp: response.data.token.exp
                }));

                // รีเฟรชหน้าเว็บ
                window.location.reload();
            }
            console.log(response.data.message);
        } catch (error: any) {
            console.log(error);
        }
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="px-7"
        >
            <Form
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="flex flex-col gap-7"
            >
                <p className="text-[20px] font-bold text-custom_brown font-poppins">Login</p>

                {/* Email Field */}
                <Form.Item<FieldLoginType>
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' },
                    ]}
                >
                    <InputText placeholder="Email" w="100%" title="Email" />
                </Form.Item>

                {/* Password Field */}
                <Form.Item<FieldLoginType>
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                   <InputText placeholder="Password" w="100%" title="Password" />
                </Form.Item>

                <div className="flex justify-center pt-5 gap-[1vw]">
                    <ButtonCustomPeach onClick={onClose} text="Cancel" />
                    <ButtonCustomBrown onClick={() => form.submit()} text="Login" />
                </div>
            </Form>
            <SuccessModal open={successLogin} />
        </motion.main>
    );
};

interface RegisterContentProps {
    onClose: () => void;
}

const RegisterContent: React.FC<RegisterContentProps> = ({ onClose }) => {
    const [successRegister, setSuccessRegister] = useState<boolean>(false);
    const [form] = Form.useForm();

    const onFinish: FormProps<FieldRegisterType>['onFinish'] = async (values) => {
        if (!values?.first_name || !values?.last_name || !values?.email || !values?.password) {
            console.error("Registration data is incomplete");
            return;
        }
        await handleRegister(values.first_name, values.last_name, values.email, values.password);
    };

    const onFinishFailed: FormProps<FieldRegisterType>['onFinishFailed'] = (errorInfo) => {
        message.info('Please enter all required data');
    };

    const handleRegister = async (first_name: string, last_name: string, email: string, password: string) => {
        // try {
        //     onClose();
        //     const response = await RegisterRequest(first_name, last_name, email, password);
        //     if (response.data.message === 'Registration successful') {
        //         setSuccessRegister(true);
        //         setTimeout(() => {
        //             setSuccessRegister(false);
        //         }, 1500);
                
        //         // อาจจะเพิ่มการ login อัตโนมัติหลังจากลงทะเบียนสำเร็จ หรือแค่แสดง message ให้ผู้ใช้ทราบ
        //         message.success('Registration successful! Please login.');
        //     }
        //     console.log(response.data.message);
        // } catch (error: any) {
        //     console.log(error);
        //     message.error(error.response?.data?.message || 'Registration failed');
        // }
    };

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-7">
            <Form 
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                className="flex flex-col gap-7 font-poppins"
            >
                <p className="text-[20px] font-bold text-custom_brown font-poppins">Register</p>
                
                <div className="flex gap-8">
                    <Form.Item<FieldRegisterType>
                        name="first_name"
                        className="mb-0 w-full"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <InputText placeholder="First name" w="100%" title="First name" />
                    </Form.Item>
                    
                    <Form.Item<FieldRegisterType>
                        name="last_name"
                        className="mb-0 w-full"
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                        <InputText placeholder="Last name" w="100%" title="Last name" />
                    </Form.Item>
                </div>

                <Form.Item<FieldRegisterType>
                    name="email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email!' },
                    ]}
                >
                    <InputText placeholder="Email" w="100%" title="Email" />
                </Form.Item>
                
                <Form.Item<FieldRegisterType>
                    name="password"
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        { min: 6, message: 'Password must be at least 6 characters!' }
                    ]}
                >
                    <InputText placeholder="Password" w="100%" title="Password" />
                </Form.Item>

                <div className="flex justify-center pt-5 gap-[1vw]">
                    <ButtonCustomPeach onClick={onClose} text="Cancel" />
                    <ButtonCustomBrown onClick={() => form.submit()} text="Register" />
                </div>
            </Form>
            <SuccessModal open={successRegister} />
        </motion.main>
    )
}