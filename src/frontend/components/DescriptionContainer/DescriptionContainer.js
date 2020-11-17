import React from 'react';
import {Box, Card} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import {useSelector} from 'react-redux';
import CardContent from '@material-ui/core/CardContent';
import {CatImage} from '../CatImage/CatImage';


export const DescriptionContainer = () => {
  const {exist, data} = useSelector(state => state);

  return exist >= 0 ? (
    <Container maxWidth="lg" style={{margin: "30px auto"}}>
      <Card>
        <CardHeader
          title={data[exist].name}
          subheader={data[exist].temperament}
        />
        <CatImage breedId={data[exist].id} />
        <CardContent>
          {data[exist].description}
        </CardContent>
      </Card>
    </Container>
  ) : null
}
