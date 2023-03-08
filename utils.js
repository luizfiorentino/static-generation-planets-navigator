import { createClient } from "contentful";

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
