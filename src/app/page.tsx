import Navbar from './ui/navbar';
import HomeHero from './ui/home-hero';
import About from './ui/about';
import Project from './ui/project';
import Contact from './ui/contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <Navbar />
      <div className="container">
        <HomeHero />
        <About />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
