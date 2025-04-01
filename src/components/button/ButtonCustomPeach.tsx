import { Button, ConfigProvider } from "antd"

interface ButtonCustomProop {
    onClick: () => void;
    text: string;
    h?: string;
    w?: string;
    font?: string;
}


export const ButtonCustomPeach: React.FC<ButtonCustomProop> = ({ onClick, text, h = '40', w = '150', font = '14' }) => {

    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        defaultBorderColor: '#FF902A',
                        defaultBg: '#F9D9AA',
                        colorText: '#2F2105',

                        textTextHoverColor: '#F9D9AA',
                        defaultHoverColor: '#F9D9AA',
                        defaultHoverBg: '#FF902A',
                        defaultHoverBorderColor: '#F9D9AA',

                        defaultActiveColor: '#2F2105',
                        defaultActiveBg: '#F9D9AA',
                        defaultActiveBorderColor: '#2F2105',
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
                className={`rounded-[33px] font-poppins font-bold duration-500`}
                onClick={onClick}
            >
                {text}
            </Button>
        </ConfigProvider>
    )
}