import http from 'k6/http'
import { check, sleep } from 'k6'
import exec from 'k6/execution'

export const options = {

    vus: 10,
    duration: '10s',
    thresholds: {
        http_req_duration: ['p(95)<200'],
        http_req_failed: ['rate<0.01'],
        http_reqs: ['count>20'], // Send at leats 20 rquest
        http_reqs: ['rate>4'], 
        vus: ['value>9'],
        checks: ['rate>0.98']
    }

}

const url = 'https://test.k6.io'
export default function () {

    const response = http.get('https://test.k6.io' + (exec.scenario.iterationInTest === 1 ? 'foo' : ''))
       

    check( response, {
        'Status is 200': ( res ) => res.status === 200,
        'Page is the startpage': ( res ) => res.body.includes('Collection of simple web-pages suitable for load testing.')
    } )
    sleep(2)

}