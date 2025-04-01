"use client";

import { ButtonCustomBrown } from "@/components/button/ButtonCustomBrown";
import { CoffeeCardMenu } from "@/components/card/CoffeeCardMenu";
import { NavbarLogin } from "@/components/navbar/Narbar_login";
import { CoffeeCupLoginPage } from "@/components/ui/CoffeeCupLoginPage";
import { Footer } from "@/components/ui/Footer";
import { animate, motion } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Home() {
const { t, i18n } = useTranslation('common')
  const [tapRecomendMenu, setTapRecomendMenu] = useState<'new' | 'popular'>('new')
  const [loginModal, setLoginModal] = useState<boolean>(false)
  const fontClass = i18n.language === 'la' ? 'font-notosanslao' : 'font-poppins';
  const handleLoginStateChange = (isOpen: boolean) => {
    setLoginModal(isOpen);
  };

  return (
    <div className={`px-[6vw] bg-custom_bg backdrop-blur-lg bg-[url(/images/bg-image-coffee-bean.png)] h-[100vh] bg-cover bg-center bg-no-repeat ${fontClass}`}>
      <NavbarLogin
        OpenLogin={loginModal}
        onLoginStateChange={handleLoginStateChange}
      />

      <main className="h-[93vh] grid grid-cols-2 justify-center justify-items-center text-center items-center overflow-y-auto w-full scroll-smooth scrollbar-hide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=" h-[93vh] flex flex-col text-left justify-center  text-[48px] w-full">
          <figure className="flex gap-5 font-bold ">
            <p>
              {t('enjoy your')}
            </p>
            <p className="text-custom_orage">
              {t('coffee')}
            </p>
          </figure>
          <figure className="font-bold flex">
            {t('before your activity')}
          </figure>

          <figure className="text-[18px] text-left p-2 text-custom_light_gray">
            <p>{t('boost your productivity and build your mood')}</p>
            <p>{t('with a glass of coffee in the morning')}</p>
          </figure>

          <figure className="flex gap-5 items-center my-5">
            <ButtonCustomBrown iconPosition="end" icon={
              <div className="bg-custom_orage rounded-full p-1 -mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            } h="46" onClick={() => setLoginModal(true)} text={t('order now')} />

            <p className="text-custom_orage text-[18px] cursor-pointer text-center hover:text-custom_brown duration-300">{t('more menu')}</p>
          </figure>
        </motion.div>

        <div className="h-[93vh] flex items-center justify-center justify-items-center">
          <CoffeeCupLoginPage />
        </div>
        <div className="flex w-full text-[32px] font-bold pl-[8vw] gap-10 text-center py-10">
          <p className={`${tapRecomendMenu == 'popular' && 'underline underline-offset-8 decoration-custom_orage'} duration-200 txet-center cursor-pointer`}
            onClick={() => setTapRecomendMenu('popular')}
          >
            {t('popular')}
          </p>
          <p className={`${tapRecomendMenu == 'new' && 'underline underline-offset-8 decoration-custom_orage'} duration-200 txet-center cursor-pointer`}
            onClick={() => setTapRecomendMenu('new')}
          >
            {t('new')}
          </p>
        </div>
        <section className="w-full col-span-2 mt-24 justify-items-center h-[93vh]">
          <div className=" bg-custom_peach rounded-[44px] border-2 pb-24 px-24 ">
            {tapRecomendMenu == 'new' &&
              <motion.figure
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-3 gap-[5vw] -mt-24">
                <CoffeeCardMenu onBuy={() => setLoginModal(true)} />
                <CoffeeCardMenu onBuy={() => setLoginModal(true)} />
                <CoffeeCardMenu onBuy={() => setLoginModal(true)} />
              </motion.figure>}

            {tapRecomendMenu == 'popular' &&
              <motion.figure
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-3 gap-[5vw] -mt-24">
                <CoffeeCardMenu onBuy={() => setLoginModal(true)} />
                <CoffeeCardMenu onBuy={() => setLoginModal(true)} />
                <CoffeeCardMenu onBuy={() => setLoginModal(true)} />
              </motion.figure>}
          </div>
          <div className="my-[20vh] py-[10vh] text-[32px] font-bold bg-[#FFFFFFCC] rounded-[33px] w-full">

            <p className="text-left pl-20 flex gap-3">{t('how to use delivery')}<p className="underline underline-offset-8 decoration-custom_orage">service</p></p>
            <figure className="grid grid-cols-3 py-[10vh]">
              <span className="flex flex-col justify-center items-center">
                <img className="w-[160px] h-[160px]" src="/icons/pick-cup.png" />
                <p className=" font-bold text-[24px]">{t('choose your coffee')}</p>
                <p className="text-[18px]">{t('there are 20+ coffees for you')}</p>
              </span>
              <span className="flex flex-col justify-center items-center">
                <img className="w-[160px] h-[160px]" src="/icons/food-truck.png" />
                <p className="font-bold text-[24px]">{t('we delivery it to you')}</p>
                <p className="text-[18px]">{t('choose delivery service')}</p>
              </span>
              <span className="flex flex-col justify-center items-center">
                <img className="w-[160px] h-[160px]" src="/icons/coffee-cup.png" />
                <p className="font-bold text-[24px]">{t('enjoy your coffee')}</p>
                <p className="text-[18px]">{t('enjoy')}</p>
              </span>
            </figure>
          </div>
          <Footer />
        </section>
      </main>
    </div>
  );
}