import About from "@/components/Page_components/About/About";
import Contact from "@/components/Page_components/Contact/Contact";
import Hero from "@/components/Page_components/Hero/Hero";
import Menu from "@/components/Page_components/Menu/Menu";
import Subscribe from "@/components/Page_components/Subscribe/Subscribe";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Subscribe />
    </main>
  );
}
