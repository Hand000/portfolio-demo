import React from 'react';

import '../style/collage.css';

interface CollageProps {
    background: string;
    title?: string;
    caption: string;
    left?: boolean;
}

interface CollageState {

}

export default class Collage extends React.Component<CollageProps, CollageState> {
    constructor(props: CollageProps) {
        super(props)
    }

    render() {
        return (
            <div className='collage-container'>
                <img className='collage-image' src={this.props.background}/>
                <div className={`collage-caption ${this.props.left ? 'collage-caption-left' : 'collage-caption-right'}`}>
                    { this.props.title ? <div className='collage-title'>{this.props.title}</div> : null }
                    <div className='collage-content'>{this.props.caption}</div>
                </div>
            </div>
        );
    }
}