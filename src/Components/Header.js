import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
export default class Header extends Component {
    render() {
        return (
            <div className={style.headerDiv}>
                <NavLink to="/"><p>Home</p></NavLink> 
                <NavLink to="/cocktails"><p>Search</p></NavLink> 
                
                {
                    this.props.user && this.props.user.token &&
                    <>
                        <NavLink to="/favorites"><p>favorites</p></NavLink> 
                        <button onClick={this.props.handleLogOut}>Sign Out</button>
                    </>
                }
                {
                    (!this.props.user || !this.props.user.token) && 
                    <>
                        <NavLink to="/login"><p>Log In</p></NavLink> 
                        <NavLink to="/signup"><p>Sign</p> up</NavLink> 
                    </>
                }
             
                
            </div>
        )
    }
}