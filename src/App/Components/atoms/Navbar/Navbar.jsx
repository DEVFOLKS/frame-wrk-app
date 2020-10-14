import React from "react";
import PropTypes from "prop-types";

const navBar = ({items, classes}) => (
    <header className={classes}>
        <nav className="flex">
            <div className="">hamburger icon comp</div>
            <div >logo comp</div>
            <div className="flex justify-end">
                <ul className="flex">
                    {items.map( (item) => {
                        return (
                            <li key={item.title} className="mr-6">
                                <a className="text-blue-500 hover:text-blue-800" href={item.path}>{item.title}</a>
                            </li>
                        )
                        })
                    }
                </ul>
            </div>
        </nav>
    </header>
);

navBar.propTypes = {
    items : PropTypes.array.isRequired,
    classes : PropTypes.object
}

export default navBar;
