import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {

    // employee için useState'ler olusturacagiz
    const [firstN, setFirstN] = useState('');
    const [lastN, setLastN] = useState('');
    const [email, setEmail] = useState('');

    // useParams ile ListEmployeeComponent den id yi alalım
    const { id } = useParams();

    // for validation
    const [errors, setErrors] = useState({
        firstN: "",
        lastN: "",
        email: ""
    })

    const navigator = useNavigate();

    useEffect(() => {
        if (id) {
            getEmployee(id).then((response) => {
                setFirstN(response.data.firstN);
                setLastN(response.data.lastN);
                setEmail(response.data.email);
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id])


    // bu kadar kod kalabalıklığının yerine bu şekilde de yazabiliriz
    // hatta   
    /*
    const handleFirstN = (e) => setFirstN(e.target.value);
    const handleLastN = (e) => setLastN(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    */
    // (e) => setEmail(e.target.value); burdan sonrasını uygun onChange= burayada verebiliriz
    /*
      function handleFirstN(e) {
        setFirstN(e.target.value);
    }
    function handleLastN(e) {
        setLastN(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    */


    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        // validForm dan gelen valid true veya false olma durumuna göre kayıt işlemi
        if (validateForm()) {

            const employee = { firstN, lastN, email };
            console.log(employee);

            if (id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data)
                    navigator('/employees');
                }).catch(error => {
                    console.log(error);
                })
            } else {
                // update değil ise add employe mantığını kullanıcak
                createEmployee(employee).then((result) => {
                    console.log(result.data);
                    navigator('/employees');
                }).catch(error => {
                    console.log(error);
                })
            }



        }



    }

    // checking the data
    function validateForm() {
        let valid = true;

        const errorsCopy = { ...errors };

        if (firstN.trim()) {
            errorsCopy.firstN = '';
        } else {
            errorsCopy.firstN = 'First name is required';
            valid = false;
        }

        if (lastN.trim()) {
            errorsCopy.lastN = '';
        } else {
            errorsCopy.lastN = 'Last name is required';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = 'E-mail name is required';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    // edit-employee için
    function pageTitle() {
        if (id) {
            return <h2 className='text-center'>Update Employee</h2>
        } else {
            <h2 className='text-center'>Add Employee</h2>
        }
    }

    return (
        <div className='container'>
            <br /><br />
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        pageTitle()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee first name'
                                    name='firstN'
                                    value={firstN}
                                    className={`form-control ${errors.firstN ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFirstN(e.target.value)}
                                >
                                </input>
                                {errors.firstN && <div className='invalid-feedback'>{errors.firstN}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee last name'
                                    name='lastN'
                                    value={lastN}
                                    className={`form-control ${errors.lastN ? 'is-invalid' : ''}`}
                                    onChange={(e) => setLastN(e.target.value)}
                                >
                                </input>
                                {errors.lastN && <div className='invalid-feedback'>{errors.lastN}</div>}
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>E-mail:</label>
                                <input
                                    type='text'
                                    placeholder='Enter employee e-mail'
                                    name='email'
                                    value={email}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                                {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                            </div>
                            <button className='btn btn-outline-success' onClick={saveOrUpdateEmployee}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent