// "use client";

// import { useRef } from "react";
// import Image from "next/image";
// import Galaxy from "./Galaxy";

// export const LaserFooter = ({ year }: { year: number }) => {
//   const footer = useRef<HTMLElement>(null);

//   return (
//     <footer ref={footer} className="relative mb-2.5 flex w-full flex-none flex-col-reverse items-center justify-between gap-1 rounded-2xl p-5 sm:flex-row sm:gap-4">
//       <div className="pointer-events-none fixed inset-0 -z-1">
//         <Galaxy
//           density={2}
//           glowIntensity={0.44}
//           flareIntensity={2.05}
//           starSpeed={0.35}
//           mouseRepulsion
//           clickWarp
//           starColors={["#ffffff", "#ffc9d4", "#ffd9b8"]}
//           hueShift={140}
//           saturation={0}
//           starSize={1.05}
//           twinkleIntensity={0.7}
//           speed={1}
//           rotationSpeed={0.04}
//           layers={5}
//           direction="backward"
//           repulsionStrength={0.8}
//           mouseInteraction
//           intro
//           lightMode={false}
//         />
//       </div>
//       <small className="inline-flex items-center gap-2 whitespace-nowrap text-xs text-[#d9cbe8]">
//         <Image src="/icon.svg" alt="" width={20} height={20} />© {year} Astra
//       </small>

//       <p className="text-center text-sm leading-snug text-[#eadcf9] sm:text-right lg:text-base xl:text-lg">Take the first step toward something only you can build.</p>
//     </footer>
//   );
// };
