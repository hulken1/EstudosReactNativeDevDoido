
const variables = {
  Api:{
      port:process.env.PORT || 3333
  },
  Database:{
      connection: process.env.MONGO_URI
  },
  Security:{
      secretKey:process.env.SECRET_KEY 
  },
  Pagarme:{
   pagarmeKey:process.env.PAGARME_KEY ,
   pagarmeKeyTest:process.env.PAGARME_KEY_TEST 
  }
}

module.exports = variables;