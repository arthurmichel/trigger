/**
 * Trigger
 * A simple but powerful event system.
 *
 * license: MIT
 * version: 0.2.0
 * author: Nathaniel Blackburn
 * support: support@nblackburn.uk
 * website: http://github.com/nblackburn/trigger
*/
;(function(window, document, undefined) {

	// Construct the plugin.
	var Trigger = function()
	{
		this.version = Trigger.version;

		return this;
	};

	// Define the plugin version.
	Trigger.version = '0.2.0';

	// Extend the plugin with public functionality.
	Trigger.prototype = {

		// Any created events are stored in this array.
		_triggers: {},

		/**
		 * Binds a new named trigger event.
		 *
		 * param: <string> name The name of the event.
		 * param: <function> callback The function to be invoked on the triggering of this event.
		*/
		bind: function(name, callback)
		{
			// create a reference to the created triggers.
			var triggers = this._triggers;

			// Check the callback is a function.
			if(typeof callback !== 'function') {
				throw Error('callback must be of type function.');
			}

			// create the trigger if it doesn't exist.
			if(!triggers.hasOwnProperty(name)) {
				triggers[name] = [];
			}

			// Push the trigger.
			this._triggers[name].push(callback);
		},

		/**
		 * Unbinds a existing named trigger event.
		 *
		 * param: <string> name The name of the event to unbind.
		*/
		unbind: function(name)
		{
			// create a reference to the created triggers.
			var triggers = this._triggers;

			// check a trigger with the specified name exists.
			if(triggers.hasOwnProperty(name)) {
				delete triggers[name];
			}
		},

		/**
		 * Invokes a named trigger event.
		 * 
		 * param: <string> name The name of the event to invoke.
		 * param: <object> parameters Parameters to pass to the event.
		*/
		fire: function(name, parameters)
		{
			// create a reference to the created triggers.
			var triggers = this._triggers;

			// check a trigger with the specified name exists.
			if(triggers.hasOwnProperty(name))
			{
				var callbacks = triggers[name];

				// Loop though the triggers.
				for(var index = 0; index < callbacks.length; index++)
				{
					// invoke the callback method along with the pass parameters.
					callbacks[index].apply(this, [parameters]);
				}
			}
		}
	};

	// Expose the plugin to the window.
	window.Trigger = Trigger;

})(window, document);