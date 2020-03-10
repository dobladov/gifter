import React from 'react';

import '../styles/Pagination.css';

export interface Props {
  searchTerm?: string
}

const Pagination = ({
  searchTerm,
  pagination,
  getPage,
}: Props) => (
  pagination && (
    <div className="Pagination">

      <div const="paginationInformation">
        {`Page ${pagination.page + 1} of ${Math.ceil(pagination.total_count / 25)}`}
      </div>

      {(pagination.page > 0) && (
        <button
          type="button"
          className="styledInput"
          onClick={async () => {
            getPage({
              q: searchTerm,
              offset: (pagination.page - 1) * pagination.count,
              newPage: pagination.page - 1,
            });
          }}
        >
          Prev
        </button>
      )}

      {(pagination.page + 1 < Math.ceil(pagination.total_count / 25)) && (
        <button
          type="button"
          className="styledInput"
          onClick={async () => {
            getPage({
              q: searchTerm,
              offset: (pagination.page + 1) * pagination.count,
              newPage: pagination.page + 1,
            });
          }}
        >
          Next
        </button>
      )}
    </div>
  )
);

export default Pagination;
