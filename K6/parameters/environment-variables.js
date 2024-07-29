
import http from 'k6/http'

export default function () {

    // k6 run -e BASE_URL=https://test-api.k6.io  environment-variables.js

    http.get(`${__ENV.BASE_URL}/public/crocodiles/`)

}