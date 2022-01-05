import React from "react"
import {Row, Col} from "reactstrap"

const Table = props => {

    const getRow1 = _ => {
        let chairs = []
        for (var i = 0; i < Math.ceil(props.chair / 2); i++) {
            chairs.push (
                <span
                    key={i}
                    className={props.empty ? "empty-table" : "full-table"}
                ></span>
            );
        }
        return chairs;
    };

    const getRow2 = _ => {
        let chairs2 = []
        for (var i = 0; i < Math.floor(props.chair / 2); i++) {
            chairs2.push (
                <span
                    key={i}
                    className={props.empty ? "empty-table" : "full-table"}
                ></span>
            );
        }
        return chairs2;
    };

    return (
        <div className="table-contrainer">
            <Col
                className={props.empty ? "table selectable-table" : "table"}
                onClick={ _ => {
                    props.empty
                    ? props.selectTable(props.name, props.id)
                    : console.log("tried to select full table");
                }}
            >
                <Row className="table-rpw row g-0">
                    <Col className="text-center">{getRow1()}</Col>
                </Row>
                <Row className="table-rpw row g-0">
                    <Col className="text-center">{getRow2()}</Col>
                </Row>
                <p className="text-center table-center">{props.name}</p>
            </Col>
        </div>
    );
};

export default Table;