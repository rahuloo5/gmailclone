import { Button } from '@material-ui/core'
import React from 'react'
import {useForm} from 'react-hook-form'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { closeSendMessage } from './features/mailSlice';
import {useDispatch} from 'react-redux';
import {db} from './firebase';
import firebase from "firebase"

function SendMail() {

    const dispatch =  useDispatch()

    const {register,handleSubmit, watch ,errors} = useForm();
    const onSubmit=(formData)=>{
        console.log(`gukgkihl ${formData}`)
        console.log("munna dunna")

        db.collection('emails').add({
            to : formData.to,
            subject:formData.subject,
            message:formData.message,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })

        dispatch(closeSendMessage());

    }
    return (
        <div className="send_mail">
            <div className="sendMail_header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail_close"
                onClick={()=>dispatch(closeSendMessage())}
                />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" placeholder="To" type="text"
                 ref={register({required:true})}/>
                
                <input name ="subject" placeholder ="Subject" type="text" ref={register({required:true})}/>
                <input name="message" placeholder="Message" type="text" className="sendmail_message"
                ref={register({required:true})}
                />
               
                <div className="sendMail_options">
                    <Button type="submit" className="sendmail_button">Send</Button>
                </div>
            </form>

        </div>
    )
}

export default SendMail
