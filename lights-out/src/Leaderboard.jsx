import React, { useState } from 'react';
import "./Leaderboard.css"
import Form from './Form'
import "./Form.css";

function Leaderboard(props) {
    const [obj,setObj]=useState([])
    

    const axios = require("axios")
    axios({
    url: 'http://127.0.0.1:8000/graphql/',
    method: 'post',
    data: {
        query: `
        query{data {Name Wins Loses}}
        `
    }
    }).then((result) => setObj((result.data['data']['data'])))
    .then((console.log(obj)));
    console.log(props)


    return(
        // return a leaderboard using the html table tag
        // data should NOT be hardcoded, should be fetch using graphql from localhost:8000/graphql/
        // The styling is not a priority. You can refer to SecondStage.png but not necessary to be similar
        <div className="container">
            <Form hasWon={props}/>
            <h1>Scores</h1>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Wins</td>
                    <td>Loses</td>
                </tr>
                </thead>
                <tbody>
                    {
                        obj.map((item) => (
                            <tr key={item.Name}>
                                <td>{item.Name}</td>
                                <td>{item.Wins}</td>
                                <td>{item.Loses}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {props.done===0 ? <div class="flux3">Tries Left :{props.total_tries}</div> : ''}
        </div>
    );
}


export default Leaderboard;