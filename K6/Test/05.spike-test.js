import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {

    // A breakpoint test is something that we know the application would never handler
    stages: [
        {
            duration: '2h', 
            target: 10000
        }
    ],

}

export default function () {

    http.get('https://test.k6.io')
    sleep(1)
    
}