const _util = require( './src/util.js' );

const _emojiSets =
[
	require( './src/global-emojis.js' )
];

exports.parse = function( text, options )
{
	options = _util.setDefaultOptions( options );

	_util.validateInput( text, options );

	return _emojiSets.reduce(function( carry, thisEmojiSet )
	{
		return thisEmojiSet.parse( carry, options );

	}, text);
};
