import { BrowserRouter,
    Routes, Route ,
    // Switch, 
    // NavLink, 
    Link } from 'react-router-dom';
import Message from './Message';
import Overview from './Overview';
import Sidebar from './Sidebar';

function Dash() {
    const activePage = 'overview'
    return (
        <>
            {/* Page Wrapper */}
            <div id="wrapper">
            {/* <Sidebar/>  */}
            <Overview/>
                
             
            </div>
            {/* End of Page Wrapper */}
    
        </>

    )
}

export default Dash