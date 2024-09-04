"use client";
import { FiDownload } from "react-icons/fi";
import React from "react";

//components
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const handleDownload = () => {
    // cv dosyasının bulunduğu URL
    const url = "https://www.myportfolio.safewebsite.store/Cv.pdf";
    // Yeni bir link (a) elementi oluşturup indirici gibi davranmasını sağlıyoruz
    const link = document.createElement("a");
    link.href = url;
    link.download = "Hasan_Hincal_CV.pdf"; // Dosyanın ismi burada değiştirilebilir
    link.click(); // Linke tıklama işlemini tetikliyoruz
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Hasan Hınçal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel and crafting elegant dijital experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* button & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
