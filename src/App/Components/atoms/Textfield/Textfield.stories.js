import React from 'react';

import { Textfield } from "../Textfield";
import "../../../assets/styles/main.css";

export default {
    title: 'Textfield',
    component: Textfield,
};

export const showcase = () =>
    <div>
        <div className="flex flex-col p-12">
            <div>
                <Textfield
                    size="sm"
                    type="primary"
                    label="Title goes here"
                    placeHolder="Enter Placeholder"
                    error={"Please Enter a value"}
                />
            </div>

            <div className="py-12">
                <Textfield
                    size="sm"
                    type="red"
                    label="Title goes here"
                    placeHolder="Enter Placeholder"
                    error={"Please Enter a value"}
                />
            </div>

            <div>
                <Textfield
                    size="sm"
                    type="green"
                    label="Title goes here"
                    placeHolder="Enter Placeholder"
                    error={"Please Enter a value"}
                />
            </div>
        </div>
    </div>
;


