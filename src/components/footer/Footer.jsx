

import React from "react";
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'


export default function Footer(){

    return(
        <Typography  
        ariant="body2" 
        color="textSecondary" 
        align="center" 
        style={{
            background: "#a31545",
            width: '85%',
            height:'50px',
            padding: '6px',
            margin: '100px',
            borderRadius: '10px 10px',
            textAlign: "center ",
            alignItems: "center",
            color:'white',
        }}
        
        >
            {'Gonzalo Salas Tranolao ©'}
            <Link
                color="inherit"
                href="https://github.com/Gonstrr"
            >
                GitHub
            </Link>
        </Typography>
    )
}