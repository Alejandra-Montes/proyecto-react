import { makeStyles } from "@material-ui/core";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { useSelector } from 'react-redux'
import { vaciarcarrito } from '../store/actions'
import { useDispatch } from 'react-redux'

import '../css/pagando.css';

const useStyles = makeStyles(() => ({
    wrapIcon: {
      alignItems: "center",
      display: "flex"
    }
  }));

function Pagando(){
   const [nombre, setNombre] = useState('');
   const [correo, setCorreo] = useState('');
   const [comentario, setComentario] = useState('');
   const [tarjeta, setTarjeta] = useState('');
   const [direccionenvio, setsetDireccionenvio] = useState('');
   const [open, setOpen] = useState(false)
   
   const totalPrecio = useSelector(store => store.totalPrecio)
   const dispatch = useDispatch()

   const handleClick = () => {
       console.log('Realizando el pago...')
       setOpen(true)
    };

    const handleClose = () => {
        console.log('Limpiando formulario...')
        setOpen(false)
        setNombre('')
        setCorreo('')
        setComentario('')
        setsetDireccionenvio('')
        setTarjeta('')
     };

    const handleCloseOK = () => {
        console.log('Limpiando formulario y carrito...')
        setOpen(false)
        setNombre('')
        setCorreo('')
        setComentario('')
        setsetDireccionenvio('')
        setTarjeta('')
        dispatch(vaciarcarrito(0))
    };

    return (
        <div className="estilogrid">
            <Container>
            <h2>Realizar pago ... </h2>
                <Grid>
                    <Grid   >
                        <TextField className="gridformulario" label="Nombre del titular de la tarjeta" fullWidth value={nombre} required error={!nombre} onChange={(e) =>{setNombre(e.target.value)}}/>
                    </Grid>
                    <p></p>
                    <Grid   >
                        <TextField className="gridformulario" label="Número de tarjeta" fullWidth value={tarjeta} required error={!tarjeta} onChange={(e) =>{setTarjeta(e.target.value)}}/>
                    </Grid>
                    <p></p>
                    <Grid    >
                        <TextField className="gridformulario" label="Correo electrónico" fullWidth value={correo} required error={!correo} onChange={(e) =>{setCorreo(e.target.value)}} />
                    </Grid>
                    <p></p>
                    <Grid    >
                        <TextField  className="gridformulario" label="Dirección de envío" fullWidth multiline value={direccionenvio} required error={!direccionenvio} onChange={(e) =>{setsetDireccionenvio(e.target.value)}}/>
                    </Grid>
                    <p></p>
                    <Grid    >
                        <TextField  className="gridformulario" label="Comentario" fullWidth multiline value={comentario} required error={!comentario} onChange={(e) =>{setComentario(e.target.value)}}/>
                    </Grid>
                    <p></p>
                    <Grid    >
                        <label className="montototalcarrito" > Total a pagar : $ {totalPrecio} </label>
                    </Grid>
                </Grid>
                <Grid  container  className="estilogrid">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Button variant="outlined" disabled={!comentario || !correo || !nombre || !direccionenvio|| !tarjeta } onClick={handleClick}>Realizar Pago</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">
                            {"¿Los datos están correctos?"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Se realizará el pago a su tarjeta y se enviará el pedido a su domicilio.
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleCloseOK} autoFocus>OK</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>
            </Container>
    </div>
    )
}

export default Pagando