# Trigger

[![Join the chat at https://gitter.im/nblackburn/trigger](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/nblackburn/trigger?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A simple but powerful event system.

## Features

-   Well documented.
-   Zero dependencies.
-   Simple yet powerful (all thought, no bloat).

## Methods

### Bind

Binds a new named trigger event.

| parameter | type     | description                                                 | required |
|-----------|----------|-------------------------------------------------------------|----------|
| name      | string   | The name of the event.                                      | yes      |
| callback  | function | The function to be invoked on the triggering of this event. | no       |

```javascript
    trigger.bind('first.event', function(parameters) {
        console.log('Hello, ' + parameters.name);
    });
```

### Unbind

Unbinds a existing named trigger event.

| parameter | type     | description           | required |
|-----------|----------|-----------------------|----------|
| name      | string   | The name of the event | yes      |

```javascript
    trigger.unbind('first.event');
```

### Fire

Invokes a named trigger event. You can also pass parameters to this function
which can be accessed in the first argument of the callback method.

| parameter  | type   | description                          | required |
|------------|--------|--------------------------------------|----------|
| name       | string | The name of the event.               | yes      |
| parameters | object | The parameters to pass to the event. | no       |

```javascript
    trigger.fire('first.event', {name: 'Joe'});
```

Advanced
--------

If you are looking for more advanced functionality, here are some other
functionality Trigger offers.

### Chained events.

It is possible to chain events inside callbacks.

```javascript
    trigger.bind('first.event', function(parameters) {
        this.fire('second.event');
    });
```

### Self-destructing events.

You can remove events as they happen by calling the unbind event inside the
events callback method.

```javascript
    trigger.bind('first.event', function(parameters) {
        this.unbind('first.event'); 
    });
```

## Donations

[Donate](https://payy.me/@nblackburn)
