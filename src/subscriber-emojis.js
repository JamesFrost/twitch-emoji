function wrapper( subscriberSet )
{
	this._util = require( './util.js' );
	this._subscriber = subscriberSet;

	this.parse = function( text, options )
	{
		if( typeof options.channel === "undefined" || options.channel === undefined || typeof this._subscriber.channels[ options.channel ] === "undefined" )
			return text;

		const terms = this._subscriber.channels[ options.channel ].emotes.map(function( thisEmote )
		{
			return thisEmote.code;
		});

		const matchedEmojis = this._util.searchString( terms, text );

		matchedEmojis.map(function( thisMatchedEmoji )
		{
			const imageId = this._subscriber.channels[ options.channel ].emotes.reduce(function( carry, thisEmoteObject )
			{
				if( thisEmoteObject.code === thisMatchedEmoji )
					return thisEmoteObject.image_id;

				return carry;
			}, '');

			const imageUrl = this._subscriber.template[ options.emojiSize ].replace( '{image_id}', imageId );

			text = text.replace( new RegExp( '\\b' + thisMatchedEmoji + '\\b', 'g' ), this._util.buildImgTag( thisMatchedEmoji, imageUrl, options.emojiSize ) );
		}.bind( this ));

		return text;
	};
};

module.exports = wrapper;