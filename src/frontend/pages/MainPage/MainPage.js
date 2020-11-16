import React, {useEffect} from 'react';
import Box from '@material-ui/core/Box';
import './MainPage.scss';
import {useDispatch} from 'react-redux';
import {loadData} from '../../actions';
import {DescriptionContainer} from '../../components/DescriptionContainer/DescriptionContainer';
import SearchBar from '../../components/SearchBar/SearchBar';
import AllCats from '../../components/AllCats/AllCats';

export default function MainPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadData());
  }, [dispatch]);

  return (
    <Box className="main-page-box">
      <SearchBar />
      <DescriptionContainer />
      <AllCats />
    </Box>
  );
}
