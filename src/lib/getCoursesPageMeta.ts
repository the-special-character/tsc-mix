import { BannerEntityResponse, ComponentCommonHeaders } from "types/types";
import axiosInstance from "./axiosInstance";

export type BannerHeaderType = () => Promise<{
  data: {
    bannerHeader: ComponentCommonHeaders;
  };
}>;

export const getCoursesPageMeta: BannerHeaderType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: "POST",
      body: JSON.stringify({
        query: `{
  bannerHeader {
    data {
      id
      attributes {
        bannerHeader(filters: { slug: { eq: "courses-page" } }) {
          SEO {
            id
            title
            description
            keywords
            images {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  }
}
`,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },

      next: {
        revalidate: 0,
      },
    });

    return await res.json();
  } catch (error) {}
};
