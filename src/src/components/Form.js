import { useState, useEffect } from 'react';

function Form(props) {

    const date = new Date();

    // Creates formValues, and then upon change modify respective values 

    const [formValues, setFormValues] = useState({ first: "", last: "", street: "", city: "", ZIP: "", phone: "", email: "", typeOfCare: props.typeOfCare, date: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`});
    
    // Callback for input onChange events
    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Error message upon form submission
    const [error, setError] = useState("");

   

    return (



        <form id="testID">

            <header className="formHeader">Request Our Care Services</header>

            <div className="formSegmentContainer">




                <div className="formSegment">

                    <label>
                        <h2>Name</h2>
                    </label>
                    <input className = "inputs" name="first" placeholder="First" type="text" value={formValues.first} onChange={handleChange}></input>
                    <input className = "inputs" name="last" placeholder="Last" type="text" value={formValues.last} onChange={handleChange}></input>

                </div>


                <div className="formSegment">
                    <label>
                        <h2> Address </h2>
                    </label>

                    <input className = "inputs" name="street" placeholder="Street" type="text" value={formValues.street} onChange={handleChange}></input>
                    <input className = "inputs" name="city" placeholder="City" type="text" value={formValues.city} onChange={handleChange}></input>
                    <input className = "inputs" id="zip" name="ZIP" placeholder="ZIP" type="text" value={formValues.ZIP} onChange={handleChange}></input>
                </div>


                <div className="formSegment">

                    <label>
                        <h2> Contact Information </h2>
                    </label>

                    <input className = "inputs" name="phone" placeholder="Phone" type="text" value={formValues.phone} onChange={handleChange}></input>
                    <input className = "inputs"  name="email" placeholder="Email" type="text" value={formValues.email} onChange={handleChange}></input>

                </div>

                <button id="submitButton" type="button" onClick={() => {submitForm(formValues, setError)}}>Submit</button>

            </div>

            <ErrorMessage error = {error} setError = {setError}/>

        </form>

    );

    

}

// Sets error message if a user attempts to submit a form with missing information

function ErrorMessage(props){

    if(props.error === ""){

       return null;

    }

    setTimeout(() => {

        props.setError("");

    }, 2000);

    return (<p id="formError">Please fill out the required fields *</p>);
}


// Checks for errors, then submits form values to backend for database assimilation

function submitForm(formValues, setError){

    
    // .trim() checks to see if any values are empty

    
    if(formValues.first.trim() === "" || formValues.last.trim() === "" || (formValues.phone.trim() === "" && formValues.email.trim() === "")){

        setError("Error");

    }
    
    

    fetch("https://apiamz.enjoyhomecare.com/Forms", {

        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formValues)
    })
        .then(res=>res.json())
        .then((result) => {



            console.log(result);
        }
        

        )
        

}

export default Form