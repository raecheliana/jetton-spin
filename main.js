const a0_0x237e58=a0_0x350f;(function(_0x14de04,_0x52635f){const _0xe52cfa=a0_0x350f,_0xc9512e=_0x14de04();while(!![]){try{const _0x4e489c=parseInt(_0xe52cfa(0x11a))/0x1+parseInt(_0xe52cfa(0xf3))/0x2+-parseInt(_0xe52cfa(0x107))/0x3+parseInt(_0xe52cfa(0x125))/0x4+-parseInt(_0xe52cfa(0x10b))/0x5+-parseInt(_0xe52cfa(0x10f))/0x6*(parseInt(_0xe52cfa(0x11f))/0x7)+-parseInt(_0xe52cfa(0x11e))/0x8*(-parseInt(_0xe52cfa(0x12a))/0x9);if(_0x4e489c===_0x52635f)break;else _0xc9512e['push'](_0xc9512e['shift']());}catch(_0x14d791){_0xc9512e['push'](_0xc9512e['shift']());}}}(a0_0x310a,0x902c0));const fs=require('fs'),axios=require(a0_0x237e58(0x121)),chalk=require(a0_0x237e58(0x131)),readline=require(a0_0x237e58(0x103)),rl=readline[a0_0x237e58(0xf4)]({'input':process['stdin'],'output':process[a0_0x237e58(0xf8)]}),secureHeaders=fs[a0_0x237e58(0x12b)]('query.txt',a0_0x237e58(0x117))[a0_0x237e58(0x108)]('\x0a')[a0_0x237e58(0x101)](_0x567ae9=>_0x567ae9[a0_0x237e58(0x12f)]()[a0_0x237e58(0xfc)](a0_0x237e58(0x10d))),delay=_0x1d3c94=>new Promise(_0x3828bf=>setTimeout(_0x3828bf,_0x1d3c94)),getTime=()=>{const _0x3069b1=a0_0x237e58,_0x2135b6=new Date();return chalk[_0x3069b1(0x133)]('['+_0x2135b6[_0x3069b1(0x12e)]('id-ID',{'hour12':![]})+']');},spin=async(_0x59c7f7,_0x3a8c8e,_0xa65536)=>{const _0x2a232a=a0_0x237e58;let _0x103e38=0x0;for(let _0x409474=0x0;_0x409474<_0xa65536;_0x409474++){try{const _0x60084f=await axios[_0x2a232a(0x120)](_0x2a232a(0x102),{},{'headers':{'secure-header':_0x59c7f7,'origin':_0x2a232a(0xf9),'referer':_0x2a232a(0x127),'accept':'application/json,\x20text/plain,\x20*/*','user-agent':_0x2a232a(0xf5)}}),_0x1e0008=_0x60084f['data'][_0x2a232a(0x113)][_0x2a232a(0x12d)];_0x103e38++;if(!_0x1e0008)console['log'](getTime()+'\x20'+chalk[_0x2a232a(0x11b)]('🔴\x20[Akun\x20'+(_0x3a8c8e+0x1)+_0x2a232a(0x132)+_0x103e38+_0x2a232a(0x122)));else{const _0x1bf43d=_0x1e0008[_0x2a232a(0x123)];console[_0x2a232a(0xff)](getTime()+'\x20'+chalk[_0x2a232a(0x119)](_0x2a232a(0x112)+(_0x3a8c8e+0x1)+_0x2a232a(0x132)+_0x103e38+_0x2a232a(0xfe)+_0x1bf43d+_0x2a232a(0x10c)));}}catch(_0x35b1f3){if(_0x35b1f3[_0x2a232a(0x114)]?.[_0x2a232a(0x126)]?.['message']?.[_0x2a232a(0xfd)](_0x2a232a(0x128))){console[_0x2a232a(0xff)](getTime()+'\x20'+chalk['yellow'](_0x2a232a(0x118)+(_0x3a8c8e+0x1)+_0x2a232a(0x116)));break;}else console[_0x2a232a(0xff)](getTime()+'\x20'+chalk[_0x2a232a(0x11b)]('❌\x20[Akun\x20'+(_0x3a8c8e+0x1)+_0x2a232a(0xf7)+_0x35b1f3[_0x2a232a(0x130)]));}await delay(0x1388);}},dailyClaim=async(_0x5ec2fc,_0x3d88b6)=>{const _0x3099d1=a0_0x237e58;try{await axios['post'](_0x3099d1(0xf6),{},{'headers':{'secure-header':_0x5ec2fc,'origin':_0x3099d1(0xf9),'referer':_0x3099d1(0x127),'accept':_0x3099d1(0x105),'user-agent':_0x3099d1(0xf5)}}),console[_0x3099d1(0xff)](getTime()+'\x20'+chalk[_0x3099d1(0x100)](_0x3099d1(0x10a)+(_0x3d88b6+0x1)+']\x20Daily\x20reward\x20berhasil\x20diklaim'));}catch{console[_0x3099d1(0xff)](getTime()+'\x20'+chalk[_0x3099d1(0x11b)](_0x3099d1(0x129)+(_0x3d88b6+0x1)+_0x3099d1(0xf1)));}},buyLootBox=async(_0x2bbc48,_0x374f00)=>{const _0x39146d=a0_0x237e58;try{const _0x2c26d6=await axios[_0x39146d(0x120)]('https://api.jtmkbot.click/loot_box/purchase',{},{'headers':{'secure-header':_0x2bbc48,'origin':_0x39146d(0xf9),'referer':_0x39146d(0x127),'accept':'application/json,\x20text/plain,\x20*/*','user-agent':_0x39146d(0xf5)}}),_0x55b794=_0x2c26d6[_0x39146d(0x126)]['message'];let _0x396aaa='';if(_0x55b794['includes'](_0x39146d(0xfa)))_0x396aaa=chalk[_0x39146d(0x106)](_0x39146d(0x109))('⚡\x20'+_0x55b794);else{if(_0x55b794['includes'](_0x39146d(0xf0))||_0x55b794[_0x39146d(0xfd)]('200\x20Coins'))_0x396aaa=chalk[_0x39146d(0x100)]('🪙\x20'+_0x55b794);else{if(_0x55b794[_0x39146d(0xfd)](_0x39146d(0x10e)))_0x396aaa=chalk[_0x39146d(0x124)](_0x39146d(0x11d)+_0x55b794);else _0x55b794[_0x39146d(0xf2)](/\$\d+/)?_0x396aaa=chalk[_0x39146d(0x119)](_0x39146d(0x104)+_0x55b794):_0x396aaa=_0x55b794;}}console[_0x39146d(0xff)](getTime()+'\x20'+chalk[_0x39146d(0x100)](_0x39146d(0x11c)+(_0x374f00+0x1)+_0x39146d(0x111)+_0x396aaa));}catch{console[_0x39146d(0xff)](getTime()+'\x20'+chalk[_0x39146d(0x11b)](_0x39146d(0x129)+(_0x374f00+0x1)+']\x20Loot\x20box\x20sudah\x20diklaim\x20hari\x20ini'));}};function a0_0x350f(_0x9a8abe,_0x3bee3d){const _0x310a33=a0_0x310a();return a0_0x350f=function(_0x350ff3,_0x521e69){_0x350ff3=_0x350ff3-0xf0;let _0x5739a0=_0x310a33[_0x350ff3];return _0x5739a0;},a0_0x350f(_0x9a8abe,_0x3bee3d);}rl[a0_0x237e58(0x115)](getTime()+'\x20'+chalk[a0_0x237e58(0x124)](a0_0x237e58(0x110))+'\x20',async _0x353385=>{const _0x357079=a0_0x237e58,_0x57351c=parseInt(_0x353385);rl[_0x357079(0x12c)]();for(let _0x232f37=0x0;_0x232f37<secureHeaders[_0x357079(0xfb)];_0x232f37++){const _0x45b768=secureHeaders[_0x232f37];await dailyClaim(_0x45b768,_0x232f37),await spin(_0x45b768,_0x232f37,_0x57351c),await buyLootBox(_0x45b768,_0x232f37),console['log'](getTime()+'\x20'+chalk[_0x357079(0x119)](_0x357079(0x10a)+(_0x232f37+0x1)+_0x357079(0x134)+_0x57351c+'\x20spin'));}});function a0_0x310a(){const _0x23a30d=['900124iQAbzJ','createInterface','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)Chrome/135.0.0.0\x20Safari/537.36','https://api.jtmkbot.click/daily_reward/claim',']\x20Gagal\x20Spin:\x20','stdout','https://v2.jtmkbot.click','Energi','length','startsWith','includes',':\x20Dapat\x20reward\x20','log','yellow','filter','https://api.jtmkbot.click/roulette/spin','readline','💰\x20','application/json,\x20text/plain,\x20*/*','hex','999870XNTqEs','split','#FFA500','✅\x20[Akun\x20','642810XOGWrb','\x20Coins','query_id=','Crystal','594828dkJknc','Silakan\x20input\x20mau\x20berapa\x20spin:\x20',']\x20Dapat\x20Loot\x20Box:\x20','🟢\x20[Akun\x20','secondLine','response','question',']\x20Spin\x20dihentikan\x20karena\x20sudah\x20mencapai\x20batas\x20harian.','utf8','⚠️\x20[Akun\x20','green','331097TymLmg','red','🎁\x20[Akun\x20','💎\x20','88016sQaADV','63agEzuy','post','axios',':\x20ZONK','tickets','cyanBright','1397260OaccSn','data','https://v2.jtmkbot.click/','next\x20spin\x20in','📦\x20[Akun\x20','666CDCiKl','readFileSync','close','prize','toLocaleTimeString','trim','message','chalk',']\x20Spin\x20ke-','cyan',']\x20Selesai\x20','100\x20Coins',']\x20Daily\x20reward\x20sudah\x20diklaim\x20hari\x20ini','match'];a0_0x310a=function(){return _0x23a30d;};return a0_0x310a();}