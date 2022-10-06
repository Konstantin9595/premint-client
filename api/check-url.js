const PremintClient = require('../PremintClient').default

const client = new PremintClient()
client.checkRuffleUrl('https://www.premint.xyz/piratesnft')
.then((respData) => {
    console.log('respData: ', respData)
    //const responseStatus = respData.responseStatus !== 200 ? 400 : 200
    //const responseData = JSON.stringify({responseStatus})

    // res.status(responseData).json(responseData)
})
.finally(() => {
    client.tlsInstance.then(res => res.exit())
})

// export default function handler(req, res) {

//     const {ruffleUrl} = req.body
//     if(!ruffleUrl) {
//         const responseData = JSON.stringify({
//             responseStatus: 400,
//             message: 'Invalid request. RuffleUrl not found'
//         })

//         res.status(400).json(responseData)
//         return false
//     }

//     const client = new PremintClient()
//     client.checkRuffleUrl(ruffleUrl)
//     .then((respData) => {
//         const responseStatus = respData.responseStatus !== 200 ? 400 : 200
//         const responseData = JSON.stringify({responseStatus})

//         res.status(responseData).json(responseData)
//     })
//     .catch((err) => {
//         const responseData = JSON.stringify({responseStatus: 404, message: err.message})
//         res.status(404).json(responseData)
//     })
//     .finally(() => {
//         client.tlsInstance.then((tls) => tls.exit().then(() => console.log('tls process closed.')))
//     })

//   }