import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { IoMdSearch } from "react-icons/io";


const ViewExpense = () => {
    const [expense, setExpense] = useState([])
    const [search, setSearch] = useState('')
  



    useEffect(() => {
        fetchExpenses();
    }, [])

    const fetchExpenses = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/expenses/")
            const data = await response.json()
            setExpense(Array.isArray(data) ? data : [])
        } catch (err) {

        }

    }


    return (
        <div className='main-container'>
            <div className='d-flex justify-content-between'>
                <h3 className='mt-3 ms-4 text-light'>View Expense</h3>
                
                    <input type="text" placeholder="Search Expenses" className='mt-3 rounded-3 p-2 h-25 w-25' />
                
                <div>
                        <input className='rounded-3 p-2 me-3' type='month'/>
                    <Link to='/' className='text-decoration-none'>
                        <Button variant="outline-light" className='mt-3 mb-3  me-4'>Back to Home <MdKeyboardDoubleArrowRight className='ms-1' size={20} /></Button>
                    </Link>

                </div>
            </div>
            <hr className='text-white m-3' />

            <div>
                <Table striped bordered hover variant="dark" className='text-center'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Title</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {expense.map((exp) => (
                            <tr key={exp.id}>
                                <td>{exp.id}</td>
                                <td>{exp.title}</td>
                                <td>{exp.amount}</td>
                                <td>{exp.category}</td>
                                <td>{exp.date}</td>
                                <td>{exp.description}</td>
                                <td>
                                    <Button variant="secondary" className='border-white me-2'>Edit</Button>
                                    <Button variant="danger" className='border-white' >Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
            </div>
        </div>
    )
}

export default ViewExpense