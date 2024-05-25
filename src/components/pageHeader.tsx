import React from 'react';
import { Link } from 'react-router-dom';

import '../style/page-header.css';

interface PageHeaderProps {

}

interface PageHeaderState {
    active: boolean;
}

export default class PageHeader extends React.Component<PageHeaderProps, PageHeaderState> {
    navRef: any;

    constructor(props: PageHeaderProps) {
        super(props)
        this.navRef = React.createRef()  
        this.state = { active: false }
    }

    componentDidMount(): void {
        const navRef = this.navRef;
        document.addEventListener('mousedown', (event) => {
            if (navRef.current && (!navRef.current.contains(event.target) || navRef.current === event.target)) {
                this.setState({ ...this.state, active: false })
            }
        })
    }

    render() {
        return (
            <div id='page-header'>
                <div id='page-title'>John Dedman Interiors</div>
                <div id='burger-menu'>
                    <div id='burger-icon' className='fa-solid fa-bars' onClick={() => {this.setState({...this.state, active: true })}}/>
                    <div ref ={this.navRef} id='nav-menu' style={{ display: this.state.active ? 'block' : 'none' }}>
                        <div id='nav-top'>
                            <div id='nav-close' className='fa-solid fa-x' onClick={() => {this.setState({...this.state, active: false })}} />
                        </div>
                        <div id='nav-options' onClick={() => {this.setState({...this.state, active: false })}}>
                            <Link style={{ textDecoration: 'none' }} to='/'> 
                                <div className='nav-option'>Home</div>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/about'> 
                                <div className='nav-option'>About</div>
                            </Link>
                            <Link style={{ textDecoration: 'none' }} to='/portfolio'> 
                                <div className='nav-option'>Portfolio</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// <Link className='nav-option' to='/'>Home</Link>