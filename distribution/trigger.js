/**
 * Trigger
 * A simple but powerful event system.
 *
 * license: MIT
 * version: 0.1.0
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
	Trigger.version = '0.1.0';

	// Extend the plugin with public functionality.
	Trigger.prototype = {

		// Any created events are stored in this array.
		_triggers: [],

		/**
		 * Binds a new named trigger event.
		 *
		 * param: <string> name The name of the event.
		 * param: <function> callback The function to be invoked on the triggering of this event.
		*/
		bind: function(name, callback)
		{
			// Check the callback is a function.
			if(typeof callback !== 'function') {
				throw Error('callback must be of type function.');
			}

			// Push the trigger.
			this._triggers.push({name: name, callback: callback});
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

			// Loop though the triggers.
			for(var index = 0; index < triggers.length; index++)
			{
				// create a reference to the current trigger.
				var trigger = this._triggers[index];

				// Check the trigger name matches.
				if(trigger.name === name) {

					// remove the named event from the list of known triggers.
					triggers.splice(index);
				}
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

			// Loop though the triggers.
			for(var index = 0; index < triggers.length; index++)
			{
				// create a reference to the current trigger.
				var trigger = triggers[index];

				// Check the trigger name matches.
				if(trigger.name === name) {

					// invoke the callback method along with the pass parameters.
					trigger.callback.apply(this, [parameters]);
				}
			}
		}

	};

	// Expose the plugin to the window.
	window.Trigger = Trigger;

})(window, document);