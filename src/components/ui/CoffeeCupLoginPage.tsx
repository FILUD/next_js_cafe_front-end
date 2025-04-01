'use client'

import { motion } from "framer-motion"

interface CoffeeCupLoginPageProop {
    menuName?: string,
    rate?: string,
    orderCount?: string
}


export const CoffeeCupLoginPage: React.FC<CoffeeCupLoginPageProop> = ({
    menuName = 'Cappuccino',
    orderCount = '18K',
    rate = '4.8' }) => {
        
    return (
        <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="bg-custom_brown flex flex-col w-[416px] z-10 bg-[url(/images/cup-shadow.png)] bg-cover bg-center bg-no-repeat rounded-full h-[416px] ">
            <div className="rounded-[33px] ring-8 ring-[#FFFFFFAA] z-30 w-fit px-5 py-2 bg-white"><p className="text-[24px] font-bold">{menuName}</p></div>
            <img className=" z-20 w-[350.11px] -mt-[50px] ml-[40px] h-[350.11px]" src="/images/images-coffee.png" alt="Coffee" />
            <div className="rounded-[33px] -mt-[270px] -mr-[90px] ml-[10px] justify-self-end text-end justify-items-end z-30">
                <p className="bg-white rounded-[33px]  text-[24px] ring-8 ring-[#FFFFFFAA]  px-10 py-2 font-bold flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FF902A" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    {rate}</p>
            </div>
            <div className="rounded-[33px] mt-[180px] ring-8 ring-[#FFFFFFAA] z-30 w-fit px-10 py-2 bg-white"><p className="text-[24px] font-bold">{orderCount}</p></div>
        </motion.main>
    )
}