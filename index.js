const _global = require( './json/v2/global.json' );
const _subscriber = require( './json/v2/subscriber.json' );

const _validEmojiSizes = 
[
	'small',
	'medium',
	'large'
];

const _defaultOptions =
{
	emojiSize : 'medium'
};

exports.parse = function( text, options )
{
	if( typeof options === "undefined" )
		options = _defaultOptions;
	else
		options = _setDefaultOptions( _defaultOptions, options );

	_validateInput( text, options );

	text = _parseGlobalEmojiSet( text, options, _global );

	if( typeof options.channel !== "undefined" && _subscriber.channels[ options.channel ] )
		text = _parseSubscriberEmojiSet( text, options, _subscriber );

	return text;
};

const _parseSubscriberEmojiSet = function( text, options, emojis )
{
	const terms = emojis.channels[ options.channel ].emotes.map(function( thisEmote )
	{
		return thisEmote.code;
	});

	const matchedEmojis = _searchString( terms, text );

	matchedEmojis.map(function( thisMatchedEmoji )
	{
		const imageId = emojis.channels[ options.channel ].emotes.reduce(function( carry, thisEmoteObject )
		{
			if( thisEmoteObject.code === thisMatchedEmoji )
				return thisEmoteObject.image_id;
		}, '');

		const imageUrl = emojis.template[ options.emojiSize ].replace( '{image_id}', imageId );

		text = text.replace( new RegExp( '\\b' + thisMatchedEmoji + '\\b', 'g' ), _buildImgTag( imageUrl, options.emojiSize ) );
	});

	return text;
};

const _parseGlobalEmojiSet = function( text, options, emojis )
{
	const terms = Object.keys( emojis.emotes );

	const matchedEmojis = _searchString( terms, text );

	matchedEmojis.map(function( thisMatchedEmoji )
	{
		const imageId = emojis.emotes[ thisMatchedEmoji ].image_id;
		const imageUrl = emojis.template[ options.emojiSize ].replace( '{image_id}', imageId );

		text = text.replace( new RegExp( '\\b' + thisMatchedEmoji + '\\b', 'g' ), _buildImgTag( imageUrl, options.emojiSize ) );
	});

	return text;
};

const _setDefaultOptions = function( defaults, options ) 
{
	for( var index in defaults )
	{
		if( typeof options[ index ] !== "undefined" )
			continue;

		options[ index ] = defaults[ index ];
	}

	return options;
};

const _validateInput = function( text, options ) 
{
	if( typeof text !== "string" )
		throw "Text to be parsed must be a string";

	if( typeof options.emojiSize !== "string" )
		throw "Emoji size must be a string";

	if( _validEmojiSizes.indexOf( options.emojiSize ) === -1 )
		throw "Invalid emoji size";

	if( typeof options.channel !== "undefined" &&  typeof options.channel !== 'string' )
		throw "Channel must be a string";
};

const _buildImgTag = function( imageUrl, emojiSize )
{
	return '<img class="twitch-emoji twitch-emoji-' + emojiSize + '" src="' + imageUrl + '"/>';
};

const _searchString = function( terms, string )
{
	if( terms.length === 0 )
		return [];

	const thisTerm = terms.slice( 0, 1 );

	if( string.match( new RegExp( '\\b' + thisTerm + '\\b' ) ) )
		return _searchString( terms.slice( 1 ), string ).concat( thisTerm );

	return _searchString( terms.slice( 1 ), string );
};
