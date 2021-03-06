import React from 'react';
const MyAccount = () => {
    return (
        <>
            <div className="main-section mt-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="card">
                                <form>
                                    <div className="form-css">
                                        <header className="navbar navbar-light bg-light">
                                            <div className="container ms-4">
                                                <div className="main-nav">
                                                    <h2 className="text-center mt-2 ms-2">My Account</h2>
                                                </div>
                                            </div>
                                        </header>
                                    </div>
                                    <div className="row flex-md-row-reverse">
                                        <div className="mt-5 col-lg-6 col-sm-12">
                                            <div className="text-center myaccount-img">
                                                <img className="image-account" src="https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo" />
                                            </div>
                                            <div className="input-group account-photo mt-4 ms-5">
                                                <input type="file" className="form-control" id="inputGroupFile02" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 p-3">
                                            <div className="px-5 mt-4">
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail1" className="form-label">First Name:</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your First Name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleInputEmail2" className="form-label">Last name:</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Your Last Name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleInputID" className="form-label ">Email Address:</label>
                                                    <input type="text" className="form-control" id="exampleInputID" placeholder="Your Email" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label ">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*********" />
                                                </div>
                                                <div>
                                                    <button type="submit" className="p-3 btn btn-primary">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <hr />
                                <form action="">
                                    <div className="row">
                                        <div className="col-md-10 col-12 px-5">
                                            <h3 className="text-center m-3 mb-4">Change Password</h3>
                                            <div className="card-details">
                                                <div className="row">
                                                    <div className="col-md-4 col-sm-10">
                                                        <label for="">Old Password:</label>
                                                        <div className="input__group  mar-btm">
                                                            <input type="password" name="old_password" id="old_password" className="form-height form-control" placeholder="**********" />
                                                        </div>

                                                    </div>
                                                    <div className="col-md-4 col-sm-10 ">
                                                        <label for="">New Password:</label>
                                                        <div className="input__group  mar-btm">
                                                            <input type="password" name="new_password" id="new_password" className="form-height form-control" placeholder="**********" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-sm-10 mb">
                                                        <label for="">Confirm Password:</label>
                                                        <div className="input__group  mar-btm">
                                                            <input type="password" name="confirm_password" id="confirm_password" className="form-height form-control" placeholder="*********" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                    <button type="submit" className="mt-3 mb-3 p-3 btn btn-primary">Change</button>
                                                </div>
                                                </div>
                                               
                                            </div>
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

export default MyAccount;