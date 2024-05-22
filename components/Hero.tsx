import { FaLocationArrow } from 'react-icons/fa';
import { HeroSpotlight } from './subComponents';
import { MagicButton, TextGenerateEffect } from './ui';
import { FcAbout } from 'react-icons/fc';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <HeroSpotlight />
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] flex items-center justify-center absolute inset-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
      <div className="flex justify-center relative my-20 z-10 ">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my portfolio 🎉
          </h2>
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="A Web Developer Who Loves His Work and Would Enjoy Working with You"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Mustajab based in Faisalabad
          </p>
          <div className="flex items-center gap-3 flex-col md:flex-row mt-4 md:mt-2">
            <a href="#projects" className="w-full">
              <MagicButton
                title="Show my Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            {/* <Link href={'/about-me'} className="w-full">
              <MagicButton
                title="All About Me"
                icon={<FcAbout />}
                position="left"
              />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
