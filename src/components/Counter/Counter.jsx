import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useCountUp } from "react-countup"; // Using the hook version

const StatItem = ({ end, prefix, label, isVisible }) => {
    const countRef = useRef(null);
    const { start } = useCountUp({
        ref: countRef,
        start: 0,
        end: end,
        duration: 2.5,
        startOnMount: false,
    });

    useEffect(() => {
        if (isVisible) start();
    }, [isVisible, start]);

    return (
        <Col xs={6} md={3}>
            <h4 className="fw-bold mb-1" style={{ fontSize: '2.5rem' }}>
                {prefix}<span ref={countRef}>0</span>+
            </h4>
            <p className="text-uppercase small mb-0" style={{ opacity: 0.8 }}>{label}</p>
        </Col>
    );
};

const Counter = () => {
    const pricingRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.2 });

        if (pricingRef.current) observer.observe(pricingRef.current);
        return () => observer.disconnect();
    }, []);

    const counterData = [
        { id: 1, end: 3, label: "Professional Experience", prefix: "0" },
        { id: 2, end: 400, label: "Project Complete", prefix: "" },
        { id: 3, end: 600, label: "Satisfied Clients", prefix: "" },
        { id: 4, end: 100, label: "Unique Styles", prefix: "" },
    ];

    return (
        <section className="Counter py-5" ref={pricingRef} style={{ backgroundColor: '#2d8a64', color: '#fff' }}>
            <Container>
                <Row className="text-center g-4">
                    {counterData.map((item) => (
                        <StatItem key={item.id} {...item} isVisible={isVisible} />
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Counter;