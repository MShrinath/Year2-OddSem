import React from "react";

const ChildComponent = (props) =>{
    return (
        <div>
            <h2>Name = {props.name}</h2>
            <h2>Age = {props.age}</h2>
            <h2>ID = {props.id}</h2>
        </div>
    );
};

export default ChildComponent;


// child to parent component props