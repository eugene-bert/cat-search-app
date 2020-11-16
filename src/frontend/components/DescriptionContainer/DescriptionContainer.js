import React from 'react';
import {Box, Card} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import Container from '@material-ui/core/Container';
import {useSelector} from 'react-redux';
import CardContent from '@material-ui/core/CardContent';


export const DescriptionContainer = () => {
  const {exist, data} = useSelector(state => state);

  return exist >= 0 ? (
    <Container maxWidth="lg">
      <Card>
        <CardHeader
          title={data[exist].name}
          subheader={`id: ${data[exist].id}`}
        />
        <CardContent>
          {console.log(data[exist])}
          {data[exist].description}
        </CardContent>
      </Card>
    </Container>
  ) : null
}
