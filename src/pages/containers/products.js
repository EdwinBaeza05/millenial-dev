import React from 'react';
import ProductFilter from './../components/product-filter';
import ProductSaleList from './../components/product-sale-list';
class Products extends React.Component{

    constructor(){
        super();
        this.state = {
            filterValue:""
        };

        this.products = [{
            name : "Lote 4",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 5",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 6",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 7",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 8",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 8",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 9",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 10",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 11",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 13",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 14",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 8",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 15",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 16",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 17",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 18",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 19",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 20",
            size: "Superficie de 405 m2.",
            priceCash: "$36,450.00 ($90.00 x m2).",
            price6: "$37,665.00 ($93.00 x m2), $6,000.00 de enganche en 6 mensualidades de $5,277.50.",
            price12: "$38,880.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,740.00.",
            price18: "$40,095.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,894.00."

        },{
            name : "Lote 24",
            size: "Superficie de 290 m2.",
            priceCash: "$26,100.00 ($90.00 x m2).",
            price6: "$27,714.00 ($93.00 x m2), $6,000.00 de enganche divididos en 6 mensualidades de $3,619.00.",
            price12: "$28,608.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $1,884.00.",
            price18: "$29,502.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,305.50."

        },{
            name : "Lote 25",
            size: "Superficie de 298 m2.",
            priceCash: "$26,820.00 ($90.00 x m2).",
            price6: "$27,714.00 ($93.00 x m2), $6,000.00 de enganche divididos en 6 mensualidades de $3,619.00.",
            price12: "$28,608.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $1,884.00.",
            price18: "$29,502.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,305.50."

        },{
            name : "Lote 26",
            size: "Superficie de 307 m2.",
            priceCash: "$27,630.00 ($90.00 x m2).",
            price6: "$28,551.00 ($93.00 x m2), $6,000.00 de enganche divididos en 6 mensualidades de $3,758.50.",
            price12: "$29,472.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $1,956.00.",
            price18: "$30,393.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,355.00."

        },{
            name : "Lote 27",
            size: "Superficie de 315 m2.",
            priceCash: "$28,350.00 ($90.00 x m2).",
            price6: "$29,295.00 ($93.00 x m2), $6,000.00 de enganche divididos en 6 mensualidades de $3,882.50.",
            price12: "$30,240.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,020.00.",
            price18: "$31,185.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,399.00."

        },{
            name : "Lote 28",
            size: "Superficie de 323 m2.",
            priceCash: "$29,070.00 ($90.00 x m2).",
            price6: "$30,039.00 ($93.00 x m2), $6,000.00 de enganche divididos en 6 mensualidades de $4,006.50.",
            price12: "$31,008.00 ($96.00 x m2), $6,000.00 de enganche divididos en 12 mensualidades de $2,084.00.",
            price18: "$31,977.00 ($99.00 x m2), $6,000.00 de enganche divididos en 18 mensualidades de $1,443.00."

        },];
    }

    componentDidMount(){
        const $nav = document.getElementsByTagName("nav");
        console.log($nav[0]);
        $nav[0].classList.add("nav-transparent");
        window.onscroll = null;
        //window.removeEventListener("scroll",);
    }

    submitProuduct = (event) => {
        event.preventDefault();
    }
    textProductHandle = (event) =>{
        this.setState({filterValue:event.target.value})
    }

    render(){
        return(
            <div>
                <ProductFilter 
                submit={this.submitProuduct} 
                filterValue={this.state.filterValue}
                textProductHandle = {this.textProductHandle}
                />
                <ProductSaleList products = {this.products}/>
            </div>
        );
    }
}
export default Products;