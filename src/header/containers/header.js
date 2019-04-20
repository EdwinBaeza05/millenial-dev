import React from 'react';
import Navbar from './../components/navbar';

class Header extends React.Component{

    componentDidMount(){
        const mediaQueryDesktop = window.matchMedia("(min-width: 786px)");
        if(mediaQueryDesktop.matches){
            window.onscroll = ()=>{
                if(window.scrollY>5){
                   this.navRef.classList.add("nav-transparent");            
                }
                if(window.scrollY<=5){
                    this.navRef.classList.remove("nav-transparent");
                }
            }
        }else{
            this.menuRef.addEventListener('click',()=>{
                 this.ulRef.classList.toggle("menu-hidden");
            });
        }
    }
    
    navRefFunc = (element)=>{
        this.navRef = element;
    }
    menuRefFunc = (element)=>{
        this.menuRef = element;
    }
    ulRefFunc = (element)=>{
        this.ulRef = element
    }

    render(){
        return(
            <header className="width">
                <Navbar navRef = {this.navRefFunc} menuRef={this.menuRefFunc} ulRef={this.ulRefFunc}/>
            </header>
        );
    }
}

export default Header;