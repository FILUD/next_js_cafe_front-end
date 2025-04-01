import { Button } from "antd"
import { ButtonCustomBrown } from "../button/ButtonCustomBrown"


interface CoffeeCardMenuProop {
    imgURL?: string,
    name?: string,
    rate?: string,
    orderCount?: string,
    cold?: boolean,
    hot?: boolean,
    onBuy: () => void 
}

export const CoffeeCardMenu: React.FC<CoffeeCardMenuProop> = ({
    onBuy,
    imgURL = '/images/default-image.webp',
    cold = true,
    hot = true,
    name = 'Hot Americano',
    orderCount = '180K',
    rate = '5.0' }) => {
    return (
        <main className="flex flex-col bg-white p-[20px] pt-[35px] shadow-2xl rounded-[20px] ring-8 ring-[#FFFFFFAA]">
            <div className="bg-white -mb-[45px] rounded-[33px] ml-3 ring-4 ring-[#FFFFFFAA] z-20 w-fit px-3 py-0.5">
                <p className="text-start flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#FF902A" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <p className="font-bold">{rate}</p>
                </p>
            </div>
            <div>
                <img className="w-[300px] h-[230px] rounded-[10px]" src={imgURL} alt="" />
            </div>

            <main>
                <div className="flex font-poppins font-bold py-3 p-1 justify-between">
                    <p className="">{name}</p>
                    <p>{orderCount}</p>
                </div>
                <div className="flex justify-between items-center">
                    <figure className="flex gap-5 px-1">
                        {cold && <p className=" border-2 h-fit border-custom_orage text-custom_orage  cursor-pointer p-1 px-3 rounded-[10px]">Cold</p>}
                        {hot && <p className=" border-2 h-fit border-custom_orage text-custom_orage cursor-pointer p-1 px-3 rounded-[10px]">Hot</p>}
                    </figure>
                    <figure>
                        <ButtonCustomBrown iconPosition="end" icon={
                            <div className="bg-custom_orage rounded-full p-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                </svg>
                            </div>
                        } h="40" w="40" onClick={onBuy} />
                    </figure>
                </div>
            </main>
        </main>
    )
}