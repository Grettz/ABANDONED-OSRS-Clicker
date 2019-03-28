//200m max exp per skill
maxExp = 200000000

let skills = {

    attack: {
        tick: function () {

        },
        level: 1,
        maxLevel: 99,
        levelUp: function () {

        },
    },
    hitpoints: {
        tick: function () {

        },
        level: 1,
        maxLevel: 99,
        levelUp: function () {

        },
    },
    mining: {
        tick: function () {
            this.levelUpCheck();
        },
        maxLevel: 99,
        actionActive: false,
        actionName: "Mine",
        actions: {
            clay: {
                name: "Clay",
                time: 1000, //Action time, in ms
                reqLvl: 1,
                expGain: 10,
                drops: [{
                    name: "Clay",
                    chance: 1,
                    amount: 1
                }],
            },
            copperOre: {
                name: "Copper Ore",
                time: 2000, //Action time, in ms
                reqLvl: 1,
                expGain: 20,
                drops: [{
                    name: "Copper Ore",
                    chance: 1,
                    amount: 1
                }],
            },
            tinOre: {
                name: "Tin Ore",
                time: 200, //Action time, in ms
                reqLvl: 1,
                expGain: 1000,
                drops: [{
                    name: "Tin Ore",
                    chance: 1,
                    amount: 1
                }],
            },
            runeEssence: {
                name: "Rune Essence",
                time: 1000, //Action time, in ms
                reqLvl: 1,
                expGain: 50,
                drops: [{
                    name: "Rune Essence",
                    chance: 1,
                    amount: 1
                }],
            },
        },
        levelUpCheck: function () {
            if (this.levelExp >= nextLvlExp(this.level)) { //Level up
                this.levelExp -= nextLvlExp(this.level);
                this.level += 1;
            }
        },
    },
    strength: {
        tick: function () {

        },
        level: 1,
        maxLevel: 99,
        levelUp: function () {

        },
    },
    agility: {
        tick: function () {

        },
        level: 1,
        maxLevel: 99,
        levelUp: function () {

        },
    },
    smithing: {
        tick: function () {

        },
        level: 1,
        maxLevel: 99,
        levelUp: function () {

        },
        initializeScreen: function () {
            console.log(this);
        },
    },
    defence: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    herblore: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    fishing: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    ranged: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    thieving: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    cooking: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    prayer: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    crafting: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    firemaking: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    magic: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    fletching: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    woodcutting: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    runecrafting: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    slayer: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    farming: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    construction: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
    hunter: {
        tick: function () {

        },
        maxLevel: 99,
        levelUp: function () {

        },
    },
};

/* 
 Lvl:     Exp     :   lvlExp
  1 :           0 :          0
  2 :          83 :         83
  3 :         174 :         91
  4 :         275 :        101
  5 :         387 :        112
  6 :         511 :        124
  7 :         648 :        137
  8 :         799 :        151
  9 :         966 :        167
 10 :       1,151 :        185
 11 :       1,355 :        204
 12 :       1,580 :        225
 13 :       1,829 :        249
 14 :       2,103 :        274
 15 :       2,406 :        303
 16 :       2,740 :        334
 17 :       3,109 :        369
 18 :       3,517 :        408
 19 :       3,967 :        450
 20 :       4,463 :        496
 21 :       5,011 :        548
 22 :       5,616 :        605
 23 :       6,283 :        667
 24 :       7,020 :        737
 25 :       7,833 :        813
 26 :       8,730 :        897
 27 :       9,720 :        990
 28 :      10,813 :      1,093
 29 :      12,020 :      1,207
 30 :      13,352 :      1,332
 31 :      14,822 :      1,470
 32 :      16,444 :      1,622
 33 :      18,235 :      1,791
 34 :      20,212 :      1,977
 35 :      22,394 :      2,182
 36 :      24,802 :      2,408
 37 :      27,460 :      2,658
 38 :      30,394 :      2,934
 39 :      33,633 :      3,239
 40 :      37,209 :      3,576
 41 :      41,156 :      3,947
 42 :      45,513 :      4,357
 43 :      50,323 :      4,810
 44 :      55,633 :      5,310
 45 :      61,495 :      5,862
 46 :      67,966 :      6,471
 47 :      75,110 :      7,144
 48 :      82,996 :      7,886
 49 :      91,702 :      8,706
 50 :     101,314 :      9,612
 51 :     111,925 :     10,611
 52 :     123,640 :     11,715
 53 :     136,573 :     12,933
 54 :     150,851 :     14,278
 55 :     166,614 :     15,763
 56 :     184,017 :     17,403
 57 :     203,231 :     19,214
 58 :     224,443 :     21,212
 59 :     247,862 :     23,419
 60 :     273,718 :     25,856
 61 :     302,264 :     28,546
 62 :     333,780 :     31,516
 63 :     368,575 :     34,795
 64 :     406,990 :     38,415
 65 :     449,403 :     42,413
 66 :     496,229 :     46,826
 67 :     547,928 :     51,699
 68 :     605,006 :     57,078
 69 :     668,024 :     63,018
 70 :     737,600 :     69,576
 71 :     814,417 :     76,817
 72 :     899,228 :     84,811
 73 :     992,866 :     93,638
 74 :   1,096,249 :    103,383
 75 :   1,210,391 :    114,142
 76 :   1,336,413 :    126,022
 77 :   1,475,551 :    139,138
 78 :   1,629,170 :    153,619
 79 :   1,798,777 :    169,607
 80 :   1,986,037 :    187,260
 81 :   2,192,787 :    206,750
 82 :   2,421,055 :    228,268
 83 :   2,673,082 :    252,027
 84 :   2,951,341 :    278,259
 85 :   3,258,562 :    307,221
 86 :   3,597,759 :    339,197
 87 :   3,972,261 :    374,502
 88 :   4,385,743 :    413,482
 89 :   4,842,262 :    456,519
 90 :   5,346,298 :    504,036
 91 :   5,902,797 :    556,499
 92 :   6,517,219 :    614,422
 93 :   7,195,594 :    678,375
 94 :   7,944,579 :    748,985
 95 :   8,771,523 :    826,944
 96 :   9,684,541 :    913,018
 97 :  10,692,593 :  1,008,052
 98 :  11,805,570 :  1,112,977
 99 :  13,034,394 :  1,228,824
100 :  14,391,123 :  1,356,729
101 :  15,889,071 :  1,497,948
102 :  17,542,938 :  1,653,867
103 :  19,368,953 :  1,826,015
104 :  21,385,034 :  2,016,081
105 :  23,610,966 :  2,225,932
106 :  26,068,592 :  2,457,626
107 :  28,782,028 :  2,713,436
108 :  31,777,902 :  2,995,874
109 :  35,085,613 :  3,307,711
110 :  38,737,619 :  3,652,006
111 :  42,769,758 :  4,032,139
112 :  47,221,598 :  4,451,840
113 :  52,136,826 :  4,915,228
114 :  57,563,675 :  5,426,849
115 :  63,555,399 :  5,991,724
116 :  70,170,796 :  6,615,397
117 :  77,474,784 :  7,303,988
118 :  85,539,037 :  8,064,253
119 :  94,442,692 :  8,903,655
120 : 104,273,121 :  9,830,429
121 : 115,126,792 : 10,853,671
122 : 127,110,214 : 11,983,422
123 : 140,340,981 : 13,230,767
124 : 154,948,930 : 14,607,949
125 : 171,077,410 : 16,128,480
126 : 188,884,693 : 17,807,283
*/