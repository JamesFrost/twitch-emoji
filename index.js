const _global = require( './json/v2/global.json' );
const _globalSearchTerms = Object.keys( _global.emotes );

const _validEmojiSizes = 
[
	'small',
	'medium',
	'large'
];

exports.parse = function( text, emojiSize )
{
	_validateInput( text, emojiSize );

	const matchedEmojis = _searchString( _globalSearchTerms, text );

	matchedEmojis.map(function( thisMatchedEmoji )
	{
		const imageId = _global.emotes[ thisMatchedEmoji ].image_id;
		const imageUrl = _global.template[ emojiSize ].replace( '{image_id}', imageId );

		text = text.replace( new RegExp( '\\b' + thisMatchedEmoji + '\\b', 'g' ), _buildImgTag( imageUrl, emojiSize ) );
	});

	return text;
};

const _validateInput = function( text, emojiSize ) 
{
	if( typeof text !== "string" )
		throw "Text to be parsed must be a string";

	if( typeof emojiSize !== "string" )
		throw "Emoji size must be a string";

	if( _validEmojiSizes.indexOf( emojiSize ) === -1 )
		throw "Invalid emoji size";
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
