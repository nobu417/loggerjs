# loggerjs
Usefully works insetead of console.log!!

# Usage
Just add codes below.

```
<script src="PATH/logger.js"></script>
<script>
    const logger = new loggerjs;
</script>
```

Once you initialize an instance of loggerjs, you'll be able to use like code below.

```
<script>
    logger.debug('debug message.');
    logger.warn('warn message.');
    logger.info('info message.');
    logger.error('error message.');
    logger.logger('debug message.');
</script>
```

If you hope to use loggerjs with classes of JavaScript, you'd better use loggerjs w/ sender option (2nd argument).
```
<script>
const logger = new loggerjs;
class Sample {
    constructor {
        logger.info('info message.', this.constructor.name);
    }
}
</script>
```

Then loggerjs will output log with sender onto console.

# Advanced Options.
You can initialize the loggerjs with some options.

## Environment

```
<script>
    const logger = new loggerjs('development');
</script>
```

It'll be useful to use the loggerjs with Rails. For instance, you can initialize loggerjs when using with Rails together. ( sample code is written using haml)

```
:javascript
  const logger = new loggerjs('#{Rails.env}'));
```

Then loggerjs will output messages only under development environment. No messages will be appeared on your console when your application is launched as staging or production.

## Colors
You can set colors which you hope to use for each levels of log messages. You can set color options after initializing an instance of loggerjs or initializing loggerjs w/ color options.


### After Initializing...
```
<script>
    const logger = new loggerjs('development');
    logger.colors.error = '#cc0000';
    logger.colors.debug = '#000000';
    logger.colors.info = '#0000cc';
    logger.colors.warn = '#ffbb00';
</script>
```

### Initializing w/ color options.
```
<script>
    const logger = new loggerjs('development', { error: '#cc0000', debug: '#000000', info: '#0000cc', warn: '#ffbb00' } );
</script>
```

