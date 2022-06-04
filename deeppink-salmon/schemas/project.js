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
    { name: "image", type: "image" },
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
  ],
};
