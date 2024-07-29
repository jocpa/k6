import http from 'k6/http'
import { check, sleep } from 'k6'

export default function () {

    let response = http.get('https://test-api.k6.io/public/crocodiles/')
    sleep(2)

    const crocodileId = 2
    response = http.get(`https://test-api.k6.io/public/crocodiles/${crocodileId}`)
    console.log(response.headers)
    console.log(response.headers[Content-Type])

    check(response, {
        'status is 200': res => res.status === 200,
        'Crocodiles is Ed': res => res.json().name === 'Ed'
    })
}