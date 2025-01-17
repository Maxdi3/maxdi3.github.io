'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "45d52381764c0b4df573186fc80de750",
".git/config": "94bc052c871ff774b4e91f6f0aba4e1c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a040d1f046e284ecb2f8f99e99c56be3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41206459bf812e1c114034068694c275",
".git/logs/refs/heads/main": "41206459bf812e1c114034068694c275",
".git/logs/refs/remotes/origin/HEAD": "e19a5bfd5f61a1aa8878f8ab052c8466",
".git/logs/refs/remotes/origin/main": "c912e743346a2174516ed0b6d3540a5b",
".git/objects/05/f138de02001eb2e9910f028f864d13d5184251": "26801a42d046a02beb964dbab073d5d1",
".git/objects/08/33b1e4a9181ccd6b6903107687cc7c19064e92": "a180190e8222bc6458773dfff38f20e4",
".git/objects/09/ee0bb60e67936e6aad42f4cd4a6e565f3e4591": "8dabf14ccf296a46756e380746fa331a",
".git/objects/0b/e7677cedb683ac369cfc975a4a143a135c8e70": "d6afa5693750739112fbb47ef635679d",
".git/objects/0c/447e7282613b1c05c1c368aaa0dcc790450a0c": "49643b64d43f562d086a6bc189165e96",
".git/objects/14/79fa7b51f0b8a5c720a004796c9d362b9d4d6e": "1cd72c80aa919a2a4ef78859510c09cb",
".git/objects/15/14e687489d6d7048ab8d9fbaf0b4a8b257da6b": "0d2e426cf83e99648dea0964298ad5c0",
".git/objects/18/1699fc5be868159380d6233353070bd2c3dc6a": "0bff742fec82ab40c5051ce11e61b64e",
".git/objects/18/1b27005ba300123d559b8da73c3b63c0475a9a": "ac1c7564151c0c6ea4f5fc299b24cdcd",
".git/objects/19/f87a265f75fc76f24f8875e82ddf457691ecf5": "f08c4823b20a524b5b6208baae933221",
".git/objects/1b/a547794613f1d11e77792907c3fd59eaec8c64": "b7075307ce6a9bcdf6e45d1d3e12b5e1",
".git/objects/1e/8899d9afbb0e201f3a83454cadef1a9e50cad4": "b2cd839f7391993b6590ea6e384b8f60",
".git/objects/24/dc1a2fb7429d85b63b7dc6cd99f3ef482849d4": "853b8cffc71a17ff19887f2286b77f33",
".git/objects/28/267252a9ebc723ef37d425553063820c3a58f0": "9b3b34232416053f6969d8362fcb882f",
".git/objects/28/5011e89d402378b525136eb420b4c72208159d": "52b1e32109e926ffa2161a4284c76680",
".git/objects/29/577d71bebdc66affbd84286b6c25f360d9538b": "8fb7cda51fad62eeda4d808d870cca29",
".git/objects/2b/df7f883a6a6648d9cadda0adb47abe56fbd460": "ad97cf6220ab1a3d3e1343745f9274e8",
".git/objects/2d/d226245a6acfde22c6102655e4d959339b2f04": "91fb0bbd10758a0aee27a4d4b67796a5",
".git/objects/2f/4e363e4cc3a1e4ad2d62f93e9dfd9bfcd355de": "7333632020b5eb9c2824c0e57c1f93ff",
".git/objects/2f/fe35d37870f3c9f5d2ac6358e28d28f15d0c18": "32eb777a4b4b18efe15d4a6176db9a5c",
".git/objects/33/318000c22f07e1431b387570c81a790eea27ef": "433c8dbcdbadc7afb17b546c16d139de",
".git/objects/34/07d5e99854b71ededb91d01eae35e6447e728a": "fc19a940820ac21a74d9e57586e021fe",
".git/objects/34/88f9fe7f8ec232052a5c0c39ea181fb52fd30f": "1f76fe04f21491d516214ff66dc61427",
".git/objects/36/191390c2a363b8f6af4115cea474cc67e35cb8": "1eba8a4612309d5ea2b3d6778569bb99",
".git/objects/39/75a8ca5de1d370b8d2024af799402da64517f5": "79f29919e113d7c368ccee6c5d1d7675",
".git/objects/3b/823c8205ad09ae58a3af821b6de5c9356f7769": "0c0dddb887fdfb701fd8879d5da1df38",
".git/objects/3e/8993046ce7e7cd3b25f266d3b319bbdef68267": "48cba5e7b2136b492878a35ac2ca7675",
".git/objects/40/5fab2cc26e16c31b51c2447bcb50ebbfbb95b6": "0eec451d7e6d1a66598b6bbbe9a8232b",
".git/objects/40/a74fe35c67973b039027163d2356cc017c792a": "68cb27ed66d94e4f7ab27c5f21260e49",
".git/objects/44/c2f0a4ffbadb0d92b15f77c4f8260e3211e7b2": "a4bf28ab18de701fcaa6b4f03efb29f8",
".git/objects/48/0b9956f115ec7c4a86e67aeed055d9a620444f": "c8557ef2a2cc7c888b58143eda463168",
".git/objects/4e/635d4540b6e1f4c27e7d0b164edb23c714f875": "58ddd2c4e428863deec20f26de9becf9",
".git/objects/50/d0f1370017b0e5e52d47509f0bc0095099a909": "10bf6a37c7760a6319392fb67b09ea4d",
".git/objects/56/1fa9fd2e131cb2aef48193a485b96160efca57": "3653ea783c569a0b8fe3fbf7bdc4bff6",
".git/objects/58/2c8f9b77d28133b28bac0ffb2ffa022dec9b52": "6b13bf10d5379316eda2932973c1d2fa",
".git/objects/58/77574f2ae22ac14f2dcb80b747ee3cb9eb403d": "d3b7e370b32800692e02e5f571623b03",
".git/objects/58/f4299fc49106ea120f211968c5ce4c87320778": "9bf65b267406185593dbed8f0b7f264e",
".git/objects/5a/9c2ba71369474ebe82f6465aa9bae807ad2169": "8b06581f23ce1573c0211de1f0c27470",
".git/objects/64/89b7f3568f5f481bfa47575f40684281e3e07c": "ab76873f8664e913928db846d1c97a8d",
".git/objects/66/110039e62d4e9983179829f704ca531620617d": "dbc2657b694408bfd8fcea6dec9ee7b5",
".git/objects/66/dc643a579486afada6a17d7726eb1912f55eb3": "2781713af8652b33e059b5e490eea8ee",
".git/objects/6b/15990551cba225bcf1ce5b772752c8fba894ce": "4449964530523e2abc554717118ba43a",
".git/objects/6d/1f8e23f342743e2d143bf198715f87b8e87b72": "47372d872954f591394454e20cfc95e6",
".git/objects/6f/d2903bd53e55be4be0936658ef3bf7ff5c9f82": "77418e23a200b7fffab754953365cd42",
".git/objects/71/84b2bec6db1f6faa942710484f4ca7b26be257": "6db80bfbeaa416e7ad1636cf1dd58bd8",
".git/objects/71/c14edddb705f053aee71ba11e949f242c96cda": "f02e53bbdf0a9b6156c0a64bf4f4c893",
".git/objects/7f/ec9efe17e59b48950c67a843b93e87f4b93923": "f6a699ac40084413989adadb956c86e1",
".git/objects/81/15e4d0bcf1932bd1d203ed93c7245d96614e02": "7028fd24c8eb31a604805a3bdc6efe2b",
".git/objects/84/6d0e715d688d41e7cb450a4c0d6758f774f1c9": "00c7ed31de7af7d3bc6d8a0ff1886d36",
".git/objects/8a/07ccb201ac7ed8ab5737643cdb9a755f959c5a": "a034d603af86390151a234efbf72fca1",
".git/objects/91/41d6c822ce7b27269e2c5102bbb5d203b4a533": "d27d20ee4de666d2118823448ea62459",
".git/objects/93/4e4700327a5eef1bc53c040248c8fdd2cf3e38": "afae3e02086361f9142a70389a64d889",
".git/objects/93/7e8c79534d73cbb485a537b91926374a4d4ac8": "76f37012810f23329125c6ae8e544074",
".git/objects/94/d384568ad9fc07ca31e3e6a7b4d79f28f65d65": "e780c960a87d258fcca12c737f74a01d",
".git/objects/95/39ddcf002a196591240c2c34f8f7f25157388d": "cdf00d8f9641743f0fa97860b0b1c0f7",
".git/objects/96/3f54756f6af537a580f1e552fd85b4345e7163": "69c6f0ef8577c4f772c8bc26bc945f9d",
".git/objects/96/d402276cd0605bdaebf6bf47d0cf96e2f6fbb4": "9cc85d1fbb35537c75e0b76c4a0b0583",
".git/objects/98/0ab3a074f75b379f3d7b956b5b9244686c2d37": "5a2e6f92da8f55e2c9dbbb080dd3e2b7",
".git/objects/98/1e95bd2ee8b6fe9ffd46a6a577110d5e64a092": "f0488d8df3f91a875cd5ecedef5da777",
".git/objects/98/d931e1c49d6153fc33d0b68c916e1eacffc288": "1283c9b89caff7255ce9e16e0a3b53ca",
".git/objects/9a/e106ced7f790c6dab126da5b1ff794b770394f": "cb2ce41c096677c44b02cb73d0bc7939",
".git/objects/9b/e5261be035714ca249ced2468d1484d5532f19": "210eeac26bc4ab0a685d362df3d04bb1",
".git/objects/aa/b172bb1ac78a931a01069c56b0ee9c274a20e0": "65d97e6b574bb54511a719b9ff50c49d",
".git/objects/ac/7a0690f99ba57d61d1671cf22e966ad28c6d64": "49b075687b7d6fa0c91409e75b59e7ca",
".git/objects/af/9ce64cf1b70d49e989d1fd1ecccc3cbda73e9c": "2a66bc8e5af1f6bfb3b495ae5d2266c7",
".git/objects/b1/19df749f59d6a8131163a85e0b54a253709ddf": "ad10d81aa11fbff3e6f1ebdf5fd00cd1",
".git/objects/b1/8fffd2915762a839a0708efcd6e8cf73e5d7b8": "c28ce840979ac467003d8bc0ab4a7fc8",
".git/objects/b2/25225663b4466ca750fe63f44b34040e9e6237": "b5ceb13aa9e00d9c65aecd5c6706ad71",
".git/objects/b3/6659e2bacc1b43f3b7fd096fe5067c325d198c": "7993b5a6a000ca65796a0a7254c7e1c6",
".git/objects/bf/cddd2e141ee10390c04075ea287faacfe7761b": "bc9acb404a372cea83a2a979880c3b7c",
".git/objects/c4/64b830f6639f63b1f8df130e46d4fe7f7dcd13": "57e564257a2d2afd40072693f205ca21",
".git/objects/cb/e3bb761d3b5cc320304f52c8c99c308bd94eb9": "0fb3a0d135e0ce9feb459f13bd30ca9d",
".git/objects/d3/1620b82bb0d9f37ec4d85bf1b6fdeb748e27d2": "a4c8540a3eef6424910ab64ee65a1991",
".git/objects/d3/59b00c2a45cfde704cbd02f8a7443283fae8c9": "6de04f878eab7b0f2f2d180dfe1ae0ca",
".git/objects/d4/0a3353088bbedb6f94bf85187436ba05a1980a": "bc2fc32b0b91e18e4f95669bf287d308",
".git/objects/d8/c2e7b41cfa172577b6e905f056f83c98eeda34": "b409a383b0f986abbd1c16dba96b1bd8",
".git/objects/dc/5c27d487ab22268c328d97976eda9f9a88ff1c": "3013cb744492c90f64b7db3f7c120fa1",
".git/objects/de/15341ff2837cc97583a3d526912d1eb6fcb89a": "28aba6e613d699e476a0356f52cda7fe",
".git/objects/df/582ca7ed8fb31ba465d1c57e8c5e13094bc2ea": "63cc87734a758cf1430fcfcc83ae6bbb",
".git/objects/df/a33a6d78e8c950e744a12465536bd928eb4043": "4522678a8cc262144cbcb147cd62bd2b",
".git/objects/e0/3e06d0775a11452a56a670f247d8235ff461bf": "bc3bcbaa4cc42f2ca538f9cd573b6f33",
".git/objects/e0/e7ab50fd64812e5251cf841b72f0141f0f572c": "78150929e832fe68a15f32d3cce961f7",
".git/objects/e5/668b65beab83988c89fa3e02f3e4a983586ba7": "26a41a237187ca494897fc718fe697d0",
".git/objects/ec/ea62e2f7c7cc840d30450f247359720c5f97b0": "01ce86a4fa8bec0a0b6e245cd77314d9",
".git/objects/ed/4274290f17f28624d3f890549e69eca0ca74e8": "74139b9a09d2b7df66f898a1849e7f09",
".git/objects/ed/fc6144358951245e51f29c760ede61f0c9b9cc": "4046b457c22a829d169bc3128154c85f",
".git/objects/ef/ebce675559fc733510b791fc4d35682607c9e0": "64017f9ed157cafd3e52f31ba912da15",
".git/objects/f1/016f5932088cefa52dbcafa9ca983fab7efc47": "46967fc820c18e00989dc96394f1be30",
".git/objects/f1/5a149602d88efed410bb4a6b1b62bf1f2dd8dc": "4311ca9ed610b344c8eca37d3e2d2a7a",
".git/objects/f1/6cbf3256b93740bb257aa484a7bf00167e7552": "d66ac4ac1636f9938270719b2735bbee",
".git/objects/f4/9175180240476bcd806ac826a794e3ca4e8016": "71652d9dcb917361db27eea6b8cd59b9",
".git/objects/f8/60ae7d1fb5a2639ebb4735fc01165eff8e7dae": "a41e95b72e05e1ea0155c329a78f6078",
".git/objects/fb/ea41050353a720e268b762a85b9afcea2565e3": "112edef324d91ba0d520535a7346307f",
".git/objects/fc/184926c26dd9f0412487fd0b7a2b0bda259d1a": "3007eea4b425017651ac4bbb58c8a568",
".git/objects/fd/1c8ccdd6f59217774ad01de2df8c31fcd0e5a4": "5d1addc28a21c3b585dc35b4f119360c",
".git/objects/pack/pack-8cd8b19aa2a6dfd2a9b8db61c843ebbce9842293.idx": "cdbf178f355975297c95bb89f78c4ede",
".git/objects/pack/pack-8cd8b19aa2a6dfd2a9b8db61c843ebbce9842293.pack": "d0c211615f40b65124a24773b6e0330d",
".git/packed-refs": "3ea5d2f7d287cdd65f3e7a6938942fb2",
".git/refs/heads/main": "c5d4aa5f363a93bf3535ab0448407b45",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "c5d4aa5f363a93bf3535ab0448407b45",
"assets/AssetManifest.bin": "06a79bc4fa6352285b818679e473e1b1",
"assets/AssetManifest.json": "444a3c93a793c4ac53659c85c7182178",
"assets/assets/fonts/koodak.ttf": "2be5d53bd9404008e505c403b2af6d9c",
"assets/assets/fonts/yekan.ttf": "52ce4de2efeeb8b18dcbd379711224f3",
"assets/assets/images/AppleLogo%2520copy.svg": "fa9b8d7207dbc85477adcb8648543b00",
"assets/assets/images/AppleLogo.svg": "fa9b8d7207dbc85477adcb8648543b00",
"assets/assets/images/avatar.jpg": "33701d384e6ba190ce6ed63127c170de",
"assets/assets/images/bg.jpg": "cf19f12f8784b47b21cb770d6b35794b",
"assets/assets/images/bro.svg": "e482caf9be5d50afc10db05d6d52d811",
"assets/assets/images/download.svg": "21f42a07fefed25ddfdcf4c1b2dd0e32",
"assets/assets/images/dumptruck.png": "b0fc146f8b5eec8b435ae3de6ded0bf8",
"assets/assets/images/excavator_black.svg": "a8380f948e9d4e3e2fb097cd73015daf",
"assets/assets/images/excavator_green.svg": "1445f649b41e2929b2feadc7ff8e396e",
"assets/assets/images/excavator_red.svg": "f2ed6768a799b08a1d51af7f50cc4f35",
"assets/assets/images/f1.svg": "1a724d316987f945d1aa7d8911c80e53",
"assets/assets/images/f2.png": "c0c4585a3c1f319d68539c95a94c73ea",
"assets/assets/images/f2.svg": "ac0b43184bb93208059b4672c704c1d1",
"assets/assets/images/f3.svg": "80da512599243f6ea63ced597c6bfa0d",
"assets/assets/images/f4.svg": "a7193a0de682c2485a5d86d7c68b36b4",
"assets/assets/images/f5.svg": "fb7de22e5e5b0181ea506b3c566e3bbd",
"assets/assets/images/FacebookLogo%2520copy.svg": "e09c979561821af0196cb3e3a526b52d",
"assets/assets/images/FacebookLogo.svg": "e09c979561821af0196cb3e3a526b52d",
"assets/assets/images/filter%25201.svg": "143f55d593c57941eac64a524fabb3c4",
"assets/assets/images/folder.svg": "7c7a920670e42b17978a45f07c63f4ca",
"assets/assets/images/GoogleLogo%2520copy.svg": "60f6375ad419fb3399d812cbd25fa8a9",
"assets/assets/images/GoogleLogo.svg": "60f6375ad419fb3399d812cbd25fa8a9",
"assets/assets/images/home.svg": "f3f52e25ef0dc3af9819f158319e1541",
"assets/assets/images/logo.png": "5bd0a61e7a443f7f5e8c4b8a0495b3e1",
"assets/assets/images/map.svg": "81fd0e19da30271510f60305010bda80",
"assets/assets/images/MineImage.png": "558adfed77ceb63f92b803b76d321226",
"assets/assets/images/more-circle.svg": "ad0417745d3cb23026ab24c9b347e4d7",
"assets/assets/images/notification%25201.svg": "65fecf7d1085557d33b1fedac7cd6c1c",
"assets/assets/images/p3.jpg": "579d658dc0258a6e783499c41d377bb7",
"assets/assets/images/p3.png": "f2c63ef04c483b8332f882823f0aad33",
"assets/assets/images/play.svg": "5662c69f26befada29fb2472bf313a48",
"assets/assets/images/podcast.svg": "c23460ef844d66e00fba318f5739fc8e",
"assets/assets/images/profile.svg": "a49841b28f9afeb7118bd11515c38a8a",
"assets/assets/images/proj.png": "785f03ff60e6e636c50525c52158bcae",
"assets/assets/images/sangan.png": "f5874606492607ebca2912019b5b4214",
"assets/assets/images/search.svg": "01c9b214378d2717983e2cd223d2b73d",
"assets/assets/images/shovel.png": "b8ec6cbb05b9a0d5b491f34e966457e5",
"assets/assets/images/status.svg": "628b2015521c3c67774234c63febc63e",
"assets/assets/images/statusselected.svg": "dfba809e10e425e96b3c3ccec564ac96",
"assets/assets/images/truck.png": "6beb0d672f7b09cff3e07290abc34b59",
"assets/assets/images/truck_black.svg": "9fe0827960b59896d8afefc3c76ab06d",
"assets/assets/images/truck_green.svg": "de6bbc0b1a219507993c44085edcc7af",
"assets/assets/images/truck_red.svg": "5ab8d5c5a5a270f724a3423cc6639091",
"assets/FontManifest.json": "d9916892f085017aa84abe8cca6eebc4",
"assets/fonts/MaterialIcons-Regular.otf": "f73c58ce0ace7d409eb9572fb844f246",
"assets/NOTICES": "3982e6cd2c25491e589bfba45918f7da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c50052a3d7260704c17dddbd3538bf2e",
"/": "c50052a3d7260704c17dddbd3538bf2e",
"main.dart.js": "9da05e6e4d5971c1a0b2d3e0521e336d",
"manifest.json": "c9c6e178b1a37f4ddb356807fa7235ed",
"splash/img/dark-1x.png": "d0718a463a37ad34cc003cf4b2d9cdaf",
"splash/img/dark-2x.png": "172bd4b83ca3c76625511a9a0bdc9a3f",
"splash/img/dark-3x.png": "b65ccf9aee41a6e53c9eae330d91d14a",
"splash/img/dark-4x.png": "3e6bde4d3df77cfd1ac62f23c64810e9",
"splash/img/light-1x.png": "d0718a463a37ad34cc003cf4b2d9cdaf",
"splash/img/light-2x.png": "172bd4b83ca3c76625511a9a0bdc9a3f",
"splash/img/light-3x.png": "b65ccf9aee41a6e53c9eae330d91d14a",
"splash/img/light-4x.png": "3e6bde4d3df77cfd1ac62f23c64810e9",
"version.json": "d9a38c0a1966b91f233828db582230cb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
