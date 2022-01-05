import React from "react";
import {Row, Col} from "reactstrap";

const ThankYou = _ => {
    return (
        <div>
            <Row className="text-center row -g">
                <Col>
                    <p className="thanks-header">Thank You!</p>
                    <p className="thanks-subtext">You should receive an email with the details of your reservation.</p>
                </Col>
            </Row>
        </div>
    );
};

export default ThankYou;