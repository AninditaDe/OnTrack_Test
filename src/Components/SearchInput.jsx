import React, { useState } from "react";
import { Col } from "react-bootstrap";

const SearchInput = ({ filter, setFilter }) => {
  const [search, setSearch] = useState(filter);

  return (
    <Col md="6">
      <input
        className="form-control rounded-pill block-example border border-info"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
        onBlur={() => setFilter(search)}
        value={search}
      />
    </Col>
  );
};

export default SearchInput;
