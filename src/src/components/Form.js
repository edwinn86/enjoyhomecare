import { useState, useEffect } from 'react';

function Form(props) {

    const date = new Date();


    const [formValues, setFormValues] = useState({ first: "", last: "", street: "", city: "", ZIP: "", phone: "", email: "", typeOfCare: props.typeOfCare, date: `${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`});
    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log(formValues);




    return (



        <form>

            <header className="formHeader">Request Our Care Services</header>

            <div className="formSegmentContainer">




                <div className="formSegment">

                    <label>
                        <h2>Name</h2>
                    </label>
                    <input name="first" placeholder="First" type="text" value={formValues.first} onChange={handleChange}></input>
                    <input name="last" placeholder="Last" type="text" value={formValues.last} onChange={handleChange}></input>

                </div>


                <div className="formSegment">
                    <label>
                        <h2> Address </h2>
                    </label>

                    <input name="street" placeholder="Street" type="text" value={formValues.street} onChange={handleChange}></input>
                    <input name="city" placeholder="City" type="text" value={formValues.city} onChange={handleChange}></input>
                    <input id="zip" name="ZIP" placeholder="ZIP" type="text" value={formValues.ZIP} onChange={handleChange}></input>
                </div>


                <div className="formSegment">

                    <label>
                        <h2> Contact Information </h2>
                    </label>

                    <input name="phone" placeholder="Phone" type="text" value={formValues.phone} onChange={handleChange}></input>
                    <input name="email" placeholder="Email" type="text" value={formValues.email} onChange={handleChange}></input>

                </div>

            </div>

            <button className="submitButton" type="button" onClick={() => {submitForm(formValues, props.typeOfCare)}}>Submit</button>

        </form>

    );

    

}


function submitForm(formValues){

    

    
    if(formValues.first.trim() === ""){

        console.log("First name is required");
        
    } else if (formValues.last.trim() === ""){

        console.log("First name is required");

    } else if (formValues.phone.trim() === "" && formValues.email.trim() === ""){

        console.log("Phone number or email is reqiured");
    }
    

    fetch("http://localhost:3000/Forms", {

        method: "POST",
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(formValues)
    })
        .then(res=>res.json())
        .then((result) => {



            console.log(result)
        }
        

        )
        


    
        



}

export default Form