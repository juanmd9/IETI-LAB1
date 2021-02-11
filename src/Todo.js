import React from 'react';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }   

    render() {
        return ( 
            <div>
                <h1 style={{color: "red"}}>{this.props.text} </h1> 
                <h3>{this.props.priority}</h3>
                <p>{this.props.dueDate}</p>
            </div> 
          //Add your code here to represent a TODO
        );
    }

}