const _versionNumber = require( './../package.json' ).version;
const _request = require( 'browser-request' );

const _baseChannelEmojiSetCdnUrl = 'https://unpkg.com/twitch-emoji@' + _versionNumber + '/dist/channels/';

module.exports = function( name, callback )
{
	name = name.toLowerCase();

	const url = _baseChannelEmojiSetCdnUrl + name + '.json';

	return new Promise(function( resolve, reject )
	{
		if( typeof( Storage ) !== "undefined" ) 
		{
			const cache = localStorage.getItem( url );

			if( cache !== null )
			{
				callback( undefined, JSON.parse( cache ) );
				resolve();
				return;
			}
		}

		_request(url, function( err, response, body ) 
		{
			if( err || response.status !== 200 )
			{
				callback( err || response );
				reject( err || response );
			}
			else
			{
				try
				{
					callback( undefined, JSON.parse( body ) );

					if( typeof( Storage ) !== "undefined" )
						localStorage.setItem( url, body );

					resolve( response );
				}
				catch( err ) // for the edge case where the JSON on the CDN isn't valid
				{
					reject( err );
				}
			}
		});
	});
};
