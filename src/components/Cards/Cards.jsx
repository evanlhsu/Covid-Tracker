import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const covidData = [
    { type: confirmed, title: 'Infected', description: 'Number of active cases of COVID-19', styleName: 'infected' },
    { type: recovered, title: 'Recovered', description: 'Number of recoveries from COVID-19', styleName: 'recovered' },
    { type: deaths, title: 'Deaths', desciption: 'Number of deaths caused by COVID-19', styleName: 'deaths' }
  ];

  const uniqueStyle = (styleName) => {
    if (styleName == 'infected') {
      return styles.infected;
    } else if (styleName == 'recovered') {
      return styles.recovered;
    } else {
      return styles.deaths;
    }
  }

  if (!confirmed) {
    return 'Loading...';
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {covidData.map((cardData, i) => {
          const style = cardData.styleName;
          return (
            <Grid item key={i} component={Card} xs={12} md={3} className={`${styles.card}, ${uniqueStyle(cardData.styleName)}`}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>{cardData.title}</Typography>
              <Typography variant="h5">
                <CountUp start={0} end={cardData.type.value} duration={2.5} separator="," />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
              <Typography variant="body2">Number of active cases of COVID-19</Typography>
            </CardContent>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Cards;