import { Form } from 'react-bootstrap';

const formFields = {
    email: {
        label: "Email",
        placeholder: "Enter Email"
    },
    textarea: {
        label: "Address",
        placeholder: "Address"
    },
    text:{
        label:"Full Name",
        placeholder: "Enter Full Name"
    },
    password:{
        label:"Password",
        placeholder: "Enter Password"
    }
}
const InputForm = ({ type, register ,errors }) => {
    const { label, placeholder } = formFields[type]
    console.log(errors )
    return (
        <Form.Group controlId={type}>
            <Form.Label>{label}</Form.Label>
            <Form.Control placeholder={placeholder}
                {...register}  />
            <Form.Control.Feedback type='Invalid'>
            <p>{!!errors && errors[type]?.message ? errors[type]?.message : " "}</p>
            </Form.Control.Feedback>
        </Form.Group>
    );
}

export default InputForm