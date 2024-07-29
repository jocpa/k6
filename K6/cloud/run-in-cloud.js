export const options = {

    vus: 10,
    duration: '10s',
    cloud: {
        projectID: 3707081
    }

}

export default function () {

    http.get('https://test.k6.io')
    
}

// k6 run 01.first-script.js -o cloud
//k6 cloud 01.first-script.js       