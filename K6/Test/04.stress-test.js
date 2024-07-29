import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {

    // Run it only after a deploy. It should be higher as the normal user frecuency
    stages: [
        { 
            duration: '5m', 
            target: 1000
        },
        { 
            duration: '30m',
            target: 1000
        },
        { 
            duration: '5m',
            target: 0
        }
    ],

}

export default function () {

    http.get('https://test.k6.io')
    sleep(1)
    
}