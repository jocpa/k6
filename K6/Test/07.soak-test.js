import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {

    // A soak test is like an endurance Test
    stages: [
        { 
            duration: '5m', 
            target: 1000
        },
        { 
            duration: '24h',
            target: 100
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