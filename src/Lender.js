kiva.Lender = kiva.RequestObject.extend({
	name: 'Lender'
	, kivaSrc: kiva.kivaSrc + '/lenders'
	, zipSrc: kiva.zipSrc + '/lenders'
	, fetch: function (args) {
		return kiva.RequestObject.prototype.fetch.call(this, args);
	}
});

