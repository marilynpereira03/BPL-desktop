(function () {
	'use strict'

	angular.module('bplclient.filters', [])
	angular.module('bplclient.services', ['ngMaterial'])
	angular.module('bplclient.directives', [])
	angular.module('bplclient.accounts', ['ngMaterial', 'bplclient.services', 'bplclient.filters', 'bplclient.addons'])
	angular.module('bplclient.components', ['gettext', 'ngMaterial', 'bplclient.services', 'bplclient.accounts'])
	angular.module('bplclient.addons', [])
	angular.module('bplclient.constants', [])
})()
