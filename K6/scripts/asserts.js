import http from 'k6/http'
import { check } from 'k6'

const url = 'https://test.k6.io'
export default function () {

    //http request 
    const response = http.get(url)

    //Object destructuring
    const { status } = response
    console.log(status)

    //Assert
    check( true, {
        'true is true': ( value ) => value === true
    } )
}