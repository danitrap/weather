import axios, { AxiosResponse } from "axios";
import { IWeatherData } from "./weather.interface";

const API_KEY = "7dcde318fe928b8ab6d628671a4ab51c";

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid=${API_KEY}&lang=it&units=metric`;

export default {
  getFor(city: string): Promise<AxiosResponse<IWeatherData>> {
    return axios.get<IWeatherData>(BASE_URL.replace("{city}", city));
  },
};
