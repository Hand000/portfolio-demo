import React from 'react';

interface PortfolioProps {

}

interface PortfolioState {

}

export default class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
    constructor(props: PortfolioProps) {
        super(props)
    }

    render() {
        return (
            <div>
                Portfolio
            </div>
        );
    }
}