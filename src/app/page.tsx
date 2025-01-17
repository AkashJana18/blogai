"use client"
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

    </Vortex>
  </div>
  );
}
