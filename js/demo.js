$( document ).ready(function()
{
	$( '#output' ).html( twitchEmoji.parse( $( '#demo-input' ).val(), { emojiSize : 'large' } ) );

	$( '#demo-input' ).bind('input', function()
	{
		$( '#output' ).html( twitchEmoji.parse( $( this ).val(), { emojiSize : 'large' } ) );
	});
});
