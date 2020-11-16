import axios  from 'axios'

const getCats = async () => {
  return  await axios.get(`${process.env.FRONTEND_API}`)
}

export const loadData = () => (dispatch, getState) => {
  getCats().then(data => {
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
