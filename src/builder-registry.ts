"use client";
import { builder, Builder } from "@builder.io/react";
import dynamic from "next/dynamic";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

const IMAGE_FILE_TYPES = ["jpeg", "jpg", "png", "gif", "avif", "webp", "svg"];

//Section
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/Section")),
  {
    name: "Section",
    noWrap: true,
    // Adding defaults is important for easy usability
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "string",
          options: { text: "I am child text block!" },
        },
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiProjectCard
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiProjectCard")),
  {
    name: "BiProjectCard",
    inputs: [
      {
        name: "projects",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "number",
            required: true,
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "url",
            type: "string",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiHomeAccordian
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiHomeAccordian")),
  {
    name: "BiHomeAccordian",
    inputs: [
      {
        name: "homeBanner",
        type: "boolean",
      },
      {
        name: "backgroundColor",
        type: "color",
      },
      { name: "borderColor", type: "color" },
      {
        name: "accordian",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "number",
            required: true,
          },

          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
          {
            name: "title",
            type: "object",
            subFields: [
              {
                name: "titleText",
                type: "string",
              },
              {
                name: "titleColor",
                type: "color",
                defaultValue: "#000000",
              },
            ],
          },
          {
            name: "description",
            type: "object",
            subFields: [
              {
                name: "descriptionText",
                type: "string",
              },
              {
                name: "descriptionColor",
                type: "color",
                defaultValue: "#000000",
              },
            ],
          },
          {
            name: "arrowButtonLink",
            type: "string",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiClientCarousel
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiClientCarousel")),
  {
    name: "BiClientCarousel",
    inputs: [
      {
        name: "clients",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
        ],
      },
      {
        name: "background",
        type: "color",
        defaultValue: "#1e3d60",
      },
      // {
      //   name: "classname",
      //   type: "string",
      // },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

// //BiBanner
// Builder.registerComponent(
//   dynamic(() => import("@/components/builder-io/BiBanner")),
//   {
//     name: "BiBanner",
//     inputs: [
//       {
//         name: "background",
//         type: "color",
//       },
//       {
//         name: "textColor",
//         type: "color",
//         defaultValue: "#000000",
//       },
//       {
//         name: "headingLine1",
//         type: "object",
//         subFields: [
//           {
//             name: "heading",
//             type: "string",
//           },
//           {
//             name: "textColor",
//             type: "color",
//             defaultValue: "#000000",
//           },
//         ],
//       },
//       {
//         name: "headingLine2",
//         type: "string",
//       },
//       {
//         name: "description",
//         type: "text",
//       },
//       {
//         name: "subTitle",
//         type: "string",
//       },
//       {
//         name: "animatedWords",
//         type: "list",
//         subFields: [
//           {
//             name: "word",
//             type: "string",
//           },
//         ],
//       },
//       {
//         name: "button",
//         type: "boolean",
//       },
//       {
//         name: "btnText",
//         type: "string",
//         showIf: (options) => options.get("button"),
//       },
//       {
//         name: "btnUrl",
//         type: "string",
//         showIf: (options) => options.get("button"),
//       },
//       {
//         name: "media",
//         type: "file",
//       },
//     ],
//     image:
//       "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
//   }
// );

//BiImageBanner
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiImageBanner")),
  {
    name: "BiImageBanner",
    inputs: [
      {
        name: "image",
        type: "file",
        allowedFileTypes: IMAGE_FILE_TYPES,
      },
      {
        name: "title1",
        type: "object",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "titleColor",
            type: "color",
            defaultValue: "#ffffff",
          },
        ],
      },
      {
        name: "title2",
        type: "object",
        subFields: [
          {
            name: "subtitle",
            type: "string",
          },
          {
            name: "subtitleColor",
            type: "color",
            defaultValue: "#ffdb3b",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiTabs
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiTab")),
  {
    name: "BiTab",
    inputs: [
      {
        name: "verticalTab",
        type: "boolean",
        defaultValue: false,
      },
      {
        name: "tab",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "content",
            type: "string",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiAnimatedImageWord
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiAnimatedImageWord")),
  {
    name: "BiAnimatedImageWord",
    inputs: [
      {
        name: "data",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "image",
            type: "file",
          },
          {
            name: "url",
            type: "string",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiServiceCard
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiServiceCard")),
  {
    name: "BiServiceCard",
    inputs: [
      {
        name: "image",
        type: "file",
        allowedFileTypes: IMAGE_FILE_TYPES,
      },
      {
        name: "titleLine",
        type: "object",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "font-weight",
            type: "string",
            defaultValue: "600",
            enum: ["100", "200", "300", "400", "500", "600", "700", "800"],
          },
          {
            name: "titleColor",
            type: "color",
            defaultValue: "#000000",
          },
        ],
      },
      {
        name: "description",
        type: "object",
        subFields: [
          {
            name: "descriptionText",
            type: "string",
          },
          {
            name: "font-weight",
            type: "string",
            defaultValue: "600",
            enum: ["100", "200", "300", "400", "500", "600", "700", "800"],
          },
          {
            name: "descriptionColor",
            type: "color",
            defaultValue: "#000000",
          },
        ],
      },
      {
        name: "language",
        type: "object",
        subFields: [
          {
            name: "languageText",
            type: "string",
          },
          {
            name: "languageColor",
            type: "color",
            defaultValue: "#000000",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiGrid
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiGrid")),
  {
    name: "CustomGrid",
    inputs: [
      {
        name: "largdesktopGrid",
        type: "string",
        defaultValue: "4",
        enum: ["2", "3", "4", "6"],
      },
      {
        name: "desktopGrid",
        type: "string",
        defaultValue: "3",
        enum: ["1", "2", "3", "4", "6"],
      },
      {
        name: "tabletGrid",
        type: "string",
        defaultValue: "2",
        enum: ["1", "2", "3", "4"],
      },
      {
        name: "mobileGrid",
        type: "string",
        defaultValue: "1",
        enum: ["1", "2", "3"],
      },
      // {
      //   name: "gridSection",
      //   type: "boolean",
      //   defaultValue: false,
      // },
      {
        name: "gap",
        type: "string",
        defaultValue: "4",
      },
    ],
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "string",
          options: { text: "I am child text block!" },
        },
      },
    ],
  }
);

//BiSwiper
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiSwiperCard")),
  {
    name: "BiSwiperCard",
    inputs: [
      {
        name: "toggleButton",
        type: "boolean",
      },
      {
        name: "projects",
        type: "list",
        subFields: [
          {
            name: "id",
            type: "number",
            required: true,
          },
          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
          {
            name: "imageTitle",
            type: "object",
            subFields: [
              { name: "imageText", type: "string" },
              { name: "imageTextColor", type: "color" },
            ],
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiTestimonialSwiper
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiTestimonialSwiper")),
  {
    name: "BiTestimonialSwiper",
    inputs: [
      {
        name: "testimonials",
        type: "list",
        subFields: [
          {
            name: "image",
            type: "file",
            allowedFileTypes: IMAGE_FILE_TYPES,
          },
          {
            name: "name",
            type: "string",
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "company",
            type: "string",
          },
          {
            name: "testimonial",
            type: "text",
          },
        ],
      },
      {
        name: "textColor",
        type: "color",
      },
      {
        name: "testimonialTextColor",
        type: "color",
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

// Heading
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiHeading")),
  {
    name: "Heading",
    // noWrap: true,
    inputs: [
      {
        name: "level",
        type: "string",
        enum: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
        defaultValue: "h1",
      },
      {
        name: "content",
        type: "longText",
        defaultValue: "Hello World",
      },
      {
        name: "variantOfPTag",
        type: "string",
        enum: [
          "default",
          "subtitle1",
          "subtitle2",
          "subtitle3",
          "text-body1",
          "text-body2",
          "text-caption1",
          "text-caption2",
          "large",
          "small",
          "sm",
        ],
        defaultValue: "default",
      },
      {
        name: "variantOfHeadingTag",
        type: "string",
        enum: [
          "default",
          "text-heading1",
          "text-heading2",
          "text-heading3",
          "text-heading4",
          "text-heading5",
          "text-heading6",
          "text-subtitle1",
          "text-subtitle2",
          "text-subtitle3",
          "text-body1",
          "text-body2",
          "text-caption1",
          "text-caption2",
        ],
        defaultValue: "default",
      },
      {
        name: "className",
        type: "string",
      },
    ],

    // defaultChildren: [
    //   {
    //     "@type": "@builder.io/sdk:Element",
    //     component: {
    //       name: "string",
    //       options: { text: "I am child text block!" },
    //     },
    //   },
    // ],
    // childRequirements: {
    //   message: "You can only put Headings in a Text",
    //   query: {
    //     "component.name": { $in: ["Heading", "Text", "BIText", "string"] },
    //   },
    // },
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

// BiText
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BIText")),
  {
    name: "BIText",
    noWrap: true,
    inputs: [
      {
        name: "levels",
        type: "string",
        enum: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
        defaultValue: "p",
      },
    ],
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Text",
          options: { text: "I am child text block!" },
        },
      },
    ],
    childRequirements: {
      message: "You can only put Headings in a Text",
      query: {
        "component.name": { $in: ["Heading", "Text", "BIText", "string"] },
      },
    },

    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//MarkDown
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiMarkDown")),
  {
    name: "MarkDown",
    noWrap: true,
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Text",
          options: { text: "I am child text block!" },
        },
      },
    ],
  }
);

// BiTable
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiTable")),
  {
    name: "BiTable",
    inputs: [
      { name: "headerBackgroundColor", type: "color" },

      {
        name: "columns",
        type: "list",
        subFields: [
          {
            name: "column",
            type: "object",
            subFields: [
              {
                name: "columnHeader",
                type: "string",
              },

              {
                name: "fontSize",
                type: "string",
                enum: [
                  "default",
                  "text-heading1",
                  "text-heading2",
                  "text-heading3",
                  "text-heading4",
                  "text-heading5",
                  "text-heading6",
                  "text-subtitle1",
                  "text-subtitle2",
                  "text-subtitle3",
                  "text-body1",
                  "text-body2",
                  "text-caption1",
                  "text-caption2",
                ],
                defaultValue: "default",
              },
              {
                name: "titleColor",
                type: "color",
                defaultValue: "#000000",
              },
            ],
          },
        ],
      },
      {
        name: "rows",
        type: "list",
        subFields: [
          {
            name: "cells",
            type: "list",
            subFields: [
              {
                name: "cell",
                type: "object",
                subFields: [
                  {
                    name: "content",
                    type: "string",
                  },
                  {
                    name: "fontSize",
                    type: "string",
                    enum: [
                      "default",
                      "text-heading1",
                      "text-heading2",
                      "text-heading3",
                      "text-heading4",
                      "text-heading5",
                      "text-heading6",
                      "text-subtitle1",
                      "text-subtitle2",
                      "text-subtitle3",
                      "text-body1",
                      "text-body2",
                      "text-caption1",
                      "text-caption2",
                    ],
                    defaultValue: "default",
                  },
                  {
                    name: "contentColor",
                    type: "color",
                    defaultValue: "#000000",
                  },
                ],
              },
            ],
          },
          {
            name: "link",
            type: "string",
          },
        ],
      },
    ],
  }
);
//BiImageSwiper
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiImageSwiper")),
  {
    name: "BiImageSwiper",
    // noWrap: true,
    inputs: [
      {
        name: "data",
        type: "list",
        subFields: [
          {
            name: "imageTitle",
            type: "object",
            subFields: [
              { name: "title", type: "string" },
              { name: "titleColor", type: "color" },
            ],
          },
          {
            name: "description",
            type: "object",
            subFields: [
              { name: "content", type: "string" },
              { name: "descriptionColor", type: "color" },
            ],
          },
          { name: "image", type: "file" },
        ],
      },
    ],
    // defaultChildren: [
    //   {
    //     "@type": "@builder.io/sdk:Element",
    //     component: {
    //       name: "Text",
    //       options: { text: "I am child text block!" },
    //     },
    //   },
    // ],

    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BiAnimatedWords
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiAnimatedWords")),
  {
    name: "BiAnimatedWords",
    inputs: [
      {
        name: "animatedWords",
        type: "list",
        subFields: [{ name: "word", type: "string" }],
      },
      {
        name: "textColor",
        type: "color",
        // defaultValue: "#B7466B",
      },
    ],

    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

// BiCustomButton
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiButton")),
  {
    name: "BiCustomButton",
    defaultStyles: {
      // TODO: make min width more intuitive and set one
      appearance: "none",
      paddingTop: "15px",
      paddingBottom: "15px",
      paddingLeft: "25px",
      paddingRight: "25px",
      backgroundColor: "#000000",
      color: "white",
      borderRadius: "4px",
      textAlign: "center",
      cursor: "pointer",
      display: "inline-flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
    },
    inputs: [
      {
        name: "content",
        type: "string",
        defaultValue: "Click me",
      },
      {
        name: "link",
        type: "string",
      },
      {
        name: "showPrefixIcon",
        type: "boolean",
        defaultValue: true,
      },
      {
        name: "icon",
        type: "file",
        allowedFileTypes: ["jpeg", "jpg", "png", "svg"],
        defaultValue: "",
      },
      {
        name: "iconWidth",
        type: "number",
        defaultValue: 20,
      },
      {
        name: "iconHeight",
        type: "number",
        defaultValue: 20,
      },
      {
        name: "iconAnimation",
        type: "object",
        subFields: [
          {
            name: "type",
            type: "string",
            enum: ["none", "bounce", "pulse", "slideShake"],
            defaultValue: "none",
          },
          {
            name: "duration",
            type: "number",
            defaultValue: 1,
            helperText: "Animation duration in seconds",
          },
          {
            name: "delay",
            type: "number",
            defaultValue: 0,
            helperText: "Delay before animation starts, in seconds",
          },
        ],
      },
    ],
    static: true,
    noWrap: true,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BIFileAttach
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BIFileAttach")),
  {
    name: "BIFileAttach",
    inputs: [
      {
        name: "name",
        type: "string",
        defaultValue: "attachment",
      },
      {
        name: "fileText",
        type: "string",
        defaultValue: "Attach your file",
      },
      {
        name: "fileSize",
        type: "number",
        defaultValue: 5,
      },
    ],
  }
);

//BIImageWithCards
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiImageWithCards")),
  {
    name: "BiImageWithCards",
    inputs: [
      {
        name: "image",
        type: "file",
      },
      {
        name: "imageTitle",
        type: "string",
      },
      {
        name: "cardData",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "subdec",
            type: "string",
          },
        ],
      },
      {
        name: "side",
        type: "string",
        enum: ["bottom", "left"],
        defaultValue: "bottom",
      },
    ],
  }
);

//BIOddEvenImagetext
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiOddEvenImageText")),
  {
    name: "BiOddEvenImageText",
    inputs: [
      {
        name: "data",
        type: "list",
        subFields: [
          {
            name: "title",
            type: "string",
          },
          {
            name: "description",
            type: "text",
          },
          {
            name: "image",
            type: "file",
          },
          {
            name: "cardData",
            type: "list",
            subFields: [
              {
                name: "title",
                type: "string",
              },
              {
                name: "subdec",
                type: "string",
              },
            ],
          },
          {
            name: "side",
            type: "string",
            enum: ["bottom", "left"],
            defaultValue: "bottom",
            showIf: (options) => options.get("cardData"),
          },
        ],
      },
    ],
  }
);

// BiMeetCalendar
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiMeetCalendar")),
  {
    name: "BiMeetCalendar",
    inputs: [],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);

//BIDialog
Builder.registerComponent(
  dynamic(() => import("@/components/builder-io/BiDialog")),
  {
    name: "BIDialog",
    inputs: [
      {
        name: "triggerButton",
        type: "string",
        defaultValue: "Button name",
      },
      // {
      //   name: "modalTitle",
      //   type: "string",
      // },
      {
        name: "content",
        type: "uiBlocks",
        defaultValue: [
          {
            "@type": "@builder.io/sdk:Element",
            component: {
              name: "string",
              options: { text: "I am child text block!" },
            },
          },
        ],
      },
    ],
    image:
      "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F6bef27ee40d24f3b88239fd7e616f82a",
  }
);
