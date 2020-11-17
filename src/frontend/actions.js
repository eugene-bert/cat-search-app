import axios  from 'axios'

//func
const getCats = async (page, limit) => {
  if (page && limit) {
    return await axios.get(`${process.env.FRONTEND_API}/breeds?page=${page}&limit=${limit}`)
  }
  return  await axios.get(`${process.env.FRONTEND_API}/breeds`)
}

export const getCatImage = async (breed_id) => {
  return  await axios.get(`${process.env.FRONTEND_API}/images/search?breed_id=${breed_id}`)
}

//actions
export const loadData = (page, limit) => (dispatch, getState) => {
  getCats(page, limit).then(data => {
    (page && limit) ?  dispatch(putData(data, 'PUT_SORTED_DATA')) :
    dispatch(putData(data, 'PUT_DATA'))
  }).catch(e => {
    dispatch(putData(e, 'LOAD_DATA_FAILED'))
  })
}

export const putData = (dataFromServer, type) => {
  return {
    type: type,
    payload: dataFromServer
  }
}

export const setValue = (inputData) => {
  return {
    type: 'INPUT_VALUE',
    payload: inputData
  }
}

export const catImage = (breed_id) => (dispatch, getState) => {
  getCatImage(breed_id).then(data => {
    dispatch(putData(data, 'PUT_IMAGE_DATA'))
  }).catch(e => {
    dispatch(putData(e, 'IMAGE_DATA_LOAD_FAILED'))
  })
}
