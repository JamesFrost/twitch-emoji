const _util = require( './src/util.js' );
const _subscriberSet = require( './src/subscriber-emojis.js' );
const _subscriberEmojis = require( './json/v2/subscriber.json' );

const _emojiSets =
[
	require( './src/global-emojis.js' ),
	new _subscriberSet( _subscriberEmojis )
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
