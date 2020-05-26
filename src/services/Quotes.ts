import axios, { AxiosResponse } from "axios";
import { IQuoteDTO } from "./quotes.interface";

const BASE_URL = "https://quotes.rest";

const params = {
  language: "en",
};

export default {
  fetch(): Promise<AxiosResponse<IQuoteDTO>> {
    return axios.get<IQuoteDTO>(`${BASE_URL}/qod`, { params });
  },
  fetchRandom(): Promise<AxiosResponse<IQuoteDTO>> {
    return axios.get<IQuoteDTO>(`${BASE_URL}/quote/random`, { params }); // FIXME: è a pagamento...
  },
};
