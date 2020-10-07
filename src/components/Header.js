import React from "react";
import { AppBar, Button, Grid, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      padding: 15,
      marginRight: 15,
      '&:hover': {
          color: 'gray',
          boxShadow: '0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)',
      }
    },
    text: {
      color: 'white',
      marginLeft: 15
    },
    toolbar: {
        padding: 0
    }
});

export default function Header() {
    const classes = useStyles();

    return(
        <AppBar position='static'>
                <Toolbar className={classes.toolbar}>
                    <Grid container alignItems='center' justify='space-between'>
                        <Grid item>
                            <Typography className={classes.text} color='secondary' variant='h1'>
                                Poke151
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button className={classes.button} size='large'>Abilities</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
        </AppBar>
    );
}
