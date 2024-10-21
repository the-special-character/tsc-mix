import Link from "next/link";
import React, { use } from "react";
import "@/styles/footer.css";
import TscBlueLogoSvg from "@/public/icons/tscBlueLogo.svg";
import { getSocialMediaLinks } from "@/lib/getSocialMediaDetails";
import Image from "next/image";
import { getMenuData } from "@/lib/getMenu";

const certificateImages = [
  {
    title: "Iso",
    url: "https://cdn.builder.io/api/v1/image/assets%2Fdbf92adf2ef043c7957411ad39146bdb%2Fd15a3faa917745b086ba8c31aeb24f37",
  },
  {
    title: "UpWork",
    url: "https://cdn.builder.io/api/v1/image/assets%2Fdbf92adf2ef043c7957411ad39146bdb%2F6e09623030354d639b391d27a3a13377",
  },
];

const staticLinks = [
  { attributes: { title: "Privacy Policy", url: "/learn/privacy-policy" } },
  {
    attributes: {
      title: "Cancellation and Refund",
      url: "/learn/refund-policy",
    },
  },
  { attributes: { title: "Terms Service", url: "/learn/terms-service" } },
  {
    attributes: {
      title: "Shipping and Delivery",
      url: "https://merchant.razorpay.com/policy/NEWBJzhrp8leG4/shipping",
    },
  },
];

const Footer = () => {
  const socialMediaLInks = use(getSocialMediaLinks());
  const menuData = use(getMenuData());

  if (!menuData) return null;
  if (!socialMediaLInks) return null;

  if (!socialMediaLInks) return null;
  const { socialMedia } = socialMediaLInks.data.contactDetail.data?.attributes;
  const array = menuData.data.data?.attributes?.items.data;

  const flatten = (array, initial = []) => {
    return array.reduce((acc, curr) => {
      if (Array.isArray(curr?.attributes?.children?.data)) {
        acc = flatten(curr.attributes.children.data, acc);
      }
      acc.push(curr);
      return acc;
    }, initial);
  };

  const new_array = flatten(array)?.concat(staticLinks);

  return (
    <section
      id="footer"
      className="footer"
      style={{ backgroundColor: "#1e3d60" }}
    >
      <div className="grid grid-cols-1 items-center gap-10 pb-8 md:grid-cols-3">
        <TscBlueLogoSvg className="w-48" />
        <p className="footer__description text-4xl font-bold col-span-2">
          Take your development skills to the next level with our comprehensive
          courses.
        </p>
      </div>

      <hr className="col-span-full" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        <div className="flex flex-col gap-8 order-2 lg:order-1">
          <div>
            <p className="mb-4 text-xl font-bold text-neutral-100">Office:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href={"https://maps.app.goo.gl/Adhw3Lis8uZZN8w4A"}
                className="flex flex-col gap-2"
              >
                <span>B-604/405, Ganesh Glory 11, Jagatpur Road,</span>
                <span>Ahemdabad, Gujarat, 382460</span>
              </Link>
              <div className="flex flex-col justify-between gap-4">
                <Link href={`mailto:contact@thespecialcharacter.com`}>
                  contact@thespecialcharacter.com
                </Link>
                <Link href={`tel:+917600096432`}>+91 7600096432 / 33</Link>
                {socialMedia.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {socialMedia.map((val) => (
                      <Link
                        key={val.id}
                        href={val.url}
                        className="flex aspect-square w-10 items-stretch justify-center rounded-full bg-neutral-500 hover:bg-primary"
                      >
                        <Image
                          src={
                            val.icon.data?.attributes?.url ||
                            "social media link"
                          }
                          alt="social media icon"
                          title="social media icon"
                          height={16}
                          width={16}
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div>
              <p className="mb-4 text-xl font-bold text-neutral-100">
                Privacy Policy:
              </p>
              <Link
                href={"https://maps.app.goo.gl/Adhw3Lis8uZZN8w4A"}
                className="flex flex-col"
              >
                @2024 TheSpecialChar Pvt. Ltd.
              </Link>
            </div>
            <div>
              {certificateImages.length > 0 && (
                <div className="flex gap-4 flex-wrap">
                  {certificateImages.map((item, index) => (
                    <div key={index} className="relative aspect-square h-20">
                      <Image
                        src={item?.url}
                        alt={item?.title}
                        title={item?.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer__pages order-1 lg:order-2">
          <p className="mb-4 text-xl font-bold text-neutral-100 sm:text-xxl md:text-2xl">
            Pages:
          </p>
          <div className="footer__linksContainer">
            {new_array?.length > 0 &&
              new_array?.map((val, index) => (
                <Link
                  href={val.attributes.url}
                  key={index}
                  className="footer__pageLinks"
                >
                  {val.attributes.title}
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/*<p className="footer__copyright">Copyright © Specialchar Pvt Ltd</p> */}
    </section>
  );
};

export default Footer;

// return (
//   <section id="footer" className="footer">
//       <TscBlueLogoSvg className="w-64" />
//       <p className="footer__description text-xl font-bold">
//         Take your development skills to the next level with our comprehensive
//         courses.
//       </p>
//     <hr className="col-span-full" />
//     <div className="footer__newsletter">
//       <figure className="mb-3 h-20 w-20 overflow-hidden rounded-full bg-secondary1">
//         <EmailSvg />
//       </figure>
//       <h3 className="mb-3 text-neutral-100">Subscribe to our newsletter</h3>
//       <p>Stay up-to-date with the latest news and insights from TSC</p>
//       <Newsletter />
//     </div>

//     <div className="footer__pages">
//       <p className="mb-4 text-xl font-bold text-neutral-100 sm:text-xxl md:text-2xl">
//         Pages
//       </p>
//       <div className="footer__links">
//         {flatten(array).map((val) => (
//           <Link href={val.attributes.url} key={val.id}>
//             {val.attributes.title}
//           </Link>
//         ))}
//         <Link href="/privacy-policy">Privacy Policy</Link>
//         <Link href="/refund-policy">Cancellation and Refund</Link>
//         <Link href="/terms-service">Terms Service</Link>
//         <Link href="https://merchant.razorpay.com/policy/NEWBJzhrp8leG4/shipping">
//           Shipping and Delivery
//         </Link>
//       </div>
//     </div>
//     <hr className="col-span-full" />
//     {socialMedia.length > 0 && (
//       <div className="flex gap-4">
//         {socialMedia.map((val) => (
//           <Link
//             key={val.id}
//             href={val.url}
//             className="flex aspect-square w-10 items-stretch justify-center rounded-full bg-neutral-500 hover:bg-primary"
//           >
//             <Image
//               src={val.icon.data?.attributes?.url || "social media link"}
//               alt="social media icon"
//               title="social media icon"
//               height={20}
//               width={20}
//             />
//           </Link>
//         ))}
//       </div>
//     )}
//     <p className="footer__copyright">Copyright © Specialchar Pvt Ltd</p>
//   </section>
// );
