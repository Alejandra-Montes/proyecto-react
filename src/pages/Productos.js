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
        {nombre: 'Cheetos chedar jalapeño', ruta: cheetosJalapeño, precioUnitario: 70, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Hubba Bubba', ruta: hobs, precioUnitario: 50, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Jolly ranches bites', ruta: jolly, precioUnitario: 35, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Big Chewy Nerds', ruta: nerds, precioUnitario: 30, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Oreo Dark Chocolate', ruta: oreo, precioUnitario: 120, cantidadCompra: 0, totalPagarCompra: 0}
      ])
    
      const [listaNombresDos, setListaNombresOtro]=useState([
        {nombre: 'Ooze Chewz', ruta: ooze, precioUnitario: 30, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Pop tarts cherry', ruta: poptarts, precioUnitario: 60, cantidadCompra: 0, totalPagarCompra: 0},
        {nombre: 'Sour punch', ruta: punch, precioUnitario: 80, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Skittles with berry', ruta: purpleSkittles, precioUnitario: 40, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Reeses Miniature Cups', ruta: reeses, precioUnitario: 50, cantidadCompra: 0, totalPagarCompra: 0}
      ])
    
      const [listaNombresTres, setListaNombresTres]=useState([
        {nombre: 'Fruit Roll-Ups', ruta: rollup, precioUnitario: 40, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Skittles original', ruta: skittles, precioUnitario: 20, cantidadCompra: 0, totalPagarCompra: 0},
        {nombre: 'Air Heads bites', ruta: airHeads, precioUnitario: 25, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Lucky Charms', ruta: luckyCharms, precioUnitario: 170, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Doritos Flamin Hot', ruta: doritosFlamin, precioUnitario: 100, cantidadCompra: 0, totalPagarCompra: 0}
      ])
    
      const [listaNombresCuatro, setListaNombresCuatro]=useState([
        {nombre: 'Doritos Tapatio', ruta: doritosTapatios, precioUnitario: 120, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Froot Loops Marshmallows', ruta: footMarsh, precioUnitario: 150, cantidadCompra: 0, totalPagarCompra: 0},
        {nombre: 'Lays BBQ', ruta: laysBbq, precioUnitario: 140, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Oreo Red Velvet', ruta: oreoRed, precioUnitario: 110, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Oreo birthday cake', ruta: oCake, precioUnitario: 115, cantidadCompra: 0, totalPagarCompra: 0}
      ])
    
      const [listaNombresCinco, setListaNombresCinco]=useState([
        {nombre: 'Swiss Rolls', ruta: swissRolls, precioUnitario: 95, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Rufles Flamin Hot', ruta: ruflesFlamin, precioUnitario: 115, cantidadCompra: 0, totalPagarCompra: 0},
        {nombre: 'Oreo Fudge Covered with Mint', ruta: oMenta, precioUnitario: 120, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Lucky Charms Chocolate', ruta: luckeChocolate, precioUnitario: 135, cantidadCompra: 0, totalPagarCompra: 0}, 
        {nombre: 'Life Savers Gummies Berries', ruta: lifeSaver, precioUnitario: 35, cantidadCompra: 0, totalPagarCompra: 0}
      ])

    return(
      <Container spacing={5} lg={12} md={12} sm={12} xs={12}>
        <Grid container>
          <Producto listaNombres={listaNombres} />
        </Grid>
        <Grid  >
        <Producto listaNombres={listaNombresDos} />
        </Grid>
        <Grid >
          <Producto listaNombres={listaNombresTres} />
        </Grid>
        <Grid  >
          <Producto listaNombres={listaNombresCuatro} />
        </Grid>
        <Grid  >
          <Producto listaNombres={listaNombresCinco} />
        </Grid>
      </Container>
    )
}

export default Productos