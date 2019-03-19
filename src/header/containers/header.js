import React from 'react';
import Navbar from './../components/navbar';
import CalltoAction from './../components/call-to-action'
class Header extends React.Component{

    componentDidMount(){
        window.addEventListener("scroll",()=>{
            console.log(window.scrollY)
            if(window.scrollY>15){
                this.navRef.classList.add("nav-transparent")
                
            }
            if(window.scrollY<=15){
                this.navRef.classList.remove("nav-transparent")
            }
        });
    }

    navRefFunc = (element)=>{

        this.navRef = element
    }

    render(){
        return(
            <header>
                <Navbar navRef = {this.navRefFunc}/>
                <CalltoAction/>
            </header>
        );
    }
}

export default Header;