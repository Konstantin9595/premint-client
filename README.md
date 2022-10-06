# [Premint](https://premint.xyz/]) ruffle results by metamask address

### How to use

1. Check ruffle result by input address

```js
const client = new PremintClient()
const wallet =  '0xbCcF360Ec517d51f8045639b0d24e69e5e18c647' // required parameter
const proxy = '' // optional parameter
client.checkRuffleStatus(ruffleUrl, {wallet, proxy})
.then(response => {
	const {
	responseStatus, 
	isRegister, 
	message, 
	url, 
	proxy, 
	registerWallet 
	} = response
})

```

2. Mass checking

```js
(async() => {
    const sessionList = [
    	{ wallet: '0x3ff62aba5527e50360cf4ded78ecbdd9efce3848', proxy: 'http://Login:password@ip:port' },
    	{ wallet: '0x0ba1fe099bc55de50d03fb291ead992e3108d47c', proxy: '' },
    	{ wallet: '0xb455393354079dc7ce58ef89b48a07ca86a42c44', proxy: '' }
    ]
    
    const client = new PremintClient()
    
    for( let ndx = 0; ndx < session_list.length; ndx++) {
    	const session = session_list[ndx]
    	const {registerWallet, message} = await premint.checkRuffleStatus(url, session)
    	console.log(`${registerWallet}: ${message}`)
    	await sleep(3000)
    }
})()

```

3.  Checking for a valid premint url

```js
const client = new PremintClient()

client.checkRuffleUrl(ruffleUrl)
.then(response => {
   const {status} = response
})

```