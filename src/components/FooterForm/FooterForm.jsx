import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import footerLeftImg from "../../assets/images/footerFromImg.webp"
import FooterFormMain from './FooterFormMain/FooterFormMain';



// 1. Define the Validation Schema with max limits
const schema = yup.object().shape({
    name: yup.string()
        .required('Name is required')
        .min(3, 'Minimum 3 characters')
        .max(50, 'Name cannot exceed 50 characters'), // Validation limit
    email: yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    phone: yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(10, 'Minimum 10 digits')
        .max(15, 'Phone number too long'), // Validation limit
    service: yup.string().required('Please select a service'),
    message: yup.string()
        .required('Message cannot be empty')
        .min(10, 'Tell us a bit more')
        .max(500, 'Message cannot exceed 500 characters'), // Validation limit
});
const FooterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange" // Validates as the user types
    });

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Form submitted successfully!");
        reset();
    };
    return (
        <>
            <div className="heading center footerFromHeading">
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <section className="footerFrom">
                <Container>

                    <Row>
                        <Col xs={12} md={12} lg={6}>
                            <div className="footerFormLeft">
                                <img className="img-fluid" src={footerLeftImg} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={12} lg={6}>
                            <div className="footerFormData">
                                <h3>Lorem ipsum</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <FooterFormMain />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default FooterForm
