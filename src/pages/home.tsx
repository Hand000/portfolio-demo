import React from 'react';
import Slideshow from '../components/slideshow';

import slide1 from '../img/home/z1.jpg';
import slide2 from '../img/pbm/2.jpg';

import '../style/home.css';
import Collage from '../components/collage';

import collage1 from '../img/dukes/b.jpg';
import collage2 from '../img/outdoor/z27.jpg';

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
            <div id='home-page'>
                <div id='home-slideshow'>
                    <Slideshow 
                        title='Interiors | Exteriors | Flower Arrangements'
                        description='Design and decoration professional.'
                        slides={[slide1, slide2]}/>
                    </div>
                <div id='home-services'>
                    <div className='home-subtitle'>
                        Services
                    </div>
                    <Collage background={collage1} title='interior' subtitle='Refresh, Restyle, Reinvent.' caption='Friendly consultation, mood boards, visuals, procurement, installation.'/>
                    <Collage background={collage2} title='exterior' subtitle='Refresh, Restyle, Reinvent.' caption='Artificial or real plants. Floral walls & pergola’s, furniture, planters, painted & printed murals, visuals & layout. .' left={true} />
                </div>
                <div id='home-testimonials'>
                    <div className='home-subtitle'>
                        Testimonials
                    </div>
                    <div>
                        <div className='testimonial-block'>
                            <p className='testimonial-quote'>
                            “John worked for me over many years on different projects. He is very creative and able to work within a budget. Friendly and a pleasure to work with.”
                            </p>
                            <div className='testimonial-source'> — <strong>Nigel Martin Smith</strong>, Essential Nightclub / Queer bar.</div>
                        </div>
                        <div className='testimonial-block testimonial-block-r'>
                            <p className='testimonial-quote'>
                            After working with John on a number of previous hospitality interiors, when it came to selecting a designer to help realise our vision for an enormous Peaky Blinders themed bar and restaurant, in the heart of Manchester City Centre, I knew immediately he was the right person for the project. With his outstanding attention to detail, professional service and the ability to work wonders with a relatively limited budget, John delivered a unique look that was beyond expectations. I would recommend John to anyone looking for a truly personalised service and look forward to working with him again on future projects, his creativity is invaluable!
                            </p>
                            <div className='testimonial-source'>
                            — <strong>Paul Wilson</strong> / GM at Peaky Blinders Bar, Manchester
                            </div>
                        </div>
                        <div className='testimonial-block'>
                            <p className='testimonial-quote'>
                            The bar looks amazing and has its own identity, which I love. Everywhere you look there is something new to see.  
                            </p>
                            <div className='testimonial-source'>
                            — <strong>Carly Sinclair</strong> / Director at Tank Room, Liverpool
                            </div>
                        </div>
                        <div className='testimonial-block testimonial-block-r'>
                            <p className='testimonial-quote'>
                            From beginning to the end, we can not thank you enough, you’re ideas and professionalism are simply first class! please don’t be a stranger we loved having you around. You are now officially a member of the Jam Works Family.
                            </p>
                            <div className='testimonial-source'>
                            — <strong>Paula Mackinnon</strong> / Owner of The Jam Works, Droylsden
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}