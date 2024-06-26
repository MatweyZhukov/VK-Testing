//Global
import React, { FC } from "react";

//Types
import { INewsProps } from "../../types/types";

export const News: FC<INewsProps> = ({ loading, stories }) => {
  return (
    <ul>
      {!loading ? (
        stories.map((story: any) => (
          <li key={story.id}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </li>
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </ul>
  );
};
