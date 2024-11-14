import { Button } from "@/components/ui/button";
import Image from "next/image";
import HiringImage from "@/public/images/blog1.webp";
import Serviceimage from "@/public/images/blog6.webp";
import Learnimage from "@/public/images/cloudBanner.webp";
import TscLogo from "@/public/icons/tscTextLogo.svg";

export default function MobileBentoDashboard() {
  const cardData = [
    { image: HiringImage, alt: "Hiring", title: "Hiring" },
    { image: Serviceimage, alt: "Services", title: "It Services" },
    { image: Learnimage, alt: "Learning", title: "Learn" },
  ];

  return (
    <div className="h-screen bg-gray-50 flex flex-col gap-2 p-4 overflow-hidden">
      <header className="h-20 px-0 flex justify-between items-center">
        <TscLogo className="w-44" />
      </header>
      <main className="flex-1 flex flex-col justify-between mx-auto h-full w-full">
        <div className=" flex flex-col gap-2 text-center max-w-3xl mx-auto mb-2">
          <h1 className="font-bold tracking-tight mb-0 uppercase line-clamp-2">
            Next-gen enterprise software development company
          </h1>
          <p className="text-gray-500 text-sm md:text-lg tracking-widest">
            Build your path to success with us.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-2 w-full">
          {cardData?.map((card, cardIndex) => (
            <Card
              key={cardIndex}
              icon={
                <div className="relative aspect-square w-24 h-24">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 96px) 100vw, 96px"
                    className="object-cover rounded-3xl"
                  />
                </div>
              }
              title={card.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

function Card({ icon, title }) {
  return (
    <div className="bg-slate-200 rounded-xl md:rounded-3xl p-2 shadow-lg flex gap-4">
      <div className="mr-4">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <Button className="text-white rounded-full w-max">Explore</Button>
      </div>
    </div>
  );
}
