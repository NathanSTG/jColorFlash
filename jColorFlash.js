/**
 * jColorFlash is a jQuery plugin that allows you to flash all the
 * text within an element with different colors, at different intervals
 */
(function($){
    var flashers = [];

    /**
     * This method will create a colorFlasher object from the current
     ]* element and return it.
     */
	$.fn.colorFlash = function(options){
        //Extend the default options object
        options = $.extend(this.defaults, options);
        var f = new Flasher(this, options);
		flashers.push(f);
        return f;
	}

    $.fn.colorFlash.Flasher = function($elem, options){
        //TODO
    }

    /**
     *
     */
    $.fn.colorFlash.Flasher.start = function(limit){
        //TODO
    }

	/**
	 * Default options. Exposed to allow user customization.
	 * Parameters:
	 *   -mode: String - The flash mode that will be used by the plugin
	 *      Values:
	 *       -solid: Flashes all text as the same color.
	 *       -scroll: Scrolls the colors across each letter of the text.
	 *       -random: Flashes each letter a random color.
	 *      Default: solid
	 *   -interval: Number - the time to wait between flashes (ms)
	 *      Defualt: 500ms
	 *   -colors: Array<String> - The colors to use in the animation
	 *      Value: Each item in the array should be a valid css color value.
	 *      Default: black and green
	 *   -colorset: String - The name of a predefined colorset.
	 *      Defualt: undefined
	 *      Note: Setting this value will override the 'colors' parameter
	 *            with the corresponding array of colors defined in the
	 *            'colorset' object.
	 */
	$.fn.colorFlash.defaults = {
		mode: 'solid',
		interval: 500,
		colors: ['black', 'white']
	}

	/**
	 * colorset object holds the colorsets used by the plugin.
	 * 
	 * It exposes three methods: add, remove, and get.
	 * Use these methods to add/remove colorsets to the plugin.
	 *
	 */
	$.fn.colorFlash.colorset = {
		/**
		 * Add a colorset to the plugin.
		 * @param name String The name of the colorset. If this name is
		 * the same as an existing colorset, the existing one will be
		 * overridden.
		 * @param colors Array<String> An array of valid css color values.
		 */
		add : function(name, colors){
			colorsets.push({name: name, colors: colors});
		},
		/**
		 * Removes an existing colorset. Does nothing when attempting to
         * remove a colorset that is not already added.
		 * @param name String The name of the colorset to remove.
		 */
		remove: function(name){
			$.each(colorsets, function(index, colset){
				if(colset.name == name){
					colorsets.remove(colset);
				}
			})
		},
        /**
         * Gets a colorset and returns its colors array.
         * @param name String The name of the colorset to get.
         * @return Array An array of colors defined by the colorset.
         */
		get: function(name){
			var set = null;
			$.each(colorsets, function(index, colset){
				if(colset.name == name){
					set = colset.colors;
				}
			});
			return set;
		}
	}

    /**
     * The default colorsets for the colorset object.
     * You can override these defaults by redefining this object.
     */
    $.fn.colorFlash.colorset.colorsets = [{
        //TODO: define default colorsets.
    }]
})(jQuery);