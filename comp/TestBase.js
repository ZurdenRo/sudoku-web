import TestOne from "./TestOne";
import TestTwo from "./TestTwo";



const TestBase = ({children}) => {
    return ( 
        <div className="children-test">
            <TestOne/>
                {children}
            <TestTwo/>
        </div>
       
    );
}

export default TestBase