import React from 'react'
import { useFormik } from 'formik';
import { Helmet } from "react-helmet";
import { Button, TextField } from '@mui/material';

import { postChildren, postService } from '../../api/httpRequests';
import { useNavigate } from "react-router-dom"
import { guysSchema } from '../../validation/guysSchema';


const Add = () => {
    const navigate = useNavigate()
    function handleSubmit(values, actions) {
        postChildren(values)
        console.log(values);
        console.log(actions);
        actions.resetForm()
        navigate("/")
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            image: '',
        },
        validationSchema:guysSchema,
        onSubmit: handleSubmit,
    });
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add</title>
            </Helmet>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <form onSubmit={formik.handleSubmit}>
                    <TextField style={{ marginTop: "30px" }} type='text' name='name' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.title} id="outlined-basic" label="name" variant="outlined" /><br />
                    <TextField style={{ marginTop: "30px" }} type='number' name='age' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.description} id="outlined-basic" label="age" variant="outlined" /><br />
                    <TextField style={{ marginTop: "30px" }} type='text' name='image' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.image} id="outlined-basic" label="image" variant="outlined" /> <br />
                    <Button type='submit'>Add</Button>
                </form>
            </div>

        </>
    )
}

export default Add  