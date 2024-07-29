import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {

    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<200'],
        http_req_failed: [rate<0.01]
    }

}

const url = 'https://test.k6.io'
export default function () {

    const response = http.get(url)

    /* const { status } = response
    console.log(status) */

    //Assert
    check( response, {
        'Status is 200': ( res ) => res.status === 200,
        'Page is the startpage': ( res ) => res.body.includes('Collection of simple web-pages suitable for load testing.')
    } )
    sleep(2)

}