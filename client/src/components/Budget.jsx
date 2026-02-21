import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';


const Budget = () => {
    return (
        <div className='main-container'>
            <div className='d-flex justify-content-between'>

                <h3 className='mt-3 ms-4 text-light'>Budget Management</h3>
                <Link to='/' className='text-decoration-none'>
                    <Button variant="outline-light" className='mt-3 mb-3 border-white me-4' >Back to Home <MdKeyboardDoubleArrowRight className='ms-1' size={20} /></Button>
                </Link>
            </div>
            <hr className='text-white m-3' />
            <div className='d-flex'>


                <Col lg={6} md={6} className=''>
                    <Card>

                    </Card>

                </Col>

                <Col lg={6} md={6} className=''>
                    <Card>

                    </Card>

                </Col>


            </div>





        </div>
    )
}

export default Budget