import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Elderly from "../images/Elderly.jpg";
import Pets from "../images/Pets.jpg";
import Property from "../images/Property.jpg";
import OddJobs from "../images/Paperwork.jpg";
import Logo from "../images/EnjoyHomeCareLogo3.png";

function HomePage() {


    return (

        <div className="App">

            {/* Header to the webpage with the logo, slogan, and contact information */}

            <div id="pageBody">

                <Header />


                <HomePageBody />

            </div>
        </div>);

}

function Header() {

    return (

        <header className="App-header">

            {/*}
            <h1 id="header">
                <p><i id="emphasizedEnjoy">Enjoy</i> Home Care</p>
            </h1>
            <p style={{ "fontSize": "30px", "marginTop": "15px", "textAlign": "left", "marginLeft": "5vw" }}><i>Care that you can trust</i></p>

            */}

            <div id="contactInfoHome">
                <p>enjoyhomecare@gmail.com</p>
                <p>336-552-4353</p>

            </div>

            <img src={Logo} id="homepageLogo" />

            <u id="aboutMe">About Us</u>



        </header>
    );



}

function HomePageBody() {

    return (

        <div id="bodyGridContainer">

            <p id="careMessage">How can we care for you?</p>

            {/* Each column contains a picture and corresponding link to different services */}


                <HomePageOption className="bodyRow1 bodyColumn1 bodyColumn1Landscape" linkDestination={"./senior-care"} picSource={Elderly} linkName={<p className="altFont">Senior Care</p>} />

                <HomePageOption className="bodyRow1 bodyColumn2 bodyColumn2Landscape" linkDestination={"./pet-care"} picSource={Pets} linkName={<p className="altFont">Pet Care</p>} />

                <HomePageOption className="bodyRow2 bodyColumn1 bodyColumn3Landscape" linkDestination={"./odd-jobs"} picSource={OddJobs} linkName={<p className="altFont">Odd Jobs</p>} />

                <HomePageOption className="bodyRow2 bodyColumn2 bodyColumn4Landscape" linkDestination={"./property-management"} picSource={Property} linkName={<p className="altFont">Property <br></br> Management</p>} />


        </div>);
        

}

function HomePageOption(props) {



    return (

        <div className={props.className}>
            <img className="image" src={props.picSource} alt="elderly" />
            <Link to={props.linkDestination}><button className="button" style={{ "fontSize": "20px", "height": "100px" }}>{props.linkName}</button></Link>

        </div>
    )

}




export default HomePage