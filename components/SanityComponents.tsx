export const components = {
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }) => <h1 className="text-2xl font-medium">{children}</h1>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <li className="ml-10 list-disc">{children}</li>,
  },
};
