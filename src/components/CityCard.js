import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard(prop) {
    const classes = useStyles();
    const [expanded] = React.useState(false);

    const result = prop.data;
    const city_details = result.dateCity
    console.log(result.dateCity)
    const lists = result.weather.list[0]
    // eslint-disable-next-line no-unused-vars
    for (var index in lists){
        var today = new Date(lists['dt'] * 1000).toDateString('en-US')
    }
     const name = city_details.name
     const country = city_details.country
     const population_det = city_details.population;
    for (var index in city_details){
        var sunrise_date = city_details['sunrise']
    }

    const sunrise_det = new Date(sunrise_date * 1000);
    console.log(sunrise_det)

    return (
        <Card className={classes.card}>
            <CardHeader
                title={name+', '+country}
                subheader= {today}
            />
            {/*<CardMedia*/}
            {/*    className={classes.media}*/}
            {/*    image="/static/images/cards/paella.jpg"*/}
            {/*    title="Paella dish"*/}
            {/*/>*/}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Population = {population_det}<br/>
                </Typography>

            </CardContent>
        </Card>
    );
}
