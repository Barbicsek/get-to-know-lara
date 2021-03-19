import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {Form, select, Col} from 'react-bootstrap';
import {Button} from "@material-ui/core";;


function ComposeMail() {
    const history = useHistory();
    const [mails, setMails] = useState({})
    const [userId, setUserId] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    let result;
    const fetchEmailAddresses = async () => {
        await fetch('http://localhost/get-to-know-lara/get-to-know-lara-backend/public/api/mail/compose', {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')

            },
        })
            .then((response) => {
                return result = response.json();

            })
            .then((data) => {
                setMails(data["mail"])

            })

    }

    useEffect(() => {
        fetchEmailAddresses();
    }, [])

    async function sendEmail(){
        let item = {userId, subject, message};

        await fetch("http://localhost/get-to-know-lara/get-to-know-lara-backend/public/api/mail/compose", {
            method: 'POST',
            body:JSON.stringify(item),
            headers: {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')


            }
        })


        history.push("/mail/sent");
    }

    return (
        <div>
            <Form>
                <Form.Row>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Email to: </Form.Label>

                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => { setUserId(e.target.value) }}>
                            <option selected>Open this select menu</option>
                            {Object.keys(mails).map(key => (
                                <option value={mails[key].id}>{mails[key].email}</option>

                            ))}
                        </select><br/>

                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="email" placeholder="Enter subject" onChange={(e) => setSubject(e.target.value)} value={subject}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type="email" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message} />
                    </Form.Group>

                </Form.Row>

            </Form>
            <Button onClick={sendEmail} type="submit" variant="contained">
                Send
            </Button>


        </div>
    );
}

export default ComposeMail;