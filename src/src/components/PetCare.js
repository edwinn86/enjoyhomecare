
import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../EnjoyHomeCareLogo3.png";
import DropDown from './DropDown';

function PetCarePage(props) {


    console.log(props.typeOfCare)


    return (

        <div className='gridContainer'>


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






            <div className="careObjectives">

                <h3>Our pet care services include:</h3>

                <ul className="careObjectivesList">
                    <li>Pet sitting, including overnight services</li>
                    <li>Feeding, walking, and general care</li>
                    <li>Veterenary and grooming appointments</li>
                    <li>Personalized care upon request</li>
                

                </ul>


            </div>

            <Form typeOfCare = {props.typeOfCare}/>


        </div>



    );



}



export default PetCarePage