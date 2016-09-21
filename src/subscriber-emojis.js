const _subscriber = require( '../json/v2/subscriber.json' );
const _util = require( './util.js' );

exports.parse = function( text, options )
{
	if( typeof options.channel === "undefined" || options.channel === undefined || typeof _subscriber.channels[ options.channel ] === "undefined" )
		return text;

	const terms = _subscriber.channels[ options.channel ].emotes.map(function( thisEmote )
	{
		return thisEmote.code;
	});

	const matchedEmojis = _util.searchString( terms, text );

	matchedEmojis.map(function( thisMatchedEmoji )
	{
		const imageId = _subscriber.channels[ options.channel ].emotes.reduce(function( carry, thisEmoteObject )
		{
			if( thisEmoteObject.code === thisMatchedEmoji )
				return thisEmoteObject.image_id;
		}, '');

		const imageUrl = _subscriber.template[ options.emojiSize ].replace( '{image_id}', imageId );

		text = text.replace( new RegExp( '\\b' + thisMatchedEmoji + '\\b', 'g' ), _util.buildImgTag( imageUrl, options.emojiSize ) );
	});

	return text;
};
