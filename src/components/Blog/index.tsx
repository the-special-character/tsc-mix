import { blogs } from "@/lib/constData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <section className=" w-full  ">
      <div className="2xl:grid 2xl:grid-cols-2 2xl:m-0   ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col gap-3 m-4 md:gap-5 md:pb-20 pb-10  "
          >
            <div>
              <Image
                src={blog.image}
                alt="blog"
                width={500}
                height={500}
                className="object-cover w-screen h-60 md:h-[450px] "
              />
            </div>
            <div className="">
              <div className="flex gap-1 text-nowrap flex-wrap">
                {blog.categories.map((category, index) => (
                  <React.Fragment key={index}>
                    <Link title="category" href="#" className="text-base">
                      {category}
                    </Link>
                    {index !== blog.categories.length - 1 && (
                      <span className="text-base">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
              <div className="py-4 hover:text-blue">
                <a href={blog.link}>
                  <span className="text-2xl font-bold md:text-4xl">
                    {blog.title}
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
