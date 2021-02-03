import React from 'react';
const NavBar = () => {
    return ( 
        <>
         <header>
                <nav className="navbar bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand main">Scholar Web Application</a>
                        <form className="d-flex navbar-a">
                           <img className="image-nav" src="https://cdn-sharing.adobecc.com/id/urn:aaid:sc:US:658a58e3-815b-4c26-919e-6aaf6029fafd;version=0?component_id=71c3b820-9e11-4267-b329-269e2c943768&api_key=CometServer1&access_token=1612039430_urn%3Aaaid%3Asc%3AUS%3A658a58e3-815b-4c26-919e-6aaf6029fafd%3Bpublic_9e51bb256aa0dd36926b38c3bf83addcc437ea24" alt="picture"/> <a className="nav-link" href="/">Hi, Asmita</a>
                            <a className="nav-link active" aria-current="page" href="/">Set Alert</a>
                            <a className="nav-link" href="/">Help</a>
                            <a className="nav-link" href="/">Logout</a>
                        </form>
                    </div>
                </nav>
            </header>
        </>
     );
}
 
export default NavBar;