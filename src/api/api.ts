import axios from 'axios';

 class Api{
    url =' http://veterinaria.net/api/'

    public getSpecie(){
        const header = {
            Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC92ZXRlcmluYXJpYS5uZXRcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MjY5ODU0ODUsImV4cCI6MTYyNjk4OTA4NSwibmJmIjoxNjI2OTg1NDg1LCJqdGkiOiJTRmhjbmNpM2NDSFp5M1ZQIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.54lrbdvDLXJIVKUY1zOGVWiVT-ycNWc6SeUdSGvRL98'
        }

        // @ts-ignore
        return axios.get(this.url + 'specie/getSpecies');
    }
}

export default Api;

