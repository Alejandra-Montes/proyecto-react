import { useEffect, useState } from 'react'
import Producto from "./Producto";
import '../css/producto.css'
import Menu from './Menu';
import cheetosJalapeño from '../assets/img/cheetos-jalapenio.jpeg';
import hobs from '../assets/img/hobbs-bubba.jpeg';
import jolly from '../assets/img/jolly-rancher.jpeg';
import nerds from '../assets/img/nerds.jpg'
import oreo from '../assets/img/oreo-dark.jpeg'
import ooze from '../assets/img/ooze.jpeg'
import poptarts from '../assets/img/poptarts.jpeg'
import punch from '../assets/img/punch.jpeg'
import purpleSkittles from '../assets/img/purple-skittles.png'
import reeses from '../assets/img/reeses.jpeg'
import rollup from '../assets/img/roll-up.jpeg'
import skittles from '../assets/img/skittles.jpeg'
import airHeads from '../assets/img/air-heads.jpeg'
import luckyCharms from '../assets/img/cereales-lucky-charms.jpeg'
import doritosFlamin from '../assets/img/doritos-flamin.jpeg'
import doritosTapatios from '../assets/img/doritos-tapatios.jpg'
import footMarsh from '../assets/img/froot-loops-marshmallow.jpeg'
import laysBbq from '../assets/img/lays-bbq.jpg'
import oreoRed from '../assets/img/o_red_velvet.png'
import oCake from '../assets/img/o-cake.jpeg'
import swissRolls from '../assets/img/swiss-rolls.jpeg'
import ruflesFlamin from '../assets/img/rufles-flamin.jpeg'
import oMenta from '../assets/img/oreo-menta.jpeg'
import luckeChocolate from '../assets/img/lucky-chocolate.jpeg'
import lifeSaver from '../assets/img/lifesavers-purple.jpeg'

function App() {
  const [listaNombres, setListaNombres]=useState([
    {nombre: 'Cheetos chedar jalapeño', ruta: cheetosJalapeño}, 
    {nombre: 'Hubba Bubba', ruta: hobs}, 
    {nombre: 'Jolly ranches bites', ruta: jolly}, 
    {nombre: 'Big Chewy Nerds', ruta: nerds}, 
    {nombre: 'Oreo Dark Chocolate', ruta: oreo}
  ])

  const [listaNombresOtro, setListaNombresOtro]=useState([
    {nombre: 'Ooze Chewz', ruta: ooze}, 
    {nombre: 'Pop tarts cherry', ruta: poptarts},
    {nombre: 'Sour punch', ruta: punch}, 
    {nombre: 'Skittles with berry', ruta: purpleSkittles}, 
    {nombre: 'Reeses Miniature Cups', ruta: reeses}
  ])

  const [listaNombresTres, setListaNombresTres]=useState([
    {nombre: 'Fruit Roll-Ups', ruta: rollup}, 
    {nombre: 'Skittles original', ruta: skittles},
    {nombre: 'Air Heads bites', ruta: airHeads}, 
    {nombre: 'Lucky Charms', ruta: luckyCharms}, 
    {nombre: 'Doritos Flamin Hot', ruta: doritosFlamin}
  ])

  const [listaNombresCuatro, setListaNombresCuatro]=useState([
    {nombre: 'Doritos TTapatio', ruta: doritosTapatios}, 
    {nombre: 'Froot Loops Marshmallows', ruta: footMarsh},
    {nombre: 'Lays BBQ', ruta: laysBbq}, 
    {nombre: 'Oreo Red Velvet', ruta: oreoRed}, 
    {nombre: 'Oreo birthday cake', ruta: oCake}
  ])

  const [listaNombresCinco, setListaNombresCinco]=useState([
    {nombre: 'Swiss Rolls', ruta: swissRolls}, 
    {nombre: 'Rufles Flamin Hot', ruta: ruflesFlamin},
    {nombre: 'Oreo Fudge Covered with Mint', ruta: oMenta}, 
    {nombre: 'Lucky Charms Chocolate', ruta: luckeChocolate}, 
    {nombre: 'Life Savers Gummies Berries', ruta: lifeSaver}
  ])

  return (
    <div>
     <Menu />
     <Producto listaNombres={listaNombres} />
     <br></br>
     <Producto listaNombres={listaNombresOtro} />
     <br></br>
     <Producto listaNombres={listaNombresTres} />
     <br></br>
     <Producto listaNombres={listaNombresCuatro} />
     <br></br>
     <Producto listaNombres={listaNombresCinco} />
    </div>
    
  );
}

export default App;
