import React from 'react';
const ForgetPassword = () => {
    return (
        <>
            <section>
                <div className="main-section">
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
                                        <h1 className=" mt-4 text-center">Did you forget your password?</h1>
                                        <p className="password-forget-p mt-1 text-center">Enter your email address and we will send you password reset link on your email.</p>
                                        <div className="px-5 mt-4">
                                            <div className="mb-3">
                                                <label for="exampleInputEmail1" className="form-label">User name</label>
                                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" />
                                            </div>
                                            <div className="mt-3 d-grid gap-2">
                                                <button type="submit" className="p-3 btn btn-primary">Request Reset Link</button>
                                            </div>
                                            <div className=" mb-4 text-center mt-3">
                                                <a className="ms-1  g-back" href="#">Back to Sign in</a>
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

export default ForgetPassword;