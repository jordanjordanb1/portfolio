import React from 'react';
import Container from 'react-bootstrap/Container';
import './Home.scss';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';

export default function Home() {
    return (
        <>
            <Navbar />
            <Container></Container>
            <Footer />
        </>
    );
}
