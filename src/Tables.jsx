import React from 'react';

const Tables = () => {
    return ( 
        <>
        <div className="main-section mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-8">
                            <table className="table table-bordered">
                                <thead>
                                    <tr className="table-color">
                                        <th scope="col">Personal stats</th>
                                        <th scope="col">All</th>
                                        <th scope="col">Last week</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Citations</th>
                                        <td>0</td>
                                        <td>0</td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">H-Index</th>
                                        <td>0</td>
                                        <td>0</td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Full text download</th>
                                        <td>0</td>
                                        <td>0</td>
                                        
                                    </tr>
                                    <tr>
                                        <th scope="row">Profile view</th>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Publication views</th>
                                        <td>0</td>
                                        <td>0</td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-4 col-12">
                            <table className="table table-bordered">
                                <thead className="text-center">
                                    <tr className="table-color">
                                        <th scope="col">No</th>
                                        <th scope="col">Article Name</th>
                                        <th scope="col">Cite By</th>
                                        <th scope="col">Date Cited</th>
                                    </tr>
                                </thead>
                                <tbody class="text-center">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td></td>
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
 
export default Tables;