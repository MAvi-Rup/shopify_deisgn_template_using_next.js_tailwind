import MyCarousel from "@/components/Carousel";
import ClosingHeader from "@/components/ClosingHeader";
import CustomerReview from "@/components/CustomerComponent";
import ExclusivePost from "@/components/ExclusivePost";
import FeatureContent from "@/components/FeatureContent";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewArraival from "@/components/NewArraival";
import TrendingPost from "@/components/TrendingPost";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden">
      <ClosingHeader />
      <Header />
      <Navbar />
      <MyCarousel />
      <FeatureContent />
      <TrendingPost />
      <ExclusivePost />
      <NewArraival />
      <CustomerReview />
    </main>
  );
}
