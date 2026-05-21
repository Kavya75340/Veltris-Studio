import Nav from "../components/veltris/Nav";
import Hero from "../components/veltris/Hero";
import Stats from "../components/veltris/Stats";
// import  Services  from "../components/veltris/Services";
import Industries from "../components/veltris/Industries";
import Work from "../components/veltris/Work";
import Process from "../components/veltris/Process";
import Testimonials from "../components/veltris/Testimonials";
import CTA from "../components/veltris/CTA";
import Footer from "../components/veltris/Footer";
import StudioStructure from "../components/veltris/Divisions";

export default function Index() {
    return (
        <main className="relative bg-background text-foreground">
            <Nav />
            <Hero />
            <Stats />
            <StudioStructure />
            {/* <Services /> */}
            <Industries />
            <Work />
            <Process />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}
