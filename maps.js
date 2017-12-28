//Grassmap
var map1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 261, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 262, 263, 196, 272, 333, 242, 332, 273, 242, 332, 332, 273, 331, 301, 272, 271, 241, 271, 277, 278, 279, 301, 272, 198, 196, 243, 301, 243, 242, 241, 391, 392, 392, 392, 392, 392, 392, 393, 301, 242, 307, 308, 309, 271, 273, 198, 196, 271, 243, 272, 331, 272, 421, 422, 422, 422, 422, 422, 422, 423, 301, 241, 337, 338, 339, 242, 242, 198, 196, 333, 273, 303, 243, 272, 421, 397, 422, 452, 452, 422, 397, 423, 243, 333, 272, 272, 242, 273, 301, 198, 196, 241, 241, 273, 271, 241, 421, 427, 423, 301, 271, 421, 427, 423, 272, 331, 302, 242, 303, 302, 331, 198, 196, 332, 241, 272, 272, 243, 421, 457, 422, 392, 392, 422, 457, 423, 332, 271, 331, 243, 271, 243, 241, 198, 196, 271, 331, 333, 241, 242, 421, 422, 422, 422, 422, 422, 422, 423, 241, 332, 273, 242, 301, 302, 271, 198, 196, 271, 303, 303, 332, 332, 451, 452, 452, 452, 452, 452, 452, 453, 271, 302, 273, 133, 134, 135, 273, 198, 196, 301, 332, 273, 271, 333, 333, 242, 272, 303, 271, 332, 241, 332, 302, 332, 302, 163, 164, 165, 301, 198, 196, 301, 243, 331, 243, 273, 333, 303, 302, 273, 272, 272, 271, 273, 241, 241, 301, 193, 194, 195, 301, 198, 196, 272, 302, 241, 303, 271, 272, 332, 272, 241, 272, 331, 331, 303, 243, 272, 272, 333, 332, 241, 301, 198, 226, 227, 227, 227, 227, 227, 227, 227, 227, 227, 243, 227, 227, 227, 227, 227, 227, 227, 227, 227, 227, 228, 256, 257, 257, 257, 257, 257, 257, 257, 257, 257, 318, 257, 257, 257, 257, 257, 257, 257, 257, 257, 257, 258, 286, 287, 287, 287, 287, 287, 287, 287, 287, 287, 318, 287, 287, 287, 287, 287, 287, 287, 287, 287, 287, 288, 273, 271, 273, 331, 271, 331, 272, 301, 271, 271, 272, 302, 302, 331, 243, 302, 301, 331, 331, 243, 271, 333, 273, 241, 272, 272, 303, 242, 332, 271, 271, 241, 332, 331, 303, 331, 242, 273, 272, 331, 273, 333, 302, 272, 302, 302, 243, 242, 272, 332, 241, 331, 242, 302, 333, 333, 333, 332, 243, 333, 272, 332, 331, 241, 331, 302];

//Snowmap
var map2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 962, 963, 964, 961, 961, 961, 961, 961, 961, 962, 963, 964, 965, 966, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 961, 962, 963, 964, 1087, 1088, 1089, 1090, 1091, 1092, 1021, 1021, 1087, 1088, 1089, 1090, 1091, 1092, 1021, 1021, 1087, 1088, 1089, 1090, 1091, 1092, 1021, 1021, 1087, 1088, 1089, 1090, 1091, 1092, 1021, 1021, 1087, 1088, 1089, 1090, 1091, 1092, 1021, 1021, 1087, 1088, 1089, 1090, 1091, 1092, 961, 961, 1087, 1088, 1089, 1090, 1091, 1092, 1021, 1021, 1087, 1088, 1089, 1090, 1091, 1092, 1021, 1087, 1088, 1089, 1090, 1091, 1092, 1021, 1021, 1087, 1088, 1089, 1090, 1088, 1089, 1090, 1091, 1092, 1147, 1148, 1149, 1150, 1151, 1152, 1081, 1081, 1147, 1148, 1149, 1150, 1151, 1152, 1081, 1081, 1147, 1148, 1149, 1150, 1151, 1152, 1081, 1081, 1147, 1148, 1149, 1150, 1151, 1152, 1081, 1081, 1147, 1148, 1149, 1150, 1151, 1152, 1081, 1081, 1147, 1148, 1149, 1150, 1151, 1152, 1021, 1021, 1147, 1148, 1149, 1150, 1151, 1152, 1081, 1081, 1147, 1148, 1149, 1150, 1151, 1152, 1081, 1147, 1148, 1149, 1150, 1151, 1152, 1081, 1081, 1147, 1148, 1149, 1150, 1148, 1149, 1150, 1151, 1152, 1207, 1208, 1209, 1210, 1211, 1212, 1141, 1141, 1207, 1208, 1209, 1210, 1211, 1212, 1141, 1141, 1207, 1208, 1209, 1210, 1211, 1212, 1141, 1141, 1207, 1208, 1209, 1210, 1211, 1212, 1141, 1141, 1207, 1208, 1209, 1210, 1211, 1212, 1141, 1141, 1207, 1208, 1209, 1210, 1211, 1212, 1081, 1081, 1207, 1208, 1209, 1210, 1211, 1212, 1141, 1141, 1207, 1208, 1209, 1210, 1211, 1212, 1141, 1207, 1208, 1209, 1210, 1211, 1212, 1141, 1141, 1207, 1208, 1209, 1210, 1208, 1209, 1210, 1211, 1212, 1267, 1268, 1269, 1270, 1271, 1272, 1201, 1201, 1267, 1268, 1269, 1270, 1271, 1272, 1201, 1201, 1267, 1268, 1269, 1270, 1271, 1272, 1201, 1201, 1267, 1268, 1269, 1270, 1271, 1272, 1201, 1201, 1267, 1268, 1269, 1270, 1271, 1272, 1201, 1201, 1267, 1268, 1269, 1270, 1271, 1272, 1141, 1141, 1267, 1268, 1269, 1270, 1271, 1272, 1201, 1201, 1267, 1268, 1269, 1270, 1271, 1272, 1201, 1267, 1268, 1269, 1270, 1271, 1272, 1201, 1201, 1267, 1268, 1269, 1270, 1268, 1269, 1270, 1271, 1272, 1327, 1328, 1329, 1330, 1331, 1332, 1261, 1261, 1327, 1328, 1329, 1330, 1331, 1332, 1261, 1261, 1327, 1328, 1329, 1330, 1331, 1332, 1261, 1261, 1327, 1328, 1329, 1330, 1331, 1332, 1261, 1261, 1327, 1328, 1329, 1330, 1331, 1332, 1261, 1261, 1327, 1328, 1329, 1330, 1331, 1332, 1201, 1201, 1327, 1328, 1329, 1330, 1331, 1332, 1261, 1261, 1327, 1328, 1329, 1330, 1331, 1332, 1261, 1327, 1328, 1329, 1330, 1331, 1332, 1261, 1261, 1327, 1328, 1329, 1330, 1328, 1329, 1330, 1331, 1332, 1387, 1388, 1389, 1390, 1391, 1392, 1321, 1321, 1387, 1388, 1389, 1390, 1391, 1392, 1321, 1321, 1387, 1388, 1389, 1390, 1391, 1392, 1321, 1321, 1387, 1388, 1389, 1390, 1391, 1392, 1321, 1321, 1387, 1388, 1389, 1390, 1391, 1392, 1321, 1321, 1387, 1388, 1389, 1390, 1391, 1392, 1261, 1261, 1387, 1388, 1389, 1390, 1391, 1392, 1321, 1321, 1387, 1388, 1389, 1390, 1391, 1392, 1321, 1387, 1388, 1389, 1390, 1391, 1392, 1321, 1321, 1387, 1388, 1389, 1390, 1388, 1389, 1390, 1391, 1392, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1321, 1321, 1321, 1321, 1381, 1381, 1381, 1381, 1381, 1321, 1321, 1321, 1321, 1321, 1321, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1381, 1382, 1383, 1384];

var bergwald = new Sprite("ChipSet/bergwald.png", 16, 16, 30, 16);

var snowforest = new Sprite("ChipSet/snowforest.png", 8, 8, 60, 32);

var tileWidth = [16, 8];
var tileHeight = [16, 8];

var charX = [0, 0];
var charY = [0, 0];

var mapWidth = [22, 80];
var mapHeight = [22, 20];

var map = [map1, map2];

var chipset = [bergwald, snowforest];

var mapID = 0;

