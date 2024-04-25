import React from 'react';

import '../style/slideshow.css';

interface SlideshowProps {
    slides: string[];
    title: string;
    description?: string;
}

interface SlideshowState {
    slideIndex: number;
}

export default class Slideshow extends React.Component<SlideshowProps, SlideshowState> {
    constructor(props: SlideshowProps) {
        super(props)

        this.state = { slideIndex: 0 };
        this.changeSlide = this.changeSlide.bind(this);
    }

    componentDidMount(): void {
        setTimeout(this.changeSlide, 5000);
    }

    componentDidUpdate(prevProps: Readonly<SlideshowProps>, prevState: Readonly<SlideshowState>, snapshot?: any): void {
        if (prevState.slideIndex !== this.state.slideIndex) {
            setTimeout(this.changeSlide, 5000);
        }
    }

    render() {
        return (
            <div className='slideshow-container'>
                <div className='slideshow-background'>
                {this.props.slides.map((slide, index) => {
                        return <img
                            key='index'
                            className={`slideshow-slide ${index === this.state.slideIndex ? 'slideshow-active' : ''}`}
                            src={slide}/>
                    })}
                </div>
                <div className='slideshow-nav'>
                
                </div>
                <div className='slideshow-text'>
                    <div className='slideshow-title'> {this.props.title} </div>
                    { this.props.description ? <div className='slideshow-desc'> {this.props.description} </div> : null }
                </div>
            </div>
        );
    }

    changeSlide() {
        let slideIndex = this.state.slideIndex + 1;
        if (slideIndex >= this.props.slides.length) {
            slideIndex = 0;
        }

        this.setState({
            ...this.state,
            slideIndex
        })
        

    }
}