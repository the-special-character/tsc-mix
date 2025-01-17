import { AboutTscEntityResponse } from "types/types";

export type EducationType = () => Promise<{
  data: {
    aboutTsc: AboutTscEntityResponse;
  };
}>;

export const getEducationData: EducationType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    body: JSON.stringify({
      query: `{
          aboutTsc {
            data {
              id
              attributes {
                title
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                details {
                  id
                  title
                  description
                  image {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                }
                button {
                  text
                  url
                }
              }
            }
          }
        }`,
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
};
