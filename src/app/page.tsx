"use client";
import Blog from "@/components/Blog";
import ChatComponent from "@/components/ChatComponent";
import { Header } from "@/components/Header";
import { Vortex } from "@/components/ui/vortex";

export default function Home() {
  return (
    <div className="mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="tansparent"
        rangeY={200}
        particleCount={500}
        baseHue={500}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <Header />
        <div className="flex h-[calc(100%-8rem)] w-full">
          <ChatComponent />
          <Blog />
        </div>
      </Vortex>
    </div>
  );
}
