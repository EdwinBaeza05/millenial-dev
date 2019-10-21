import React from 'react';
import {Link} from 'react-router-dom'
import ProjectItem from './../components/ProjectItem';
import ProjectMoreList from './../components/ProjectsMoreList';
import Location from './../components/location'; 
import ProductList from './../components/products-list';
import "./styles/projectsmore.css";

class ProjectsMore extends React.Component{

    
    constructor(props){
        super(props);
        console.log(props);
        this.idOption = this.props.match.params.id;
        this.state = {idOption:this.idOption};
        
        if(parseInt(this.idOption)<=0 || parseInt(this.idOption)>4){
           this.props.history.push("/404");
        }

         this.dataDesarrollos = [{
            titleItem : "Palmares",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        },{
            titleItem : "Punta Piedra",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        },
        {
            titleItem : "Ceiba",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        }]
        this.dataTerrenos = [{
            titleItem : "Komchen",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        },{
            titleItem : "Temozon",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        },
        {
            titleItem : "Conkal",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        }]
        this.dataCasas = [{
            titleItem : "Mulsay",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        },{
            titleItem : "Centro",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        },
        {
            titleItem : "Conkal",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        }]
        this.dataTown = [{
            titleItem : "Sabana",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        },{
            titleItem : "Dzitya",
            imgItem:"https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png",
            textoItem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."    
        }]
    }

    componentDidMount(){
       // alert("render")
        const $nav = document.getElementsByTagName("nav")[0];
        $nav.classList.add("nav-transparent");
        window.onscroll = null;
        window.scrollTo(0, 0)
    }

    componentDidUpdate(prevProps){
        //alert(this.props.location !== prevProps.location);
        //alert("Update")
         if (this.props.location !== prevProps.location) {
            this.idOption = this.props.match.params.id;
            this.setState({idOption:this.idOption});
            window.scrollTo(0,0)
           }
    }
    render(){
        return(
            <React.Fragment>
                        { this.renderProjectMoreList(this.state.idOption)}
                        {/* <ProjectItem 
                        titleItem = "Palmares"
                        imgItem="https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png"
                        textoItem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."/>
                        <ProjectItem 
                        titleItem = "Punta Piedra"
                        imgItem="https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png"
                        textoItem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."/>
                         <ProjectItem 
                        titleItem = "Ceiba"
                        imgItem="https://vivirderenta.com/wp-content/uploads/2019/06/leasing-inmobiliario-350x250.png"
                        textoItem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis optio id placeat iusto incidunt eos."/> */}

            </React.Fragment>
        );
    }


    renderProjectMoreList = (option) => {
        let dataRender = [];
        const opNumber = parseInt(option);
        let visibleDesarrollos = true, visibleTerrenos = true, visibleCasas = true, visibleTown = true;
        let titlePage = "";
        switch(opNumber){

            case 1:{
                dataRender = this.dataDesarrollos;
                console.log("Option",option)
                visibleDesarrollos = false;
                titlePage = "Desarrollos"
                break;
            }
            case 2:{
                dataRender = this.dataTerrenos;
                console.log("Option",option)
                visibleTerrenos = false;
                titlePage = "Terrenos";
                break;
            }
            case 3:{
                dataRender = this.dataTown;
                console.log("Option",option)
                visibleTown = false;
                titlePage = "Town House" 
                break;
            }
            case 4:{
                dataRender = this.dataCasas;
                console.log("Option",option)
                visibleCasas = false;
                titlePage = "Casas";
                break;
            }

        }
        console.log("DataRender",dataRender)
       // console.log("Option",option)
        console.log("DataCasas",this.dataCasas)
        console.log("Visible",visibleDesarrollos, visibleTerrenos, visibleCasas, visibleTown)
        return(
            <React.Fragment>
                <h1 >{titlePage}</h1>
                <ProjectMoreList>
                {  
                    dataRender.map( (item, index) => {
                    return(
                        <ProjectItem 
                        titleItem = {item.titleItem}
                        imgItem= {item.imgItem}
                        textoItem={item.textoItem}/>
                        );
                    })
                }
                </ProjectMoreList>

                <ProductList title="Otros Proyectos de Interes" 
                  visibleDesarrollos = {visibleDesarrollos}
                  visibleTerrenos = {visibleTerrenos}
                  visibleCasas = {visibleCasas}
                  visibleTown = {visibleTown}  
                />
                <Location/>
            </React.Fragment>

        );
    }
}

export default ProjectsMore;