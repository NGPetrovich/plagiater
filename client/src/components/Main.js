import React from "react";
import { Row, Col, Button } from 'reactstrap'

const Main = props => {
    return (
        <div>
            <Row className="text-center align-items-center pizza-cta row g-0">
                <Col>
                    <p className="looking-for-pizza">If you are looking for plagiat
                    <i className="fas fa-chair pizza-slice">Then Add icon Here</i>
                    </p>
                </Col>
                <Button
                    color="none"
                    className="book-table-btn"
                    onClick={_ => {
                        props.setPage(1);
                    }}
                >
                    Change my width
                </Button>
            </Row>
            <Row className="text-center big-img-container row g-0">
                <Col>
                    <img
                        src={require("../images/mediconsult.png")}
                        alt="mediconsult"
                        className="big-img"
                    />
                </Col>
            </Row>
        </div>
    );
};

export default Main;