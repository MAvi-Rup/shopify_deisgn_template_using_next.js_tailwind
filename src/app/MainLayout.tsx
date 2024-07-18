import MyCarousel from "@/components/Carousel";
import ClosingHeader from "@/components/ClosingHeader";
import CustomerReview from "@/components/CustomerComponent";
import ExclusivePost from "@/components/ExclusivePost";
import FeatureContent from "@/components/FeatureContent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import NewArrivals from "@/components/NewArraivals";
import RightMenu from "@/components/RightMenu";
import ShopGram from "@/components/ShopGram";
import TrendingPost from "@/components/TrendingPost";

const MainLayout = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <ClosingHeader />
      <Header />
      <Navbar />
      <MyCarousel />
      <FeatureContent />
      <TrendingPost />
      <ExclusivePost />
      <NewArrivals />
      <CustomerReview />
      <ShopGram />
      <RightMenu />
      <Footer />
    </div>
  );
};

export default MainLayout;
