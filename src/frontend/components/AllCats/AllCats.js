import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {useDispatch, useSelector} from 'react-redux';
import {loadData, setValue} from '../../actions';
import Pagination from '@material-ui/lab/Pagination';
import {GridImage} from '../GridImage/GridImage';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '80%',
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  gridItem: {
    cursor: 'pointer',
  },
}));

export default function AllCats() {
  const dispatch = useDispatch();
  const {data, sortedData} = useSelector(state => state);
  const [page, setPage] = useState(1);
  const classes = useStyles();
  const pagesAmount = Math.round(data.length / 8);

  useEffect(() => {
    dispatch(loadData(page, 8));
  }, [dispatch, page]);

  return sortedData ? (
    <div className={classes.root}>
      <GridList cellHeight={180} cols={4} className={classes.gridList}>
        {Array.from(sortedData).map((el, index) => (
          <GridListTile
            className={classes.gridItem}
            key={el.id}
            onClick={() => {
              const namesArray = data.map(cat => cat.name);
              dispatch(setValue({input: el.name, exist: namesArray.indexOf(el.name)}));
            }}
          >
            <GridImage breedId={el.id} />
            <GridListTileBar title={el.name} subtitle={<span>{el.temperament}</span>} />
          </GridListTile>
        ))}
      </GridList>
      <Pagination count={pagesAmount} page={page} onChange={(event, newPage) => setPage(newPage)} />
    </div>
  ) : null;
}
