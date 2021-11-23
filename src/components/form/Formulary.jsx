import React from "react";
import {
Typography, 
Card, 
CardContent, 
Grid,
TextField,
Button,
Box
} from '../../../node_modules/@material-ui/core';


export default function Formmulary() {

    return (

        <Box sx={{ width: '100%'}}>

        <div className="App">
            <Typography gutterBotton variant="h1" align="center"></Typography>
            <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
            <CardContent>
            <Typography gutterBottom variant="h2"></Typography>
            
            <form 
                component="form" sx={{
                    '& .MuitextField-root': { m: 1 , width: '25ch' },
                }}
            >

            <Grid container spacing={1}>
                <Grid xs={13} sm={6} item>
                    <TextField
                        
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        required
                        placeholder="ingresa tu nombre "
                        //error
                        //helperText="El campo es obligatorio"
                    />
            </Grid>
                <Grid xs={12} sm={6} item>
                    <TextField
                        label="Apellidos"
                        placeholder="Ingresa tu apellido"
                        variant="outlined"
                        fullWidth
                        required
                        
                        //error
                        //helperText="El campo es obligatorio"
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        label="Email"
                        placeholder="Ingresa tu Email"
                        variant="outlined"
                        fullWidth
                        required
                        //error
                        //helperText="El campo es obligatorio"
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        type="number"
                        label="NumTelefono"
                        placeholder="Ingresa tu Telefono"
                        variant="outlined"
                        fullWidth
                        //error
                        //helperText="sEl campo es obligatorio"
                    />
                </Grid>
                <Grid xs={12} item>
                    <TextField
                        type="Message"
                        label="Mensaje"
                        placeholder="Ingresa tu Mensaje"
                        multiline
                        rows={4}
                        variant="outlined"
                        fullWidth
                        required
                        //error
                        //helperText="El campo es obligatorio"
                    />
                </Grid>
                <Grid xs={12} item>
                    <Button variant="contained" color="primary" fullWidth >
                        {" "}
                        Enviar Formulario{" "}
                </Button>
                </Grid> 

            </Grid>
            </form>
        </CardContent>
        </Card>
    </div>
    </Box>
    )};