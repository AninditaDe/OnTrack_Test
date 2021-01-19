import React, { useCallback, useEffect, useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";

import "./App.css";
import BookList from "./Components/BookList";
import Button from "./Components/Button";
import SearchInput from "./Components/SearchInput";

const ApiUrl = "http://nyx.vima.ekt.gr:3000/api";

const App = ({ history, match }) => {
  const { page: pageParam } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (pageParam) {
      setCurrentPage(Number(pageParam));
    }
  }, [pageParam]);

  const fetchBooks = useCallback(async () => {
    const response = await fetch(`${ApiUrl}/books`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page,
        itemsPerPage,
        filters: [{ type: "all", values: [filter] }],
      }),
    });
    return await response.json();
  }, [page, itemsPerPage, filter]);

  const onPrevButtonClick = useCallback(() => {
    const currentPage = page > 1 ? page - 1 : page;
    setCurrentPage(currentPage);
  }, [page]);

  const onNextButtonClick = useCallback(() => {
    setCurrentPage(page + 1);
  }, [page]);

  useEffect(() => {
    setLoading(true);
    fetchBooks()
      .then((data) => {
        setLoading(false);
        setBooks(data.books);
      })
      .catch((err) => {
        setLoading(false);
        setBooks([]);
      });

    history.replace(`/${page}`);
  }, [history, page, fetchBooks]);

  return (
    <>
      <Jumbotron>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <h1>Book Repository</h1>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col>
              <SearchInput filter={filter} setFilter={setFilter} />
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <BookList books={books} loading={loading} />
      <Container>
        <Row>
          <div className="pageButtonContainer">
            <Button name="Previous" clicked={() => onPrevButtonClick()} />
          </div>

          <div className="pageButtonContainer">
            <Button name="Next" clicked={() => onNextButtonClick()} />
          </div>
        </Row>
      </Container>
    </>
  );
};

export default withRouter(App);
