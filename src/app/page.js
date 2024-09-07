'use client';
import Footer  from "./components/common/Footer";
import Header  from "./components/common/Header";
import ImageSlider from "./components/home/HomePage"; 

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* navbar */}
      <Header />
      {/* homepage */}
      <ImageSlider/>
      {/* footer  */}
      <Footer/>

    </div>
  );
}
