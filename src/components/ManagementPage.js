import { useState } from "react";

function ManagementPage() {


    const [key, updateKey] = useState(1);


    if (key === 0) {

        return (
            <div id="loginComponent">


                <form style={{ "height": "6rem", "width": "35rem", "borderWidth": "0.15rem", "padding-top": "0.5rem" }}>

                    <label style={{ "margin-left": "0.4rem" }}>
                        Username:
                    </label>
                    <input type="text"></input>

                    <label style={{ "margin-left": "0.7rem" }}>
                        Password:
                    </label>
                    <input type="text"></input>
                    <button style={{ "height": "2rem", "width": "4rem", "borderRadius": "0", "position": "relative", "top": "0.6rem", "right": "0.2rem", "float": "right" }}>Login</button>
                </form>


            </div>
        );



    } else if (key === 1) {



        return (



            <div className="gridContainer">



                <FormTable />


            </div>

        );

    }


}


function FormTable() {


    const [forms, updateForms] = useState([]);



        if(forms.length === 0){

           
            updateForms([...forms, {name: "Bill", service: "Pet care", phone: "336-552-4353", email: "winring@yahoo.com", date: "4/6/2020"}]);




        }

        console.log(forms);

    return (

        <table id="formTable">


            <thead>
                <tr>

                    <th>Name</th>
                    <th>Service</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Date</th>

                </tr>

            </thead>

            <tbody>
                {forms.map(form => (

                    <tr>
                        <td>{form.name}</td>
                        <td>{form.service}</td>
                        <td>{form.phone}</td>
                        <td>{form.email}</td>
                        <td>{form.date}</td>

                    </tr>

                ))}





            </tbody>


        </table>
    );


}

export default ManagementPage