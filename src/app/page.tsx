import HomeHero from './ui/home-hero';
import About from './ui/about';
import Project from './ui/project';
import Contact from './ui/contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomeHero />
      <About />
      <Project />
      <Contact />
    </main>
  );
}
