import React from 'react';
import Palmares from './palmares';
import './palmares-list.css';
function PalmaresList(){

    const card1 = [
        "Propiedad Privada",
        "Escritura Inmediata",
        "Lotes desde 405 m2",
        "Desde $36,450 pesos de Contado (Dependiendo del m2)",
            ];
    const card2 = [
        "Planes de Crédito 6, 12 y 18 meses",
        "Enganche minimo $6,000 pesos",
        "Mensualidades desde $1895 pesos",
        "Sin buro de crédito",
                    ];
    const card3 = [
        "Sin aval",
        "Se encuentra a escasos kilómetros de la costa Yucateca Chuburná",
        "Ubicado en Hunucma una de las zonas con mayor desarrollo en el sureste.",
                    ];
    return(
      <section className="palmares-container width">
        <h2 className="h2-center">Palmares</h2>
        <div className="palmares-list">
            <Palmares id="first" img="./img/foto1.jpeg" items={card1}/>
            <Palmares id="second" img="./img/foto2.jpeg" items={card2}/>
            <Palmares id="third" img="./img/foto3.jpeg" items={card3}/>
        </div>

      </section>
    );
}

export default PalmaresList;