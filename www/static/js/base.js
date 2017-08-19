 /*
 *
 * FEATURES SETUP
 * -------------
 *
 *	NOTE: Your FEATURES variable is global scope.
 * 	Javascript Global Scope: http://stackoverflow.com/a/500459 
 * 	ie. FEATURES.yourFunctionName();
 * 
 * 	NOTE: Our global variable "FEATURES" is all caps. 
 * 	ALL global scoped variables should be written in all caps
 *	to signify hierarchy in the application,
 *
 * 	Write your page specific functions here, then call the function for 
 * 	the pages you need it on below.
 *
 * @usage
 * 		var FEATURES = {
 *   		yourFunctionName: function() {
 *    		 -- Write/paste your script here --
 *  		},
 * 		};
 */

var FEATURES = {
    
    runFoundation: function () {
        $(document).foundation();        
    }
};