import './Card.css';
import React from 'react';
let Card=(props)=>{
    const classes = ' card ' + props.className;
return <div className={classes}>{props.children}</div> // this property is used to specify whatever is written between the opening and closing tag of the component
    //                                           and directly not replaces the code of component in it 


}
export default Card;