const _sunlightEmojis = {"template":{"small":"https://static-cdn.jtvnw.net/emoticons/v1/{image_id}/1.0","medium":"https://static-cdn.jtvnw.net/emoticons/v1/{image_id}/2.0","large":"https://static-cdn.jtvnw.net/emoticons/v1/{image_id}/3.0"},"channels":{"sunlightdota2":{"title":"Sunlightdota2","channel_id":"35624606","link":"http://twitch.tv/sunlightdota2","desc":null,"id":"sunlightdota2","first_seen":null,"badge":"https://static-cdn.jtvnw.net/jtv_user_pictures/badges/13425/18x18.png","badge_starting":"https://static-cdn.jtvnw.net/jtv_user_pictures/badges/13425/72x72.png","badge_3m":null,"badge_6m":null,"badge_12m":null,"badge_24m":null,"set":16073,"emotes":[{"code":"sunlightJutsu","image_id":84164},{"code":"sunlightFace","image_id":117286}]}}};

const _assert = require( 'assert' );
const _mockery = require( 'mockery' );

describe("Browser Twitch Emoji Parser", function() 
{

	before(function()
	{
		_mockery.enable({
			warnOnReplace: false,
			warnOnUnregistered: false,
			useCleanCache: true
		});

	    _mockery.registerMock( './src/get-channel-emojis.js', function( channelName, callback )
	    {
	    	return new Promise(function( resolve, reject )
    		{
		    	if( channelName === 'sunlightdota2' )
		    	{
			    	callback( undefined, _sunlightEmojis );
		    		resolve();
		    	}
			    else
			    {
			    	callback('error');
			    	reject();
			    }
    		});
	    });
		
		_twitchEmoji = require( './../twitchemoji.js' );
	});

	after(function()
	{
		_mockery.disable();
	});

	it("parses large emoji", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'large';

		const _expected = '<img class="twitch-emoji twitch-emoji-large" src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0" alt="Kappa"> test <img class="twitch-emoji twitch-emoji-large" src="https://static-cdn.jtvnw.net/emoticons/v1/354/3.0" alt="4Head"> <img class="twitch-emoji twitch-emoji-large" src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0" alt="Kappa">';

		const _actual = _twitchEmoji.parse( _text, { emojiSize : _size } );

		_assert.equal( _actual, _expected );
    });

	it("parses medium emoji", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'medium';

		const _expected = '<img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0" alt="Kappa"> test <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/354/2.0" alt="4Head"> <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0" alt="Kappa">';

		const _actual = _twitchEmoji.parse( _text, { emojiSize : _size } );

		_assert.equal( _actual, _expected );
    });

	it("parses small emoji", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'small';

		const _expected = '<img class="twitch-emoji twitch-emoji-small" src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" alt="Kappa"> test <img class="twitch-emoji twitch-emoji-small" src="https://static-cdn.jtvnw.net/emoticons/v1/354/1.0" alt="4Head"> <img class="twitch-emoji twitch-emoji-small" src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0" alt="Kappa">';

		const _actual = _twitchEmoji.parse( _text, { emojiSize : _size } );

		_assert.equal( _actual, _expected );
    });

	it("returns original string when no emoji present", function() 
	{
		const _text = 'this is a test';
		const _size = 'small';

		const _expected = 'this is a test';

		const _actual = _twitchEmoji.parse( _text, { emojiSize : _size } );

		_assert.equal( _actual, _expected );
    });

	it("validates emoji size string", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'invalidEmojiSize';

		_assert.throws(function()
		{
			_twitchEmoji.parse( _text, { emojiSize : _size } )
		}, /Invalid emoji size/);
    });

	it("validates emoji size type", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 1;

		_assert.throws(function()
		{
			_twitchEmoji.parse( _text, { emojiSize : _size } )
		}, /Emoji size must be a string/);
    });

	it("validates channel type", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'medium';

		_assert.throws(function()
		{
			_twitchEmoji.parse( _text, { emojiSize : _size, channel : 1 } )
		}, /Channel must be a string/);
    });

	it("validates text type", function() 
	{
		const _text = 1;
		const _size = 'large';

		_assert.throws(function()
		{
			_twitchEmoji.parse( _text, { emojiSize : _size } )
		}, /Text to be parsed must be a string/);
    });

	it("defaults to medium", function() 
	{
		const _text = 'Kappa test 4Head Kappa';

		const _expected = '<img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0" alt="Kappa"> test <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/354/2.0" alt="4Head"> <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0" alt="Kappa">';

		_assert.equal( _twitchEmoji.parse( _text ), _expected );

		_assert.equal( _twitchEmoji.parse( _text, { channel : 'test' } ), _expected );
    });

	it("parses channel specific emojis", function() 
	{
		var _text = 'sunlightJutsu';

		var _expected = 'sunlightJutsu';

		var _actual = _twitchEmoji.parse( _text, { channel : 'sunlightdota2', emojiSize : 'medium' } );

		_assert.equal( _actual, _expected );


		_text = 'sunlightJutsu';

		_expected = '<img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/84164/2.0" alt="sunlightJutsu">';

		_twitchEmoji.add('sunlightdota2');

		_actual = _twitchEmoji.parse( _text, { channel : 'sunlightdota2', emojiSize : 'medium' } );

		_assert.equal( _actual, _expected );
    });

	it("handles when there are no emoji sets for a channel", function() 
	{
		var _text = 'sunlightJutsu';

		var _expected = 'sunlightJutsu';

		_twitchEmoji.add('twoeasy', function()
		{
			var _actual = _twitchEmoji.parse( _text, { channel : 'twoeasy', emojiSize : 'medium' } );

			_assert.equal( _actual, _expected );			
		});	
    });

	it("uses promises", function( done ) 
	{
		var _text = 'sunlightJutsu';

		var _expected = '<img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/84164/2.0" alt="sunlightJutsu">';

		_twitchEmoji.add('sunlightdota2').then(function()
		{
			var _actual = _twitchEmoji.parse( _text, { channel : 'sunlightdota2', emojiSize : 'medium' } );

			_assert.equal( _actual, _expected );			
		});

		_twitchEmoji.add('afakechannel123').then(
			function()
			{
				done( new Error("Promise incorrectly resolved") );
			},
			function()
			{
				done();
			}
		);

    });
});
