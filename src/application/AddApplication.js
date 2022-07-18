import React from "react";
import Layout from "../layout/Layout";
import {useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form";
import axios from "axios";

const AddApplication = (props) => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const navigate = useNavigate();
   
    const onSubmit = (data) => {
        let apiUrl = 'https://62d4faa8cd960e45d45e81a5.mockapi.io/api/v1/users_table';
        axios.post(apiUrl, data)
      .then((response) => {
        console.log(response.data);
        navigate('/application-list');
      });
    }

    return (
        <Layout>
            <div class="mt-4">
                <div class="row g-4">
                    <div class="col-12 col-xl-12 order-1 order-xl-0">



                        <div class="card shadow-none border border-300 my-4" data-component-card>
                            <div class="card-header p-4 border-bottom border-300 bg-soft">
                                <div class="row g-3 justify-content-between align-items-center">
                                    <div class="col-12 col-md">
                                        <h4 class="text-900 mb-0" data-anchor>Add Application</h4>
                                    </div>

                                </div>
                            </div>
                            <div class="card-body p-0">

                                <div class="p-4 code-to-copy">
                                    <form class="row g-3" onSubmit={handleSubmit(onSubmit)}>
                                        <div class="col-md-4"><label class="form-label" for="inputEmail4">Registered Company Name</label> <input class="form-control" {...register('company_name',{required:true})} id="inputEmail4" type="text" placeholder="Registered Company Name" />
                                        {errors.company_name && <span className="error">The company name field is required</span>}
                                        </div>
                                        <div class="col-md-4"><label class="form-label" for="inputPassword4">Website</label> <input class="form-control" id="inputPassword4" {...register('website',{required:true})} type="text" placeholder="httt://example.com" />
                                        {errors.website && <span className="error">The website field is required</span>}
                                        </div>
                                        
                                       
                                        <div class="col-md-4"><label class="form-label" for="inputZip">Contact Email Address</label> <input class="form-control" id="inputZip" {...register('email',{required:true})} placeholder="Contact Email Address" />
                                        {errors.email && <span className="error">The email field is required</span>}
                                        </div>
                                        <div class="col-md-4"><label class="form-label" for="inputZip">Contact Phone Number</label> <input class="form-control" id="inputZip" {...register('phone',{required:true})} placeholder="Contact Phone Number" />
                                        {errors.phone && <span className="error">The contact number field is required</span>}
                                        </div>
                                       

                                        

                                        <div class="col-12">
                                            <button class="btn btn-primary" style={{float:"right"}} type="submit">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default AddApplication;