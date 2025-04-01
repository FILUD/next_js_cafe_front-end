import { Button, ConfigProvider } from "antd"
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

interface ButtonCustomProop {
    onClick: () => void;
    text?: string;
    h?: string;
    w?: string;
    font?: string;
    icon?: ReactNode; 
    iconPosition?: 'start' | 'end';
}


export const ButtonCustomBrown: React.FC<ButtonCustomProop> = ({ onClick, text, h = '40', w = '150', font = '14', icon, iconPosition = 'start' }) => {
    const { t, i18n } = useTranslation('common')
    const fontClass = i18n.language === 'la' ? 'font-notosanslao' : 'font-poppins';
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultBorderColor: '#FF902A',
                        defaultBg: '#2F2105',
                        colorText: '#FFFFFF',

                        textTextHoverColor: '#2F2105',
                        defaultHoverColor: '#2F2105',
                        defaultHoverBg: '#FF902A',
                        defaultHoverBorderColor: '#2F2105',

                        defaultActiveColor: '#FFFFFF',
                        defaultActiveBg: '#2F2105',
                        defaultActiveBorderColor: '#FFFFFF',
                    },
                },
            }}
        >
            <Button
                style={{
                    height: `${h}px`,
                    width: `${w}px`,
                    fontSize: `${font}px`,
                }}
                icon={icon}
                iconPosition={iconPosition}
                className={`rounded-[33px] items-center flex  font-bold duration-500 ${fontClass}`}
                onClick={onClick}
            >
                {text}
            </Button>
        </ConfigProvider>
    )
}