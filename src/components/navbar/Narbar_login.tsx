import { motion } from "framer-motion";
import { ButtonCustomBrown } from "../button/ButtonCustomBrown";
import { LoginRegister } from "../modals/LoginRegisterModal";
import React, { useState, useEffect } from "react";
import LanguageSwitcher from "../button/LanguageSwitcher";
import Link from "next/link";
import Cookies from "js-cookie"; // นำเข้า js-cookie
import { Popover } from "antd";
import { useTranslation } from "react-i18next";

interface NavbarLoginProop {
    OpenLogin?: boolean;
    onLoginStateChange?: (isOpen: boolean) => void;
}

export const NavbarLogin: React.FC<NavbarLoginProop> = ({ OpenLogin, onLoginStateChange }) => {
    const [modalLogin, setModalLogin] = useState<boolean>(OpenLogin || false);
    const lang = localStorage.getItem('language');
    const [userInfo, setUserInfo] = useState<any>(null);
    const [openProfile, setOpenProfile] = useState(false);
    const { t, i18n } = useTranslation('common');
    const fontClass = i18n.language === 'la' ? 'font-notosanslao' : 'font-poppins';


    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setUserInfo(JSON.parse(user));
        }
    }, []);

    useEffect(() => {
        if (OpenLogin !== undefined) {
            setModalLogin(OpenLogin);
        }
    }, [OpenLogin]);

    const handleModalChange = (isOpen: boolean) => {
        setModalLogin(isOpen);
        if (onLoginStateChange) {
            onLoginStateChange(isOpen);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('jwt');
        Cookies.remove('token');
        setUserInfo(null);
    };

    const handleOpenChange = (newOpen: boolean) => {
        setOpenProfile(newOpen);
    };
    const hide = () => {
        setOpenProfile(false);
    };

    const PopoverContent = () => {
        return (
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className={`flex flex-col gap-2 justify-center ${fontClass}`}
            >
                <span className="flex flex-col hover:bg-custom_peach cursor-pointer duration-500 rounded-[10px] p-2 items-center w-full justify-center">
                    {userInfo.profile_image ?
                        <img className="border-2 mx-10 border-custom_orage w-[250px] h-[250px] rounded-full" src="" alt="Profile" />
                        : <img className="border-2 w-[250px] mx-10 my-2 border-custom_orage h-[250px] rounded-full" src="/images/profile-null.jpg" />}
                    <p className="font-poppins text-[24px] font-bold">{userInfo.first_name} {userInfo.last_name}</p>
                </span>
                <span className="bg-custom_bg flex rounded-[22px] gap-2 text-[18px] font-bold flex-col">
                    <figure className="flex gap-2 items-center rounded-t-[22px] p-1 pl-3 cursor-pointer hover:bg-custom_peach duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <p>{t('my profile')}</p>
                    </figure>
                    <figure className="flex gap-2 items-center p-1 pl-3 cursor-pointer hover:bg-custom_peach duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                        </svg>
                        <p>{t('history')}</p>
                    </figure>
                    <figure className="flex gap-2 items-center rounded-b-[22px] p-1 pl-3 cursor-pointer hover:bg-custom_peach duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
                        </svg>
                        <p>{t('my bookmark')}</p>
                    </figure>
                </span>
                <span className="w-full flex justify-center py-5">
                    <ButtonCustomBrown onClick={handleLogout} h="45" w="250" text="Logout" icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mt-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                        </svg>
                    } />
                </span>
            </motion.div>
        );
    };

    return (
        <motion.main
            initial={{ opacity: 0, y: -90 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={`flex w-full justify-between z-50 h-[7vh] items-center ${fontClass}`}>
            <LoginRegister
                onClose={() => handleModalChange(false)}
                open={modalLogin}
            />
            <div>
                <img src="/logos/logo_coffe.svg" alt="Logo" />
            </div>
            <div className="flex gap-[2vw] text-black text-[18px]">
                <p className="cursor-pointer hover:text-custom_peach duration-500">
                    <Link href={`/${lang ?? 'en'}/home`}>{t('home')}</Link>
                </p>
                <p className="cursor-pointer hover:text-custom_peach duration-500">
                    <Link href={`/${lang ?? 'en'}/contact`}>{t('coffee')}</Link>
                </p>
                <p className="cursor-pointer hover:text-custom_peach duration-500">
                    <Link href={`/${lang ?? 'en'}/contact`}>{t('bakery')}</Link>
                </p>
                <p className="cursor-pointer hover:text-custom_peach duration-500">
                    <Link href={`/${lang ?? 'en'}/about`}>{t('about')}</Link>
                </p>
            </div>
            <div className="flex gap-5 items-center">
                <LanguageSwitcher />

                {userInfo ? (
                    <Popover
                        content={
                           <PopoverContent />
                        }
                        placement="bottomLeft"
                        trigger="click"
                        open={openProfile}
                        onOpenChange={handleOpenChange}
                    >
                        <div className="flex gap-5 cursor-pointer items-center">
                            {userInfo.profile_image ?
                                <img className="border-2 border-custom_peach rounded-full w-[45px] h-[45px]" src="" alt="Profile" />
                                : <img className="border-2 border-custom_peach rounded-full w-[45px] h-[45px]" src="/images/profile-null.jpg" />}
                            <p>{userInfo.first_name}</p>
                        </div>
                    </Popover>

                ) : (
                    <ButtonCustomBrown onClick={() => handleModalChange(true)} text="Sign in" />
                )}
            </div>
        </motion.main>
    );
};