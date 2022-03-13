import { makeStyles } from "@material-ui/core";
import { Facebook, Instagram } from "@mui/icons-material";
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react";
import '../css/contacto.css';

const useStyles = makeStyles(() => ({
    wrapIcon: {
      alignItems: "center",
      display: "flex"
    }
  }));

function Contacto(){
   const [nombre, setNombre] = useState('');
   const [correo, setCorreo] = useState('');
   const [comentario, setComentario] = useState('');
   const [open, setOpen] = useState(false)
   const classes = useStyles()

   const handleClick = () => {
       setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
        setNombre('')
        setCorreo('')
        setComentario('')
     };

    return (
        <div className="espacio">
            <Container>
            <h2>Redes sociales</h2>
            <Grid container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.wrapIcon}>
                        <Facebook fontSize="large" color="primary" />
                        CANDIES SHOP
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <Typography className={classes.wrapIcon}>
                        <Instagram fontSize="large" color="secondary"/>
                        CANDIES SHOP
                    </Typography>
                </Grid>
            </Grid>
            <h2>Mandar correo para más informacón</h2>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField label="Nombre completo" fullWidth value={nombre} required error={!nombre} onChange={(e) =>{setNombre(e.target.value)}}/>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField label="Correo" fullWidth value={correo} required error={!correo} onChange={(e) =>{setCorreo(e.target.value)}} />
                    </Grid>
                </Grid>
                <Grid  container spacing={3} className="espacio">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <TextField label="Comentario" fullWidth multiline rows={4} value={comentario} required error={!comentario} onChange={(e) =>{setComentario(e.target.value)}}/>
                    </Grid>
                </Grid>
                <Grid  container spacing={3} className="espacio">
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Button variant="outlined" disabled={!comentario || !correo || !nombre} onClick={handleClick}>Enviar</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">
                            {"¿Desea enviar el correo?"}
                            </DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Se enviará un correo solicitando información
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} autoFocus>OK</Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                </Grid>
            </Container>
    </div>
    )
}

export default Contacto