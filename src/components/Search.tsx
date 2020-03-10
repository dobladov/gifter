import React from 'react';

export interface Props {
}

const Search = ({
  searchTerm,
  setSearchTerm,
  getPage,
}: Props) => (
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      getPage({ q: searchTerm });
    }}
  >
    <input
      className="styledInput"
      required
      list="searchs"
      placeholder="Search for Gifs"
      onChange={(e) => {
        const { value } = e.target;
        setSearchTerm(value);
      }}
      type="search"
    />

    <datalist id="searchs">
      <option value="Dog" />
      <option value="Puppie" />
      <option value="Cat" />
      <option value="Kitten" />
      <option value="Cartoon" />
      <option value="Reaction" />
    </datalist>
  </form>
);

export default Search;
