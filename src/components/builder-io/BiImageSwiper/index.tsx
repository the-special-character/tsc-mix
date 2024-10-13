"use client";
import { SetStateAction, useState } from "react";
import styles from "./imageSwiper.module.css";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type imageSwiperProps = {
  imageTitle?: {
    title?: string;
    titleColor?: string;
  };
  description?: {
    content?: string;
    descriptionColor?: string;
  };
  image?: string | StaticImport;
};

type Props = {
  data: imageSwiperProps[];
};

const ImageAccordion = ({ data }: Props) => {
  const [active, setActive] = useState(0);

  const handleToggle = (index: SetStateAction<number>) => setActive(index);

  return (
    <>
      <div className={styles.imageAccordion}>
        {data &&
          data.map((item, index) => {
            const isActive = active === index;
            return (
              <div
                key={item?.imageTitle?.title}
                className={`${styles.imageAccordionItem} ${
                  isActive ? styles.imageAccordionItemActive : ""
                }`}
                onClick={() => handleToggle(index)}
              >
                {item.image && (
                  <Image
                    alt="ecommerce-info"
                    title={item?.imageTitle?.title}
                    height={900}
                    width={900}
                    src={item.image ? item.image : ""}
                    className={styles.imageAccordionItemImage}
                  />
                )}
                <p
                  className={`${styles.content1} ${
                    isActive ? styles.content1Active : "text-heading3"
                  }`}
                  style={{ color: item?.imageTitle?.titleColor }}
                >
                  {item?.imageTitle?.title}
                </p>
                <p
                  className={`${styles.content} ${
                    isActive ? styles.contentActive : ""
                  }`}
                  style={{ color: item?.description?.descriptionColor }}
                >
                  {item?.description?.content}
                </p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ImageAccordion;
