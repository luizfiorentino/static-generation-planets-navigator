import { createClient } from "contentful";

const client = createClient({
  space: "9f26325ziuts",
  accessToken: "Ta_O5j4YDaSFLl3EpV4xK0kzLWT9f1tgM0IOeeHpGgQ",
});

const getPlanetContent = async () => {
  const response = await client.getEntries({
    content_type: "planetContent",
  });
  return response.items;
};

export default getPlanetContent;
