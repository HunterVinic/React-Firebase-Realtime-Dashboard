import React from "react";
import StartFirebase from "../firebaseConfig";
import {ref, set, get, upadte, remover, child} from "firebase/database";
import "./index.css";

export class Crud extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            db: '',
            username: '',
            fullname: '',
            phonenumber: '',
            dob:''
        }
        this.interface = this.interface.bind(this);

    }

    componentDidMount(){
        this.setState({
            db:StartFirebase()
        });
    }

}