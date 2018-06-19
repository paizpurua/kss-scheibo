/* jshint node: true */
'use strict';

let KssBuilderHandlebars = require('kss/builder/handlebars');

class KssBuilderScheibo extends KssBuilderHandlebars {
	prepare(styleGuide) {
		return super.prepare(styleGuide).then(styleGuide => {
			require('../../lib/modules/modifierInsertCode')(this.Handlebars);
			require('../../lib/modules/modifierFullscreen')(this.Handlebars);
			require('../../lib/modules/modifierInsertSection')(this.Handlebars);
			require('../../lib/modules/colors')(this.Handlebars);
			return styleGuide;
		});
	}
}

module.exports = KssBuilderScheibo;
