import React, { ChangeEvent, useState, SyntheticEvent } from "react";

interface Props  {
  search: string | undefined;
  handleChange : (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e : SyntheticEvent) => void;
};

const Search: React.FC<Props> = ({search,handleChange,onClick}: Props): JSX.Element => {

  return (
    <div>
      <input value={search} onChange={(e) => handleChange(e)}/>
      <button onClick={(e) => onClick(e)}/>
    </div>
  );
};

export default Search;
