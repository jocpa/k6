import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {

    stages: [
        { // Starting with 0 a goes to 100 users in 5 minutes
            duration: '1m', 
            target: 100
        },
        { // For 30 minutes we staying in 100 users
            duration: '2m',
            target: 100
        },
        { // In 5 minutes we're going to 100 users to 0
            duration: '1m',
            target: 0
        }
    ],
    cloud: {
        projectID: 3707081
    }

}

export default function () {

    http.get('https://test.k6.io')
    sleep(1)
    
}