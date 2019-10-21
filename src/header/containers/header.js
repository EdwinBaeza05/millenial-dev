import React from 'react';
import Navbar from './../components/navbar';

class Header extends React.Component{

    componentDidMount(){
        const mediaQueryDesktop = window.matchMedia("(min-width: 786px)");
        if(mediaQueryDesktop.matches){
            sessionStorage.setItem('scrollNav',()=>{
            
                let navRef = document.querySelector("nav");
                console.log(window.scrollY, "ScrollY")
                if(window.scrollY>5){
                    navRef.classList.add("nav-transparent");            
                }
                if(window.scrollY<=5){
                    navRef.classList.remove("nav-transparent");
                }
            });
            window.onscroll = eval (sessionStorage.getItem('scrollNav'));

        }else{
            this.menuRef.addEventListener('click',()=>{
                console.log("click menu")
                 this.ulRef.classList.toggle("menu-hidden");
            });

            let linksMenu = document.querySelectorAll("nav ul a");
            for(let linkItem of linksMenu){
                console.log(linkItem)
                 linkItem.onclick = (event) =>{
                     console.log(" event", event.target)
                    this.ulRef.classList.remove("menu-hidden");
                 };
            }
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