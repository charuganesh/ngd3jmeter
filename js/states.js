angular.module('uiJMRouter')
	.config([ '$stateProvider', '$urlRouterProvider', function ($stateProvider,   $urlRouterProvider) {
      
		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state("home", {
				url: "/",
				template: '<h1> Welcome to JMeter Analysis Tool</h1>'
			})
			.state("barplots", {
				url: "/barplots",
				templateUrl: '/ngd3jmeter/template/jmbar_template.html'
			})
			.state("tsplots", {
				url: "/tsplots",
				templateUrl: '/ngd3jmeter/template/jmtsplot_template.html'
			})
			.state("tables", {
					url: "/tables",
					templateUrl: '/ngd3jmeter/template/jmtable_template.html'
			})
			.state("tableraw", {
					url: "/tableraw",
					templateUrl: '/ngd3jmeter/template/jmtableraw_template.html'
			})		
			.state("explorejtl", {
				url: "/explorejtl",
				templateUrl: '/ngd3jmeter/template/jmexplorejtl_template.html'
			})
			.state("thrplots", {
				url: "/thrplots",
				templateUrl: '/ngd3jmeter/template/jmthrplot_template.html'
			});
	}]);
