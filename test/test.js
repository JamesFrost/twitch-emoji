const _twitchEmoji = require( './../index.js' );
const _assert = require( 'assert' );

describe("Twitch Emoji Parser", function() 
{
	it("parses large emoji", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'large';

		const _expected = '<img class="twitch-emoji twitch-emoji-large" src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0"/> test <img class="twitch-emoji twitch-emoji-large" src="https://static-cdn.jtvnw.net/emoticons/v1/354/3.0"/> <img class="twitch-emoji twitch-emoji-large" src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0"/>';

		const _actual = _twitchEmoji.parse( _text, _size );

		_assert.equal( _actual, _expected );
    });

	it("parses medium emoji", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'medium';

		const _expected = '<img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0"/> test <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/354/2.0"/> <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0"/>';

		const _actual = _twitchEmoji.parse( _text, _size );

		_assert.equal( _actual, _expected );
    });

	it("parses small emoji", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'small';

		const _expected = '<img class="twitch-emoji twitch-emoji-small" src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0"/> test <img class="twitch-emoji twitch-emoji-small" src="https://static-cdn.jtvnw.net/emoticons/v1/354/1.0"/> <img class="twitch-emoji twitch-emoji-small" src="https://static-cdn.jtvnw.net/emoticons/v1/25/1.0"/>';

		const _actual = _twitchEmoji.parse( _text, _size );

		_assert.equal( _actual, _expected );
    });

	it("returns original string when no emoji present", function() 
	{
		const _text = 'this is a test';
		const _size = 'small';

		const _expected = 'this is a test';

		const _actual = _twitchEmoji.parse( _text, _size );

		_assert.equal( _actual, _expected );
    });

	it("validates emoji size string", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'invalidEmojiSize';

		_assert.throws(function()
		{
			_twitchEmoji.parse( _text, _size )
		}, /Invalid emoji size/);
    });

	it("validates emoji size type", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 1;

		_assert.throws(function()
		{
			_twitchEmoji.parse( _text, _size )
		}, /Emoji size must be a string/);
    });

	it("validates text type", function() 
	{
		const _text = 1;
		const _size = 'large';

		_assert.throws(function()
		{
			_twitchEmoji.parse( _text, _size )
		}, /Text to be parsed must be a string/);
    });
});
