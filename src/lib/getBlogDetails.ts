import { BlogEntityResponse, BlogEntityResponseCollection } from "types/types";

export type BlogDetailsType = (slug: string) => Promise<{
  data: {
    individualBlog: BlogEntityResponse;
    latestPost: BlogEntityResponseCollection;
  };
}>;

export type BlogSiteMapType = () => Promise<{
  data: {
    blogs: BlogEntityResponseCollection;
  };
}>;

export const getBlogDetails: BlogDetailsType = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
          individualBlog: blog(slug: "${slug}") {
            data {
              id
              attributes {
                title
                category {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                bannerImage {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                readTime
                author {
                  data {
                    attributes {
                      avatar {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      firstName
                      lastName
                      publishedAt
                    }
                  }
                }
                content
                seo {
                  metaTitle
                  metaDescription
                  metaImage {
                    data {
                      attributes {
                        url
                        alternativeText
                      }
                    }
                  }
                  metaSocial {
                    socialNetwork
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
                  keywords
                  metaRobots
                  structuredData
                  metaViewport
                  canonicalURL
                }
              }
            }
          }
          latestPost: blogs(sort: "createdAt:desc", pagination: { limit: 2 }) {
            data {
              id
              attributes {
                title
                updatedAt
                category {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                bannerImage {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }        
         `,
      }),

      next: {
        revalidate: 0,
      },
    });
    return await response.json();
  } catch (error) {}
};

export const getBlogSiteMap: BlogSiteMapType = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query: `{
          blogs {
            data {
              attributes {
                slug
              }
            }
          }
        }`,
    }),
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Blog Site map Data");
  }

  return await response.json();
};
