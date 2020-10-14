import React from 'react'
import SocialLogin from 'react-social-login'

import { Button } from "../Button";

class SocialButton extends React.Component {

    render() {
        return (
            <Button type="outline" className="mr-2" onClick={this.props.triggerLogin} {...this.props}>
              { this.props.children }
            </Button>
        );
    }
}

export default SocialLogin(SocialButton);