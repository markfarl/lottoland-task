var logAPI = function ( data ) {
			console.log( data );
		}
		
var getJSONP = function ( url, callback ) {

	// Create script with url and callback (if specified)
	var ref = window.document.getElementsByTagName( 'script' )[ 0 ];
	var script = window.document.createElement( 'script' );
	script.src = url + (url.indexOf( '?' ) + 1 ? '&' : '?') + 'callback=' + callback;

	// Insert script tag into the DOM (append to <head>)
	ref.parentNode.insertBefore( script, ref );

	// After the script is loaded (and executed), remove it
	script.onload = function () {
		this.remove();
	};

};


export getJSONP( 'https://www.lottoland.com/api/drawings', 'logAPI' );