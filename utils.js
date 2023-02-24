import { createClient } from "contentful";

const client = createClient({
  space: "9f26325ziuts",
  accessToken: "Ta_O5j4YDaSFLl3EpV4xK0kzLWT9f1tgM0IOeeHpGgQ",
});

// // Retrieve the list of blog posts from Contentful
// const getPlanetNames = async () => {
//   const response = await client.getEntries({
//     // content_type: "blogPost",
//     content_type: "planetName",
//   });

//   return response.items;
// };

// export default getPlanetNames;

const getPlanetContent = async () => {
  const response = await client.getEntries({
    // content_type: "blogPost",
    content_type: "planetContent",
  });

  console.log("utils.js response", response);
  return response.items;
};

export default getPlanetContent;
