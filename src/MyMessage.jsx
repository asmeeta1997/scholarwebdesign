import React from 'react';
const MyMessage = () => {
    return (
        <>
            <div className="main-section mt-5">
                <h3 className="text-center">My Message</h3>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="mt-4 col-10">
                            <table className="table table-bordered">
                                <thead className="text-center">
                                    <tr className="table-color">
                                        <th scope="col">No</th>
                                        <th scope="col">Message Subject</th>
                                        <th scope="col">From</th>
                                        <th scope="col">Date Received</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td><a href="/">Click to view</a></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyMessage;