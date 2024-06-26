//Global
import React, { FC } from "react";

//Types
import { IHeaderProps } from "../../types/types";

//Styles
import "./Header.scss";

export const Header: FC<IHeaderProps> = ({ setCategory, onFetchStories }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonText = event.currentTarget.innerText.toLowerCase();
    setCategory(buttonText);
  };

  return (
    <header className="header">
      <h1>VK News</h1>

      <div className="header-filter">
        <button onClick={handleClick}>beststories</button>

        <button onClick={handleClick}>newstories</button>

        <button onClick={handleClick}>topstories</button>
      </div>

      <button className="update" onClick={onFetchStories}>
        Update News
      </button>
    </header>
  );
};
