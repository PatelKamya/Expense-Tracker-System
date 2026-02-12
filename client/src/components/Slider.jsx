import React, { use } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from "formik";
import * as yup from "yup";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


let validate = yup.object({
  title: yup.string().required("Title is required"),
  amount: yup.number().required("Amount is required").positive("Amount must be positive"),
  category: yup.string().required("Category is required"),
  date: yup.date().required("Date is required"),
  description: yup.string().required("Description is required")
})



const Slider = () => {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
    description: ''
  })

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses();
  }, [])

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/expenses/');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const dataStore = {
        ...formData,
      };

      const response = await axios.post('http://127.0.0.1:8000/api/expenses/', dataStore);
      console.log('Response:', response.data);
      setFormData({ title: "", amount: "", category: "", date: "", description: "" });
      fetchExpenses();
    } catch (error) {
      console.error('Full error:', error);


    }
  };


  return (
    <div className='main-container '>
      <div className='d-flex'>

        <div className='w-25 m-3 rounded-3' style={{ height: '90vh' }}>
          <h3 className='text-center m-3 text-white'>ExpenseTracker</h3>
          <hr className='text-white m-4' />
          <Link to="/view-expense" >
            <Button variant="primary" className='w-75 ms-5 mb-4 rounded-3 text-white border-white' style={{ backgroundColor: 'transparent' }}>View Expense</Button>
          </Link>
          <Link to='/budget'>
            <Button variant='primary' className='w-75 ms-5 mb-4 rounded-3 text-light border-white' style={{ backgroundColor: 'transparent' }}>Budget Management</Button>
          </Link>

        </div>
        <div className='m-3 rounded-3 w-75' style={{ backgroundColor: '#0f130f' }}>
          <div>
            <h4 className='m-3 ms-4 text-light'>Add Expense</h4>


            <hr className='mt-3 m-4 text-white' />
            <Container className="d-flex justify-content-center align-items-center">
              <div style={{ width: "500px" }}>
                <Form>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter Amount"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Category</Form.Label>
                    <Form.Select name="category" value={formData.category} onChange={handleChange}>
                      <option>Select Category</option>
                      <option value="Food">Food</option>
                      <option value="Travel">Travel</option>
                      <option value="Shopping">Shopping</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Date</Form.Label>
                    <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-light">Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter Description" name="description" value={formData.description} onChange={handleChange} />
                  </Form.Group>

                  <Button variant="primary" className="w-100" onClick={handleSubmit}>
                    Add Expense
                  </Button>

                </Form>
              </div>
            </Container>



          </div>

        </div>
      </div>
    </div>
  )
}

export default Slider