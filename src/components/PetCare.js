
import Form from './Form';
import { Link } from 'react-router-dom';
import Logo from "../images/EnjoyHomeCareLogo3.png";
import DropDown from './DropDown';
import DogsPic from "../images/PetCareDogsResized.jpg";
import PageHeader from './PageHeader';

function PetCarePage(props) {



    return (
        <div className='pageDiv'>
            <PageHeader />


            <div className='gridContainer'>



                <img src={DogsPic} className="pageImage" />


                <div className="careObjectives">

                    <h3>Our pet care services include:</h3>

                    <ul className="careObjectivesList">
                        <li>Pet sitting, including overnight services</li>
                        <li>Feeding, walking, and general care</li>
                        <li>Veterenary and grooming appointments</li>
                        <li>Personalized care upon request</li>


                    </ul>


                </div>

                {/* <Form typeOfCare={props.typeOfCare} /> */}


            </div>

        </div>

    );



}



export default PetCarePage