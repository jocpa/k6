import http from 'k6/http'

export default function () {

    /// Credentials
    let url = 'https://test-api.k6.io/auth/token/login/'

    let body = JSON.stringify ({
        username: 'jocparzu',
        password: 'test'
    })
    let params = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let response = http.post(url, body, params)
    const { access } = response.json()



    url = 'https://test-api.k6.io/my/crocodiles/'

    body = JSON.stringify ({
        name: 'Miles',
        sex: 'M',
        date_of_birth: '2000-01-10'
    })

    params = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + access
        }
    }
    
    response = http.post(url, body, params)


}