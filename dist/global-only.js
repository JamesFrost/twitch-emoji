(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
const _util = require( './src/util.js' );

const _emojiSets =
[
	require( './src/global-emojis.js' )
];

exports.parse = function( text, options )
{
	options = _util.setDefaultOptions( options );

	_util.validateInput( text, options );

	return _emojiSets.reduce(function( carry, thisEmojiSet )
	{
		return thisEmojiSet.parse( carry, options );

	}, text);
};

}).call(this,require("g5I+bs"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_d69c4975.js","/")
},{"./src/global-emojis.js":7,"./src/util.js":8,"buffer":4,"g5I+bs":6}],2:[function(require,module,exports){
module.exports={"meta":{"generated_at":"2016-09-12T15:30:04Z"},"template":{"small":"https:\/\/static-cdn.jtvnw.net\/emoticons\/v1\/{image_id}\/1.0","medium":"https:\/\/static-cdn.jtvnw.net\/emoticons\/v1\/{image_id}\/2.0","large":"https:\/\/static-cdn.jtvnw.net\/emoticons\/v1\/{image_id}\/3.0"},"emotes":{"4Head":{"description":"This is the face of a popular Twitch streamer. twitch.tv\/cadburryftw","image_id":354,"first_seen":null},"AMPEnergy":{"description":null,"image_id":99263,"first_seen":"2016-05-17 10:00:04"},"AMPEnergyCherry":{"description":null,"image_id":99265,"first_seen":"2016-05-17 10:10:03"},"AMPTropPunch":{"description":null,"image_id":110785,"first_seen":"2016-08-22 18:45:04"},"ANELE":{"description":"This is the face of Twitch Partnerships Lead Anele. twitch.tv\/anele","image_id":3792,"first_seen":null},"ArgieB8":{"description":"ArgieB8 is the face of Twitch Staff member Ignacio Estanga. twitch.tv\/theargietv","image_id":51838,"first_seen":null},"ArsonNoSexy":{"description":"This is the face of streamer ArSon. twitch.tv\/arson","image_id":50,"first_seen":null},"AsianGlow":{"description":"This is the face of Twitch staff member Eliene Sun. twitch.tv\/eleinetv","image_id":74,"first_seen":null},"AthenaPMS":{"description":"This is the face of Twitch staff member & PMS clan founder Amy Brady.","image_id":32035,"first_seen":null},"BabyRage":{"description":"Common meme spurring from Dota 2 professional player and Twitch streamer Arteezy (RTZ) who gets mad when bad things happen in his games, and rages.","image_id":22639,"first_seen":null},"BatChest":{"description":"The BatChest face belongs JhnnyCrwsh, part of the Twitch moderation team. It refers to how his chest hair looks like the Bat Symbol, and came about from a dumb highlight on his channel. twitch.tv\/JhnnyCrwsh","image_id":1905,"first_seen":null},"BCouch":{"description":null,"image_id":83536,"first_seen":null},"BCWarrior":{"description":"This is the face of streamer Zeke. twitch.tv\/ezekiel_iii","image_id":30,"first_seen":null},"BibleThump":{"description":"This is an icon from the game The Binding of Isaac.","image_id":86,"first_seen":null},"BigBrother":{"description":null,"image_id":1904,"first_seen":null},"BlargNaut":{"description":"This is the face of streamer Aria Blarg. twitch.tv\/ariablarg","image_id":38,"first_seen":null},"bleedPurple":{"description":null,"image_id":62835,"first_seen":null},"BloodTrail":{"description":"This is an icon of the main character in the game Super Meat Boy.","image_id":69,"first_seen":null},"BORT":{"description":"This is the face of Bart, Ambassador at Hi-Rez Studios. He goes by the nickname, Bort","image_id":243,"first_seen":null},"BrainSlug":{"description":"This is a Brain Slug. It controls your thoughts. Originally this was the face of Bwana, part of the Twitch moderation team. It was changed to be an actual Brain Slug due to racist abuse of this emote. More info: twitch.tv\/bwana\/c\/2151897","image_id":881,"first_seen":null},"BrokeBack":{"description":"This is the face of streamer Alan. twitch.tv\/seriousgaming","image_id":4057,"first_seen":null},"BudBlast":{"description":null,"image_id":97855,"first_seen":"2016-05-08 14:05:03"},"BuddhaBar":{"description":"This is the face of Yoh, a JavaScript nerd who works on social features for Twitch.","image_id":27602,"first_seen":null},"BudStar":{"description":null,"image_id":97856,"first_seen":"2016-05-08 14:05:03"},"ChefFrank":{"description":null,"image_id":90129,"first_seen":null},"cmonBruh":{"description":null,"image_id":84608,"first_seen":null},"CoolCat":{"description":null,"image_id":58127,"first_seen":null},"copyThis":{"description":null,"image_id":112288,"first_seen":"2016-09-02 16:45:03"},"CorgiDerp":{"description":"This is Lana the corgi.","image_id":49106,"first_seen":null},"DAESuppy":{"description":"This is the face of famous Starcraft 2 player, EG.Suppy.","image_id":973,"first_seen":null},"DansGame":{"description":"This is the face of Dan. twitch.tv\/dansgaming ","image_id":33,"first_seen":null},"DatSheffy":{"description":"This is the face of Twitch staff member Sheffy. twitch.tv\/sheffy","image_id":111700,"first_seen":"2016-08-29 19:40:04"},"DBstyle":{"description":"This is the face of streamer and composer Dannybstyle. twitch.tv\/dannybstyle","image_id":73,"first_seen":null},"deIlluminati":{"description":"This is a promotional emote for Deus Ex: Mankind Divided.","image_id":46248,"first_seen":null},"DendiFace":{"description":"This is the face of Danil \"Dendi\" Ishutin a professional Dota2 player. The emote is a temporary (https:\/\/twitter.com\/Trancez0r\/status\/534501083796611073) prize given to the winner of the Twitch Doube Trouble tournament. Although Dendi's team didn't actually win the tournament, the prize was graciously(?) given to Dendi by the winner. (https:\/\/twitter.com\/Trancez0r\/status\/534501692285673472). The code itself is reference to what trolls use for the WinWaker emote.","image_id":58135,"first_seen":null},"DogFace":{"description":"DogFace is the face of Kyle Pulver, an indie game developer that added :dogface: to Steam.","image_id":1903,"first_seen":null},"DOOMGuy":{"description":"This is a promotional emote for Bethesda's upcoming reboot of the DOOM franchise.","image_id":54089,"first_seen":null},"DoritosChip":{"description":null,"image_id":102242,"first_seen":"2016-06-09 16:55:04"},"duDudu":{"description":"This is a representation of the popular song Sandstorm by Darude. The code is commonly spammed in chat whenever Sandstorm is played.","image_id":62834,"first_seen":null},"DxAbomb":{"description":null,"image_id":110735,"first_seen":"2016-08-22 13:55:04"},"DxCat":{"description":null,"image_id":110734,"first_seen":"2016-08-22 13:55:04"},"EagleEye":{"description":"This is the face of Twitch staff member Jacob.","image_id":20,"first_seen":null},"EleGiggle":{"description":"This is the face of Twitch streamer Elegy of Games. twitch.tv\/elegyofgames","image_id":4339,"first_seen":null},"FailFish":{"description":"This is the face of streamer SpamFish. twitch.tv\/spamfish","image_id":360,"first_seen":null},"FPSMarksman":{"description":"This is the face of Nick Overton, streamer and former Twitch staff member. twitch.tv\/immarksman","image_id":42,"first_seen":null},"FrankerZ":{"description":"This is the face of Frank the dog of Twitch staff member Ernest Le. Brother of RalpherZ.","image_id":65,"first_seen":null},"FreakinStinkin":{"description":"This is the face of GQ, part of the Twitch moderation team. twitch.tv\/thegreatgq","image_id":39,"first_seen":null},"FUNgineer":{"description":"This is the face of Twitch engineer, Jon. twitch.tv\/jbrhymer","image_id":244,"first_seen":null},"FunRun":{"description":"This is the icon of Justin Ignacio aka TheGunrun, Twitch staff member and savior of eSports! twitch.tv\/thegunrun","image_id":48,"first_seen":null},"FutureMan":{"description":null,"image_id":98562,"first_seen":"2016-05-13 14:55:03"},"GingerPower":{"description":"This is the face of Dylan Reichstadt. He works for Twitch in quality assurance. twitch.tv\/dylanlive","image_id":32,"first_seen":null},"GivePLZ":{"description":null,"image_id":112291,"first_seen":"2016-09-02 16:45:03"},"GrammarKing":{"description":"This is the face of Twitch employee\/KBMOD writer Vol1tion. twitch.tv\/vol1tion","image_id":3632,"first_seen":null},"HassaanChop":{"description":"This is the face of Twitch software engineer Hassaan. This emote was at one point known as 'DatHass'.","image_id":20225,"first_seen":null},"HassanChop":{"description":"This is the face of Twitch Staff member Hassan. twitch.tv\/hassan","image_id":68,"first_seen":null},"HeyGuys":{"description":"This is the face of Selen, director of recruiting at Twitch.","image_id":30259,"first_seen":null},"HotPokket":{"description":"This is the face of streamer Pokket. twitch.tv\/pokket","image_id":357,"first_seen":null},"HumbleLife":{"description":"This icon was added for Extra Life 2014 where gamers raise money for Children's Miracle Network Hospitals. Find out more at extra-life.org.","image_id":46881,"first_seen":null},"imGlitch":{"description":null,"image_id":112290,"first_seen":"2016-09-02 16:45:03"},"ItsBoshyTime":{"description":"This is an icon from the game I Wanna Be the Boshy.","image_id":169,"first_seen":null},"Jebaited":{"description":"This is the face of Jebailey.","image_id":90,"first_seen":null},"JKanStyle":{"description":"This is the face of Justin Kan, co-founder of Justin.tv and Twitch.","image_id":15,"first_seen":null},"JonCarnage":{"description":"This is the face of Twitch staff member and caster Jon Carnage.","image_id":26,"first_seen":null},"KAPOW":{"description":"This is a promotional emote for the game Infinite Crisis.","image_id":9803,"first_seen":null},"Kappa":{"description":"This is the face of Josh, a former Justin.tv employee. Kappa is generally used to indicate sarcasm or trolling.","image_id":25,"first_seen":null},"KappaClaus":{"description":"This is Kappa with a Santa hat added for Christmas 2015.","image_id":74510,"first_seen":null},"KappaPride":{"description":"On June 26, 2015, the Supreme Court of the United States ruled that same-sex couples can marry nationwide. You can read the full decision at: http:\/\/www.supremecourt.gov\/opinions\/14pdf\/14-556_3204.pdf The rainbow coloring is a symbol of the LGBT pride movement.","image_id":55338,"first_seen":null},"KappaRoss":{"description":"In honor of the late Bob Ross's 73rd birthday and the official launch of the Creative directory, Twitch created this emote - a mashup of Kappa and Bob's distinctive hair. Twitch also ran a non-stop marathon of all 403 episodes of \"The Joy of Painting\" on twitch.tv\/bobross","image_id":70433,"first_seen":null},"KappaWealth":{"description":null,"image_id":81997,"first_seen":null},"Keepo":{"description":"Keepo is Kappa stylized as the hero Meepo from DotA\/DotA 2.","image_id":1902,"first_seen":null},"KevinTurtle":{"description":"This is the face of Klutch, part of the Twitch partnership team. twitch.tv\/klutch","image_id":40,"first_seen":null},"Kippa":{"description":null,"image_id":1901,"first_seen":null},"Kreygasm":{"description":"This is the face of streamer Kreyg. twitch.tv\/kreyg","image_id":41,"first_seen":null},"Mau5":{"description":"The Mau5 emote belongs to music producer Deadmau5. twitch.tv\/deadmau5","image_id":30134,"first_seen":null},"mcaT":{"description":"This is the logo of the music label Monstercat. twitch.tv\/monstercat monstercat.com","image_id":35063,"first_seen":null},"MikeHogu":{"description":null,"image_id":81636,"first_seen":null},"MingLee":{"description":"The face of Chris Mead, the Director of Partnerships EMEA at Twitch.","image_id":68856,"first_seen":null},"MrDestructoid":{"description":"This is the mascot of the gaming website Destructoid. twitch.tv\/destructoid","image_id":28,"first_seen":null},"MVGame":{"description":"This is the face of streamer MAN. twitch.tv\/manvsgame","image_id":29,"first_seen":null},"NervousMonkey":{"description":null,"image_id":110009,"first_seen":"2016-08-16 15:40:04"},"NinjaTroll":{"description":"This is the face of streamer Ninja. twitch.tv\/ninja","image_id":45,"first_seen":null},"NomNom":{"description":null,"image_id":90075,"first_seen":null},"NoNoSpot":{"description":"This is the face of streamer Towelliee. twitch.tv\/towelliee","image_id":44,"first_seen":null},"NotATK":{"description":null,"image_id":34875,"first_seen":null},"NotLikeThis":{"description":"This is the face of Twitch staff member Ben Swartz. twitch.tv\/bensw","image_id":58765,"first_seen":null},"OhMyDog":{"description":"This is the face of the dog, Tank.","image_id":81103,"first_seen":null},"OMGScoots":{"description":"This is the face of SirScoots, a well known member of the eSports community.","image_id":91,"first_seen":null},"OneHand":{"description":"This is the face of streamer EdwardStarcraft.","image_id":66,"first_seen":null},"OpieOP":{"description":"This is the face of Jason Babo. Strategic Partnerships at TwitchTV and a Web Developer. twitch.tv\/opie","image_id":100590,"first_seen":"2016-05-26 16:00:05"},"OptimizePrime":{"description":"This is the face of Emmett Shear, co-founder of Justin.tv and CEO of Twitch.","image_id":16,"first_seen":null},"OSfrog":{"description":"This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.","image_id":81248,"first_seen":null},"OSkomodo":{"description":null,"image_id":81273,"first_seen":null},"OSsloth":{"description":"This is a promotional emote for the Old Spice Nature Adventure where Twitch chat controlled a man's adventures in nature.","image_id":81249,"first_seen":null},"panicBasket":{"description":"This emote was voted into existence by the Twitch Townhall attendees during PAX Prime 2014. It is inspired by the phrase \"PICNIC\" (based on PANIC) spammed in chat when a stream goes offline during a broadcast.","image_id":22998,"first_seen":null},"PanicVis":{"description":"This is the emote of Visual, part of the Twitch moderation team. Twitch.tv\/visual","image_id":3668,"first_seen":null},"PartyTime":{"description":"This is the face of Pluto, a partnership manager for Twitch. twitch.tv\/pluto","image_id":76171,"first_seen":null},"pastaThat":{"description":null,"image_id":112289,"first_seen":"2016-09-02 16:45:03"},"PeoplesChamp":{"description":"The PeoplesChamp emote belongs to Bobby 'Scar' of the smash community and of MeleeItOnMe. twitch.tv\/meleeitonme","image_id":3412,"first_seen":null},"PermaSmug":{"description":"This is the face of Aaron Krasnov, a product manager at Twitch, captured during their AHGL Dota team photo.","image_id":27509,"first_seen":null},"PeteZaroll":{"description":null,"image_id":81243,"first_seen":null},"PeteZarollTie":{"description":null,"image_id":81244,"first_seen":null},"PicoMause":{"description":"This is the face of streamer PicoMause. twitch.tv\/picomause","image_id":111300,"first_seen":"2016-08-26 03:55:04"},"PipeHype":{"description":"The PipeHype emote is of Pipe, part of the Twitch support team. twitch.tv\/pipe","image_id":4240,"first_seen":null},"PJSalt":{"description":" PJ stands for PeacefulJay, a Fighting Game Community (FGC) stream: twitch.tv\/peacefuljay and Salt is a term used in the FGC to describe someone who is upset.","image_id":36,"first_seen":null},"PJSugar":{"description":null,"image_id":102556,"first_seen":"2016-06-12 14:40:03"},"PMSTwin":{"description":"This is the face of Twitch staff member & PMS clan founder Amber Dalton.","image_id":92,"first_seen":null},"PogChamp":{"description":"This is the face of streamer Gootecks. twitch.tv\/gootecks","image_id":88,"first_seen":null},"Poooound":{"description":"This is the face of streamer RSQViper. twitch.tv\/RSQViper","image_id":358,"first_seen":null},"PraiseIt":{"description":"This is the icon for the Helix Fossil item in Pokemon games. It became a meme as part of the TwitchPlaysPokemon streams.","image_id":38586,"first_seen":null},"PRChase":{"description":"This is the face of Twitch PR Director, Chase.","image_id":28328,"first_seen":null},"PunchTrees":{"description":"This is an icon of Steve, the ingame persona in the game Minecraft. One of the first objectives in Minecraft is to punch trees to get wood.","image_id":47,"first_seen":null},"PuppeyFace":{"description":"This is the face of Clement \"Puppey\" Ivanov a professional Dota2 player. twitch.tv\/puppey","image_id":58136,"first_seen":null},"RaccAttack":{"description":"This is the avatar of Nick aka BlackLightAttack. Formerly of his personal channel, twitch.tv\/blacklightattack, where raccoons are a recurring theme.","image_id":27679,"first_seen":null},"RalpherZ":{"description":"This is the face of Ralph the dog of Twitch staff member Ernest Le. Brother of FrankerZ.","image_id":1900,"first_seen":null},"RedCoat":{"description":"This is the face of former Justin.tv staff member, Bill.","image_id":22,"first_seen":null},"ResidentSleeper":{"description":"This is the face of Oddler. Oddler was doing a 72 hour Resident Evil marathon when he fell asleep about 66 hours into it. His stream with him sleeping became massively popular and at one point the viewer count even reached 13,000. twitch.tv\/oddler","image_id":245,"first_seen":null},"riPepperonis":{"description":"This is a symbol for \"Rest In Pepperonis\". \"Rest In Pepperonis\" is a middle of the herd term used to describe a death, usually on a video game.","image_id":62833,"first_seen":null},"RitzMitz":{"description":"The emote RitzMitz is of RitzPlays. twitch.tv\/ritzplays","image_id":4338,"first_seen":null},"RuleFive":{"description":"This is the face of streamer Chuk. twitch.tv\/whenchukattacks","image_id":107030,"first_seen":"2016-07-22 15:25:09"},"SeemsGood":{"description":"The face of staff member Paul Diamond, twitch.tv\/bearcat","image_id":64138,"first_seen":null},"ShadyLulu":{"description":"The face of Twitch Staff member Lauren Etner from Events\/Marketing","image_id":52492,"first_seen":null},"ShazBotstix":{"description":"This is the face of Ben Goldhaber, Twitch staff member and streamer. twitch.tv\/fishstix","image_id":87,"first_seen":null},"SmoocherZ":{"description":"This is the emote of Jordan Tayer aka Soma, Influencer Relations Manager at Twitch. twitch.tv\/soma","image_id":89945,"first_seen":null},"SMOrc":{"description":"This is an icon from the game Space Marine.","image_id":52,"first_seen":null},"SMSkull":{"description":"This is an icon from the game Space Marine.","image_id":51,"first_seen":null},"SoBayed":{"description":"This is the face of SONOS, Twitch staff member and streamer. twitch.tv\/s0n0s","image_id":1906,"first_seen":null},"SoonerLater":{"description":"This is the face of Sooner, a popular Twitch streamer. twitch.tv\/lolsooner","image_id":355,"first_seen":null},"SSSsss":{"description":"This is an icon of a Creeper from the game Minecraft. They blow stuff up.","image_id":46,"first_seen":null},"StinkyCheese":{"description":null,"image_id":90076,"first_seen":null},"StoneLightning":{"description":"This is the face of Michael Seibel, co-founder of Justin.tv.","image_id":17,"first_seen":null},"StrawBeary":{"description":"This is the icon of streamer LordKat. twitch.tv\/lordkat","image_id":37,"first_seen":null},"SuperVinlin":{"description":"This is the face of Twitch staff member Kevin Lin.","image_id":31,"first_seen":null},"SwiftRage":{"description":"This is the face of streamer Swiftor. twitch.tv\/swiftor","image_id":34,"first_seen":null},"TakeNRG":{"description":null,"image_id":112292,"first_seen":"2016-09-02 16:45:03"},"TBCheesePull":{"description":null,"image_id":94039,"first_seen":"2016-04-09 17:05:03"},"TBTacoLeft":{"description":null,"image_id":94038,"first_seen":"2016-04-09 17:05:03"},"TBTacoRight":{"description":null,"image_id":94040,"first_seen":"2016-04-09 17:05:03"},"TF2John":{"description":"This is the face of stream and Twitch staff member, John. twitch.tv\/synwyn","image_id":1899,"first_seen":null},"TheRinger":{"description":"This is the face of Kyle Vogt, co-founder of Justin.tv.","image_id":18,"first_seen":null},"TheTarFu":{"description":"This is the face of streamer Tarfu. twitch.tv\/tarfu","image_id":111351,"first_seen":"2016-08-26 15:45:03"},"TheThing":{"description":"The emote \"TheThing\" is the face of Geoff \"iNcontroL\" Robinson. twitch.tv\/incontroltv","image_id":7427,"first_seen":null},"ThunBeast":{"description":"ThunBeast belongs to Twitch caster ThunderCast twitch.tv\/Thundercast","image_id":1898,"first_seen":null},"TinyFace":{"description":"This is the face of streamer, Foom. twitch.tv\/king_foom","image_id":111119,"first_seen":"2016-08-24 21:05:03"},"TooSpicy":{"description":"This is the face of Miguel, part of the Twitch moderation team. twitch.tv\/sournothardcore SourPls","image_id":359,"first_seen":null},"TriHard":{"description":"This is the face of speed runner Trihex. twitch.tv\/trihex","image_id":171,"first_seen":null},"TTours":{"description":null,"image_id":38436,"first_seen":null},"twitchRaid":{"description":null,"image_id":62836,"first_seen":null},"TwitchRPG":{"description":null,"image_id":112107,"first_seen":"2016-09-01 12:10:03"},"UleetBackup":{"description":"This is the face of streamer Crream. twitch.tv\/crream","image_id":49,"first_seen":null},"UncleNox":{"description":"This is the face of Nox, part of the Twitch moderation team. Rumor is that he does not wear pants. twitch.tv\/nox","image_id":3666,"first_seen":null},"UnSane":{"description":"This is the face of streamer Tom. twitch.tv\/unsanitylive","image_id":111792,"first_seen":"2016-08-30 15:35:04"},"VaultBoy":{"description":"This is a promotional emote for Bethesda's Fallout franchise. Vault Boy is the mascot for the fictional corporation known as Vault-Tec within the Fallout universe.","image_id":54090,"first_seen":null},"VoHiYo":{"description":"This is the emote of Volary, a member of the Twitch partnerships team. twitch.tv\/volary","image_id":81274,"first_seen":null},"VoteNay":{"description":null,"image_id":106294,"first_seen":"2016-07-15 18:25:03"},"VoteYea":{"description":null,"image_id":106293,"first_seen":"2016-07-15 18:25:03"},"WholeWheat":{"description":"This is the face of caster and Twitch staff member djWHEAT. twitch.tv\/djwheat","image_id":1896,"first_seen":null},"WTRuck":{"description":"WTRuck belongs Eddie Ruckus twitch.tv\/eddieruckus","image_id":1897,"first_seen":null},"WutFace":{"description":"This is the face of Twitch staff member Alex Mendez. twitch.tv\/goldenboyftw","image_id":28087,"first_seen":null},"YouWHY":{"description":"This is the emote of YouPickGames. twitch.tv\/youpickgames","image_id":4337,"first_seen":null}}}
},{}],3:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
var lookup = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

;(function (exports) {
	'use strict';

  var Arr = (typeof Uint8Array !== 'undefined')
    ? Uint8Array
    : Array

	var PLUS   = '+'.charCodeAt(0)
	var SLASH  = '/'.charCodeAt(0)
	var NUMBER = '0'.charCodeAt(0)
	var LOWER  = 'a'.charCodeAt(0)
	var UPPER  = 'A'.charCodeAt(0)
	var PLUS_URL_SAFE = '-'.charCodeAt(0)
	var SLASH_URL_SAFE = '_'.charCodeAt(0)

	function decode (elt) {
		var code = elt.charCodeAt(0)
		if (code === PLUS ||
		    code === PLUS_URL_SAFE)
			return 62 // '+'
		if (code === SLASH ||
		    code === SLASH_URL_SAFE)
			return 63 // '/'
		if (code < NUMBER)
			return -1 //no match
		if (code < NUMBER + 10)
			return code - NUMBER + 26 + 26
		if (code < UPPER + 26)
			return code - UPPER
		if (code < LOWER + 26)
			return code - LOWER + 26
	}

	function b64ToByteArray (b64) {
		var i, j, l, tmp, placeHolders, arr

		if (b64.length % 4 > 0) {
			throw new Error('Invalid string. Length must be a multiple of 4')
		}

		// the number of equal signs (place holders)
		// if there are two placeholders, than the two characters before it
		// represent one byte
		// if there is only one, then the three characters before it represent 2 bytes
		// this is just a cheap hack to not do indexOf twice
		var len = b64.length
		placeHolders = '=' === b64.charAt(len - 2) ? 2 : '=' === b64.charAt(len - 1) ? 1 : 0

		// base64 is 4/3 + up to two characters of the original data
		arr = new Arr(b64.length * 3 / 4 - placeHolders)

		// if there are placeholders, only get up to the last complete 4 chars
		l = placeHolders > 0 ? b64.length - 4 : b64.length

		var L = 0

		function push (v) {
			arr[L++] = v
		}

		for (i = 0, j = 0; i < l; i += 4, j += 3) {
			tmp = (decode(b64.charAt(i)) << 18) | (decode(b64.charAt(i + 1)) << 12) | (decode(b64.charAt(i + 2)) << 6) | decode(b64.charAt(i + 3))
			push((tmp & 0xFF0000) >> 16)
			push((tmp & 0xFF00) >> 8)
			push(tmp & 0xFF)
		}

		if (placeHolders === 2) {
			tmp = (decode(b64.charAt(i)) << 2) | (decode(b64.charAt(i + 1)) >> 4)
			push(tmp & 0xFF)
		} else if (placeHolders === 1) {
			tmp = (decode(b64.charAt(i)) << 10) | (decode(b64.charAt(i + 1)) << 4) | (decode(b64.charAt(i + 2)) >> 2)
			push((tmp >> 8) & 0xFF)
			push(tmp & 0xFF)
		}

		return arr
	}

	function uint8ToBase64 (uint8) {
		var i,
			extraBytes = uint8.length % 3, // if we have 1 byte left, pad 2 bytes
			output = "",
			temp, length

		function encode (num) {
			return lookup.charAt(num)
		}

		function tripletToBase64 (num) {
			return encode(num >> 18 & 0x3F) + encode(num >> 12 & 0x3F) + encode(num >> 6 & 0x3F) + encode(num & 0x3F)
		}

		// go through the array every three bytes, we'll deal with trailing stuff later
		for (i = 0, length = uint8.length - extraBytes; i < length; i += 3) {
			temp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
			output += tripletToBase64(temp)
		}

		// pad the end with zeros, but make sure to not forget the extra bytes
		switch (extraBytes) {
			case 1:
				temp = uint8[uint8.length - 1]
				output += encode(temp >> 2)
				output += encode((temp << 4) & 0x3F)
				output += '=='
				break
			case 2:
				temp = (uint8[uint8.length - 2] << 8) + (uint8[uint8.length - 1])
				output += encode(temp >> 10)
				output += encode((temp >> 4) & 0x3F)
				output += encode((temp << 2) & 0x3F)
				output += '='
				break
		}

		return output
	}

	exports.toByteArray = b64ToByteArray
	exports.fromByteArray = uint8ToBase64
}(typeof exports === 'undefined' ? (this.base64js = {}) : exports))

}).call(this,require("g5I+bs"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/base64-js/lib/b64.js","/node_modules/base64-js/lib")
},{"buffer":4,"g5I+bs":6}],4:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = Buffer
exports.INSPECT_MAX_BYTES = 50
Buffer.poolSize = 8192

/**
 * If `Buffer._useTypedArrays`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (compatible down to IE6)
 */
Buffer._useTypedArrays = (function () {
  // Detect if browser supports Typed Arrays. Supported browsers are IE 10+, Firefox 4+,
  // Chrome 7+, Safari 5.1+, Opera 11.6+, iOS 4.2+. If the browser does not support adding
  // properties to `Uint8Array` instances, then that's the same as no `Uint8Array` support
  // because we need to be able to add all the node Buffer API methods. This is an issue
  // in Firefox 4-29. Now fixed: https://bugzilla.mozilla.org/show_bug.cgi?id=695438
  try {
    var buf = new ArrayBuffer(0)
    var arr = new Uint8Array(buf)
    arr.foo = function () { return 42 }
    return 42 === arr.foo() &&
        typeof arr.subarray === 'function' // Chrome 9-10 lack `subarray`
  } catch (e) {
    return false
  }
})()

/**
 * Class: Buffer
 * =============
 *
 * The Buffer constructor returns instances of `Uint8Array` that are augmented
 * with function properties for all the node `Buffer` API functions. We use
 * `Uint8Array` so that square bracket notation works as expected -- it returns
 * a single octet.
 *
 * By augmenting the instances, we can avoid modifying the `Uint8Array`
 * prototype.
 */
function Buffer (subject, encoding, noZero) {
  if (!(this instanceof Buffer))
    return new Buffer(subject, encoding, noZero)

  var type = typeof subject

  // Workaround: node's base64 implementation allows for non-padded strings
  // while base64-js does not.
  if (encoding === 'base64' && type === 'string') {
    subject = stringtrim(subject)
    while (subject.length % 4 !== 0) {
      subject = subject + '='
    }
  }

  // Find the length
  var length
  if (type === 'number')
    length = coerce(subject)
  else if (type === 'string')
    length = Buffer.byteLength(subject, encoding)
  else if (type === 'object')
    length = coerce(subject.length) // assume that object is array-like
  else
    throw new Error('First argument needs to be a number, array or string.')

  var buf
  if (Buffer._useTypedArrays) {
    // Preferred: Return an augmented `Uint8Array` instance for best performance
    buf = Buffer._augment(new Uint8Array(length))
  } else {
    // Fallback: Return THIS instance of Buffer (created by `new`)
    buf = this
    buf.length = length
    buf._isBuffer = true
  }

  var i
  if (Buffer._useTypedArrays && typeof subject.byteLength === 'number') {
    // Speed optimization -- use set if we're copying from a typed array
    buf._set(subject)
  } else if (isArrayish(subject)) {
    // Treat array-ish objects as a byte array
    for (i = 0; i < length; i++) {
      if (Buffer.isBuffer(subject))
        buf[i] = subject.readUInt8(i)
      else
        buf[i] = subject[i]
    }
  } else if (type === 'string') {
    buf.write(subject, 0, encoding)
  } else if (type === 'number' && !Buffer._useTypedArrays && !noZero) {
    for (i = 0; i < length; i++) {
      buf[i] = 0
    }
  }

  return buf
}

// STATIC METHODS
// ==============

Buffer.isEncoding = function (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'binary':
    case 'base64':
    case 'raw':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.isBuffer = function (b) {
  return !!(b !== null && b !== undefined && b._isBuffer)
}

Buffer.byteLength = function (str, encoding) {
  var ret
  str = str + ''
  switch (encoding || 'utf8') {
    case 'hex':
      ret = str.length / 2
      break
    case 'utf8':
    case 'utf-8':
      ret = utf8ToBytes(str).length
      break
    case 'ascii':
    case 'binary':
    case 'raw':
      ret = str.length
      break
    case 'base64':
      ret = base64ToBytes(str).length
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = str.length * 2
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.concat = function (list, totalLength) {
  assert(isArray(list), 'Usage: Buffer.concat(list, [totalLength])\n' +
      'list should be an Array.')

  if (list.length === 0) {
    return new Buffer(0)
  } else if (list.length === 1) {
    return list[0]
  }

  var i
  if (typeof totalLength !== 'number') {
    totalLength = 0
    for (i = 0; i < list.length; i++) {
      totalLength += list[i].length
    }
  }

  var buf = new Buffer(totalLength)
  var pos = 0
  for (i = 0; i < list.length; i++) {
    var item = list[i]
    item.copy(buf, pos)
    pos += item.length
  }
  return buf
}

// BUFFER INSTANCE METHODS
// =======================

function _hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  assert(strLen % 2 === 0, 'Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; i++) {
    var byte = parseInt(string.substr(i * 2, 2), 16)
    assert(!isNaN(byte), 'Invalid hex string')
    buf[offset + i] = byte
  }
  Buffer._charsWritten = i * 2
  return i
}

function _utf8Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf8ToBytes(string), buf, offset, length)
  return charsWritten
}

function _asciiWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(asciiToBytes(string), buf, offset, length)
  return charsWritten
}

function _binaryWrite (buf, string, offset, length) {
  return _asciiWrite(buf, string, offset, length)
}

function _base64Write (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(base64ToBytes(string), buf, offset, length)
  return charsWritten
}

function _utf16leWrite (buf, string, offset, length) {
  var charsWritten = Buffer._charsWritten =
    blitBuffer(utf16leToBytes(string), buf, offset, length)
  return charsWritten
}

Buffer.prototype.write = function (string, offset, length, encoding) {
  // Support both (string, offset, length, encoding)
  // and the legacy (string, encoding, offset, length)
  if (isFinite(offset)) {
    if (!isFinite(length)) {
      encoding = length
      length = undefined
    }
  } else {  // legacy
    var swap = encoding
    encoding = offset
    offset = length
    length = swap
  }

  offset = Number(offset) || 0
  var remaining = this.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }
  encoding = String(encoding || 'utf8').toLowerCase()

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexWrite(this, string, offset, length)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Write(this, string, offset, length)
      break
    case 'ascii':
      ret = _asciiWrite(this, string, offset, length)
      break
    case 'binary':
      ret = _binaryWrite(this, string, offset, length)
      break
    case 'base64':
      ret = _base64Write(this, string, offset, length)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leWrite(this, string, offset, length)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toString = function (encoding, start, end) {
  var self = this

  encoding = String(encoding || 'utf8').toLowerCase()
  start = Number(start) || 0
  end = (end !== undefined)
    ? Number(end)
    : end = self.length

  // Fastpath empty strings
  if (end === start)
    return ''

  var ret
  switch (encoding) {
    case 'hex':
      ret = _hexSlice(self, start, end)
      break
    case 'utf8':
    case 'utf-8':
      ret = _utf8Slice(self, start, end)
      break
    case 'ascii':
      ret = _asciiSlice(self, start, end)
      break
    case 'binary':
      ret = _binarySlice(self, start, end)
      break
    case 'base64':
      ret = _base64Slice(self, start, end)
      break
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      ret = _utf16leSlice(self, start, end)
      break
    default:
      throw new Error('Unknown encoding')
  }
  return ret
}

Buffer.prototype.toJSON = function () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function (target, target_start, start, end) {
  var source = this

  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (!target_start) target_start = 0

  // Copy 0 bytes; we're done
  if (end === start) return
  if (target.length === 0 || source.length === 0) return

  // Fatal error conditions
  assert(end >= start, 'sourceEnd < sourceStart')
  assert(target_start >= 0 && target_start < target.length,
      'targetStart out of bounds')
  assert(start >= 0 && start < source.length, 'sourceStart out of bounds')
  assert(end >= 0 && end <= source.length, 'sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length)
    end = this.length
  if (target.length - target_start < end - start)
    end = target.length - target_start + start

  var len = end - start

  if (len < 100 || !Buffer._useTypedArrays) {
    for (var i = 0; i < len; i++)
      target[i + target_start] = this[i + start]
  } else {
    target._set(this.subarray(start, start + len), target_start)
  }
}

function _base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function _utf8Slice (buf, start, end) {
  var res = ''
  var tmp = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++) {
    if (buf[i] <= 0x7F) {
      res += decodeUtf8Char(tmp) + String.fromCharCode(buf[i])
      tmp = ''
    } else {
      tmp += '%' + buf[i].toString(16)
    }
  }

  return res + decodeUtf8Char(tmp)
}

function _asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; i++)
    ret += String.fromCharCode(buf[i])
  return ret
}

function _binarySlice (buf, start, end) {
  return _asciiSlice(buf, start, end)
}

function _hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; i++) {
    out += toHex(buf[i])
  }
  return out
}

function _utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i+1] * 256)
  }
  return res
}

Buffer.prototype.slice = function (start, end) {
  var len = this.length
  start = clamp(start, len, 0)
  end = clamp(end, len, len)

  if (Buffer._useTypedArrays) {
    return Buffer._augment(this.subarray(start, end))
  } else {
    var sliceLen = end - start
    var newBuf = new Buffer(sliceLen, undefined, true)
    for (var i = 0; i < sliceLen; i++) {
      newBuf[i] = this[i + start]
    }
    return newBuf
  }
}

// `get` will be removed in Node 0.13+
Buffer.prototype.get = function (offset) {
  console.log('.get() is deprecated. Access using array indexes instead.')
  return this.readUInt8(offset)
}

// `set` will be removed in Node 0.13+
Buffer.prototype.set = function (v, offset) {
  console.log('.set() is deprecated. Access using array indexes instead.')
  return this.writeUInt8(v, offset)
}

Buffer.prototype.readUInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  return this[offset]
}

function _readUInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    val = buf[offset]
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
  } else {
    val = buf[offset] << 8
    if (offset + 1 < len)
      val |= buf[offset + 1]
  }
  return val
}

Buffer.prototype.readUInt16LE = function (offset, noAssert) {
  return _readUInt16(this, offset, true, noAssert)
}

Buffer.prototype.readUInt16BE = function (offset, noAssert) {
  return _readUInt16(this, offset, false, noAssert)
}

function _readUInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val
  if (littleEndian) {
    if (offset + 2 < len)
      val = buf[offset + 2] << 16
    if (offset + 1 < len)
      val |= buf[offset + 1] << 8
    val |= buf[offset]
    if (offset + 3 < len)
      val = val + (buf[offset + 3] << 24 >>> 0)
  } else {
    if (offset + 1 < len)
      val = buf[offset + 1] << 16
    if (offset + 2 < len)
      val |= buf[offset + 2] << 8
    if (offset + 3 < len)
      val |= buf[offset + 3]
    val = val + (buf[offset] << 24 >>> 0)
  }
  return val
}

Buffer.prototype.readUInt32LE = function (offset, noAssert) {
  return _readUInt32(this, offset, true, noAssert)
}

Buffer.prototype.readUInt32BE = function (offset, noAssert) {
  return _readUInt32(this, offset, false, noAssert)
}

Buffer.prototype.readInt8 = function (offset, noAssert) {
  if (!noAssert) {
    assert(offset !== undefined && offset !== null,
        'missing offset')
    assert(offset < this.length, 'Trying to read beyond buffer length')
  }

  if (offset >= this.length)
    return

  var neg = this[offset] & 0x80
  if (neg)
    return (0xff - this[offset] + 1) * -1
  else
    return this[offset]
}

function _readInt16 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt16(buf, offset, littleEndian, true)
  var neg = val & 0x8000
  if (neg)
    return (0xffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt16LE = function (offset, noAssert) {
  return _readInt16(this, offset, true, noAssert)
}

Buffer.prototype.readInt16BE = function (offset, noAssert) {
  return _readInt16(this, offset, false, noAssert)
}

function _readInt32 (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  var len = buf.length
  if (offset >= len)
    return

  var val = _readUInt32(buf, offset, littleEndian, true)
  var neg = val & 0x80000000
  if (neg)
    return (0xffffffff - val + 1) * -1
  else
    return val
}

Buffer.prototype.readInt32LE = function (offset, noAssert) {
  return _readInt32(this, offset, true, noAssert)
}

Buffer.prototype.readInt32BE = function (offset, noAssert) {
  return _readInt32(this, offset, false, noAssert)
}

function _readFloat (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 3 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 23, 4)
}

Buffer.prototype.readFloatLE = function (offset, noAssert) {
  return _readFloat(this, offset, true, noAssert)
}

Buffer.prototype.readFloatBE = function (offset, noAssert) {
  return _readFloat(this, offset, false, noAssert)
}

function _readDouble (buf, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset + 7 < buf.length, 'Trying to read beyond buffer length')
  }

  return ieee754.read(buf, offset, littleEndian, 52, 8)
}

Buffer.prototype.readDoubleLE = function (offset, noAssert) {
  return _readDouble(this, offset, true, noAssert)
}

Buffer.prototype.readDoubleBE = function (offset, noAssert) {
  return _readDouble(this, offset, false, noAssert)
}

Buffer.prototype.writeUInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'trying to write beyond buffer length')
    verifuint(value, 0xff)
  }

  if (offset >= this.length) return

  this[offset] = value
}

function _writeUInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 2); i < j; i++) {
    buf[offset + i] =
        (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
            (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt16BE = function (value, offset, noAssert) {
  _writeUInt16(this, value, offset, false, noAssert)
}

function _writeUInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'trying to write beyond buffer length')
    verifuint(value, 0xffffffff)
  }

  var len = buf.length
  if (offset >= len)
    return

  for (var i = 0, j = Math.min(len - offset, 4); i < j; i++) {
    buf[offset + i] =
        (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeUInt32BE = function (value, offset, noAssert) {
  _writeUInt32(this, value, offset, false, noAssert)
}

Buffer.prototype.writeInt8 = function (value, offset, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset < this.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7f, -0x80)
  }

  if (offset >= this.length)
    return

  if (value >= 0)
    this.writeUInt8(value, offset, noAssert)
  else
    this.writeUInt8(0xff + value + 1, offset, noAssert)
}

function _writeInt16 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 1 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fff, -0x8000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt16(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt16(buf, 0xffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt16LE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt16BE = function (value, offset, noAssert) {
  _writeInt16(this, value, offset, false, noAssert)
}

function _writeInt32 (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifsint(value, 0x7fffffff, -0x80000000)
  }

  var len = buf.length
  if (offset >= len)
    return

  if (value >= 0)
    _writeUInt32(buf, value, offset, littleEndian, noAssert)
  else
    _writeUInt32(buf, 0xffffffff + value + 1, offset, littleEndian, noAssert)
}

Buffer.prototype.writeInt32LE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, true, noAssert)
}

Buffer.prototype.writeInt32BE = function (value, offset, noAssert) {
  _writeInt32(this, value, offset, false, noAssert)
}

function _writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 3 < buf.length, 'Trying to write beyond buffer length')
    verifIEEE754(value, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 23, 4)
}

Buffer.prototype.writeFloatLE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function (value, offset, noAssert) {
  _writeFloat(this, value, offset, false, noAssert)
}

function _writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    assert(value !== undefined && value !== null, 'missing value')
    assert(typeof littleEndian === 'boolean', 'missing or invalid endian')
    assert(offset !== undefined && offset !== null, 'missing offset')
    assert(offset + 7 < buf.length,
        'Trying to write beyond buffer length')
    verifIEEE754(value, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }

  var len = buf.length
  if (offset >= len)
    return

  ieee754.write(buf, value, offset, littleEndian, 52, 8)
}

Buffer.prototype.writeDoubleLE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function (value, offset, noAssert) {
  _writeDouble(this, value, offset, false, noAssert)
}

// fill(value, start=0, end=buffer.length)
Buffer.prototype.fill = function (value, start, end) {
  if (!value) value = 0
  if (!start) start = 0
  if (!end) end = this.length

  if (typeof value === 'string') {
    value = value.charCodeAt(0)
  }

  assert(typeof value === 'number' && !isNaN(value), 'value is not a number')
  assert(end >= start, 'end < start')

  // Fill 0 bytes; we're done
  if (end === start) return
  if (this.length === 0) return

  assert(start >= 0 && start < this.length, 'start out of bounds')
  assert(end >= 0 && end <= this.length, 'end out of bounds')

  for (var i = start; i < end; i++) {
    this[i] = value
  }
}

Buffer.prototype.inspect = function () {
  var out = []
  var len = this.length
  for (var i = 0; i < len; i++) {
    out[i] = toHex(this[i])
    if (i === exports.INSPECT_MAX_BYTES) {
      out[i + 1] = '...'
      break
    }
  }
  return '<Buffer ' + out.join(' ') + '>'
}

/**
 * Creates a new `ArrayBuffer` with the *copied* memory of the buffer instance.
 * Added in Node 0.12. Only available in browsers that support ArrayBuffer.
 */
Buffer.prototype.toArrayBuffer = function () {
  if (typeof Uint8Array !== 'undefined') {
    if (Buffer._useTypedArrays) {
      return (new Buffer(this)).buffer
    } else {
      var buf = new Uint8Array(this.length)
      for (var i = 0, len = buf.length; i < len; i += 1)
        buf[i] = this[i]
      return buf.buffer
    }
  } else {
    throw new Error('Buffer.toArrayBuffer not supported in this browser')
  }
}

// HELPER FUNCTIONS
// ================

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

var BP = Buffer.prototype

/**
 * Augment a Uint8Array *instance* (not the Uint8Array class!) with Buffer methods
 */
Buffer._augment = function (arr) {
  arr._isBuffer = true

  // save reference to original Uint8Array get/set methods before overwriting
  arr._get = arr.get
  arr._set = arr.set

  // deprecated, will be removed in node 0.13+
  arr.get = BP.get
  arr.set = BP.set

  arr.write = BP.write
  arr.toString = BP.toString
  arr.toLocaleString = BP.toString
  arr.toJSON = BP.toJSON
  arr.copy = BP.copy
  arr.slice = BP.slice
  arr.readUInt8 = BP.readUInt8
  arr.readUInt16LE = BP.readUInt16LE
  arr.readUInt16BE = BP.readUInt16BE
  arr.readUInt32LE = BP.readUInt32LE
  arr.readUInt32BE = BP.readUInt32BE
  arr.readInt8 = BP.readInt8
  arr.readInt16LE = BP.readInt16LE
  arr.readInt16BE = BP.readInt16BE
  arr.readInt32LE = BP.readInt32LE
  arr.readInt32BE = BP.readInt32BE
  arr.readFloatLE = BP.readFloatLE
  arr.readFloatBE = BP.readFloatBE
  arr.readDoubleLE = BP.readDoubleLE
  arr.readDoubleBE = BP.readDoubleBE
  arr.writeUInt8 = BP.writeUInt8
  arr.writeUInt16LE = BP.writeUInt16LE
  arr.writeUInt16BE = BP.writeUInt16BE
  arr.writeUInt32LE = BP.writeUInt32LE
  arr.writeUInt32BE = BP.writeUInt32BE
  arr.writeInt8 = BP.writeInt8
  arr.writeInt16LE = BP.writeInt16LE
  arr.writeInt16BE = BP.writeInt16BE
  arr.writeInt32LE = BP.writeInt32LE
  arr.writeInt32BE = BP.writeInt32BE
  arr.writeFloatLE = BP.writeFloatLE
  arr.writeFloatBE = BP.writeFloatBE
  arr.writeDoubleLE = BP.writeDoubleLE
  arr.writeDoubleBE = BP.writeDoubleBE
  arr.fill = BP.fill
  arr.inspect = BP.inspect
  arr.toArrayBuffer = BP.toArrayBuffer

  return arr
}

// slice(start, end)
function clamp (index, len, defaultValue) {
  if (typeof index !== 'number') return defaultValue
  index = ~~index;  // Coerce to integer.
  if (index >= len) return len
  if (index >= 0) return index
  index += len
  if (index >= 0) return index
  return 0
}

function coerce (length) {
  // Coerce length to a number (possibly NaN), round up
  // in case it's fractional (e.g. 123.456) then do a
  // double negate to coerce a NaN to 0. Easy, right?
  length = ~~Math.ceil(+length)
  return length < 0 ? 0 : length
}

function isArray (subject) {
  return (Array.isArray || function (subject) {
    return Object.prototype.toString.call(subject) === '[object Array]'
  })(subject)
}

function isArrayish (subject) {
  return isArray(subject) || Buffer.isBuffer(subject) ||
      subject && typeof subject === 'object' &&
      typeof subject.length === 'number'
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    var b = str.charCodeAt(i)
    if (b <= 0x7F)
      byteArray.push(str.charCodeAt(i))
    else {
      var start = i
      if (b >= 0xD800 && b <= 0xDFFF) i++
      var h = encodeURIComponent(str.slice(start, i+1)).substr(1).split('%')
      for (var j = 0; j < h.length; j++)
        byteArray.push(parseInt(h[j], 16))
    }
  }
  return byteArray
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; i++) {
    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(str)
}

function blitBuffer (src, dst, offset, length) {
  var pos
  for (var i = 0; i < length; i++) {
    if ((i + offset >= dst.length) || (i >= src.length))
      break
    dst[i + offset] = src[i]
  }
  return i
}

function decodeUtf8Char (str) {
  try {
    return decodeURIComponent(str)
  } catch (err) {
    return String.fromCharCode(0xFFFD) // UTF 8 invalid char
  }
}

/*
 * We have to make sure that the value is a valid integer. This means that it
 * is non-negative. It has no fractional component and that it does not
 * exceed the maximum allowed value.
 */
function verifuint (value, max) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value >= 0, 'specified a negative value for writing an unsigned value')
  assert(value <= max, 'value is larger than maximum value for type')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifsint (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
  assert(Math.floor(value) === value, 'value has a fractional component')
}

function verifIEEE754 (value, max, min) {
  assert(typeof value === 'number', 'cannot write a non-number as a number')
  assert(value <= max, 'value larger than maximum allowed value')
  assert(value >= min, 'value smaller than minimum allowed value')
}

function assert (test, message) {
  if (!test) throw new Error(message || 'Failed assertion')
}

}).call(this,require("g5I+bs"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/buffer/index.js","/node_modules/buffer")
},{"base64-js":3,"buffer":4,"g5I+bs":6,"ieee754":5}],5:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

}).call(this,require("g5I+bs"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/ieee754/index.js","/node_modules/ieee754")
},{"buffer":4,"g5I+bs":6}],6:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

}).call(this,require("g5I+bs"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/process/browser.js","/node_modules/process")
},{"buffer":4,"g5I+bs":6}],7:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
const _global = require( '../json/v2/global.json' );
const _util = require( './util.js' );

exports.parse = function( text, options )
{
	const terms = Object.keys( _global.emotes );

	const matchedEmojis = _util.searchString( terms, text );

	matchedEmojis.map(function( thisMatchedEmoji )
	{
		const imageId = _global.emotes[ thisMatchedEmoji ].image_id;
		const imageUrl = _global.template[ options.emojiSize ].replace( '{image_id}', imageId );

		text = text.replace( new RegExp( '\\b' + thisMatchedEmoji + '\\b', 'g' ), _util.buildImgTag( imageUrl, options.emojiSize ) );
	});

	return text;
};

}).call(this,require("g5I+bs"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/global-emojis.js","/src")
},{"../json/v2/global.json":2,"./util.js":8,"buffer":4,"g5I+bs":6}],8:[function(require,module,exports){
(function (process,global,Buffer,__argument0,__argument1,__argument2,__argument3,__filename,__dirname){
const _validEmojiSizes = 
[
	'small',
	'medium',
	'large'
];

const _defaultOptions =
{
	emojiSize : 'medium'
};

exports.setDefaultOptions = function( options ) 
{
	if( typeof options === "undefined" || options === undefined )
		return _defaultOptions;

	for( var index in _defaultOptions )
	{
		if( typeof options[ index ] !== "undefined" )
			continue;

		options[ index ] = _defaultOptions[ index ];
	}

	return options;
};

exports.validateInput = function( text, options ) 
{
	if( typeof text !== "string" )
		throw "Text to be parsed must be a string";

	if( typeof options.emojiSize !== "string" )
		throw "Emoji size must be a string";

	if( _validEmojiSizes.indexOf( options.emojiSize ) === -1 )
		throw "Invalid emoji size";

	if( typeof options.channel !== "undefined" &&  typeof options.channel !== 'string' )
		throw "Channel must be a string";
};

exports.buildImgTag = function( imageUrl, emojiSize )
{
	return '<img class="twitch-emoji twitch-emoji-' + emojiSize + '" src="' + imageUrl + '"/>';
};

exports.searchString = function( terms, string )
{
	if( terms.length === 0 )
		return [];

	const thisTerm = terms.slice( 0, 1 );

	if( string.match( new RegExp( '\\b' + thisTerm + '\\b' ) ) )
		return exports.searchString( terms.slice( 1 ), string ).concat( thisTerm );

	return exports.searchString( terms.slice( 1 ), string );
};

}).call(this,require("g5I+bs"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/src/util.js","/src")
},{"buffer":4,"g5I+bs":6}]},{},[1])