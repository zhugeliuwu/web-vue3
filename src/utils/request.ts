import axios from 'axios'
import { ElMessage } from 'element-plus'

let request = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  //超时时间
  timeout: 5000,
})
//请求拦截器
request.interceptors.request.use((config) => {
  //修改请求头，携带参数
  config.headers

  //返回配置对象
  return config
})

//响应拦截器
request.interceptors.response.use(
  (response) => {
    //对响应成功的数据进行操作
    return response.data
  },
  (error) => {
    const msg = error.response.message
    //提示错误信息
    ElMessage.error(msg)
    return Promise.reject(error)
  },
)

export default request
