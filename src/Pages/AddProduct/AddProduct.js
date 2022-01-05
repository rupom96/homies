import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

import { Link } from 'react-router-dom';


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        //the whole object is printing    
        console.log(data);

        axios.post('https://limitless-shore-01631.herokuapp.com/properties', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product added successfully');
                    reset();
                }

            })

    }

    return (
        <div className="add-product">
            <h1 className="mt-4 mb-5 pb-3">Add a new product: </h1>

            <form className="container text-start w-75" onSubmit={handleSubmit(onSubmit)}>
                <h6> Property name: </h6>
                <input {...register("name", { required: true })} className="form-control" placeholder="X villa" />


                <h6> Property Short description: </h6>
                <textarea {...register("s_details", { required: true })} className="form-control" rows="3" placeholder="Short details" />

                <h6> Property Full description: </h6>
                <textarea {...register("details", { required: true })} className="form-control" rows="6" placeholder="Property Details" />


                <h6> Property's Price: </h6>
                <input type="number" {...register("price", { required: true })} className="form-control" placeholder="Price in BDT" />

                <h6> Brand: </h6>
                {/* <input {...register("brand", { required: true })} className="form-control" placeholder="Sheltech" /> */}

                <select {...register("brand", { required: true })}>
                    <option value="Sheltech">Sheltech</option>
                    <option value="Astra">Astra</option>
                    <option value="Chamber">Chamber</option>
                    <option value="Hyperion">Hyperion</option>
                    <option value="Heaven">Heaven</option>
                    <option value="None">None</option>
                </select>

                <h6 className='pt-2'> Property's image URL: </h6>
                <input {...register("image", { required: true })}
                    className="form-control" placeholder="Image URL" />

                <input className="btn btn-primary" type="submit" value="Add the product" />
            </form>

            <div className="mt-3 container">
                <h6> Done adding new Property? <Link to="/moreProperties">Click Here to go to Products</Link> </h6> <br />
                <div>---------OR-----------</div>
                <br />

                <h6> Want to manage/delete product? <Link to="/dashboard/manageProduct">Click Here to Manage Products</Link> </h6>

            </div>



        </div>
    );
};

export default AddProduct;