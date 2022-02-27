
import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../images/EnjoyHomeCareLogo3.png";
import DropDown from './DropDown';
import propertyManagement from "../images/PropertyManagement.jpg";

function PropertyManagementPage(props) {

    const service = props.typeOfCare;


    return (

        <div className='pageDiv'>

            <header className='pageHeader'>

                <DropDown />

                <ul className="nav">
                    <li><Link to={"../"}>Home</Link></li>
                    <li><Link to={"../senior-care"}>Senior Care</Link></li>
                    <li><Link to={"../pet-care"}>Pet Care</Link></li>
                    <li><Link to={"../odd-jobs"}>Odd Jobs</Link></li>
                    <li><Link to={"../property-management"}>Property Management</Link></li>

                </ul>

                <div className="contactInfoPage">
                    <p>enjoyhomecare@gmail.com</p>
                    <p>336-552-4353</p>

                </div>

                <img src={Logo} className="pageLogo" />


            </header>

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