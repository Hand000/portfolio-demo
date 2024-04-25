import React from 'react';

import '../style/collage.css';

interface CollageProps {
    background: string;
    title?: string;
    subtitle?: string;
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
                <img className={`collage-image ${this.props.left ? 'collage-image-right' : ''}`} src={this.props.background}/>
                <img className='collage-scale' src={this.props.background}/>
                <div className={`collage-caption ${this.props.left ? 'collage-caption-left' : ''}`}>
                    { this.props.title ? <div className='collage-title'>{this.props.title}</div> : null }
                    { this.props.subtitle ? <div className='collage-subtitle'>{this.props.subtitle}</div> : null }
                    <div className='collage-content'>{this.props.caption}</div>
                </div>
            </div>
        );
    }
}