import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

// headers: {
//     'X-RapidAPI-Key': '29559817acmsh753d7ebea8aafcep1c388ejsn687ff790d7ca',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }

export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "29559817acmsh753d7ebea8aafcep1c388ejsn687ff790d7ca",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
  const data = response.data
  return data;
};
