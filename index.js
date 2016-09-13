const _global = require( './json/v2/global.json' );
const _globalSearchTerms = Object.keys( _global.emotes );

exports.parse = function( text, emojiSize )
{
	const matchedEmojis = _searchString( _globalSearchTerms, text );

	matchedEmojis.map(function( thisMatchedEmoji )
	{
		const imageId = _global.emotes[ thisMatchedEmoji ].image_id;
		const imageUrl = _global.template[ emojiSize ].replace( '{image_id}', imageId );

		text = text.replace( new RegExp( '\\b' + thisMatchedEmoji + '\\b', 'g' ), '<img class="twitch-emoji" src="' + imageUrl + '"/>' );
	});

	return text;
};


const _searchString = function( terms, string )
{
	if( terms.length === 0 )
		return [];

	const thisTerm = terms.slice( 0, 1 );

	if( string.match( new RegExp( '\\b' + thisTerm + '\\b' ) ) )
		return _searchString( terms.slice( 1 ), string ).concat( thisTerm );

	return _searchString( terms.slice( 1 ), string );
}
