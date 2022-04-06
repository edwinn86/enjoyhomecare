import DropDown from "./DropDown";
import { Link } from 'react-router-dom';
import Logo from "../images/EnjoyHomeCareLogo3.png"



function PageHeader() {




    return (<header className='pageHeader'>

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
            <p>336-549-7143</p>

        </div>

        <img src={Logo} className="pageLogo" />


    </header>);


}

export default PageHeader;