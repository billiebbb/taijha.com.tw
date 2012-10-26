var ParseCssNumber = function(cssval){
	return (cssval)? parseInt(cssval.replace('px', '')) : 0;
}

var parseCssNumber = ParseCssNumber;