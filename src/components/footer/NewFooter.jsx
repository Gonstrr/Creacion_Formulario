
import React from 'react'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core/Grid/Grid'
import { Box } from '@material-ui/'
import Link from '@material-ui/core/Link'



export default function NewFooter() {

    return (
        <footer>
            <Box>
                <Container  maxWidht="lg" >
                    <Grid  container spacing={5}>
                        <Grid item xs={12} sm={4} >
                            <Box borderBottom={1}>HELP</Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contacto
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}
