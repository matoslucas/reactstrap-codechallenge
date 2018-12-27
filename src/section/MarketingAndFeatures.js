import React, { Component } from 'react';

import { Container } from 'reactstrap';
import Marketing from './Marketing'
import Features from './Features'


class MarketingAndFeatures extends Component {
    render() {
        return (
            <Container className="marketing">
                <Marketing />
                <Features />
            </Container>
        )
    }
}

export default MarketingAndFeatures;