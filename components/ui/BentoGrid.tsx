"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBackground";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import Image from "next/image";

// import dynamic from 'next/dynamic';

// const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  useEffect(() => {}, [])
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText('dfsfyt@163.com');
    setCopied(true);
  }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4, 7, 29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className='w-full h-full absolute'>
            {img && (
                // <img
                <Image width={0} height={0}
                    src={img} 
                    alt={img}
                    className={cn(imgClassName, 'object-cover object-center h-full w-f;')}
                />
            )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
                // <img
                <Image width={0} height={0}
                    src={spareImg}
                    alt={spareImg}
                    className='object-cover object-center w-full h-full'
                />
            )}
        </div>
        { id === 6 && (
            <BackgroundGradientAnimation>
            </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10')}>
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">{description}</div>
          <div className="font-sans text-lg lg:text-2xl max-w-96 z-50">
            {title}
          </div>
        

          {
            id === 2 && <GlobeDemo />
          }

          {
            id === 3 && 
            <div className="h-full flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                {['React.js', 'Next.js', 'TypeScript'].map((item) => (
                  <span key={item} className="lg:py-4 lg:px-3 py-2 px-3 text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-4">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]" />
                {['Vue.js', 'AWS', 'MongoDB'].map((item) => (
                  <span key={item} className="lg:py-4 lg:px-3 py-2 px-3 text-xs opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                ))}
              </div>
            </div>
          }

          {
            id === 6 && (
              <div className="mt-5 relative">
                {/* <div className="absolute -bottom-5 right-0">
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }} />
                </div> */}
                <MagicButton 
                  title={copied ? "Emaile copied" : 'Copy My Email'}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClass="!bg-[#161a31"
                  handleClick={handleCopy}
                />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};
