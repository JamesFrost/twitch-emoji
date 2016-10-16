$( document ).ready(function()
{
	$( '#demo-input' ).bind('input', function()
	{
		$( '#output' ).html( twitchEmoji.parse( $( this ).val(), { emojiSize : 'large' } ) );
	});
});
