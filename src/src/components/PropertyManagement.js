
import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../images/EnjoyHomeCareLogo3.png";
import DropDown from './DropDown';
import propertyManagement from "../images/PropertyManagement.jpg";
import PageHeader from './PageHeader';

function PropertyManagementPage(props) {



    return (

        <div className='pageDiv'>

            <PageHeader />

            <div className='gridContainer'>




                <img src={propertyManagement} className="pageImage"></img>




                <div className="careObjectives">

                    <h3>Our property management services include:</h3>

                    <ul className="careObjectivesList">
                        <li>Rental leases</li>
                        <li>Showings and follow-ups</li>
                        <li>Point of contact for tenant issues</li>
                        <li>Scheduling groundskeeping and updates</li>

                    </ul>


                </div>

                <Form typeOfCare={props.typeOfCare} />


            </div>

        </div>


    );



}




export default PropertyManagementPage