import { useState, useEffect } from 'react';

function Form() {


    const [state, setState] = useState({ fName: "", lName: "", street: "", city: "", ZIP: "", phone: "", email: "" });
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };




    return (



        <form>

            <header className="formHeader">Request Our Care Services</header>

            <div className="formSegmentContainer">




                <div className="formSegment">

                    <label>
                        <h2>Name</h2>
                    </label>
                    <input name="fName" placeholder="First" type="text" value={state.fName} onChange={handleChange}></input>
                    <input name="lName" placeholder="Last" type="text" value={state.lName} onChange={handleChange}></input>

                </div>


                <div className="formSegment">
                    <label>
                        <h2> Address </h2>
                    </label>

                    <input name="street" placeholder="Street" type="text" value={state.street} onChange={handleChange}></input>
                    <input name="city" placeholder="City" type="text" value={state.city} onChange={handleChange}></input>
                    <input id="zip" name="ZIP" placeholder="ZIP" type="text" value={state.ZIP} onChange={handleChange}></input>
                </div>


                <div className="formSegment">

                    <label>
                        <h2> Contact Information </h2>
                    </label>

                    <input name="phone" placeholder="Phone" type="text" value={state.phone} onChange={handleChange}></input>
                    <input name="email" placeholder="Email" type="text" value={state.email} onChange={handleChange}></input>

                </div>

            </div>

            <button className="submitButton" type="submit">Submit</button>

        </form>

    );

}

export default Form