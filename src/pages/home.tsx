import React from 'react';
import Slideshow from '../components/slideshow';

import slide1 from '../img/home/z1.jpg';
import slide2 from '../img/pbm/2.jpg';

import '../style/home.css';
import Collage from '../components/collage';

import collage1 from '../img/dukes/b.jpg';

interface HomeProps {

}

interface HomeState {

}

export default class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props)
    }

    render() {
        return (
            <div className='home-slideshow'>
                <Slideshow 
                    title='Interiors | Exteriors | Flower Arrangements'
                    slides={[slide1, slide2]}/>
                <div id='home-services'>
                    <div id='home-services-title'>
                        Services
                    </div>
                    <Collage background={collage1} caption='poopoo'/>
                </div>
            </div>
        );
    }
}