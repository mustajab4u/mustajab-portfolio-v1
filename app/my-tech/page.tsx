'use client';
import { motion } from 'framer-motion';
import { HeroHighlight, Highlight } from '../../components/ui/TechHighlight';
import { HoverEffect } from '../../components/ui/CardHoverEffect';

const MyTech = () => {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Discover My Full Skill Set{' '}
        <Highlight className="text-black dark:text-white">
          Showcasing Excellence in Every Aspect
        </Highlight>
      </motion.h1>
      <div className="px-5 md:px-16 lg:px-20">
        <HoverEffect
          items={[
            {
              title: 'HTML',
              description:
                'The standard markup language for creating web pages.',
              imgUrl: '/html.svg',
            },
            {
              title: 'CSS',
              description:
                'The style sheet language used for describing the look and formatting of a document written in HTML.',
              imgUrl: '/css.svg',
            },
            {
              title: 'TailwindCSS',
              description:
                'A utility-first CSS framework for quickly building custom user interfaces.',
              imgUrl: '/tail.svg',
            },
            {
              title: 'JavaScript',
              description:
                'A programming language that allows you to implement complex features on web pages.',
              imgUrl: '/js.svg',
            },
            {
              title: 'ReactJS',
              description: 'A JavaScript library for building user interfaces.',
              imgUrl: '/re.svg',
            },
            {
              title: 'NextJS',
              description:
                'A React framework for building fast and user-friendly static and dynamic websites and web applications.',
              imgUrl: '/next.svg',
            },
          ]}
        />
        <p className="text-center mb-16 md:tracking-wider text-sm md:text-lg lg:text-2xl">
          I&apos;m a skilled web developer.
        </p>
      </div>
    </HeroHighlight>
  );
};

export default MyTech;
