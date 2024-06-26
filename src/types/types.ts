//Global
import { Dispatch, SetStateAction } from "react";

export interface IHeaderProps {
  setCategory: Dispatch<SetStateAction<string>>;
  onFetchStories: () => void;
}

export interface INewsProps {
  loading: boolean;
  stories: any[];
}
