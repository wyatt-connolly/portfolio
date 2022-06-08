export default {
  name: "project",
  type: "document",
  title: "Project",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name",
    },
    { name: "cover_image", type: "image", title: "Cover Image" },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "date",
      options: {
        dateFormat: "MMM-DD",
        calendarTodayLabel: "Today",
      },
    },
    {
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "summary",
      type: "array",
      title: "Summary",
      of: [
        { type: "block" },
        {
          name: "break",
          type: "object",
          title: "Break",
          fields: [
            {
              name: "style",
              type: "string",
              options: {
                list: ["break"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "image_gallery",
      type: "object",
      title: "Image Gallery",
      fields: [
        {
          name: "images",
          type: "array",
          title: "Images",
          of: [
            {
              name: "image",
              type: "image",
              title: "Image",
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: "alt",
                  type: "string",
                  title: "Alternative text",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
