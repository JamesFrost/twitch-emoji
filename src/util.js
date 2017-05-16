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

exports.setDefaultOptions = function( options ) 
{
	if( typeof options === "undefined" || options === undefined )
		return _defaultOptions;

	for( var index in _defaultOptions )
	{
		if( typeof options[ index ] !== "undefined" )
			continue;

		options[ index ] = _defaultOptions[ index ];
	}

	return options;
};

exports.validateInput = function( text, options ) 
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

exports.buildImgTag = function( alt, imageUrl, emojiSize )
{
	return '<img class="twitch-emoji twitch-emoji-' + emojiSize + '" src="' + imageUrl + '" alt="' + alt + '">';
};

exports.searchString = function( terms, string )
{
	if( terms.length === 0 )
		return [];

	const thisTerm = terms.slice( 0, 1 );

	if( string.match( new RegExp( '\\b' + thisTerm + '\\b' ) ) )
		return exports.searchString( terms.slice( 1 ), string ).concat( thisTerm );

	return exports.searchString( terms.slice( 1 ), string );
};
