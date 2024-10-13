"use client";
import { SetStateAction, useState } from "react";
import { imageAccordianDataType } from "@/utils/types";
import { imageAccordianData } from "@/lib/constData";
import "./styles.css";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ImageAccordion = ({ data }: imageAccordianDataType) => {
    const [active, setActive] = useState(0);

    const handleToggle = (index: SetStateAction<number>) => setActive(index);

    return (
        <>
            <section>
                <h2 className="py-5  text-heading3">{data.title1}</h2>
                <div className="md:py-5 lg:pr-72 text-subtitle3 ">{data.title2}</div>
                <div className="py-7 text-heading4">{data.title3}</div>
                <div className="image-accordion">

                    {imageAccordianData.data.map((item, index) => {
                        const isActive = active === index ? "active" : "";
                        return (
                            <div
                                key={item.image}
                                className={`image-accordion-item ${isActive}`}
                                onClick={() => handleToggle(index)}
                            >
                                <Image alt="ecommerce-info" title="project-info" height={900} width={900} src={item.image} />
                                <h3 className="content1">{item.header}</h3>
                                <p className="content">


                                    {item.text}

                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="pt-10">
                    <Link title="Tell us about your project" href={"#Contact"}>
                        <Button>
                            <span className="flex flex-wrap justify-center gap-x-[0.22rem]">
                                {data.button}

                            </span>
                        </Button>
                    </Link>
                </div>
            </section>
        </>
    );
};

export default ImageAccordion;
