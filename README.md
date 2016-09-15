# twitch-emoji :zap: <img src="https://travis-ci.org/JamesFrost/twitch-emoji.svg?branch=master">
Parse Twitch emojis.

Powered by <a href="https://twitchemotes.com">twitchemotes.com</a>.

```bash
npm install --save twitch-emoji
```

## Example Usage
### Code
```js
const twitchEmoji = require( 'twitch-emoji' );

console.log( twitchEmoji.parse( 'spicey memes Kappa' ) );

```
### Output
```html
spicey memes <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0"/>
```

## Interface
### ``` .parse( text, options ) ```

Emoji size is either small, medium or large.

## License
MIT
