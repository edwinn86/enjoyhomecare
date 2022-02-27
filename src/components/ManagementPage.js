import { useState } from "react";
import dropDown from "../images/DropdownWhite.png";
import * as XLSX from 'xlsx';

function ManagementPage() {


    const [key, updateKey] = useState(0);
    const [username, updateUsername] = useState('');
    const [password, updatePassword] = useState('');
    const [forms, updateForms] = useState([]);

    console.log(forms);


    if (!(sessionStorage.getItem('login') === 'true')) {

        return (
            <div id="loginComponent">


                <form style={{ "height": "6rem", "width": "40rem", "borderWidth": "0.15rem", "padding-top": "0.5rem" }}>

                    <label style={{ "margin-left": "0.4rem" }}>
                        Username:
                    </label>
                    <input type="text" onChange={(e) => { updateUsername(e.target.value) }}></input>

                    <label style={{ "margin-left": "0.7rem" }}>
                        Password:
                    </label>
                    <input type="text" onChange={(e) => { updatePassword(e.target.value) }}></input>
                    <button style={{ "height": "2rem", "width": "4rem", "borderRadius": "0", "position": "relative", "top": "0.6rem", "right": "0.2rem", "float": "right" }}
                        onClick={() => { login(username, password) }}>Login</button>
                </form>


            </div>
        );



    } else {



        return (



            <div className="gridContainerManagement">



                <FormTable forms={forms} updateForms={updateForms} />



                <button style={{ "height": "2rem", "width": "4rem", "borderRadius": "0", "position": "relative", "top": "2rem", "left": "2rem", "float": "right" }} onClick={() => {exportToXSLX(forms)}}>Export</button>
            </div>



        );

    }



    function login(username, password) {


        fetch('https://apiamz.enjoyhomecare.com/management',
            {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ username: username, password: password })
            }
        ).then((res) => {
            if (res.status === 404) {
                console.log("Incorrect login");
                return;
            } else {

                return res.json();
            }

        })
            .then((res) => {
                if (res === undefined) {
                    return;
                }

                sessionStorage.setItem('login', "true");
                updateKey(1);

            })
    }


    function exportToXSLX(data) {


        const workBook = XLSX.utils.book_new(); // create a new blank book
        const workSheet = XLSX.utils.json_to_sheet(data);
        let wscols = [{ wpx: 150 }, { wpx: 200 }, { wpx: 150 }, { wpx: 150 }];
        workSheet['!cols'] = wscols; // set cell width
        XLSX.utils.book_append_sheet(workBook, workSheet, 'data'); // add the worksheet to the book
        return XLSX.writeFile(workBook, "forms"); // initiate a file download in browser

    }


}


function FormTable(props) {

    console.log('in');

    if (props.forms.length === 0) {

        fetch('https://apiamz.enjoyhomecare.com/forms', {

            method: "GET",

        }).then((res) => {

            return res.json()
        }
        )
            .then((result) => {

                console.log('in');
                props.updateForms(result);

            })




    }


    /* First, Last, Street, City, ZIP, Phone, Email, TypeOfCare, Date */

    return (

        <table id="formTable">


            <thead>
                <tr>

                    <th>First</th>
                    <th>Last</th>
                    <th>Street</th>
                    <th>City</th>
                    <th>ZIP</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Date</th>
                </tr>

            </thead>

            <tbody>
                {props.forms.map(form => (

                    <tr>
                        <td>{form.first}</td>
                        <td>{form.last}</td>
                        <td>{form.street}</td>
                        <td>{form.city}</td>
                        <td>{form.ZIP}</td>
                        <td>{form.phone}</td>
                        <td>{form.email}</td>
                        <td>{form.typeOfCare}</td>
                        <td>{form.date}</td>

                    </tr>

                ))}





            </tbody>


        </table>
    );



}


export default ManagementPage