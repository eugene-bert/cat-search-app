import React, {Fragment, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {catImage, loadData} from '../../actions';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Image from 'material-ui-image';

const useStyles = makeStyles({
  media: {
    height: 350,
    backgroundSize: 'contain',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: "60%",
    margin: "auto"
  },
  imageArea: {
    objectFit: "contain !important"
  }
});

export const CatImage = props => {
  const dispatch = useDispatch();
  const {imageData} = useSelector(state => state);
  const {breedId} = props;
  const classes = useStyles();

  useEffect(() => {
    dispatch(catImage(breedId));
  }, [dispatch, breedId]);

  return imageData ? (
    <Fragment>
      <div className={classes.image}>
        <Image
          className={classes.imageArea}
          src={imageData}
          aspectRatio={(4/3)}
        />
      </div>
    </Fragment>
  ) : (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
};
