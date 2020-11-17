import React, {Fragment, useEffect, useState} from 'react';
import {getCatImage} from '../../actions';
import Image from 'material-ui-image';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles({
  imageArea: {
    objectFit: "contain !important"
  }
});

export const GridImage = (props) => {
  const {breedId} = props
  const [image, setImage] = useState('')
  const classes = useStyles();


  useEffect(() => {
    getCatImage(breedId).then(data => setImage(data.data[0].url))
  }, []);

  return (
    <Fragment>
      <Image
        className={classes.imageArea}
        src={image}
        aspectRatio={(4/3)}
      />
    </Fragment>
  )
}
