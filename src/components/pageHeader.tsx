import React from 'react';
import { Link } from 'react-router-dom';

import '../style/page-header.css';

interface PageHeaderProps {

}

interface PageHeaderState {
    active: boolean;
}

export default class PageHeader extends React.Component<PageHeaderProps, PageHeaderState> {
    constructor(props: PageHeaderProps) {
        super(props)

        this.state = { active: false }
    }

    render() {
        return (
            <div id='page-header'>
                <div id='page-title'>John Dedman Interiors</div>
                <div id='burger-menu'>
                    <div id='burger-icon' className='fa-solid fa-bars' onClick={() => {this.setState({...this.state, active: true })}}/>
                    <div id='nav-menu' style={{ display: this.state.active ? 'block' : 'none' }}>
                        <div id='nav-close' className='fa-solid fa-x' onClick={() => {this.setState({...this.state, active: false })}} />
                        <div id='nav-options'>
                            <Link style={{ textDecoration: 'none' }} to='/'>
                                <div className='nav-option'>Home</div>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/about'>
                                <div className='nav-option'>About</div>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/portfolio'>
                                <div className='nav-option'>Portfolio</div>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/contact'>
                                <div className='nav-option'>Contact</div>
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

// <Link className='nav-option' to='/'>Home</Link>