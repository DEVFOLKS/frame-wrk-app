import React from "react";
import PropTypes from 'prop-types';

const Breadcrumbs = ({items, separator}) => {
    const bc = items.map( ( item ) => {
        if (items[items.length-1] === item ){
            return (<span key={item}><span >{item}</span> </span>)
        }else {
            return (<span key={item}><span >{item}</span> <span  >{ separator}</span></span>)
        }
    });

    return(
        <div> {bc} </div>
    )
}

Breadcrumbs.propTypes = {
    items : PropTypes.array,
    separator : PropTypes.string
}
export default Breadcrumbs;
