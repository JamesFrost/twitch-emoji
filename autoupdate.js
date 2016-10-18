require('shelljs/global');
var jsonfile = require('jsonfile');
var request = require('request');
var async = require('async');
var versionNumber = require( __dirname + '/package.json' ).version;

// exec( 'osascript -e \'tell app "System Events" to display dialog "' +  __dirname + '"\'' );

var oldGlobal = jsonfile.readFileSync( __dirname + '/json/v2/global.json' );
var oldSub = jsonfile.readFileSync( __dirname + '/json/v2/subscriber.json' );

const _checkGlobal = function( callback )
{
	request('https://twitchemotes.com/api_cache/v2/global.json', function( err, res, body )
	{
		if( err )
		{
			console.error( 'Failed to get global emojis' );
			process.exit( 1 );
		}

		body = JSON.parse( body );

		if( JSON.stringify( oldGlobal.emotes ) !== JSON.stringify( body.emotes ) )
		{
			jsonfile.writeFileSync( __dirname + '/json/v2/global.json', body );
		}

		callback( undefined, JSON.stringify( oldGlobal.emotes ) !== JSON.stringify( body.emotes ) );
	});
}

const _checkSubscriber = function( callback )
{
	request('https://twitchemotes.com/api_cache/v2/subscriber.json', function( err, res, body )
	{
		if( err )
		{
			console.error( 'Failed to get global emojis' );
			process.exit( 1 );
		}

		body = JSON.parse( body );

		if( JSON.stringify( oldSub.channels ) !== JSON.stringify( body.channels ) )
		{
			jsonfile.writeFileSync( __dirname + '/json/v2/subscriber.json', body );
		}

		callback( undefined, JSON.stringify( oldSub.channels ) !== JSON.stringify( body.channels ) );
	});
};

const _publishNewUpdate = function()
{
	// _exec( 'gulp gen-sub' );
	// _exec( 'gulp build' );
	
	_exec( 'osascript -e \'tell app "System Events" to display dialog "Updated Twitch Emoji"\'' );
};

const _exec = function( command )
{
	if (exec(command).code !== 0) 
	{
	  echo('Error: command failed');
	  exit(1);
	}
};

async.parallel([
	_checkSubscriber,
	_checkGlobal	
], 
function( err, results )
{
	if( results[ 0 ] || results[ 1 ] )
		_publishNewUpdate();
});
