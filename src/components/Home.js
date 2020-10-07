import React from "react";
import { Query } from 'react-apollo';
import { Container, Grid, GridList, GridListTile, Paper, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ALL_POKEMON } from '../graphql/queries';

const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'auto'
    },
    bannerText: {
      textAlign: 'center'
    },
    container: {
      padding: 20,
      marginLeft: 0,
      marginRight: 0
    },
    gridList: {
      width: 'auto',
      height: 'auto',
      overflow: 'auto',
    },
    gridListTile: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    gridText: {
      textAlign: 'center',
    },
    pokemonImage: {
      flex: 1,
      resizeMode: 'contain',
      width: 120,
      height: 120,
      maxWidth: 100
    },
    typeIcon: {
      flex: 1,
      resizeMode: 'contain',
      width: 35,
      height: 35
    },
    typeIconContainer: {
        verticalAlign: 'middle',
        textAlign: 'center'
    }
});


export default function Home() {
    const classes = useStyles();

    return(
        <Query query={ALL_POKEMON}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;
    
            return (
                <div className={classes.root}>
                <Box className={classes.container} justify='center'>
                    <Typography className={classes.bannerText} color='secondary' variant='h3' >
                        Welcome to Poke151!
                    </Typography>
                    <Typography> </Typography>
                    <Typography className={classes.bannerText} color='secondary' variant='h3' >
                    Explore and Learn More About Nintendo's Original 151 Pokemon!
                    </Typography>
                </Box>
                <Grid container justify='center'>
                    <GridList cellHeight={225} className={classes.gridList} cols={5} spacing={50}>
                        {data.pokemons.map(({ name, dexNumber, typeOne, typeTwo}) => (
                            <GridListTile key={name} className={classes.gridListTile}>
                                <img className={classes.pokemonImage} src={`/images/sprites/normal/${name}.gif`} alt={`${name} gif`}/>
                                <Typography className={classes.gridText}>{name}</Typography>
                                <Typography className={classes.gridText}>{dexNumber}</Typography>
                                {typeTwo != null 
                                    ? <div className={classes.typeIconContainer}>
                                         <img className={classes.typeIcon} src={`/images/icons/${typeOne}.png`} alt={`${typeOne} icon`}/>
                                         <img className={classes.typeIcon} src={`/images/icons/${typeTwo}.png`} alt={`${typeTwo} icon`}/>
                                      </div>
                                    : <img className={classes.typeIcon} src={`/images/icons/${typeOne}.png`} alt={`${typeOne} icon`}/>}
                            </GridListTile>
                        ))} </GridList>
                    </Grid>
                </div>
            );
        }}
        </Query>
    )
}
