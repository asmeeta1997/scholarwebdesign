import React from 'react';
const UpdateAlert = () => {
    return ( 
        <>
        <div className="mt-5 main-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card">
                            <form>
                                <div className="form-css">
                                    <header className="navbar navbar-light bg-light">
                                        <div className="container p-1 ms-4">
                                            <div className="main-nav">
                                                <h2 className="text-center mt-2 ms-2">Update Alert</h2>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                                <div className="px-5 mt-4">
                                    <div className="mb-3">
                                        <label for="exampleInputName1" className="form-label">Alert Name</label>
                                        <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail" className="form-label ">Email Address</label>
                                        <input type="text" className="form-control" id="exampleInputEmail" placeholder="Email" />
                                    </div>
                                    <div className="select_group mb-2">
                                        <i className="fa fa-chevron-down"></i>
                                        <select name="" className="colors form-control">
                                            <option value="" selected="Daily">Daily</option>
                                            <option value="" selected="">Weekly</option>
                                            <option value="" selected="">Monthly</option>
                                        </select>
                                    </div>
                                    <div className="mt-3 mb-4 d-grid gap-2">
                                        <button type="submit" className="p-3 btn btn-primary">Update</button>
                                    </div>  
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
      );
}
 
export default UpdateAlert;