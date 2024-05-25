import React from 'react';
import ImageCaption from '../components/imageCaption';

import '../style/portfolio.css';

import { PortfolioData, outdoorImages, pbmImages, tankImages, jamImages, nestImages, dukesImages } from './data/portfolioData';
import Slideshow from '../components/slideshow';

interface PortfolioProps {

}

interface PortfolioState {
    currentSection: PortfolioData;
    displayPopup: boolean;
}

export default class Portfolio extends React.Component<PortfolioProps, PortfolioState> {
    popupRef: any;

    constructor(props: PortfolioProps) {
        super(props)

        this.state = {
            currentSection: outdoorImages,
            displayPopup: false
        }
        this.popupRef = React.createRef();

        this.setPopup = this.setPopup.bind(this);
    }

    componentDidMount(): void {
        const popupRef = this.popupRef;
        document.addEventListener('mousedown', (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                this.setState({ ...this.state, displayPopup: false })
            }
        })
    }

    render() {
        return (
            <div id="portfolio-page">
                <div id="portfolio-body">
                    <div className='portfolio-section' onClick={() => this.setPopup(outdoorImages)}>
                        <ImageCaption caption='Planting and Outdoor' image={outdoorImages.images[0]} />
                    </div>
                    <div className='portfolio-section' onClick={() => this.setPopup(tankImages)}>
                        <ImageCaption caption='Tank Room' image={tankImages.images[0]} />
                    </div>
                    <div className='portfolio-section' onClick={() => this.setPopup(jamImages)}>
                        <ImageCaption caption='The Jam Works' image={jamImages.images[0]} />
                    </div>
                    <div className='portfolio-section' onClick={() => this.setPopup(nestImages)}>
                        <ImageCaption caption='The Nest' image={nestImages.images[0]} />
                    </div>
                    <div className='portfolio-section' onClick={() => this.setPopup(dukesImages)}>
                        <ImageCaption caption='The Dukes Head' image={dukesImages.images[0]} />
                    </div>
                    <div className='portfolio-section' onClick={() => this.setPopup(pbmImages)}>
                        <ImageCaption caption='Peaky Blinders Bar' image={pbmImages.images[0]} />
                    </div>
                </div>
                {
                    this.state.displayPopup ? <div id='portfolio-popup'>
                    <div ref={this.popupRef} id='portfolio-window'>
                       
                        <div id='portfolio-close'> 
                            <span className='fa-solid fa-x' onClick={() => {this.setState({...this.state, displayPopup: false })}}></span>
                        </div>
    
                        <Slideshow 
                            slides={this.state.currentSection.images}
                            title={this.state.currentSection.title}
                        />
                        <div id='portfolio-description'>
                            {this.state.currentSection.description}
                        </div>
                    </div>
                </div> : <></>
                }
            </div>
        );
    }

    setPopup(data: PortfolioData) {
        window.scrollTo(0, 0);

        this.setState({
            ...this.state,
            displayPopup: true,
            currentSection: data
        })
    }
}