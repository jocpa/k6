import http from 'k6/http'
import { check, sleep } from 'k6'
import exec from 'k6/execution'

export const options = {
    thresholds: {
        http_req_duration: ['p(95)<1000'],
    }

}

const url = 'https://test.k6.io'
export default function () {

    http.get('')
    http.get('')

}