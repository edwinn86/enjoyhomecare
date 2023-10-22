import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../images/EnjoyHomeCareLogo3.png";
import DropDown from './DropDown';
import seniorCare from "../images/SeniorCareResized.jpg";
import PageHeader from './PageHeader';

function SeniorCarePage(props) {

    const service = props.typeOfCare;







    return (

        <div className='pageDiv'>

            <PageHeader />
            <div className='gridContainer'>

                <img src={seniorCare} className="pageImage"></img>



                <div className="careObjectives">

                    <h3>Our senior care services include:</h3>

                    <ul className="careObjectivesList">
                        <li>Assistance with bathing, cleaning, and personal care</li>
                        <li>Meal prep and routine housekeeping </li>
                        <li>Transportation services</li>
                        <li>Companionship</li>
                        <li>Assistance with exercise and therapy</li>


                    </ul>


                </div>

                {/* <Form typeOfCare={props.typeOfCare} /> */}


            </div>
        </div>


    );



}



export default SeniorCarePage