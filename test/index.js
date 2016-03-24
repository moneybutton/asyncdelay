/* global describe,it */
'use strict'
let asink = require('asink')
let asyncDelay = require('../')

describe('asyncDelay', function () {
  it('should resolve', function () {
    return asink(function *() {
      yield asyncDelay(1) // 1 ms
      yield asyncDelay(10) // 10 ms
    }, this)
  })
})
