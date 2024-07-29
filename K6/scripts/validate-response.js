import http from 'k6/http'
import { check } from 'k6'

const url = 'https://test.k6.io'
export default function () {

    //http request 
    const response = http.get(url)

    const { status } = response
    console.log(status)

    //Assert
    check( response, {
        'Status is 200': ( res ) => res.status === 200
    } )

    check( response, {
        'Page is the startpage': ( res ) => res.body.includes('Collection of simple web-pages suitable for load testing.') 
    } )
    
}