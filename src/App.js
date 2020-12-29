import React from 'react';

import './App.css';
import Mail from './Mail'
import EmailList from './EmailList'
import Header from './Header'
import SideBar from './SideBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SendMail from './SendMail'
import { selectSendMessageIsOpen } from './features/mailSlice';
import {useSelector} from 'react-redux'


function App() {

const sendMessageIsOpen  = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
    
    <div className="App">
      <Header/>
      <div className="app_body">
      <SideBar/>
      <Switch>
        <Route path ="/mail">
          <Mail/>
        </Route>
        <Route path ="/">
          <EmailList/>
        </Route>
</Switch>
      
     </div> 
   {sendMessageIsOpen &&  <SendMail/> }
    </div>
    </Router>
  );
}

export default App;
