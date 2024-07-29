import http from 'k6/http'
import { sleep } from 'k6'
import { Counter } from 'k6/metrics'

export const options = {

    vus: 5,
    duration: '5s',
    thresholds: {
        http_req_duration: ['p(95)<250'],
        my_counter: ['count>10']
    }

}

let myCounter = new Counter('my_counter')

const url = 'https://test.k6.io'

export default function () {

    const response = http.get(url)
    myCounter.add(1)
    sleep(2)

}