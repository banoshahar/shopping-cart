import React, { useState } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    Button,
    Row,
    Col,
    Label
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import useOrderHooks from "../../redux/Order/order-actions";

const Checkout = ({ showModal, handleShow }) => {
    const [name, setName] = useState(" ");
    const [address, setAddress] = useState(" ");
    let { placeOrderAction } = useOrderHooks();

    const required = val => val && val.length;
    const maxLength = len => val => !val || val.length <= len;
    const minLength = len => val => val && val.length >= len;

    const nameErrorMessage = {
        required: "Required ",
        minLength: " Must be greater than 2 characters",
        maxLength: " Must be 15 characters or less"
    }
    const validators = {
        required,
        minLength: minLength(5),
        maxLength: maxLength(25)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        placeOrderAction(address, name,);
    }
    return (
        <div>
            <Modal isOpen={showModal} toggle={handleShow}>
                <ModalHeader toggle={handleShow}>Checkout</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={handleSubmit}>
                        <Row className="form-group">
                            <Label htmlFor="author" md={12}>
                                Your Name
                            </Label>
                            <Col md={12}>
                                <Control.text
                                    model=".name"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={validators}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={nameErrorMessage}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="address" md={12}>
                                Address
                            </Label>
                            <Col md={12}>
                                <Control.textarea
                                    model=".address"
                                    id="address"
                                    name="address"
                                    rows={5}
                                    className="form-control"
                                    validators={validators}
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".address"
                                    show="touched"
                                    messages={nameErrorMessage}
                                />
                            </Col>
                        </Row>
                        <Button type="submit" onClick={handleShow} value="submit" color="primary">
                            Submit
                        </Button>
                    </LocalForm>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Checkout;