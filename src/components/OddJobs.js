
import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../Logo.png";

function OddJobsPage() {


    const serviceName = "Odd jobs";

    return (

        <div className='gridContainer'>


            <header className='pageHeader'>


                <ul class="nav">
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

                <h3>Our odd job care services include:</h3>

                <ul className="careObjectivesList">
                    <li>Grocery Shopping</li>
                    <li>Prescription pickup</li>
                    <li>Office assistance</li>
                    <li>Taxi services</li>
                    <li>And more!</li>

                </ul>


            </div>

            <Form />


        </div>



    );



}




export default OddJobsPage