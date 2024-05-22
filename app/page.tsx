import { Grid, Hero } from '@/components';
import Approach from '@/components/Approach';
import Clients from '@/components/Clients';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import RecentProjects from '@/components/RecentProjects';
import { FloatingNav } from '@/components/ui';
import { navItems } from '@/data';
import { FaHome } from 'react-icons/fa';

const Home = () => {
  return (
    <main className="relative bg-black-100 text-white flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
