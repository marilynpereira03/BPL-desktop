(function () {
	'use strict'

	angular.module('bplclient.directives')
		.directive('validAmount', ['BPLTOSHI_UNIT',
			function (BPLTOSHI_UNIT) {
				return {
					require: 'ngModel',
					link: function (scope, elem, attrs, ctrl) {
						var val = function (value) {
							if (typeof value === 'undefined' || value === 0) {
								ctrl.$pristine = true
							}
							var num = Number((value * BPLTOSHI_UNIT).toFixed(0)) // 1.1 = 110000000
							var totalBalance = Number(scope.send.totalBalance * BPLTOSHI_UNIT)
							var remainingBalance = ((totalBalance - num) / BPLTOSHI_UNIT)
							scope.send.remainingBalance = isNaN(remainingBalance) ? totalBalance / BPLTOSHI_UNIT : remainingBalance

							if (typeof num === 'number' && num > 0) {
								if (num > Number.MAX_SAFE_INTEGER) {
									ctrl.$setValidity('validAmount', false)
								} else {
									ctrl.$setValidity('validAmount', true)
								}
							} else {
								ctrl.$setValidity('validAmount', false)
							}
							return value
						}
						ctrl.$parsers.unshift(val)
						ctrl.$formatters.unshift(val)
					}
				}
			}
		])
})()
