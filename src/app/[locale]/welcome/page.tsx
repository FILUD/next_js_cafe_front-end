"use client";

import { ButtonCustomBrown } from "@/components/button/ButtonCustomBrown";
import { NavbarLogin } from "@/components/navbar/Narbar_login";
import { CoffeeCupLoginPage } from "@/components/ui/CoffeeCupLoginPage";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="px-[6vw] bg-[url(/images/bg-image-coffee-bean.png)] h-[100vh] bg-cover bg-center bg-no-repeat"
    >
      <NavbarLogin />
      <main className="h-[93vh] overflow-y-auto scroll-smooth scrollbar-hide">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}

          className="items-center text-center text-[48px]  font-poppins">
          <figure className="flex gap-5 font-bold -mt-[30vh]">
            <p>
              Enjoy your
            </p>
            <p className="text-custom_orage">
              coffee
            </p>
          </figure>
          <figure className="font-bold flex">
            before your activity
          </figure>

          <figure className="text-[18px] text-left p-2 text-custom_light_gray">
            <p>Boost your productivity and build your mood </p>
            <p>with a glass of coffee in the morning</p>
          </figure>

          <figure className="flex gap-5 items-center my-5">
            <ButtonCustomBrown iconPosition="end" icon={
              <div className="bg-custom_orage rounded-full p-1 -mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
            } h="46" onClick={() => console.log("click")} text="Order now" />

            <p className="text-custom_orage text-[18px] cursor-pointer text-center hover:text-custom_brown duration-300">More menu</p>
          </figure>

        </motion.div>
        <div>
          <CoffeeCupLoginPage />
        </div>
        <section className="grid grid-cols-2 justify-items-center h-[93vh] border-2">
          <div>
            gg
          </div>
          <div>
            gg
          </div>
        </section>
      </main>
    </div>
  );
}