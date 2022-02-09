import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../EnjoyHomeCareLogo3.png";

function SeniorCarePage(props) {

    const service = props.typeOfCare;


    return (

        <div className='gridContainer'>


            <header className='pageHeader'>


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






            <div className="careObjectives">

                <h3>Our senior care services include:</h3>

                <ul className="careObjectivesList">
                    <li>Assistance with bathing, cleaning, and personal care</li>
                    <li>Meal prep and routine housekeeping </li>
                    <li>Transportation services</li>
                    <li>Companionship</li>
                    <li>Assistance with exercise and therapy</li>
                    <br></br>
                    <li><i>*All care is given with extra attention and love</i></li>

                </ul>


            </div>

            <Form typeOfCare = {props.typeOfCare}/>


        </div>



    );



}



export default SeniorCarePage