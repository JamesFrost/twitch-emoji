const _global = require( '../json/v2/global.json' );
const _util = require( './util.js' );

exports.parse = function( text, options )
{
	const terms = Object.keys( _global.emotes );

	const matchedEmojis = _util.searchString( terms, text );

	matchedEmojis.map(function( thisMatchedEmoji )
	{
		const imageId = _global.emotes[ thisMatchedEmoji ].image_id;
		const imageUrl = _global.template[ options.emojiSize ].replace( '{image_id}', imageId );

		text = text.replace( new RegExp( '\\b' + thisMatchedEmoji + '\\b', 'g' ), _util.buildImgTag( thisMatchedEmoji, imageUrl, options.emojiSize ) );
	});

	return text;
};
