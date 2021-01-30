import React from 'react';
const ManageAlert = () => {
    return (
        <>
        <div className="main-section mt-5">
        <h3 className="text-center">Manage Alerts</h3>
        <div className="container">
            <div className="row justify-content-center">
                <div className="mt-4 col-10">
                    <table className="table table-bordered">
                        <thead className="text-center">
                            <tr className="table-color">
                                <th scope="col">No.</th>
                                <th scope="col">Alert Name</th>
                                <th scope="col">Manage Alert</th>
                                <th scope="col">Delete Alert</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            <tr>
                                <th scope="row">1</th>
                                <td>Citation Count</td>
                                <td><a href="/">Update</a></td>
                                <td><a href="/">Delete</a></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>H-Index</td>
                                <td><a href="/">Update</a></td>
                                <td><a href="/">Delete</a></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Profile View</td>
                                <td><a href="/">Update</a></td>
                                <td><a href="/">Delete</a></td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>Publication View</td>
                                <td><a href="/">Update</a></td>
                                <td><a href="/">Delete</a></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>PDF Report</td>
                                <td><a href="/">Update</a></td>
                                <td><a href="/">Delete</a></td>
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
 
export default ManageAlert;