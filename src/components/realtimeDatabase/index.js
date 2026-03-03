import StartFirebase from "../firebaseConfig";
import React from "react";
import {ref, onValue } from 'firebase';

const db = StartFirebase();

export class RealtimeData extends React.Component{
    constructor(){
        super();
        this.state ={
            tableData:[]
        }
    }

    componentDidMount(){
        constdbRef = ref(db,'Customer');

        onValue(dbRef, (snapshot)=>{
            let records =[];
            snapshot.forEach(childSnapshot =>{
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({"key": keyName,"data":data});
            });
            this.setState({tableData: records});
        });
    }

    render(){
        return(
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableData.map((row,index) =>{
                        return(
                        <tr>
                            <td>{index}</td>
                            <td>{row.key}</td>
                            <td>{row.data.HUMIDITY}</td>
                            <td>{row.data.MotionSensor}</td>
                            <td>{row.data.TEMPERATURE}</td>
                        </tr>
                        )
                    })}

                </tbody>
            </Table>
        )
    }
}
