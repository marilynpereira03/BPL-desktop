;(function () {
  'use strict'

  angular.module('bplclient.constants')
    // 1 BPL has 100000000 "bpltoshi"
    .constant('BPLTOSHI_UNIT', Math.pow(10, 8))
})()
