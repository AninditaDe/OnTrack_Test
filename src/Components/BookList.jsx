import React from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

const BookList = ({ books, loading }) => {
  if (loading) {
    return (
      <Container>
        <Row>
          <Col md="5"></Col>
          <Col md="2">
            <Spinner animation="border" variant="info" size="lg"></Spinner>
          </Col>
          <Col md="5"></Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mt-2">
        {books &&
          books.length > 0 &&
          books.map((book) => {
            return (
              <Col xs="12" lg="4" className="mb-3" key={book.id}>
                <Card
                  bg="outline-info"
                  text="grey"
                  style={{
                    background: "rgba(0, 0, 0, 0.3)",
                    borderColor: "aliceblue",
                    color: "aliceblue",
                    height: "25rem",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Book Title: {book.book_title}</Card.Title>
                    <Card.Text>
                      Book Author:{" "}
                      {book.book_author.map((a) => {
                        return `${a} `;
                      })}
                    </Card.Text>
                    <Card.Text>No of Pages: {book.book_pages}</Card.Text>
                    <Card.Text>
                      Publication Year: {book.book_publication_year}
                    </Card.Text>
                    <Card.Text>
                      Country: {book.book_publication_country}
                    </Card.Text>
                    <Card.Text>City: {book.book_publication_city}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};
export default BookList;
