import React, {Fragment, useEffect, useState} from 'react';
import {getCatImage} from '../../actions';
import Image from 'material-ui-image';

export const GridImage = (props) => {
  const {breedId} = props
  const [image, setImage] = useState('')


  useEffect(() => {
    getCatImage(breedId).then(data => setImage(data.data[0].url))
  }, []);

  return (
    <Fragment>
      <Image
        src={image}
        aspectRatio={(4/3)}
      />
    </Fragment>
  )
}
