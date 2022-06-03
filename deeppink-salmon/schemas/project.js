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
    { name: "Description", name: "description", type: "text" },
  ],
};
