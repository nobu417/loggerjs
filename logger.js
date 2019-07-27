class loggerjs {
    constructor ( env = 'development', colors = {} ) {
        self = this;
        this.env = env;
        
        if ( colors.debug === undefined ) { colors.debug = 'blue'; }
        if ( colors.error === undefined ) { colors.error = 'red'; }
        if ( colors.warn === undefined ) { colors.warn = 'orange'; }
        if ( colors.info === undefined ) { colors.info = 'green'; }
        
        this.colors = {
            debug: colors.debug,
            error: colors.error,
            warn: colors.warn,
            info: colors.info
        }
    }
    
    logger ( data, sender = null , level = 'debug' ) {
        // Not to work logger if application environment is not development.
        if ( this.env != 'development' ) {
            return;
        }
        //
        // Setting text label and color which'll be shown on console.log.
        //
        let _label = new String;
        let _color = new String;
        switch ( level ) {
        case 'error':
            _label = '[ERROR]';
            _color = this.colors.error;
            break;
        case 'debug':
            _label = '[DEBUG]';
            _color = this.colors.debug;
            break;
        case 'info':
            _label = '[INFO]';
            _color = this.colors.info;
            break;
        case 'warn':
            _label = '[WARN]'
            _color = this.colors.warn;
            break;
        }

        // There're two types of console.log ( w/ sender OR w/out sender )
        if ( ( sender ===  undefined ) || ( sender === null ) || ( sender == '' ) ) {
            console.log( `%c${_label} ⇢ ${data}`, `color: ${_color}` );
        } else {
            // Show level and sender on console.log.
            console.log( `%c${_label} ↳ ${sender}`, `color: ${_color}` );
            // Show String or Object on console.log.
            if ( typeof data == 'object' ) {
                console.log( data );
            } else {
                console.log( `%c⇢ ${data}`, `color: ${_color}` );
            }
        }
    }
    // Show log as debug mode.
    debug ( data, sender = null ) {
        this.logger( data, sender, 'debug' );
    }
    // Show log as error mode.
    error ( data, sender = null ) {
        this.logger( data, sender, 'error' );
    }
    // Show log as warn mode.
    warn ( data, sender = null ) {
        this.logger( data, sender, 'warn' );
    }
    // Show log as info mode.
    info ( data, sender = null ) {
        this.logger( data, sender, 'info' );
    }

}
