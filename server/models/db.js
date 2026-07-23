const mongoose = require('mongoose')
const dns = require('dns')

// Override default DNS servers to Google DNS to resolve MongoDB Atlas SRV query issue
dns.setServers(['8.8.8.8', '8.8.4.4'])

const mongo_url = process.env.MONGO_CONN

mongoose.connect(mongo_url).then(() => {
    console.log('Connection established')
}).catch((err) => {
    console.log('Error occurred while connecting', err)
})