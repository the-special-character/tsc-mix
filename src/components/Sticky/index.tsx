import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

const Sticky = (props: Props) => {
  return (
    <Link title="Get in Touch" href={"#Contact"}>
      <main className="grid sticky bottom-0 z-10 group transition-all ease-in-out duration-150">

        <Button
          variant={"secondary"}
          size={"xxl"}
          className="justify-start font-extrabold text-3xl py-10"
        >
          <section>
            <span>Get in Touch</span>

          </section>
        </Button>

      </main>
    </Link>
  );
};

export default Sticky;
