import React from 'react';

import '../style/image-caption.css';

interface ImageCaptionProps {
    image: string;
    caption: string;
}

interface ImageCaptionState {

}

export default class ImageCaption extends React.Component<ImageCaptionProps, ImageCaptionState> {
    constructor(props: ImageCaptionProps) {
        super(props)
    }

    render() {
        return (
            <div className='image-caption'>
                <img className='image-caption-subject' src={this.props.image} />
                <div className='image-caption-text'> { this.props.caption } </div>
            </div>
        );
    }
}