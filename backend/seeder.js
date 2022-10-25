const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

// load env var
dotenv.config({path: './config/config.env'})

// load models
const User = require('./models/User')

// connect to db
const connect = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// read json
// __dirname is the directory where the seeder.js file lives
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`,'utf-8'))

// import data into db
const importData = async () => {
  try {
    await User.create(users)

    console.log('data imported')
    process.exit()
    
  } catch (error) {
    console.error(error)
  }
}

// delete data from db
const deleteData = async () => {
  try {
    await User.deleteMany()

    console.log('data deleted')
    process.exit()
    
  } catch (error) {
    console.error(error)
  }
}

if(process.argv[2] === '-i'){
  importData()
}else if(process.argv[2] === '-d'){
  deleteData()
}

module.exports = {importData, deleteData}
