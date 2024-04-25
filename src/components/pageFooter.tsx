import React from 'react';

import '../style/page-footer.css';

interface PageFooterProps {

}

interface PageFooterState {

}

export default class PageFooter extends React.Component<PageFooterProps, PageFooterState> {
    constructor(props: PageFooterProps) {
        super(props)
    }

    render() {
        return (
            <div id='page-footer'>
                <div id='footer-top'>
                    <div id='footer-left'>
                        <strong> John Dedman Interiors </strong> <br/> 
                        Tel: 07745 440962 <br/> 
                        Mail: <a href='mailto:johndecor@btinternet.com '>johndecor@btinternet.com</a>
                    </div>
                    <div id='footer-right'>
                        <em> Follow me on instagram! </em> <br/>
                        <i className="fa-brands fa-instagram"></i> <a href='https://www.instagram.com/dedman.john/'> @dedman.john </a>
                    </div>
                </div>
                <div id='footer-bottom'>
                    &copy; John Dedman Interiors 2024, All rights reserved. 
                </div>
            </div>
        );
    }
}