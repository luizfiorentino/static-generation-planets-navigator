import { createClient } from "contentful";
// import { config } from "dotenv";

// config();

// const client = createClient({
//   space: "9f26325ziuts",
//   accessToken: "Ta_O5j4YDaSFLl3EpV4xK0kzLWT9f1tgM0IOeeHpGgQ",

// });
console.log("process.env->", process.env.CONTENTFUL_API_TOKEN);
const client = createClient({
  space: `${process.env.CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.CONTENTFUL_API_TOKEN}`,
});

const getPlanetContent = async () => {
  const response = await client.getEntries({
    content_type: "planetContent",
  });
  return response.items;
};

export default getPlanetContent;
