import axios from 'axios'

export const getProvinceApi = () => {
  return axios.get('https://hmajax.itheima.net/api-s/provincesList')
}

export const getCityApi = (proId: string) => {
  return axios.get('https://hmajax.itheima.net/api-s/cityList', {
    params: {
      proId
    }
  })
}

export const getAreaApi = (cityId: string) => {
  return axios.get('https://hmajax.itheima.net/api-s/areaList', {
    params: {
      cityId
    }
  })
}
