import Header from "./components/Header";
import Intro from "./components/Intro";
import { Experience, Projects, Recognition, SiteFooter, Toolbox } from "./components/Sections";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Header />
      <main className="mx-auto max-w-[920px] px-6">
        <Intro />
        <Experience />
        <Projects />
        <Recognition />
        <Toolbox />
        <SiteFooter />
      </main>
    </div>
  );
}
