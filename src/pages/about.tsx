import React from 'react';

import '../style/about.css';

import image1 from '../img/pbm/z40.jpg';
import ImageCaption from '../components/imageCaption';

interface AboutProps {

}

interface AboutState {

}

export default class About extends React.Component<AboutProps, AboutState> {
    constructor(props: AboutProps) {
        super(props)
    }

    render() {
        return (
            <div className='about-page'>
                <div className="about-container">
                    <h1 id='about-title'>
                        John Dedman 
                    </h1>
                    <p>
                        The thought of employing a stylist / interior designer can be a daunting and expensive one. <br/><br/>

                        What I excel at, is providing a service to suite all budgets, whether this is a small area of your business that needs some visual inspiration, an Instagrammable wall or a complete overhaul, these can all be achieved without breaking the bank. I have many years experience working within the hospitality industry, and can offer a range of affordable design solutions for all budgets.
                    </p>
                    <div>
                        <ImageCaption
                            image={image1}
                            caption='Peaky Blinders Bar Manchester' />
                    </div>
                    <p>


    Probably not ‘the done thing’ but I have included a before pics of each project at the end of each of the portfolio section! It is amazing what can be achieved with a change of colour and dressed in a new way, I hope you will agree.

                    </p>
                </div>
            </div>
        );
    }
}