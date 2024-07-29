import http from 'k6/http'
import { check, sleep } from 'k6'

export default function () {
    let url = 'https://test-api.k6.io/auth/token/login/'

    let bodyRequest = JSON.stringify ({
        username: 'jocparzu',
        password: 'test'
    })
    let params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let response = http.post(url, bodyRequest, params)
    const { access } = response.json()

    sleep(1)

    url = 'https://test-api.k6.io/my/crocodiles/14009083'

    bodyRequest = JSON.stringify ({
        name: 'Random Croc name',
        sex: 'F',
        date_of_birth: '2000-12-12'
    })

    params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access
        }
    }


    response = http.put(url,bodyRequest,params)
    
    const { body } = response.json()
    console.log(body)
    
}