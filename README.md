# twitch-emoji :zap: <img src="https://travis-ci.org/JamesFrost/twitch-emoji.svg?branch=master">
Parse Twitch emojis.

Powered by <a href="https://twitchemotes.com">twitchemotes.com</a>.

```bash
npm install --save twitch-emoji
```

```html
<script src="https://unpkg.com/twitch-emoji@^0.2.0/dist/twitchemoji.min.js"></script>
```

## Usage

### Browser

For use client side, I recommend using the above CDN. 'Requiring' the module and then using a build task like browserify will add ~4mb to your final file size. This is because the node module has all channel specific emojis preloaded.

Using the cdn will allow you to dynamically load channel specific emojis, meaining you won't add 4mb of (mostly) redundant JSON to your Javascript.

The browser module has global emojis preloaded.

#### API
##### ``` .parse( text [, options ]) ```

###### options.emojiSize
Small, medium or large. Default is medium.

###### options.channel
Used to parse channel specific emojis. Note that the channel emojis must be <a href="https://github.com/JamesFrost/twitch-emoji#add-channelname--callback-">added</a> first.

```js
console.log( twitchEmoji.parse( 'spicey memes Kappa' ), { emojiSize : 'medium' } );

// Will produce:
/*
spicey memes <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0"/>
*/
```
##### ``` .add( channelName [, callback] ) ```

Load a channel specific emoji set.

###### channelName
The name of the channel to load the emoji set for.

###### callback
Optional. Has a single error argument.


Returns a promise.

An error will be passed to the callback, and the promise rejected if the channel doesn't have specific emoji sets.

```js
  // Using the callback
  twitchEmoji.add('twoeasy', function( err )
  {
      if( !err )
        // Emoji Set Usable
  });
  
  // Using a promise
  twitchEmoji.add('twoeasy').then(
    function( response )
    {
       // Emoji Set Usable
    },
    function( response )
    {
      // Emoji set not accessable/doesn't exist
    }
  );
```

### Node

#### API

##### ``` .parse( text [, options ]) ```

###### options.emojiSize
Small, medium or large. Default is medium.

###### options.channel
Used to parse channel specific emojis.

```js
console.log( twitchEmoji.parse( 'spicey memes Kappa' ), { emojiSize : 'medium' } );

// Will produce:
/*
spicey memes <img class="twitch-emoji twitch-emoji-medium" src="https://static-cdn.jtvnw.net/emoticons/v1/25/2.0"/>
*/
```

## License
MIT
