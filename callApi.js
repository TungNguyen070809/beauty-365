import axios from "axios";
import clientConfig from './client-config';
export default axios.create({
  baseURL: clientConfig.clientConfig.apiUrl,
  responseType: "json",
  timeout: 10000
});