const _versionNumber = require( './../package.json' ).version;
const _request = require( 'browser-request' );

const _baseChannelEmojiSetCdnUrl = 'https://unpkg.com/twitch-emoji@' + _versionNumber + '/dist/channels/';

module.exports = function( name, callback )
{
	name = name.toLowerCase();

	const url = _baseChannelEmojiSetCdnUrl + name + '.json';

	return new Promise(function( resolve, reject )
	{
		_request(url, function( err, response, body ) 
		{
			callback( err, body );

			if( err )
				reject();
			else
				resolve();
		});
	});
};
