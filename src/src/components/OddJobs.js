
import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../images/EnjoyHomeCareLogo3.png";
import DropDown from './DropDown';
import oddJobs from "../images/OddJobs.jpg";
import PageHeader from './PageHeader';

function OddJobsPage(props) {


    return (

        <div className='pageDiv'>

            <PageHeader />

            <div className='gridContainer'>



                <img src={oddJobs} className="pageImage"></img>






                <div className="careObjectives">

                    <h3>Our odd job care services include:</h3>

                    <ul className="careObjectivesList">
                        <li>Grocery Shopping</li>
                        <li>Prescription pickup</li>
                        <li>Office assistance</li>
                        <li>Taxi services</li>
                        <li>And more!</li>

                    </ul>


                </div>

                <Form typeOfCare={props.typeOfCare} />


            </div>

        </div>


    );



}




export default OddJobsPage