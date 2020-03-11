import React from 'react';
import { getPageOptions } from './App';

export interface Props {
  searchTerm?: string
  setSearchTerm: (term: string) => void
  getPage: ({ q: string }: getPageOptions) => void
}

const Search = ({
  searchTerm,
  setSearchTerm,
  getPage,
}: Props) => (
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      // Get the data with the given search term
      getPage({ q: searchTerm });
    }}
  >
    <input
      type="text"
      className="styledInput"
      required
      list="searchs"
      placeholder="Search for Gifs"
      onChange={(e) => {
        const { value } = e.target;
        setSearchTerm(value);
      }}
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
