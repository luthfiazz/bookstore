'use strict'

class TestController {
  index({request, response}) {
    return 'ini methode index'
  }

  create({request, response}){
    return 'ini methode create'
  }

  update({request, response}){
    return 'ini methode update'
  }
}

module.exports = TestController
