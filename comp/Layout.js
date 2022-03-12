import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div className="layout">
            
                {children}
            
        </div>


    );
}


export default Layout