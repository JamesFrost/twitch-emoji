const _twitchEmoji = require( './../index.js' );
const _assert = require( 'assert' );

describe("Twich Emoji Parser", function() 
{
	it("parses emoji", function() 
	{
		const _text = 'Kappa test 4Head Kappa';
		const _size = 'large';

		const _expected = '<img class="twitch-emoji" src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0"/> test <img class="twitch-emoji" src="https://static-cdn.jtvnw.net/emoticons/v1/354/3.0"/> <img class="twitch-emoji" src="https://static-cdn.jtvnw.net/emoticons/v1/25/3.0"/>';

		const _actual = _twitchEmoji.parse( _text, _size );

		_assert.equal( _actual, _expected );
    });
});
