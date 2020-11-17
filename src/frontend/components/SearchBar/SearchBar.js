import React, {Fragment} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useDispatch, useSelector} from 'react-redux';
import {setValue} from '../../actions';
import Box from '@material-ui/core/Box';
import './SearchBar.scss'

export default function SearchBar() {
  const cats = useSelector(state => state.data);
  const dispatch = useDispatch()

  const handleInput = (inputData) => {
    let namesArray = cats.map(cat => cat.name)
    return namesArray.indexOf(inputData)
  }

  return (
    <Box className='search-bar'>
      <Autocomplete
        className='search-bar__input'
        options={Array.from(cats)}
        getOptionLabel={option => option.name}
        style={{width: 300}}
        onInputChange={(event, newInputValue) => {
          dispatch(setValue({input: newInputValue, exist: handleInput(newInputValue)}))
        }}
        freeSolo
        renderInput={params => (
            <TextField {...params} label="Search cats" variant="outlined" />
        )}
      />
    </Box>
  );
}
