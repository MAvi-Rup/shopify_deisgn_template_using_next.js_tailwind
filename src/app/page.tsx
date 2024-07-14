import ClosingHeader from "@/components/ClosingHeader";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";

const MyCarousel = dynamic(() => import("@/components/Carousel"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <ClosingHeader />
      <Header />
      <Navbar />
      <div className="flex-grow">
        <MyCarousel />
      </div>
    </main>
  );
}
