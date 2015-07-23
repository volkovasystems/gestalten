var OPTION_PATTERN = /^\@([a-z][a-z0-9\-]+)\:[a-z][a-z0-9\-]+$/;

var gestalten = function gestalten( options ){
    var command = "";
    for( var option in options ){
        if( OPTION_PATTERN.test( option ) ){
            command = option.match( OPTION_PATTERN )[ 1 ];

            gestalten( global[ command ]( options[ option ] ) );

        }else{
            global[ option ] = options[ option ];
        }
    }
};

module.exports = gestalten;
