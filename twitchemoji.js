const _util = require( './src/util.js' );
const _getChannelEmojis = require( './src/get-channel-emojis.js' );
const _subscriberSet = require( './src/subscriber-emojis.js' );

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

exports.add = function( channelName, callback )
{
	return _getChannelEmojis(channelName, function( err, result )
	{
		if( !err )
			_emojiSets.push( new _subscriberSet( result ) );

		if( typeof callback !== "undefined" )
			callback( err );
	});
};
