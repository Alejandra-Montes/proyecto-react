import { useState } from 'react'
import { Container, Grid } from '@mui/material'
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
import Producto from "../components/Producto";

function Productos(){
    const [listaNombres, setListaNombres]=useState([
        {nombre: 'Cheetos chedar jalapeño', ruta: cheetosJalapeño, precio: 70}, 
        {nombre: 'Hubba Bubba', ruta: hobs, precio: 50}, 
        {nombre: 'Jolly ranches bites', ruta: jolly, precio: 35}, 
        {nombre: 'Big Chewy Nerds', ruta: nerds, precio: 30}, 
        {nombre: 'Oreo Dark Chocolate', ruta: oreo, precio: 120}
      ])
    
      const [listaNombresOtro, setListaNombresOtro]=useState([
        {nombre: 'Ooze Chewz', ruta: ooze, precio: 30}, 
        {nombre: 'Pop tarts cherry', ruta: poptarts, precio: 60},
        {nombre: 'Sour punch', ruta: punch, precio: 80}, 
        {nombre: 'Skittles with berry', ruta: purpleSkittles, precio: 40}, 
        {nombre: 'Reeses Miniature Cups', ruta: reeses, precio: 50}
      ])
    
      const [listaNombresTres, setListaNombresTres]=useState([
        {nombre: 'Fruit Roll-Ups', ruta: rollup, precio: 40}, 
        {nombre: 'Skittles original', ruta: skittles, precio: 20},
        {nombre: 'Air Heads bites', ruta: airHeads, precio: 25}, 
        {nombre: 'Lucky Charms', ruta: luckyCharms, precio: 170}, 
        {nombre: 'Doritos Flamin Hot', ruta: doritosFlamin, precio: 100}
      ])
    
      const [listaNombresCuatro, setListaNombresCuatro]=useState([
        {nombre: 'Doritos Tapatio', ruta: doritosTapatios, precio: 120}, 
        {nombre: 'Froot Loops Marshmallows', ruta: footMarsh, precio: 150},
        {nombre: 'Lays BBQ', ruta: laysBbq, precio: 140}, 
        {nombre: 'Oreo Red Velvet', ruta: oreoRed, precio: 110}, 
        {nombre: 'Oreo birthday cake', ruta: oCake, precio: 115}
      ])
    
      const [listaNombresCinco, setListaNombresCinco]=useState([
        {nombre: 'Swiss Rolls', ruta: swissRolls, precio: 95}, 
        {nombre: 'Rufles Flamin Hot', ruta: ruflesFlamin, precio: 115},
        {nombre: 'Oreo Fudge Covered with Mint', ruta: oMenta, precio: 120}, 
        {nombre: 'Lucky Charms Chocolate', ruta: luckeChocolate, precio: 135}, 
        {nombre: 'Life Savers Gummies Berries', ruta: lifeSaver, precio: 35}
      ])
    return(
      <Container className='container'>
        <Grid container spacing={5} lg={12} md={12} sm={12} xs={12}>
          <Producto listaNombres={listaNombres} />
        </Grid>
        <Grid container spacing={3} lg={12} md={12} sm={12} xs={12}>
        <Producto listaNombres={listaNombresOtro} />
        </Grid>
        <Grid container spacing={3} lg={12} md={12} sm={12} xs={12}>
          <Producto listaNombres={listaNombresTres} />
        </Grid>
        <Grid container spacing={3} lg={12} md={12} sm={12} xs={12}>
          <Producto listaNombres={listaNombresCuatro} />
        </Grid>
        <Grid container spacing={3} lg={12} md={12} sm={12} xs={12}>
          <Producto listaNombres={listaNombresCinco} />
        </Grid>
      </Container>
    )
}

export default Productos