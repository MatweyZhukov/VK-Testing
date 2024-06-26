import { $host } from "./index";

export const getStoryDetails = async (storyId: number) => {
  const response = await $host(`/item/${storyId}.json`);
  return response;
};

export const fetchTopStories = async (
  storiesCategory: string,
  limit: number
) => {
  try {
    const storyIds = await $host(`/${storiesCategory}.json`),
      topTenStoryIds = storyIds.slice(0, limit),
      storiesDetails = await Promise.all(
        topTenStoryIds.map((storyId: any) => getStoryDetails(storyId))
      );

    return storiesDetails;
  } catch (error) {
    throw new Error("Error fetching stories: " + error);
  }
};
