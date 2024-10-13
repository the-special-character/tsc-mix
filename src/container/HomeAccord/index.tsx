import HomeAccordian from "@/components/HomeAccordian";
import { Button } from "@/components/ui/button";
import { homeAccordiandata } from "@/lib/constData";
import Link from "next/link";

const AccCards = () => {
  return (
    <>
      <div className="bg-yellow max-sm:px-4 px-container py-12 md:py-24  ">
        <h2 className="font-bold  text-heading1 flex md:justify-start justify-center">
          How we can help you
        </h2>
        <HomeAccordian />
        <div>
          <Link
            title="discuss my projects"
            href={"#Contact"}
          >
            <Button variant="default" className="px-16 md:px-20 py-7  ">
              Discuss my Project
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default AccCards;
