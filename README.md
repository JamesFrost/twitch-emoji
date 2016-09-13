# twitch-emoji
Parse Twitch emojis.

Powered by <a href="https://twitchemotes.com">twitchemotes.com</a>.

```bash
npm install --save twitch-emoji
```

## Example

```js
const twitchEmoji = require( 'twitch-emoji' );

console.log( twitchEmoji.parse( 'spicey memes Kappa', 'medium' ) );

```

```html
spicey memes <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0"/>
```

## Usage
### ``` .parse( text, emojiSize ) ```
