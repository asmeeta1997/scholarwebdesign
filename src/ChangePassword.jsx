import React from 'react';
const ChangePassword = () => {
    return (
        <>
        <div className="main-section mt-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="card">
                                    <form>
                                        <div className="form-css">
                                            <header className="navbar navbar-light bg-light">
                                                <div className="container ms-4">
                                                    <div className="main-nav">
                                                        <h4 className="mt-2 ms-2">Change Password</h4>
                                                    </div>
                                                </div>
                                            </header>
                                            <div className="mt-3 change-password-main">
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword1" className="form-label ">Old Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*********" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword2" className="form-label ">New Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="*********" />
                                                </div>
                                                <div className="mb-3">
                                                    <label for="exampleInputPassword3" className="form-label ">Confirm Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword3" placeholder="*********" />
                                                </div>
                                                <div className=" mb-4 mt-3">
                                                    <button type="submit" className="p-3 btn btn-primary">Save</button>
                                                    <button type="submit" className=" color-cng p-3 ms-3 btn btn-primary">Cancel</button>
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

export default ChangePassword;