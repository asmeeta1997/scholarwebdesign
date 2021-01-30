import React from 'react';
const Register = () => {
    return ( 
        <>
        <section>
        <div className="section_register">
            <div className="container margin-css">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div className="card">
                            <form>
                                <div className="form-css">
                                    <header className="navbar navbar-light bg-light">
                                        <div className="container p-1 ms-4">
                                            <div className="main-nav">
                                                <h2 className="mt-2 ms-2">Scholar Web Application</h2>
                                            </div>
                                        </div>
                                    </header>
                                </div>
                                <h1 className=" mt-4 text-center">Register Page</h1>
                                <div className="px-5 mt-4">
                                    <div className="mb-3">
                                        <label for="exampleInputEmail1" className="form-label">Name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Full Name"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputEmail2" className="form-label">User name</label>
                                        <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Your Email"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputID" className="form-label ">Google Scholar Account</label>
                                        <input type="text" className="form-control" id="exampleInputID" placeholder="Your Google Scholar ID"/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label ">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="*********" />
                                    </div>
                                    <div className="mt-3 d-grid gap-2">
                                        <button type="submit" className="p-3 btn btn-primary">SIGN UP</button>
                                    </div> 
                                    <div className=" mb-4 text-end mt-3"> 
                                        <h6>Already A User ?<a className="ms-1 new-user" href="#">Login</a></h6>
                                    </div> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
     );
}
 
export default Register;