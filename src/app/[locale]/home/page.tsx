"use client";

import { NavbarLogin } from "@/components/navbar/Narbar_login";
import { CoffeeCupLoginPage } from "@/components/ui/CoffeeCupLoginPage";

export default function Home() {
  return (
    <div
      className="px-[6vw] bg-[url(/images/bg-image-coffee-bean.png)] h-[100vh] bg-cover bg-center bg-no-repeat"
    >
      <NavbarLogin />
      <main className="h-[93vh] overflow-y-auto scrollbar-hide">
        <section className="grid grid-cols-2 justify-items-center h-[93vh] border-2">
          <div className="items-center text-center">
            home
          </div>
          <div>
            <CoffeeCupLoginPage />
          </div>
        </section>
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