import { Card, Row, Col, Divider, Input, Button } from 'antd';
import React, { useState } from 'react';
import { useForm } from 'antd/lib/form/Form';

let AddFoodForm
const Form =  ({AddFoodForm})=>{
    const [values, setValues, resetFields] = useForm({
		name: "",
		image: "",
		calories: "",
        servings: "",
	})

    const handleSubmit = (event) => {
		event.preventDefault()
		if (values.name === "" || values.image === "" || values.calories === ""|| values.servings === "") {
			
			return
		}

		AddFoodForm(values)
		resetFields()
	}   
    return(
        <form>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={values.name} type="text" onChange={(setValues)} />
  
        <label>Image</label>
        <Input value={values.image} type="text" onChange={(setValues)} />
  
        <label>Calories</label>
        <Input value={values.calories} type="text" onChange={(setValues)} />
  
        <label>Servings</label>
        <Input value={values.servings} type="text" onChange={(setValues)} />
  
        <button type="submit">Create</button>
      </form>
    )
};

export default AddFoodForm;