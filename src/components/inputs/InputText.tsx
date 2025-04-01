import React from 'react';
import { ConfigProvider, Flex, Input } from 'antd';

interface InputTextProps {
    h?: string;
    w?: string;
    font?: string;
    title: string;
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
    className?: string
}

export const InputText: React.FC<InputTextProps> = ({
    title,
    h = '45px',
    w = '150px',
    font = '14px',
    placeholder,
    value,
    onChange,
    className
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <Flex vertical gap={8}>
            <p style={{ fontSize: `${font}`, margin: 0 }}>{title}</p>
            <ConfigProvider
                theme={{
                    components: {
                        Input: {
                            activeBg: '#',
                            activeBorderColor: '#FF902A'
                        },
                    },
                }}
            >
                <Input
                    style={{
                        height: `${h}`,
                        width: `${w}`,
                        fontSize: `${font}`,
                    }}
                    className={`border rounded-[20px] border-custom_brown ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                />
            </ConfigProvider>
        </Flex>
    );
};
