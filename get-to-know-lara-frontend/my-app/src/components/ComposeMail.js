import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';



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
            <div className="modal-body">
                <form className="form" role="form" autoComplete="off">
                    <div className="form-row py-2">
                        <label htmlFor="sendTo" className="col-sm-2 mb-0">
                            Email To
                        </label>

                        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e) => { setUserId(e.target.value) }}>
                                    <option selected>Select email...</option>
                                    {Object.keys(mails).map(key => (
                                        <option value={mails[key].id}>{mails[key].email}</option>

                                    ))}
                        </select><br/>
                    </div>

                    <div className="form-row py-2">
                        <label htmlFor="subject" className="col-sm-2 mb-0">
                            Subject
                        </label>
                        <div className="col">
                            <input
                            onChange={(e) => setSubject(e.target.value)} value={subject}
                            type="text"
                            name="subject"
                            id="subject"
                            className="form-control"
                            required=""
                            />
                        </div>
                    </div>

                    <div className="form-row py-2">
                        <label htmlFor="message2" className="col-sm-2 mb-0">
                            Message
                        </label>
                        <div className="col">
                            <textarea
                            onChange={(e) => setMessage(e.target.value)} value={message}
                            rows="6"
                            name="message2"
                            id="message2"
                            className="form-control"
                            required=""
                            />
                        </div>
                    </div>
                    <div className="form-row py-2">
                    </div>
                </form>

                <div className="col py-1">
                    <button
                      onClick={sendEmail}
                      type="submit"
                      className="btn btn-secondary float-right ml-1"
                    >
                      Send Message
                    </button>
                </div>
            </div>
  
        </div>
    );
}

export default ComposeMail;