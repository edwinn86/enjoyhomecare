
import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../Logo.png";

function PetCarePage() {


    const serviceName = "Pet Care";


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

                <h3>Our pet care services include:</h3>

                <ul className="careObjectivesList">
                    <li>Pet sitting, including overnight services</li>
                    <li>Feeding, walking, and general care</li>
                    <li>Veterenary and grooming appointments</li>
                    <li>Personalized care upon request</li>
                    <br></br>
                    <li><i>*All care is given with extra attention and love</i></li>

                </ul>


            </div>

            <Form />


        </div>



    );



}



export default PetCarePage