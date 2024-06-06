"use client";
import { useRouter } from "next/navigation";
import Carousel from "./Carousel";
export default function CarouselWrapper({ product }) {
  const router = useRouter();


  return (
    <div className="w-[373px] h-[560] lg:w-[450px] lg:h-[680px]">
      <Carousel product={product} />
    </div>
  );
}
