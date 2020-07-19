import axios from 'axios'

export const request = axios.create({
    baseURL: 'http://api.football-data.org/v2',
    headers: { 'X-Auth-Token': '368c20e961244e21a09648f8e83787b6' }
});