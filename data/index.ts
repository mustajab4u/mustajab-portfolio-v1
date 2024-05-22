export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: 'I constantly try to improve',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
    url:'/my-tech'
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building amazing clones of popular websites',
    description: 'Apple, Youtube etc',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Quran',
    des: 'Learn Quran now just by visiting our quran project',
    img: '/p1.png',
    iconLists: ['/re.svg', '/tail.svg'],
    link: 'https://mustajab-quran.vercel.app/',
  },
  {
    id: 2,
    title: 'Ecom Reactify',
    des: 'Full Modern and Functional E-commress Website',
    img: '/p2.png',
    iconLists: ['/re.svg', '/tail.svg','/axios.svg','/stripe.svg'],
    link: 'https://mustajab-ecomreactify.vercel.app/',
  },
  {
    id: 3,
    title: 'Ai Brain',
    des: 'An Amazing Modern Frontend Website.',
    img: '/p3.png',
    iconLists: ['/re.svg', '/tail.svg'],
    link: 'https://aibrainm.vercel.app/',
  },
  {
    id: 4,
    title: 'Mustajab Portfolio',
    des: 'Yes, This is a modern and simple portfolio website and one of my favorite website',
    img: '/p4.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/fm.svg'],
    link: '/',
  },
  {
    id: 5,
    title: 'Liquid Culture',
    des: 'Liquid Culture is an amazing best drinks online shop.',
    img: '/p5.png',
    iconLists: ['/re.svg', '/tail.svg','/axios.svg'],
    link: 'https://liquidculture.netlify.app/',
  },
];

export const testimonials = [
  {
    quote:
      "I had the pleasure of working with Mustajab on my latest web development project, and I couldn't be happier with the results. His expertise, attention to detail, and dedication to delivering a high-quality product are truly outstanding. Mustajab was always responsive, understood my needs perfectly, and brought my vision to life with precision and creativity. I highly recommend his services to anyone looking for a talented and reliable web developer. Thank you, Mustajab, for your exceptional work!",
    name: 'Emily Johnson',
    title: 'Marketing Manager at BrightHorizon Inc.',
  },
  {
    quote:
      "Working with Mustajab was an absolute pleasure! As the Director of AlphaStream Technologies, I'm constantly on the lookout for top-notch developers, and Mustajab exceeded all my expectations. His professionalism, expertise, and commitment to excellence are truly commendable. He not only delivered a sleek and functional website for us but also provided valuable insights and suggestions along the way. I'm thrilled with the results and wouldn't hesitate to recommend Mustajab to anyone seeking exceptional web development services. Thank you for your outstanding work!",
    name: 'Michael Johnson',
    title: 'Director of AlphaStream Technologies',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Self-taught Web Developer',
    desc: 'Learned coding independently through online resources, building real-world projects, and extensive practice.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Project Deployment Specialist',
    desc: 'Successfully deployed multiple projects to the internet, gaining hands-on experience in project deployment and hosting.',
    className: 'md:col-span-2',
    thumbnail: '/exp2.svg',
  },
  {
    id: 3,
    title: 'Coding Best Practices Enthusiast',
    desc: 'Dedicated time to learning coding best practices and professional methodologies, ensuring high-quality code and professionalism in development work.',
    className: 'md:col-span-2',
    thumbnail: '/exp3.svg',
  },
  {
    id: 4,
    title: 'Aspiring Professional Developer',
    desc: 'Seeking opportunities to further enhance skills and gain real-world experience in a professional development environment.',
    className: 'md:col-span-2',
    thumbnail: '/exp4.svg',
  },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
  },
  {
    id: 2,
    img: '/twit.svg',
  },
  {
    id: 3,
    img: '/link.svg',
  },
];
