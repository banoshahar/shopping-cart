import React from "react";
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { useForm } from "react-hook-form";
import useOrderHooks from "../../redux/Order/order-actions";
import InputForm from '../Forms/forms'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Form } from "react-bootstrap";

const schema = yup.object().shape({
    name: yup.string().required("Name is required"),
    address: yup.string().required('Address is required')
  });

const Checkout = ({ showModal, handleShow }) => {
    const { placeOrderAction } = useOrderHooks();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        const { address, name } = data
        placeOrderAction(address, name);
    }
    return (
        <div>
            <Modal isOpen={showModal} toggle={handleShow}>
                <ModalHeader toggle={handleShow}>Checkout</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <InputForm type="text" register={register("name")} errors={errors} />
                        <InputForm type="textarea" register={register("address")} errors={errors} />
                        <Button type="submit" onClick={handleShow} value="submit" color="primary">
                            Submit
                        </Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Checkout;