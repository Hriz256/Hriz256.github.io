class Field extends Phaser.Scene {
    constructor() {
        super('Field');

        this.mainArrayCell = {};
        this.secondArrayCell = {};
        this.currentChip = 0;

        this.bets = {};
        this.allBets = [];
        this.historyAllBets = [];
        this.rebetAllBets = [];
        this.chips = {};
        this.history = [];
        this.allowUndo = false;
        this.allowClear = false;
        this.allowRebet = false;
        this.rebetBet = [];
        this.noticeCreate = false;
        this.highlightArray = [];

        this.cellsNumberArray = {
            '1st12': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            '2nd12': ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
            '3rd12': ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'],
            '1-18': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
            '19-36': ['19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'],
            'red': ['1', '3', '5', '7', '9', '12', '14', '16', '18', '19', '21', '23', '25', '27', '30', '32', '34', '36'],
            'black': ['2', '4', '6', '8', '10', '11', '13', '15', '17', '20', '22', '24', '26', '28', '29', '31', '33', '35'],
            '2to1-l1': [],
            '2to1-l2': [],
            '2to1-l3': [],
            'even': [],
            'odd': [],
        };

        this.fiveCells = [
            '3', '26', '0', '32', '15', '19', '4', '21', '2', '25', '17', '34', '6', '27', '13', '36', '11', '30', '8',
            '23', '10', '5', '24', '16', '33', '1', '20', '14', '31', '9', '22', '18', '29', '7', '28', '12', '35', '3',
            '26', '0', '32'
        ];

        this.serverArray = [
            {
                nomUse: [0],
                clName1: '0',
                stIn: 1
            },
            {
                nomUse: [1],
                clName1: '1',
                stIn: 1
            }
            ,
            {
                nomUse: [2],
                clName1: '2',
                stIn: 1
            }
            ,
            {
                nomUse: [3],
                clName1: '3',
                stIn: 1
            }
            ,
            {
                nomUse: [4],
                clName1: '4',
                stIn: 1
            }
            ,
            {
                nomUse: [5],
                clName1: '5',
                stIn: 1
            }
            ,
            {
                nomUse: [6],
                clName1: '6',
                stIn: 1
            }
            ,
            {
                nomUse: [7],
                clName1: '7',
                stIn: 1
            }
            ,
            {
                nomUse: [8],
                clName1: '8',
                stIn: 1
            }
            ,
            {
                nomUse: [9],
                clName1: '9',
                stIn: 1
            }
            ,
            {
                nomUse: [10],
                clName1: '10',
                stIn: 1
            }
            ,
            {
                nomUse: [11],
                clName1: '11',
                stIn: 1
            }
            ,
            {
                nomUse: [12],
                clName1: '12',
                stIn: 1
            }
            ,
            {
                nomUse: [13],
                clName1: '13',
                stIn: 1
            }
            ,
            {
                nomUse: [14],
                clName1: '14',
                stIn: 1
            }
            ,
            {
                nomUse: [15],
                clName1: '15',
                stIn: 1
            }
            ,
            {
                nomUse: [16],
                clName1: '16',
                stIn: 1
            }
            ,
            {
                nomUse: [17],
                clName1: '17',
                stIn: 1
            }
            ,
            {
                nomUse: [18],
                clName1: '18',
                stIn: 1
            }
            ,
            {
                nomUse: [19],
                clName1: '19',
                stIn: 1
            }
            ,
            {
                nomUse: [20],
                clName1: '20',
                stIn: 1
            }
            ,
            {
                nomUse: [21],
                clName1: '21',
                stIn: 1
            }
            ,
            {
                nomUse: [22],
                clName1: '22',
                stIn: 1
            }
            ,
            {
                nomUse: [23],
                clName1: '23',
                stIn: 1
            }
            ,
            {
                nomUse: [24],
                clName1: '24',
                stIn: 1
            }
            ,
            {
                nomUse: [25],
                clName1: '25',
                stIn: 1
            }
            ,
            {
                nomUse: [26],
                clName1: '26',
                stIn: 1
            }
            ,
            {
                nomUse: [27],
                clName1: '27',
                stIn: 1
            }
            ,
            {
                nomUse: [28],
                clName1: '28',
                stIn: 1
            }
            ,
            {
                nomUse: [29],
                clName1: '29',
                stIn: 1
            }
            ,
            {
                nomUse: [30],
                clName1: '30',
                stIn: 1
            }
            ,
            {
                nomUse: [31],
                clName1: '31',
                stIn: 1
            }
            ,
            {
                nomUse: [32],
                clName1: '32',
                stIn: 1
            }
            ,
            {
                nomUse: [33],
                clName1: '33',
                stIn: 1
            }
            ,
            {
                nomUse: [34],
                clName1: '34',
                stIn: 1
            }
            ,
            {
                nomUse: [35],
                clName1: '35',
                stIn: 1
            }
            ,
            {
                nomUse: [36],
                clName1: '36',
                stIn: 1
            }
            ,
            {
                nomUse: [3, 0],
                clName1: '3|0',
                stIn: 1
            }
            ,
            {
                nomUse: [3, 2],
                clName1: '3|2',
                stIn: 1
            }
            ,
            {
                nomUse: [6, 3],
                clName1: '6|3',
                stIn: 1
            }
            ,
            {
                nomUse: [6, 5],
                clName1: '6|5',
                stIn: 1
            }
            ,
            {
                nomUse: [6, 9],
                clName1: '6|9',
                stIn: 1
            }
            ,
            {
                nomUse: [2, 0],
                clName1: '2|0',
                stIn: 1
            }
            ,
            {
                nomUse: [5, 2],
                clName1: '5|2',
                stIn: 1
            }
            ,
            {
                nomUse: [5, 8],
                clName1: '5|8',
                stIn: 1
            }
            ,
            {
                nomUse: [11, 8],
                clName1: '11|8',
                stIn: 1
            }
            ,
            {
                nomUse: [9, 8],
                clName1: '9|8',
                stIn: 1
            }
            ,
            {
                nomUse: [12, 11],
                clName1: '12|11',
                stIn: 1
            }
            ,
            {
                nomUse: [12, 9],
                clName1: '12|9',
                stIn: 1
            }
            ,
            {
                nomUse: [12, 15],
                clName1: '12|15',
                stIn: 1
            }
            ,
            {
                nomUse: [11, 10],
                clName1: '11|10',
                stIn: 1
            }
            ,
            {
                nomUse: [8, 7],
                clName1: '8|7',
                stIn: 1
            }
            ,
            {
                nomUse: [11, 14],
                clName1: '11|14',
                stIn: 1
            }
            ,
            {
                nomUse: [5, 4],
                clName1: '5|4',
                stIn: 1
            }
            ,
            {
                nomUse: [2, 1],
                clName1: '2|1',
                stIn: 1
            }
            ,
            {
                nomUse: [1, 0],
                clName1: '1|0',
                stIn: 1
            }
            ,
            {
                nomUse: [1, 4],
                clName1: '1|4',
                stIn: 1
            }
            ,
            {
                nomUse: [7, 4],
                clName1: '7|4',
                stIn: 1
            }
            ,
            {
                nomUse: [7, 10],
                clName1: '7|10',
                stIn: 1
            }
            ,
            {
                nomUse: [13, 10],
                clName1: '13|10',
                stIn: 1
            }
            ,
            {
                nomUse: [16, 13],
                clName1: '16|13',
                stIn: 1
            }
            ,
            {
                nomUse: [14, 13],
                clName1: '14|13',
                stIn: 1
            }
            ,
            {
                nomUse: [17, 16],
                clName1: '17|16',
                stIn: 1
            }
            ,
            {
                nomUse: [17, 14],
                clName1: '17|14',
                stIn: 1
            }
            ,
            {
                nomUse: [15, 14],
                clName1: '15|14',
                stIn: 1
            }
            ,
            {
                nomUse: [18, 17],
                clName1: '18|17',
                stIn: 1
            }
            ,
            {
                nomUse: [18, 21],
                clName1: '18|21',
                stIn: 1
            }
            ,
            {
                nomUse: [17, 20],
                clName1: '17|20',
                stIn: 1
            }
            ,
            {
                nomUse: [22, 19],
                clName1: '22|19',
                stIn: 1
            }
            ,
            {
                nomUse: [20, 19],
                clName1: '20|19',
                stIn: 1
            }
            ,
            {
                nomUse: [16, 19],
                clName1: '16|19',
                stIn: 1
            }
            ,
            {
                nomUse: [23, 20],
                clName1: '23|20',
                stIn: 1
            }
            ,
            {
                nomUse: [21, 20],
                clName1: '21|20',
                stIn: 1
            }
            ,
            {
                nomUse: [24, 21],
                clName1: '24|21',
                stIn: 1
            }
            ,
            {
                nomUse: [24, 27],
                clName1: '24|27',
                stIn: 1
            }
            ,
            {
                nomUse: [18, 15],
                clName1: '18|15',
                stIn: 1
            }
            ,
            {
                nomUse: [35, 32],
                clName1: '36|35',
                stIn: 1
            }
            ,
            {
                nomUse: [35, 32],
                clName1: '35|32',
                stIn: 1
            }
            ,
            {
                nomUse: [29, 32],
                clName1: '29|32',
                stIn: 1
            }
            ,
            {
                nomUse: [33, 32],
                clName1: '33|32',
                stIn: 1
            }
            ,
            {
                nomUse: [30, 29],
                clName1: '30|29',
                stIn: 1
            }
            ,
            {
                nomUse: [30, 27],
                clName1: '30|27',
                stIn: 1
            }
            ,
            {
                nomUse: [27, 26],
                clName1: '27|26',
                stIn: 1
            }
            ,
            {
                nomUse: [24, 23],
                clName1: '24|23',
                stIn: 1
            }
            ,
            {
                nomUse: [23, 26],
                clName1: '23|26',
                stIn: 1
            }
            ,
            {
                nomUse: [23, 22],
                clName1: '23|22',
                stIn: 1
            }
            ,
            {
                nomUse: [26, 25],
                clName1: '26|25',
                stIn: 1
            }
            ,
            {
                nomUse: [29, 26],
                clName1: '29|26',
                stIn: 1
            }
            ,
            {
                nomUse: [29, 28],
                clName1: '29|28',
                stIn: 1
            }
            ,
            {
                nomUse: [32, 31],
                clName1: '32|31',
                stIn: 1
            }
            ,
            {
                nomUse: [30, 33],
                clName1: '30|33',
                stIn: 1
            }
            ,
            {
                nomUse: [36, 33],
                clName1: '36|33',
                stIn: 1
            }
            ,
            {
                nomUse: [35, 34],
                clName1: '35|34',
                stIn: 1
            }
            ,
            {
                nomUse: [34, 31],
                clName1: '34|31',
                stIn: 1
            }
            ,
            {
                nomUse: [28, 31],
                clName1: '28|31',
                stIn: 1
            }
            ,
            {
                nomUse: [28, 25],
                clName1: '28|25',
                stIn: 1
            }
            ,
            {
                nomUse: [22, 25],
                clName1: '22|25',
                stIn: 1
            }
            ,

            {
                nomUse: [15, 14, 13],
                clName1: '15|14|13',
                stIn: 1
            }
            ,
            {
                nomUse: [12, 11, 10],
                clName1: '12|11|10',
                stIn: 1
            }
            ,
            {
                nomUse: [18, 17, 16],
                clName1: '18|17|16',
                stIn: 1
            }
            ,
            {
                nomUse: [21, 20, 19],
                clName1: '21|20|19',
                stIn: 1
            }
            ,
            {
                nomUse: [36, 35, 34],
                clName1: '36|35|34',
                stIn: 1
            }
            ,
            {
                nomUse: [33, 32, 31],
                clName1: '33|32|31',
                stIn: 1
            }
            ,
            {
                nomUse: [30, 29, 28],
                clName1: '30|29|28',
                stIn: 1
            }
            ,
            {
                nomUse: [27, 26, 25],
                clName1: '27|26|25',
                stIn: 1
            }
            ,
            {
                nomUse: [24, 23, 22],
                clName1: '24|23|22',
                stIn: 1
            }
            ,
            {
                nomUse: [6, 5, 4],
                clName1: '6|5|4',
                stIn: 1
            }
            ,
            {
                nomUse: [3, 2, 1],
                clName1: '3|2|1',
                stIn: 1
            }
            ,
            {
                nomUse: [3, 2, 0],
                clName1: '3|2|0',
                stIn: 1
            }
            ,
            {
                nomUse: [9, 8, 7],
                clName1: '9|8|7',
                stIn: 1
            }
            ,
            {
                nomUse: [2, 1, 0],
                clName1: '2|1|0',
                stIn: 1
            }
            ,

            {
                nomUse: [6, 5, 3, 2],
                clName1: '6|5|3|2',
                stIn: 1
            }
            ,
            {
                nomUse: [6, 5, 9, 8],
                clName1: '6|5|9|8',
                stIn: 1
            }
            ,
            {
                nomUse: [12, 11, 9, 8],
                clName1: '12|11|9|8',
                stIn: 1
            }
            ,
            {
                nomUse: [12, 11, 15, 14],
                clName1: '12|11|15|14',
                stIn: 1
            }
            ,
            {
                nomUse: [11, 10, 14, 13],
                clName1: '11|10|14|13',
                stIn: 1
            }
            ,
            {
                nomUse: [17, 16, 14, 13],
                clName1: '17|16|14|13',
                stIn: 1
            }
            ,
            {
                nomUse: [30, 29, 27, 26],
                clName1: '30|29|27|26',
                stIn: 1
            }
            ,
            {
                nomUse: [24, 23, 27, 26],
                clName1: '24|23|27|26',
                stIn: 1
            }
            ,
            {
                nomUse: [29, 28, 26, 25],
                clName1: '29|28|26|25',
                stIn: 1
            }
            ,
            {
                nomUse: [23, 22, 26, 25],
                clName1: '23|22|26|25',
                stIn: 1
            }
            ,
            {
                nomUse: [29, 28, 32, 31],
                clName1: '29|28|32|31',
                stIn: 1
            }
            ,
            {
                nomUse: [30, 29, 33, 32],
                clName1: '30|29|33|32',
                stIn: 1
            }
            ,
            {
                nomUse: [36, 35, 33, 32],
                clName1: '36|35|33|32',
                stIn: 1
            }
            ,
            {
                nomUse: [35, 34, 32, 31],
                clName1: '35|34|32|31',
                stIn: 1
            }
            ,
            {
                nomUse: [5, 4, 2, 1],
                clName1: '5|4|2|1',
                stIn: 1
            }
            ,
            {
                nomUse: [5, 4, 8, 7],
                clName1: '5|4|8|7',
                stIn: 1
            }
            ,
            {
                nomUse: [11, 10, 8, 7],
                clName1: '11|10|8|7',
                stIn: 1
            }
            ,
            {
                nomUse: [3, 2, 1, 0],
                clName1: '3|2|1|0',
                stIn: 1
            }
            ,
            {
                nomUse: [18, 17, 15, 14],
                clName1: '18|17|15|14',
                stIn: 1
            }
            ,
            {
                nomUse: [18, 17, 21, 20],
                clName1: '18|17|21|20',
                stIn: 1
            }
            ,
            {
                nomUse: [17, 16, 20, 19],
                clName1: '17|16|20|19',
                stIn: 1
            }
            ,
            {
                nomUse: [23, 22, 20, 19],
                clName1: '23|22|20|19',
                stIn: 1
            }
            ,
            {
                nomUse: [24, 23, 21, 20],
                clName1: '24|23|21|20',
                stIn: 1
            }
            ,
            {
                nomUse: [15, 14, 13, 12, 11, 10],
                clName1: '15|14|13|12|11|10',
                stIn: 1
            }
            ,
            {
                nomUse: [15, 14, 13, 18, 17, 16],
                clName1: '15|14|13|18|17|16',
                stIn: 1
            }
            ,
            {
                nomUse: [9, 8, 7, 12, 11, 10],
                clName1: '9|8|7|12|11|10',
                stIn: 1
            }
            ,
            {
                nomUse: [21, 20, 19, 24, 23, 22],
                clName1: '21|20|19|24|23|22',
                stIn: 1
            }
            ,
            {
                nomUse: [3, 2, 1, 6, 5, 4],
                clName1: '3|2|1|6|5|4',
                stIn: 1
            }
            ,
            {
                nomUse: [9, 8, 7, 6, 5, 4],
                clName1: '9|8|7|6|5|4',
                stIn: 1
            }
            ,
            {
                nomUse: [21, 20, 19, 18, 17, 16],
                clName1: '21|20|19|18|17|16',
                stIn: 1
            }
            ,
            {
                nomUse: [33, 32, 31, 30, 29, 28],
                clName1: '33|32|31|30|29|28',
                stIn: 1
            }
            ,
            {
                nomUse: [27, 26, 25, 30, 29, 28],
                clName1: '27|26|25|30|29|28',
                stIn: 1
            }
            ,
            {
                nomUse: [27, 26, 25, 24, 23, 22],
                clName1: '27|26|25|24|23|22',
                stIn: 1
            }
            ,
            {
                nomUse: [33, 32, 31, 36, 35, 34],
                clName1: '33|32|31|36|35|34',
                stIn: 1
            }
            ,
            {
                nomUse: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 14, 15, 17, 18],
                clName1: '1-18',
                stIn: 1
            }
            ,
            {
                nomUse: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
                clName1: 'even',
                stIn: 1
            }
            ,
            {
                nomUse: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                clName1: '1st12',
                stIn: 1
            }
            ,
            {
                nomUse: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
                clName1: '2nd12',
                stIn: 1
            }
            ,
            {
                nomUse: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                clName1: '3rd12',
                stIn: 1
            }
            ,
            {
                nomUse: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
                clName1: 'red',
                stIn: 1
            }
            ,
            {
                nomUse: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35],
                clName1: 'black',
                stIn: 1
            }
            ,
            {
                nomUse: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
                clName1: 'odd',
                stIn: 1
            }
            ,
            {
                nomUse: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
                clName1: '19-36',
                stIn: 1
            }
            ,
            {
                nomUse: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
                clName1: '2to1-l1',
                stIn: 1
            }
            ,
            {
                nomUse: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
                clName1: '2to1-l2',
                stIn: 1
            }
            ,
            {
                nomUse: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
                clName1: '2to1-l3',
                stIn: 1
            }
            ,

//Трек

            {
                nomUse: [23, 10, 5, 24, 16],
                clName1: '23|10|5|24|16',
                stIn: 5
            }
            ,
            {
                nomUse: [10, 5, 24, 16, 33],
                clName1: '10|5|24|16|33',
                stIn: 5
            }
            ,
            {
                nomUse: [5, 24, 16, 33, 1],
                clName1: '5|24|16|33|1',
                stIn: 5
            }
            ,
            {
                nomUse: [24, 16, 33, 1, 20],
                clName1: '24|16|33|1|20',
                stIn: 5
            }
            ,
            {
                nomUse: [16, 33, 1, 20, 14],
                clName1: '16|33|1|20|14',
                stIn: 5
            }
            ,
            {
                nomUse: [33, 1, 20, 14, 31],
                clName1: '33|1|20|14|31',
                stIn: 5
            }
            ,
            {
                nomUse: [1, 20, 14, 31, 9],
                clName1: '1|20|14|31|9',
                stIn: 5
            }
            ,
            {
                nomUse: [20, 14, 31, 9, 22],
                clName1: '20|14|31|9|22',
                stIn: 5
            }
            ,
            {
                nomUse: [14, 31, 9, 22, 18],
                clName1: '14|31|9|22|18',
                stIn: 5
            }
            ,
            {
                nomUse: [31, 9, 22, 18, 29],
                clName1: '31|9|22|18|29',
                stIn: 5
            }
            ,
            {
                nomUse: [9, 22, 18, 29, 7],
                clName1: '9|22|18|29|7',
                stIn: 5
            }
            ,
            {
                nomUse: [22, 18, 29, 7, 28],
                clName1: '22|18|29|7|28',
                stIn: 5
            }
            ,
            {
                nomUse: [18, 29, 7, 28, 12],
                clName1: '18|29|7|28|12',
                stIn: 5
            }
            ,
            {
                nomUse: [29, 7, 28, 12, 35],
                clName1: '29|7|28|12|35',
                stIn: 5
            }
            ,
            {
                nomUse: [7, 28, 12, 35, 3],
                clName1: '7|28|12|35|3',
                stIn: 5
            }
            ,
            {
                nomUse: [28, 12, 35, 3, 26],
                clName1: '28|12|35|3|26',
                stIn: 5
            }
            ,
            {
                nomUse: [12, 35, 3, 26, 0],
                clName1: '12|35|3|26|0',
                stIn: 5
            }
            ,
            {
                nomUse: [35, 3, 26, 0, 32],
                clName1: '35|3|26|0|32',
                stIn: 5
            }
            ,
            {
                nomUse: [15, 32, 0, 26, 3],
                clName1: '15|32|0|26|3',
                stIn: 5
            }
            ,
            {
                nomUse: [19, 15, 32, 0, 26],
                clName1: '19|15|32|0|26',
                stIn: 5
            }
            ,
            {
                nomUse: [4, 19, 15, 32, 0],
                clName1: '4|19|15|32|0',
                stIn: 5
            }
            ,
            {
                nomUse: [21, 4, 19, 15, 32],
                clName1: '21|4|19|15|32',
                stIn: 5
            }
            ,
            {
                nomUse: [2, 21, 4, 19, 15],
                clName1: '2|21|4|19|15',
                stIn: 5
            }
            ,
            {
                nomUse: [17, 25, 2, 21, 4],
                clName1: '17|25|2|21|4',
                stIn: 5
            }
            ,
            {
                nomUse: [34, 17, 25, 2, 21],
                clName1: '34|17|25|2|21',
                stIn: 5
            }
            ,
            {
                nomUse: [6, 34, 17, 25, 2],
                clName1: '6|34|17|25|2',
                stIn: 5
            }
            ,
            {
                nomUse: [27, 6, 34, 17, 25],
                clName1: '27|6|34|17|25',
                stIn: 5
            }
            ,
            {
                nomUse: [13, 27, 6, 34, 17],
                clName1: '13|27|6|34|17',
                stIn: 5
            }
            ,
            {
                nomUse: [34, 6, 27, 13, 36],
                clName1: '34|6|27|13|36',
                stIn: 5
            }
            ,
            {
                nomUse: [6, 27, 13, 36, 11],
                clName1: '6|27|13|36|11',
                stIn: 5
            }
            ,
            {
                nomUse: [27, 13, 36, 11, 30],
                clName1: '27|13|36|11|30',
                stIn: 5
            }
            ,
            {
                nomUse: [8, 30, 11, 36, 13],
                clName1: '8|30|11|36|13',
                stIn: 5
            }
            ,

            {
                nomUse: [24, 5, 10, 23, 8],
                clName1: '24|5|10|23|8',
                stIn: 5
            }
            ,
            {
                nomUse: [5, 10, 23, 8, 30],
                clName1: '5|10|23|8|30',
                stIn: 5
            }
            ,
            {
                nomUse: [11, 30, 8, 23, 10],
                clName1: '11|30|8|23|10',
                stIn: 5
            }
            ,
            {
                nomUse: [23, 8, 30, 11, 36],
                clName1: '23|8|30|11|36',
                stIn: 5
            }
            ,
            {
                nomUse: [25, 2, 21, 4, 19],
                clName1: '25|2|21|4|19',
                stIn: 5
            }
            ,
            {
                nomUse: [22, 18, 29, 7, 28, 12, 35, 3, 26, 0, 32, 15, 19, 4, 21, 2, 25],
                clName1: 'voisins-zero',
                stIn: 9
            }
            ,
            {
                nomUse: [5, 8, 10, 11, 13, 16, 23, 24, 27, 30, 33, 36],
                clName1: 'tier',
                stIn: 6
            }
            ,
            {
                nomUse: [17, 34, 6, 1, 20, 14, 31, 9],
                clName1: 'orphelins',
                stIn: 5
            }
            ,
            {
                nomUse: [12, 35, 3, 26, 0, 32, 15],
                clName1: '0-spiel',
                stIn: 4
            }
        ];

        for (let i = 1; i <= 36; i++) {
            i % 2 === 0 ? this.cellsNumberArray['even'].push(`${i}`) : this.cellsNumberArray['odd'].push(`${i}`);
        }

        for (let i = 1; i <= 36; i += 3) {
            this.cellsNumberArray['2to1-l3'].push(`${i}`);
        }

        for (let i = 2; i <= 36; i += 3) {
            this.cellsNumberArray['2to1-l2'].push(`${i}`);
        }

        for (let i = 3; i <= 36; i += 3) {
            this.cellsNumberArray['2to1-l1'].push(`${i}`);
        }
    }

    preload() {
        this.load.svg('0', 'images/svg/0.svg');
        this.load.svg('26', 'images/svg/26.svg');
        this.load.svg('3', 'images/svg/3.svg');
        this.load.svg('8', 'images/svg/8.svg');
        this.load.svg('5', 'images/svg/5.svg');
        this.load.svg('10', 'images/svg/10.svg');
        this.load.svg('23', 'images/svg/23.svg');
        this.load.svg('tier', 'images/svg/tiers.svg');
        this.load.svg('voisins-zero', 'images/svg/voisins.svg');
        this.load.image('winDisplay', 'images/win_display.png');

        let value = 0.1;

        for (let i = 0; i < 19; i++) {
            this.load.image(`chip${i}`, `images/chips/chip_${i}.png`);
            this.chips['chip0'] = 0.1;

            if (i > 0) this.chips[`chip${i}`] = i % 2 === 0 ? value *= 2 : value *= 5;
        }
    }

    create() {
        this.cameras.main.setBounds(0, 0, 1340, 760);
        this.drawMainField();
        this.drawSecondField();
    }

    setLimits(limits) {
        this.limits = JSON.parse(JSON.stringify(limits));
    }

    drawMainField() {
        this.createCell(575, 185, [0, 0, -40, 72, -58, 151, 0, 163, 55, 13], {
            main: true,
            cellNumber: '0',
            type: 'straight up'
        });  // 0
        this.createCell(594, 298, [0, 0, -18, 51.5, 36, 63.5, 53, 11], {
            main: true,
            cellNumber: '1',
            type: 'straight up'
        }); // 1
        this.createCell(612.5, 247, [0, 0, -18, 50, 35, 63, 52, 10], {
            main: true,
            cellNumber: '2',
            type: 'straight up'
        }); // 2
        this.createCell(630, 198, [0, 0, -18, 48, 35, 60, 51, 10], {main: true, cellNumber: '3', type: 'straight up'}); // 3
        this.createCell(647, 309.5, [0, 0, -18, 51.5, 36, 63.5, 53, 11], {
            main: true,
            cellNumber: '4',
            type: 'straight up'
        }); // 4
        this.createCell(665, 258.5, [0, 0, -18, 50, 35, 63, 52, 10], {
            main: true,
            cellNumber: '5',
            type: 'straight up'
        }); // 5
        this.createCell(682, 209.5, [0, 0, -18, 48, 35, 60, 51, 10], {
            main: true,
            cellNumber: '6',
            type: 'straight up'
        }); // 6
        this.createCell(700, 321, [0, 0, -18, 51.5, 36, 63.5, 53, 11], {
            main: true,
            cellNumber: '7',
            type: 'straight up'
        }); // 7
        this.createCell(717.5, 270, [0, 0, -18, 50, 35, 63, 52, 10], {
            main: true,
            cellNumber: '8',
            type: 'straight up'
        }); // 8
        this.createCell(734, 221, [0, 0, -18, 48, 35, 60, 51, 10], {main: true, cellNumber: '9', type: 'straight up'}); // 9
        this.createCell(753, 332.5, [0, 0, -18, 51.5, 36, 63.5, 53, 11], {
            main: true,
            cellNumber: '10',
            type: 'straight up'
        }); // 10
        this.createCell(770, 281.5, [0, 0, -18, 50, 35, 63, 52, 10], {
            main: true,
            cellNumber: '11',
            type: 'straight up'
        }); // 11
        this.createCell(786, 232.5, [0, 0, -18, 48, 35, 60, 51, 10], {
            main: true,
            cellNumber: '12',
            type: 'straight up'
        }); // 12
        this.createCell(805, 345, [0, 0, -16, 53, 40, 66, 54, 12], {main: true, cellNumber: '13', type: 'straight up'}); // 13
        this.createCell(821, 293.5, [0, 0, -16, 52.5, 40, 65, 53.5, 11], {
            main: true,
            cellNumber: '14',
            type: 'straight up'
        }); // 14
        this.createCell(837.5, 243, [0, 0, -16, 51, 39.5, 63, 53, 11], {
            main: true,
            cellNumber: '15',
            type: 'straight up'
        }); // 15
        this.createCell(859.5, 357, [0, 0, -16, 53, 40, 66, 54, 12], {
            main: true,
            cellNumber: '16',
            type: 'straight up'
        }); // 16
        this.createCell(875, 304.5, [0, 0, -16, 52.5, 40, 65, 53.5, 11], {
            main: true,
            cellNumber: '17',
            type: 'straight up'
        }); // 17
        this.createCell(890.5, 254.5, [0, 0, -16, 51, 39.5, 63, 53, 11], {
            main: true,
            cellNumber: '18',
            type: 'straight up'
        }); // 18
        this.createCell(914, 369, [0, 0, -16, 53, 40, 66, 54, 12], {main: true, cellNumber: '19', type: 'straight up'}); // 19
        this.createCell(929, 316, [0, 0, -16, 52.5, 40, 65, 53.5, 11], {
            main: true,
            cellNumber: '20',
            type: 'straight up'
        }); // 20
        this.createCell(943.5, 266, [0, 0, -16, 51, 39.5, 63, 53, 11], {
            main: true,
            cellNumber: '21',
            type: 'straight up'
        }); // 21
        this.createCell(968.5, 381, [0, 0, -16, 53, 40, 66, 54, 12], {
            main: true,
            cellNumber: '22',
            type: 'straight up'
        }); // 22
        this.createCell(983, 327.5, [0, 0, -16, 52.5, 40, 65, 53.5, 11], {
            main: true,
            cellNumber: '23',
            type: 'straight up'
        }); // 23
        this.createCell(996.5, 277.5, [0, 0, -16, 51, 39.5, 63, 53, 11], {
            main: true,
            cellNumber: '24',
            type: 'straight up'
        }); // 24
        this.createCell(1022, 392.5, [0, 0, -12, 54, 44.5, 66.5, 55.5, 12], {
            main: true,
            cellNumber: '25',
            type: 'straight up'
        }); // 25
        this.createCell(1035.5, 340, [0, 0, -12, 54, 45, 66.5, 55.5, 12], {
            main: true,
            cellNumber: '26',
            type: 'straight up'
        }); // 26
        this.createCell(1050, 289, [0, 0, -13, 53, 43, 64.5, 54, 12], {
            main: true,
            cellNumber: '27',
            type: 'straight up'
        }); // 27
        this.createCell(1078, 405.3, [0, 0, -12, 54, 44.5, 66.5, 55.5, 12], {
            main: true,
            cellNumber: '28',
            type: 'straight up'
        }); // 28
        this.createCell(1090.5, 352, [0, 0, -12, 54, 45, 66.5, 55.5, 12], {
            main: true,
            cellNumber: '29',
            type: 'straight up'
        }); // 29
        this.createCell(1104.2, 300.5, [0, 0, -13, 53, 43, 64.5, 54, 12], {
            main: true,
            cellNumber: '30',
            type: 'straight up'
        }); // 30
        this.createCell(1134, 418.1, [0, 0, -12, 54, 44.5, 66.5, 55.5, 12], {
            main: true,
            cellNumber: '31',
            type: 'straight up'
        }); // 31
        this.createCell(1145.5, 364, [0, 0, -12, 54, 45, 66.5, 55.5, 12], {
            main: true,
            cellNumber: '32',
            type: 'straight up'
        }); // 32
        this.createCell(1158.4, 312, [0, 0, -13, 53, 43, 64.5, 54, 12], {
            main: true,
            cellNumber: '33',
            type: 'straight up'
        }); // 33
        this.createCell(1190, 430.9, [0, 0, -12, 54, 44.5, 66.5, 55.5, 12], {
            main: true,
            cellNumber: '34',
            type: 'straight up'
        }); // 34
        this.createCell(1200.5, 376, [0, 0, -12, 54, 45, 66.5, 55.5, 12], {
            main: true,
            cellNumber: '35',
            type: 'straight up'
        }); // 35
        this.createCell(1212.6, 323.5, [0, 0, -13, 53, 43, 64.5, 54, 12], {
            main: true,
            cellNumber: '36',
            type: 'straight up'
        }); // 36
        this.createCell(621, 194.5, [0, 0, -18, 51, 7, 56, 24, 5.5], {
            main: true,
            cellNumber: '3|0',
            rects: ['0', '3'],
            type: 'split'
        }); // 0-3
        this.createCell(616, 238, [0, 0, -7, 18, 44, 30, 51, 11], {
            main: true,
            cellNumber: '3|2',
            rects: ['3', '2'],
            type: 'split'
        }); // 3-2
        this.createCell(674, 206, [0, 0, -18, 52, 7, 56, 24, 5.5], {
            main: true,
            cellNumber: '6|3',
            rects: ['3', '6'],
            type: 'split'
        }); // 3-6
        this.createCell(668, 250, [0, 0, -6, 18, 44, 30, 51, 11], {
            main: true,
            cellNumber: '6|5',
            rects: ['6', '5'],
            type: 'split'
        }); // 6-5
        this.createCell(726, 218, [0, 0, -18, 51, 7, 56, 24, 5.5], {
            main: true,
            cellNumber: '6|9',
            rects: ['6', '9'],
            type: 'split'
        }); // 6-9
        this.createCell(603, 245, [0, 0, -18.5, 51, 6, 57, 24.5, 5.5], {
            main: true,
            cellNumber: '2|0',
            rects: ['0', '2'],
            type: 'split'
        }); // 0-2
        this.createCell(657, 256, [0, 0, -19, 52, 6, 56, 24.5, 5.5], {
            main: true,
            cellNumber: '5|2',
            rects: ['2', '5'],
            type: 'split'
        }); // 2-5

        this.createCell(575, 349, [0, 0, -24, 64, 195, 114, 215, 47], {cellNumber: '1st12', type: 'dozen'}); // 1st 12
        this.createCell(790, 397, [0, 0, -20, 65.5, 203, 116.5, 219, 50], {cellNumber: '2nd12', type: 'dozen'}); // 2nd 12
        this.createCell(1010, 447, [0, 0, -17, 66.5, 210, 119, 224, 50], {cellNumber: '3rd12', type: 'dozen'}); // 3rd 12


        this.createCell(551.5, 412, [0, 0, -24, 65, 87, 91.5, 110, 26], {cellNumber: '1-18', type: 'low'}); // 1 to 18
        this.createCell(660.5, 438, [0, 0, -23.5, 65, 88, 91.5, 110, 25], {cellNumber: 'even', type: 'even'}); // even

        this.createCell(770, 462, [0, 0, -21, 67, 91, 93.5, 110, 25], {cellNumber: 'red', type: 'red'}); // red
        this.createCell(881, 488, [0, 0, -20, 67.5, 94, 94, 112, 25], {cellNumber: 'black', type: 'black'}); // black
        this.createCell(993, 514, [0, 0, -17, 68.5, 97, 95, 112.5, 25], {cellNumber: 'odd', type: 'odd'}); // odd
        this.createCell(1106.5, 540, [0, 0, -16.5, 69, 100, 96.5, 114, 25.5], {cellNumber: '19-36', type: 'high'}); // 19 to 36
        this.createCell(1267, 336, [0, 0, -11, 53, 45, 65, 54.5, 11], {cellNumber: '2to1-l1', type: 'column'}); // 2 to 1 (first part)
        this.createCell(1256.5, 389.5, [0, 0, -10.5, 53, 45.5, 65.5, 55, 11], {
            cellNumber: '2to1-l2',
            type: 'column'
        }); // 2 to 1 (second part)
        this.createCell(1246, 443.5, [0, 0, -11, 55, 45.5, 67, 55.5, 11], {
            cellNumber: '2to1-l3',
            type: 'column'
        }); // 2 to 1 (second part)

        this.createCell(777, 230, [0, 0, -17, 51, 7, 56, 24, 5.5], {
            main: true,
            cellNumber: '12|9',
            rects: ['9', '12'],
            type: 'split'
        }); // 9-12
        this.createCell(829, 241, [0, 0, -16, 51, 8, 56, 24, 5.5], {
            main: true,
            cellNumber: '12|15',
            rects: ['12', '15'],
            type: 'split'
        }); // 12-15
        this.createCell(882, 252, [0, 0, -15, 51, 8.5, 56, 24, 5.5], {
            main: true,
            cellNumber: '18|15',
            rects: ['15', '18'],
            type: 'split'
        }); // 15-18
        this.createCell(935, 264, [0, 0, -15, 51, 8.5, 56, 24, 5.5], {
            main: true,
            cellNumber: '18|21',
            rects: ['18', '21'],
            type: 'split'
        }); // 18-21
        this.createCell(988, 275, [0, 0, -15, 52, 9, 58, 24, 5.5], {
            main: true,
            cellNumber: '24|21',
            rects: ['21', '24'],
            type: 'split'
        }); // 21-24
        this.createCell(1042, 287, [0, 0, -14.5, 52, 9, 58, 24, 5.5], {
            main: true,
            cellNumber: '24|27',
            rects: ['24', '27'],
            type: 'split'
        }); // 24-27
        this.createCell(1095, 299, [0, 0, -13.5, 52, 10.5, 58, 24, 5.5], {
            main: true,
            cellNumber: '30|27',
            rects: ['27', '30'],
            type: 'split'
        }); // 27-30
        this.createCell(1149, 311, [0, 0, -12.5, 52, 11, 58, 24, 5.5], {
            main: true,
            cellNumber: '30|33',
            rects: ['30', '33'],
            type: 'split'
        }); // 30-33
        this.createCell(1204, 323, [0, 0, -12.5, 52, 11, 58, 24, 5.5], {
            main: true,
            cellNumber: '36|33',
            rects: ['33', '36'],
            type: 'split'
        }); // 33-36

        this.createCell(709, 267, [0, 0, -17.5, 52, 7, 57, 24, 5.5], {
            main: true,
            cellNumber: '5|8',
            rects: ['5', '8'],
            type: 'split'
        }); // 5-8
        this.createCell(761, 278, [0, 0, -17, 52, 7, 57, 24, 5.5], {
            main: true,
            cellNumber: '11|8',
            rects: ['8', '11'],
            type: 'split'
        }); // 8-11
        this.createCell(814, 290, [0, 0, -17, 52, 7.5, 57, 24, 5.5], {
            main: true,
            cellNumber: '11|14',
            rects: ['11', '14'],
            type: 'split'
        }); // 11-14
        this.createCell(867, 302, [0, 0, -16, 52, 8, 57, 24, 5.5], {
            main: true,
            cellNumber: '17|14',
            rects: ['14', '17'],
            type: 'split'
        }); // 14-17
        this.createCell(921, 314, [0, 0, -15.5, 52, 8, 57, 24, 5.5], {
            main: true,
            cellNumber: '17|20',
            rects: ['17', '20'],
            type: 'split'
        }); // 17-20
        this.createCell(974, 326, [0, 0, -15, 53, 9, 58, 24, 5.5], {
            main: true,
            cellNumber: '23|20',
            rects: ['20', '23'],
            type: 'split'
        }); // 20-23
        this.createCell(1028, 338, [0, 0, -14.5, 53, 9.5, 58, 24, 5.5], {
            main: true,
            cellNumber: '23|26',
            rects: ['23', '26'],
            type: 'split'
        }); // 23-26
        this.createCell(1083, 351, [0, 0, -14, 53, 10, 58, 24, 5.5], {
            main: true,
            cellNumber: '29|26',
            rects: ['26', '29'],
            type: 'split'
        }); // 26-29
        this.createCell(1137, 362, [0, 0, -12.5, 53, 11.5, 58, 24, 5.5], {
            main: true,
            cellNumber: '29|32',
            rects: ['29', '32'],
            type: 'split'
        }); // 29-32
        this.createCell(1192, 374, [0, 0, -12, 54, 12, 59, 24, 5.5], {
            main: true,
            cellNumber: '35|32',
            rects: ['32', '35'],
            type: 'split'
        }); // 32-35

        this.createCell(585, 295, [0, 0, -19, 51.5, 6, 57.5, 24.5, 5.5], {
            main: true,
            cellNumber: '1|0',
            rects: ['0', '1'],
            type: 'split'
        }); // 0-1
        this.createCell(639, 306, [0, 0, -19, 52, 5.5, 58, 24.5, 5.5], {
            main: true,
            cellNumber: '1|4',
            rects: ['1', '4'],
            type: 'split'
        }); // 1-4
        this.createCell(691.5, 319, [0, 0, -17.5, 52, 6.5, 58, 24, 5.5], {
            main: true,
            cellNumber: '7|4',
            rects: ['4', '7'],
            type: 'split'
        }); // 4-7
        this.createCell(744, 331, [0, 0, -17, 52, 6.5, 58, 24, 5.5], {
            main: true,
            cellNumber: '7|10',
            rects: ['7', '10'],
            type: 'split'
        }); // 7-10
        this.createCell(797, 343, [0, 0, -16.5, 52, 7.5, 58, 24, 5.5], {
            main: true,
            cellNumber: '13|10',
            rects: ['10', '13'],
            type: 'split'
        }); // 10-13
        this.createCell(851, 354, [0, 0, -16, 53, 8, 58, 24, 5.5], {
            main: true,
            cellNumber: '16|13',
            rects: ['13', '16'],
            type: 'split'
        }); // 13-16
        this.createCell(906, 366, [0, 0, -16, 53, 8.5, 59, 24, 5.5], {
            main: true,
            cellNumber: '16|19',
            rects: ['16', '19'],
            type: 'split'
        }); // 16-19
        this.createCell(960, 378, [0, 0, -15.5, 53.5, 9, 59, 24, 5.5], {
            main: true,
            cellNumber: '22|19',
            rects: ['19', '22'],
            type: 'split'
        }); // 19-22
        this.createCell(1015, 390, [0, 0, -15, 54, 9, 60, 24, 5.5], {
            main: true,
            cellNumber: '22|25',
            rects: ['22', '25'],
            type: 'split'
        }); // 22-25
        this.createCell(1070, 403, [0, 0, -14, 55, 10, 60, 24, 5.5], {
            main: true,
            cellNumber: '28|25',
            rects: ['25', '28'],
            type: 'split'
        }); // 25-28
        this.createCell(1125, 415, [0, 0, -12.5, 55, 10.5, 60, 24, 5.5], {
            main: true,
            cellNumber: '28|31',
            rects: ['28', '31'],
            type: 'split'
        }); // 28-31
        this.createCell(1181, 427, [0, 0, -12, 56, 12, 61, 24, 5.5], {
            main: true,
            cellNumber: '34|31',
            rects: ['31', '34'],
            type: 'split'
        }); // 31-34


        this.createCell(720, 261, [0, 0, -6, 18, 46, 30, 52, 11], {
            main: true,
            cellNumber: '9|8',
            rects: ['9', '8'],
            type: 'split'
        }); // 9-8
        this.createCell(772, 273, [0, 0, -6, 18, 46, 30, 52, 11], {
            main: true,
            cellNumber: '12|11',
            rects: ['12', '11'],
            type: 'split'
        }); // 12-11
        this.createCell(826, 285, [0, 0, -6, 18, 46, 30, 52, 11], {
            main: true,
            cellNumber: '15|14',
            rects: ['15', '14'],
            type: 'split'
        }); // 15-14
        this.createCell(878, 296.5, [0, 0, -5, 18, 47, 30, 53, 11], {
            main: true,
            cellNumber: '18|17',
            rects: ['18', '17'],
            type: 'split'
        }); // 18-17
        this.createCell(931, 308, [0, 0, -5, 18, 48, 30, 53, 11], {
            main: true,
            cellNumber: '21|20',
            rects: ['21', '20'],
            type: 'split'
        }); // 21-20
        this.createCell(985.5, 320, [0, 0, -5, 18, 48, 30, 53, 11], {
            main: true,
            cellNumber: '24|23',
            rects: ['24', '23'],
            type: 'split'
        }); // 24-23
        this.createCell(1040, 331, [0, 0, -5, 18, 48, 30, 53, 11], {
            main: true,
            cellNumber: '27|26',
            rects: ['27', '26'],
            type: 'split'
        }); // 27-26
        this.createCell(1094, 343, [0, 0, -4, 18, 49, 30, 54, 11], {
            main: true,
            cellNumber: '30|29',
            rects: ['30', '29'],
            type: 'split'
        }); // 30-29
        this.createCell(1148, 355, [0, 0, -4, 18, 50, 30, 54, 11], {
            main: true,
            cellNumber: '33|32',
            rects: ['33', '32'],
            type: 'split'
        }); // 33-32
        this.createCell(1204, 367, [0, 0, -4, 18, 50, 30, 54, 11], {
            main: true,
            cellNumber: '36|35',
            rects: ['36', '35'],
            type: 'split'
        }); // 36-35

        this.createCell(597, 289, [0, 0, -7, 18, 45, 30, 52, 11], {
            main: true,
            cellNumber: '2|1',
            rects: ['2', '1'],
            type: 'split'
        }); // 2-1
        this.createCell(650, 300, [0, 0, -6, 18, 45, 30, 52, 11], {
            main: true,
            cellNumber: '5|4',
            rects: ['5', '4'],
            type: 'split'
        }); // 5-4
        this.createCell(703, 312, [0, 0, -6, 18, 46, 30, 52, 11], {
            main: true,
            cellNumber: '8|7',
            rects: ['8', '7'],
            type: 'split'
        }); // 8-7
        this.createCell(756, 323.5, [0, 0, -6, 18, 47, 30, 53, 11], {
            main: true,
            cellNumber: '11|10',
            rects: ['11', '10'],
            type: 'split'
        }); // 11-10
        this.createCell(809, 335, [0, 0, -5, 18, 47, 30, 53, 11], {
            main: true,
            cellNumber: '14|13',
            rects: ['14', '13'],
            type: 'split'
        }); // 14-13
        this.createCell(863, 348, [0, 0, -5, 18, 48, 30, 53, 11], {
            main: true,
            cellNumber: '17|16',
            rects: ['17', '16'],
            type: 'split'
        }); // 17-16
        this.createCell(917, 360, [0, 0, -5, 18, 48, 30, 53, 11], {
            main: true,
            cellNumber: '20|19',
            rects: ['20', '19'],
            type: 'split'
        }); // 20-19
        this.createCell(972, 372, [0, 0, -5, 18, 48, 30, 53, 11], {
            main: true,
            cellNumber: '23|22',
            rects: ['23', '22'],
            type: 'split'
        }); // 23-22
        this.createCell(1027, 384, [0, 0, -5, 18, 48, 30, 53, 11], {
            main: true,
            cellNumber: '26|25',
            rects: ['26', '25'],
            type: 'split'
        }); // 26-25
        this.createCell(1081, 396, [0, 0, -4, 18, 50, 30, 55, 11], {
            main: true,
            cellNumber: '29|28',
            rects: ['29', '28'],
            type: 'split'
        }); // 29-28
        this.createCell(1137, 409, [0, 0, -4, 18, 50, 30, 54, 11], {
            main: true,
            cellNumber: '32|31',
            rects: ['32', '31'],
            type: 'split'
        }); // 32-31
        this.createCell(1192, 422, [0, 0, -4, 18, 51, 30, 55, 11], {
            main: true,
            cellNumber: '35|34',
            rects: ['35', '34'],
            type: 'split'
        }); // 35-34

        this.createCell(578, 340.5, [0, 0, -7, 20, 47, 32, 54, 11], {
            main: true,
            cellNumber: '3|2|1',
            rects: ['1', '2', '3'],
            type: 'street'
        }); // 1, 2, 3
        this.createCell(631, 352.5, [0, 0, -6, 20, 47, 32, 54, 11], {
            main: true,
            cellNumber: '6|5|4',
            rects: ['4', '5', '6'],
            type: 'street'
        }); // 4, 5, 6
        this.createCell(684.5, 364.5, [0, 0, -6, 20, 47, 32, 54, 11], {
            main: true,
            cellNumber: '9|8|7',
            rects: ['7', '8', '9'],
            type: 'street'
        }); // 7, 8, 9
        this.createCell(738, 376.5, [0, 0, -6, 20, 48, 32, 55, 11], {
            main: true,
            cellNumber: '12|11|10',
            rects: ['10', '11', '12'],
            type: 'street'
        }); // 10, 11, 12
        this.createCell(793, 389, [0, 0, -5, 20, 48, 32, 54, 11], {
            main: true,
            cellNumber: '15|14|13',
            rects: ['13', '14', '15'],
            type: 'street'
        }); // 13, 14, 15
        this.createCell(846, 401, [0, 0, -5, 20, 50, 32, 55, 11], {
            main: true,
            cellNumber: '18|17|16',
            rects: ['16', '17', '18'],
            type: 'street'
        }); // 16, 17, 18
        this.createCell(901, 413.5, [0, 0, -5, 20, 50, 32, 55, 11], {
            main: true,
            cellNumber: '21|20|19',
            rects: ['19', '20', '21'],
            type: 'street'
        }); // 19, 20, 21
        this.createCell(955.5, 426, [0, 0, -5, 20, 51, 32, 56, 11], {
            main: true,
            cellNumber: '24|23|22',
            rects: ['22', '23', '24'],
            type: 'street'
        }); // 22, 23, 24
        this.createCell(1011.5, 438.5, [0, 0, -5, 20, 51, 32, 56, 11], {
            main: true,
            cellNumber: '27|26|25',
            rects: ['25', '26', '27'],
            type: 'street'
        }); // 25, 26, 27
        this.createCell(1066.5, 451, [0, 0, -4, 20, 52, 32, 57, 11], {
            main: true,
            cellNumber: '30|29|28',
            rects: ['28', '29', '30'],
            type: 'street'
        }); // 28, 29, 30
        this.createCell(1123, 463.5, [0, 0, -4, 20, 52, 32, 57, 11], {
            main: true,
            cellNumber: '33|32|31',
            rects: ['31', '32', '33'],
            type: 'street'
        }); // 31, 32, 33
        this.createCell(1179, 476, [0, 0, -4, 20, 52, 32, 56, 11], {
            main: true,
            cellNumber: '36|35|34',
            rects: ['34', '35', '36'],
            type: 'street'
        }); // 34, 35, 36


        this.createCell(608, 235, [0, 0, -7, 18, 15, 24, 22, 5], {
            main: true,
            cellNumber: '3|2|0',
            rects: ['0', '2', '3'],
            type: 'corner'
        }); // 0, 2, 3
        this.createCell(656, 245, [0, 0, -7, 19, 18, 25, 24, 6], {
            main: true,
            cellNumber: '6|5|3|2',
            rects: ['2', '3', '5', '6'],
            type: 'corner'
        }); // 2, 3, 5, 6
        this.createCell(708, 258, [0, 0, -7, 19, 18, 25, 25, 6], {
            main: true,
            cellNumber: '6|5|9|8',
            rects: ['5', '6', '8', '9'],
            type: 'corner'
        }); // 5, 6, 8, 9
        this.createCell(759, 269, [0, 0, -7, 19, 18, 25, 25, 5], {
            main: true,
            cellNumber: '12|11|9|8',
            rects: ['8', '9', '11', '12'],
            type: 'corner'
        }); // 8, 9, 11, 12
        this.createCell(812, 280, [0, 0, -7, 19, 19, 26, 25, 6], {
            main: true,
            cellNumber: '12|11|15|14',
            rects: ['11', '12', '14', '15'],
            type: 'corner'
        }); // 11, 12, 14, 15
        this.createCell(866, 291, [0, 0, -7, 19, 19, 26, 25, 6], {
            main: true,
            cellNumber: '18|17|15|14',
            rects: ['14', '15', '17', '18'],
            type: 'corner'
        }); // 14, 15, 17, 18
        this.createCell(919, 302, [0, 0, -6, 20, 20, 26, 26, 6], {
            main: true,
            cellNumber: '18|17|21|20',
            rects: ['17', '18', '20', '21'],
            type: 'corner'
        }); // 17, 18, 20, 21
        this.createCell(972, 315, [0, 0, -6, 20, 20, 26, 26, 6], {
            main: true,
            cellNumber: '24|23|21|20',
            rects: ['20', '21', '23', '24'],
            type: 'corner'
        }); // 20, 21, 23, 24
        this.createCell(1025, 327, [0, 0, -6, 20, 22, 27, 27, 6], {
            main: true,
            cellNumber: '24|23|27|26',
            rects: ['23', '24', '26', '27'],
            type: 'corner'
        }); // 23, 24, 26, 27
        this.createCell(1080, 339, [0, 0, -6, 20, 22, 27, 27, 6], {
            main: true,
            cellNumber: '30|29|27|26',
            rects: ['26', '27', '29', '30'],
            type: 'corner'
        }); // 26, 27, 29, 30
        this.createCell(1135, 351, [0, 0, -6, 20, 22, 27, 27, 6], {
            main: true,
            cellNumber: '30|29|33|32',
            rects: ['29', '30', '32', '33'],
            type: 'corner'
        }); // 29, 30, 32, 33
        this.createCell(1190, 364, [0, 0, -5, 20, 22, 27, 27, 6], {
            main: true,
            cellNumber: '36|35|33|32',
            rects: ['32', '33', '35', '36'],
            type: 'corner'
        }); // 32, 33, 35, 36

        this.createCell(590, 285, [0, 0, -7, 18, 15, 24, 22, 6], {
            main: true,
            cellNumber: '2|1|0',
            rects: ['0', '1', '2'],
            type: 'corner'
        }); // 0, 1, 2
        this.createCell(638, 297, [0, 0, -7, 19, 19, 25, 25, 6], {
            main: true,
            cellNumber: '5|4|2|1',
            rects: ['1', '2', '4', '5'],
            type: 'corner'
        }); // 1, 2, 4, 5
        this.createCell(689, 309, [0, 0, -7, 19, 19, 25, 26, 6], {
            main: true,
            cellNumber: '5|4|8|7',
            rects: ['4', '5', '7', '8'],
            type: 'corner'
        }); // 4, 5, 7, 8
        this.createCell(743, 321, [0, 0, -7, 19, 19, 25, 26, 6], {
            main: true,
            cellNumber: '11|10|8|7',
            rects: ['7', '8', '10', '11'],
            type: 'corner'
        }); // 7, 8, 10, 11
        this.createCell(796, 333, [0, 0, -7, 19, 19, 26, 26, 6], {
            main: true,
            cellNumber: '11|10|14|13',
            rects: ['10', '11', '13', '14'],
            type: 'corner'
        }); // 10, 11, 13, 14
        this.createCell(849, 344, [0, 0, -6, 19, 20, 26, 26, 6], {
            main: true,
            cellNumber: '17|16|14|13',
            rects: ['13', '14', '16', '17'],
            type: 'corner'
        }); // 13, 14, 16, 17
        this.createCell(904, 355, [0, 0, -6, 20, 20, 26, 26, 6], {
            main: true,
            cellNumber: '17|16|20|19',
            rects: ['16', '17', '19', '20'],
            type: 'corner'
        }); // 16, 17, 19, 20
        this.createCell(957, 367, [0, 0, -6, 20, 21, 27, 26, 6], {
            main: true,
            cellNumber: '23|22|20|19',
            rects: ['19', '20', '22', '23'],
            type: 'corner'
        }); // 19, 20, 22, 23
        this.createCell(1012, 380, [0, 0, -6, 20, 22, 27, 27, 6], {
            main: true,
            cellNumber: '23|22|26|25',
            rects: ['22', '23', '25', '26'],
            type: 'corner'
        }); // 22, 23, 25, 26
        this.createCell(1067, 392, [0, 0, -6, 20, 22, 27, 27, 6], {
            main: true,
            cellNumber: '29|28|26|25',
            rects: ['25', '26', '28', '29'],
            type: 'corner'
        }); // 25, 26, 28, 29
        this.createCell(1122, 404, [0, 0, -6, 20, 22, 27, 27, 6], {
            main: true,
            cellNumber: '29|28|32|31',
            rects: ['28', '29', '31', '32'],
            type: 'corner'
        }); // 28, 29, 31, 32
        this.createCell(1178, 416, [0, 0, -5, 20, 22, 27, 27, 6], {
            main: true,
            cellNumber: '35|34|32|31',
            rects: ['31', '32', '34', '35'],
            type: 'corner'
        }); // 31, 32, 34, 35

        this.createCell(572, 335, [0, 0, -8, 22, 15, 28, 22, 6], {
            main: true,
            cellNumber: '3|2|1|0',
            rects: ['0', '1', '2', '3'],
            type: 'corner'
        }); // 0, 1, 2, 3
        this.createCell(619, 347, [0, 0, -8, 22, 18, 28, 25, 6], {
            main: true,
            cellNumber: '3|2|1|6|5|4',
            rects: ['1', '2', '3', '4', '5', '6'],
            type: 'six line'
        }); // 1, 2, 3, 4, 5, 6
        this.createCell(672, 359, [0, 0, -8, 22, 18, 28, 25, 6], {
            main: true,
            cellNumber: '9|8|7|6|5|4',
            rects: ['4', '5', '6', '7', '8', '9'],
            type: 'six line'
        }); // 4, 5, 6, 7, 8, 9
        this.createCell(725, 372, [0, 0, -8, 22, 19, 28, 26, 6], {
            main: true,
            cellNumber: '9|8|7|12|11|10',
            rects: ['7', '8', '9', '10', '11', '12'],
            type: 'six line'
        }); // 7, 8, 9, 10, 11, 12
        this.createCell(779, 384, [0, 0, -8, 22, 19, 28, 26, 6], {
            main: true,
            cellNumber: '15|14|13|12|11|10',
            rects: ['10', '11', '12', '13', '14', '15'],
            type: 'six line'
        }); // 10, 11, 12, 13, 14, 15
        this.createCell(834, 397, [0, 0, -7, 22, 19, 28, 26, 6], {
            main: true,
            cellNumber: '15|14|13|18|17|16',
            rects: ['13', '14', '15', '16', '17', '18'],
            type: 'six line'
        }); // 13, 14, 15, 16, 17, 18
        this.createCell(888, 409, [0, 0, -7, 22, 20, 28, 27, 6], {
            main: true,
            cellNumber: '21|20|19|18|17|16',
            rects: ['16', '17', '18', '19', '20', '21'],
            type: 'six line'
        }); // 16, 17, 18, 19, 20, 21
        this.createCell(942, 422, [0, 0, -7, 22, 21, 28, 28, 6], {
            main: true,
            cellNumber: '21|20|19|24|23|22',
            rects: ['19', '20', '21', '22', '23', '24'],
            type: 'six line'
        }); // 19, 20, 21, 22, 23, 24
        this.createCell(998, 433, [0, 0, -7, 22, 21, 28, 27, 6], {
            main: true,
            cellNumber: '27|26|25|24|23|22',
            rects: ['22', '23', '24', '25', '26', '27'],
            type: 'six line'
        }); // 22, 23, 24, 25, 26, 27
        this.createCell(1054, 445, [0, 0, -7, 22, 21, 28, 27, 6], {
            main: true,
            cellNumber: '27|26|25|30|29|28',
            rects: ['25', '26', '27', '28', '29', '30'],
            type: 'six line'
        }); // 25, 26, 27, 28, 29, 30
        this.createCell(1111, 457, [0, 0, -6, 22, 21, 28, 27, 6], {
            main: true,
            cellNumber: '33|32|31|30|29|28',
            rects: ['28', '29', '30', '31', '32', '33'],
            type: 'six line'
        }); // 28, 29, 30, 31, 32, 33
        this.createCell(1166, 470, [0, 0, -6, 22, 21, 28, 27, 6], {
            main: true,
            cellNumber: '33|32|31|36|35|34',
            rects: ['31', '32', '33', '34', '35', '36'],
            type: 'six line'
        }); // 31, 32, 33, 34, 35, 36

        this['voisins-zero'] = ['3|2|0', '7|4', '12|15', '18|21', '22|19', '29|28|26|25', '35|32'];
        this['voisins-zeroElems'] = this.createCells(this['voisins-zero']);

        this.tier = ['5|8', '11|10', '16|13', '24|23', '30|27', '36|33'];
        this.tierElems = this.createCells(this.tier);

        this.orphelins = ['6|9', '17|14', '17|20', '34|31', '1'];
        this.orphelinsElems = [...this.createCells(this.orphelins.slice(0, -1)), this.mainArrayCell['1']];
    }

    createCells(array) {
        return array.map(i => {
            const cell = this.mainArrayCell[i];

            return this.add.image(cell.x + cell.width / 2 + cell.geom.points[1].x, cell.y + cell.height / 2, `chip0`)
                .setOrigin(0.5).setScale(0.7).setAlpha(0);
        });
    }

    drawSecondField() {
        this.createCell(660, 100, [], {main: false, cellNumber: '0', scale: 0.69}); // 0
        this.createCell(658, 132, [], {main: false, cellNumber: '26', scale: 0.69}); // 26
        this.createCell(666, 152, [], {main: false, cellNumber: '3', scale: 0.69}); // 3
        this.createCell(1204.5, 204, [], {main: false, cellNumber: '8', scale: 0.69}); // 8
        this.createCell(1191.5, 262, [], {main: false, cellNumber: '5', scale: 0.71}); // 5
        this.createCell(1213, 253, [], {main: false, cellNumber: '10', scale: 0.69}); // 10
        this.createCell(1218, 226.5, [], {main: false, cellNumber: '23', scale: 0.7}); // 23
        this.createCell(695, 129, [], {main: false, cellNumber: 'voisins-zero', scale: 0.7}); // voisins
        this.createCell(1043, 199, [], {main: false, cellNumber: 'tier', scale: 0.695}); // tiers

        this.createCell(942, 177, [0, 0, -8, 28.5, 156, 64, 95.5, 20], {cellNumber: 'orphelins'}); // orphelins

        this.createCell(729, 102, [0, 0, -10, 28, 22, 35, 32, 5.5], {main: false, cellNumber: '32'}); // 32
        this.createCell(760.5, 108.5, [0, 0, -10, 28, 22, 35, 32, 5.5], {main: false, cellNumber: '15'}); // 15
        this.createCell(792, 115, [0, 0, -10, 28, 22, 35, 32, 5.5], {main: false, cellNumber: '19'}); // 19
        this.createCell(823.5, 121.5, [0, 0, -10, 28, 22, 35, 32, 5.5], {main: false, cellNumber: '4'}); // 4

        this.createCell(855, 128, [0, 0, -10, 28, 22, 35, 32, 6.5], {main: false, cellNumber: '21'}); // 21
        this.createCell(887, 135, [0, 0, -10, 28, 22, 35, 32, 6.5], {main: false, cellNumber: '2'}); // 2
        this.createCell(919, 142, [0, 0, -10, 28, 22, 35, 32, 6.5], {main: false, cellNumber: '25'}); // 25
        this.createCell(951, 149, [0, 0, -10, 28, 22, 35, 32, 6.5], {main: false, cellNumber: '17'}); // 17

        this.createCell(983, 156, [0, 0, -8.5, 28, 24, 35, 32, 6.5], {main: false, cellNumber: '34'}); // 34
        this.createCell(1015, 162.5, [0, 0, -8.5, 28, 24, 35, 32, 6.5], {main: false, cellNumber: '6'}); // 6
        this.createCell(1047, 169, [0, 0, -8.5, 28, 24, 35, 32, 6.5], {main: false, cellNumber: '27'}); // 27

        this.createCell(1080, 175.5, [0, 0, -7.5, 29, 25, 36, 32, 6.5], {main: false, cellNumber: '13'}); // 13
        this.createCell(1112.5, 182.5, [0, 0, -7.5, 29, 25, 36, 32, 6.5], {main: false, cellNumber: '36'}); // 36
        this.createCell(1145, 189.5, [0, 0, -7.5, 29, 25, 36, 32, 6.5], {main: false, cellNumber: '11'}); // 11
        this.createCell(1177.5, 196.5, [0, 0, -7.5, 29, 25, 36, 32, 6.5], {main: false, cellNumber: '30'}); // 30

        this.createCell(709, 158, [0, 0, -10, 29, 22, 36, 32, 6.5], {main: false, cellNumber: '35'}); // 35
        this.createCell(741, 164.5, [0, 0, -10, 29, 22, 36, 32, 6.5], {main: false, cellNumber: '12'}); // 12
        this.createCell(773, 171, [0, 0, -10, 29, 22, 36, 32, 6.5], {main: false, cellNumber: '28'}); // 28
        this.createCell(805, 177.5, [0, 0, -10, 29, 22, 36, 32, 6.5], {main: false, cellNumber: '7'}); // 7

        this.createCell(837, 185, [0, 0, -10, 29, 23, 36, 32, 6.5], {main: false, cellNumber: '29'}); // 29
        this.createCell(869.5, 192, [0, 0, -10, 29, 23, 36, 32, 6.5], {main: false, cellNumber: '18'}); // 18
        this.createCell(902, 199, [0, 0, -10, 29, 23, 36, 32, 6.5], {main: false, cellNumber: '22'}); // 22
        this.createCell(934.5, 206, [0, 0, -10, 29, 23, 36, 32, 6.5], {main: false, cellNumber: '9'}); // 9

        this.createCell(966, 213, [0, 0, -8, 29, 25, 36, 32, 6.5], {main: false, cellNumber: '31'}); // 31
        this.createCell(999, 220.2, [0, 0, -8, 29, 25, 36, 32, 6.5], {main: false, cellNumber: '14'}); // 14
        this.createCell(1032, 227.4, [0, 0, -8, 29, 25, 36, 32, 6.5], {main: false, cellNumber: '20'}); // 20
        this.createCell(1065, 234.6, [0, 0, -8, 29, 25, 36, 32, 6.5], {main: false, cellNumber: '1'}); // 1

        this.createCell(1098, 242, [0, 0, -7.5, 29, 26, 36, 32.5, 6.5], {main: false, cellNumber: '33'}); // 33
        this.createCell(1131, 249, [0, 0, -7.5, 29, 26, 36, 32.5, 6.5], {main: false, cellNumber: '16'}); // 16
        this.createCell(1164, 256, [0, 0, -7.5, 29, 26, 36, 32.5, 6.5], {main: false, cellNumber: '24'}); // 24

        this.history.push(this.makeDeepCopy(this.bets));
    }

    switchCellActive(bool) {
        Object.values(this.mainArrayCell).forEach(i => bool ? i.setAlpha(0.01) : i.setAlpha(0));
        Object.values(this.secondArrayCell).forEach(i => bool ? i.setAlpha(0.01) : i.setAlpha(0));
    }

    saveLastBets() {
        this.rebetBet = {...this.makeDeepCopy(this.bets)};
        this.rebetAllBets = [...this.allBets];
        this.switchCellActive(false);
    }

    rebet() {
        this.allowUndo = true;
        this.allowClear = true;
        this.history.push(this.makeDeepCopy(this.rebetBet));
        this.recreateCells(this.history[this.history.length - 1]);
        this.addNewBetToArray('add', this.countAllBets(this.rebetAllBets));
    }

    overwriteBets(array) {
        array.forEach(cell => {
            const index = this.serverArray[cell.i].clName1;

            this.bets[index].totalBets = cell.s;
        })
    }

    recreateCells(array) {
        const bets = Object.entries(this.bets);

        bets.forEach((i, index) => {
            i[1].chips.forEach(j => j && j.destroy());

            i[1].chips.length = 0;
            i[1] = {
                ...array[index],
                chips: [
                    ...array[index].chips.map((j, index) => this.add.image(j.x, j.y, j.texture.key)
                        .setOrigin(0.5).setScale(0.7).setDepth(100 + index))
                ]
            };
        });

        this.bets = Object.fromEntries(bets);
    }

    undo() {
        if (this.history.length > 1) {
            const history = this.history[this.history.length - 2];

            this.recreateCells(history);
            this.allowClear = true;

            this.history.length > 0 ? this.history.length-- : this.history.length = 0;

            if (this.history.length < 2) {
                this.allowUndo = false;
                this.allowClear = false;
            }
        }

        this.addNewBetToArray('undo');
    }

    createWinDisplay(text, array) {
        let alpha = false;
        const self = this;
        const showDisplay = () => {
            this.tweens.add({
                targets: self.winDisplayContainer,
                scale: 0.9,
                alpha: 1,
                ease: 'linear',
                duration: 400,
                onComplete() {
                    setTimeout(() => {
                        removeDisplay();
                        array.forEach((chip, index) => moveChips(chip, 925, 340, index));

                        setTimeout(() => {
                            alpha = true;
                            alpha && array.forEach((chip, index) => moveChips(chip, 890, 700, index));
                        }, 1200);

                        setTimeout(() => self.endGame(), 1600)
                    }, 1000);
                }
            });
        };

        const moveChips = (chip, x, y, index) => {
            this.tweens.add({
                targets: chip,
                x: x,
                y: y - index * 2,
                alpha: alpha ? 0 : 1,
                ease: 'linear',
                duration: 400,
            });

            // game.scene.keys['Animation'].move({
            //     targets: chip,
            //     x: x,
            //     y: y - index * 2,
            //     duration: 400,
            // });
        };

        const removeDisplay = () => {
            this.tweens.add({
                targets: self.winDisplayContainer,
                alpha: 0,
                ease: 'linear',
                duration: 500,
                onComplete() {
                    self.winDisplayContainer.destroy();
                }
            });
        };

        this.winValueText = this.add.text(0, 8, `${text}`, {font: "22px fusion", fill: "#fff"}).setOrigin(0.5, 0);
        const winDisplay = this.add.image(0, 0, 'winDisplay').setOrigin(0.5, 0).setScale(1 + this.winValueText.width / 58 * 0.2, 1);
        this.winDisplayContainer = this.add.container(500, 415, [winDisplay, this.winValueText]).setScale(1.3).setAlpha(0);

        showDisplay()
    }

    clearBets(isWin, tween) {
        const arrayBets = [];
        const self = this;
        const secondMove = (chip, index) => {
            this.tweens.add({
                targets: chip,
                x: 500,
                y: 400 - index * 2,
                alpha: 1,
                ease: 'linear',
                duration: 400,
            });
        };

        const firstMove = (array) => {
            this.tweens.add({
                targets: [...array],
                x: 520,
                y: 220,
                alpha: 0,
                ease: 'linear',
                duration: 600,
                onComplete() {
                    if (isWin) {
                        let count = 0;

                        array.forEach((chip, index) => {
                            chip.y = 320;
                            chip.setDepth(100 + index);
                            count++;

                            setTimeout(() => secondMove(chip, index), index * 200)
                        });

                        setTimeout(() => {
                            self.createWinDisplay(game.scene.keys['Menu'].format(game.scene.keys['Menu'].winMoney), array)
                        }, count * 100 + 300);
                    } else {
                        setTimeout(() => self.endGame(tween), 600)
                    }
                }
            });
        };

        this.allowUndo = false;
        this.allowClear = false;

        Object.values(this.bets).map(i => i.chips.map(chip => arrayBets.push(chip)));
        firstMove(arrayBets)
    }

    endGame() {
        setTimeout(() => game.scene.keys['Animation'].tween.resume(), 600);
        game.scene.keys['Menu'].winMoney && game.scene.keys['Menu'].animRefillStake({
            bet: game.scene.keys['Menu'].winMoney,
            action: 'undo',
            isStake: false,
            isWin: true
        }, true);

        this.blinkTween(this.borders, 0);
        this.addNewBetToArray('clearAll');
        this.history.length = 1;
        this.recreateCells(this.history[0]);
        // game.scene.keys['Menu'].createChips();
    }

    createNoticeBet(type, bet, {x, y}, duration) {
        this.noticeBetContainer && this.noticeBetContainer.destroy();

        const ratio = (type) => {
            switch (type) {
                case 'straight up':
                    return '35 : 1';
                case 'split':
                    return '17 : 1';
                case 'corner':
                    return '8 : 1';
                case 'street':
                    return '11 : 1';
                case 'six line':
                    return '5 : 1';
                case 'dozen':
                    return '2 : 1';
                case 'column':
                    return '2 : 1';
                default:
                    return '1 : 1'
            }
        };

        const limits = (type) => {
            return Object.entries(this.limits).find(i => type.toUpperCase().includes(i[0]))[1]
        };

        const [rectWidth, rectHeight] = [320, 130];

        const graphics = this.add.graphics().fillStyle(0x000000, 1).setAlpha(0.7);
        graphics.lineStyle(2, 0x0066CC);
        const rect = graphics.fillRoundedRect(0, 0, rectWidth, rectHeight, 15);
        const stroke = graphics.strokeRoundedRect(0, 0, rectWidth, rectHeight, 15);
        const line = this.add.line(160, 30, 0, 0, rectWidth - 40, 0, 0xffffff);

        const typeBet = this.add.text(rectWidth / 2, 15, `${type.toUpperCase()}`, {
            font: "23px Arial",
            fill: "#fff"
        }).setOrigin(0.5);
        const ratioBet = this.add.text(rectWidth / 2, 50, `${ratio(type)}`, {
            font: "24px Arial",
            fill: "#fff"
        }).setOrigin(0.5);
        const betLimitText = this.add.text(rectWidth / 2, 80, `Bet / Limit`, {
            font: "24px Arial",
            fill: "#fff"
        }).setOrigin(0.5);
        const limitBet = this.add.text(rectWidth / 2, 110, `${bet} / ${limits(type)}`, {
            font: "22px Arial",
            fill: "#fff"
        }).setOrigin(0.5);

        this.noticeBetContainer = this.add.container(
            x - rectWidth / 2,
            y - (rectHeight + 50),
            [rect, stroke, line, typeBet, ratioBet, betLimitText, limitBet]
        ).setAlpha(duration ? 0 : 1);

        this.noticeCreate = true;

        this.add.tween({
            targets: this.noticeBetContainer,
            alpha: 1,
            ease: 'linear',
            duration: duration,
        })
    }

    addNewBetToArray(action, sum) {
        if (action === 'add') {
            this.allBets.push(sum);
            this.historyAllBets.push(sum);
            game.scene.keys['Menu'].animRefillStake({bet: this.allBets[this.allBets.length - 1], action: action});
        } else if (action === 'undo') {
            if (!this.allBets.length) {
                this.allBets = [...this.historyAllBets];
                game.scene.keys['Menu'].animRefillStake({bet: this.countAllBets(), action: 'add'});
            } else {
                game.scene.keys['Menu'].animRefillStake({bet: this.allBets[this.allBets.length - 1], action: action});
                this.allBets.length--;
                this.historyAllBets.length--;
            }
        } else if (action === 'clearAll') {
            game.scene.keys['Menu'].animRefillStake({bet: this.countAllBets(), action: action});

            this.allBets.length = 0;
        }
    }

    deleteBets() {
        this.history.push(this.makeDeepCopy(this.bets));
        this.addNewBetToArray('clearAll');

        Object.values(this.bets).forEach(bet => {
            bet.totalBets = 0;
            bet.chips.forEach(i => i && i.destroy());
        });

        this.allowClear = false;
    }

    createCell(x, y, data, object) {
        const self = this;
        const cell = data.length ?
            this.add.polygon(x, y, data, 0xffffff).setInteractive(new Phaser.Geom.Polygon([...data]), Phaser.Geom.Polygon.Contains) :
            this.add.image(x, y, object.cellNumber).setScale(object.scale).setDepth(100).setInteractive({pixelPerfect: true});
        cell.setOrigin(0).setAlpha(0.01);
        cell.input.cursor = 'pointer';

        cell.on('pointerover', function (pointer) {
            if (object.cellNumber && !object.rects) {
                this.setAlpha(0.5);
                !data.length && this.setTintFill(0xffffff);
                self.reducer(object.cellNumber, true, object.main);
            }

            self.noticeTimeOut = setTimeout(() => {
                object.type && self.createNoticeBet(object.type, self.bets[object.cellNumber].totalBets, pointer, 500);
            }, 2000);

            object.rects && self.compareCells(object.rects, true, false);
        });

        cell.on('pointerout', function () {
            if (object.cellNumber && !object.rects) {
                this.setAlpha(0.01);
                !data.length && this.clearTint();
                self.reducer(object.cellNumber, false, object.main)
            }

            clearTimeout(self.noticeTimeOut);
            self.noticeBetContainer && self.noticeBetContainer.destroy();
            self.noticeCreate = false;
            object.rects && self.compareCells(object.rects, false, false);
        });

        cell.on('pointerup', function (pointer) {
            self.makeABet({cell, cellNumber: object.cellNumber, rects: object.rects});

            if (self.noticeCreate) {
                self.createNoticeBet(object.type, self.bets[object.cellNumber].totalBets, pointer, 0);
            }
        });

        object.main ? this.mainArrayCell[object.cellNumber] = cell : this.secondArrayCell[object.cellNumber] = cell;

        this.createBetsArray(object.cellNumber);
    };

    makeDeepCopy(object) {
        return Object.entries(object).map(i => {
            return {
                ...i[1],
                chips: [...i[1].chips],
                cellNumber: i[0]
            }
        })
    }

    createBetsArray(name) {
        this.bets[name] = {};
        this.bets[name].chips = [];
        this.bets[name].totalBets = 0;
    }

    findIdBet(cellNumber) {
        return this.serverArray.findIndex(i => i.clName1 === cellNumber);
    }

    makeABet({cell, cellNumber}) {
        const setOnServer = (cellName) => {
            return game2.bindBet(this.findIdBet(cellName), bet);
        };

        let total = 0;
        const bet = game.scene.keys['Menu'].chipsValue[`${Object.keys(game.scene.keys['Menu'].chipsValue)[this.currentChip]}`];

        const putAChip = (cell, i) => {
            this.allowUndo = true;
            this.allowClear = true;
            this.bets[i || cellNumber].totalBets += bet;
            this.bets[i || cellNumber].totalBets = +this.bets[i || cellNumber].totalBets.toFixed(1);
            total += bet;

            this.compareBetsValue(cell, i || cellNumber);
        };

        if (this.canMakeABet()) {
            if (!isNaN(+cellNumber)) {
                if (this.highlightArray.length === 5) {
                    setOnServer(this.highlightArray.join('|')) && Object.entries(this.mainArrayCell).forEach(i => i[1].alpha === 0.5 && putAChip(i[1], i[0]));
                } else {
                    Object.entries(this.mainArrayCell).forEach(i => {
                        if (i[1].alpha === 0.5) {
                            setOnServer(i[0]) && putAChip(i[1], i[0])
                        }
                    });
                }
            } else if (cellNumber === 'voisins-zero' || cellNumber === 'tier' || cellNumber === 'orphelins') {
                setOnServer(cellNumber) && this[cellNumber].forEach(i => putAChip(this.mainArrayCell[i], i));
            } else {
                setOnServer(cellNumber) && putAChip(cell);
            }

            this.addNewBetToArray('add', total);
            this.history.push(this.makeDeepCopy(this.bets));
        }
    }

    countAllBets(bets = this.allBets) {
        return bets.reduce((current, next) => current + next, 0);
    }

    canMakeABet() {
        return this.countAllBets() + game.scene.keys['Menu'].chipsValue[`${Object.keys(game.scene.keys['Menu'].chipsValue)[this.currentChip]}`] <= game.scene.keys['Menu'].currentBalance;
    }

    compareBetsValue(cell, cellNumber) {
        let currentSum = this.bets[cellNumber].totalBets;
        const chipsArray = Object.values(this.chips);

        const pushBet = (index) => {
            let image;

            if (cell.type !== 'Image') {
                const [x, y] = [
                    cellNumber === '0' ? -63 : cell.geom.points[1].x,
                    cellNumber === '0' ? -2 : 0
                ];

                image = this.add.image(
                    cell.x + cell.width / 2 + x,
                    (cell.y + cell.height / 2 + y) - this.bets[cellNumber].chips.length * 2,
                    `chip${index}`
                );
            } else {
                image = this.add.image(cell.x, cell.y - this.bets[cellNumber].chips.length * 2, `chip${index}`);
            }

            image.setOrigin(0.5).setScale(0.7);
            this.bets[cellNumber].chips.push(image);
        };

        this.bets[cellNumber].chips.forEach(i => i.destroy());
        this.bets[cellNumber].chips.length = 0;

        while (currentSum > 0) {
            const array = chipsArray.filter(i => currentSum >= i);

            pushBet(chipsArray.lastIndexOf(array[array.length - 1]));
            currentSum -= array[array.length - 1];
            currentSum = +currentSum.toFixed(1);
        }
    }

    findCommonWinningCells(number, duration) {
        const cells = Object.entries(this.cellsNumberArray)
            .filter(i => i[1].find(j => j === number) && i[0])
            .map(i => this.secondArrayCell[i[0]]);

        this.blinkCell(cells, duration)
    }

    blinkTween(borders, alpha, duration) {
        const self = this;

        this.tweens.add({
            targets: [...borders],
            alpha: alpha,
            duration: 400,
            onComplete() {
                if (!alpha) {
                    borders.forEach(i => i.destroy());
                    if (self.history.length > 1) self.allowRebet = true;

                    setTimeout(() => self.switchCellActive(true), 300);
                } else {
                    setTimeout(() => self.clearBets(game.scene.keys['Menu'].winMoney > 0), 100);
                }
            }
        });
    }

    blinkCell(cells, duration) {
        this.borders = cells.map(i => this.add.polygon(i.x, i.y, i.geom.points).setOrigin(0).setStrokeStyle(2, 0xffff00));

        const blinkTween = () => {
            setTimeout(() => game.scene.keys['Field'].blinkTween(this.borders, 1, duration), 400);
        };

        game.scene.keys['Animation'].alpha({
            target: this.borders,
            alpha: 0,
            duration: 400,
            callback: blinkTween
        });
    }

    reducer(cellNumber, bool, main) {
        if (!main) {
            if (this.cellsNumberArray[cellNumber]) {
                this.compareCells(this.cellsNumberArray[cellNumber], bool);
            } else if (cellNumber === 'voisins-zero' || cellNumber === 'tier' || cellNumber === 'orphelins') {
                this[`${cellNumber}Elems`].forEach(i => !bool ? this.hideHighlightCell(i) : this.highlightCell(i));
            } else {
                const index = this.fiveCells.lastIndexOf(cellNumber) < 39 ?
                    this.fiveCells.lastIndexOf(cellNumber) :
                    this.fiveCells.findIndex(i => i === cellNumber);
                const array = [this.fiveCells[index - 2], this.fiveCells[index - 1], this.fiveCells[index],
                    this.fiveCells[index + 1], this.fiveCells[index + 2]];
                const finded = this.fiveCells.find((i, index) => index > 1 && index < 13 && i === array[2]);

                if (finded || array[2] === '11' || array[2] === '30' || array[2] === '23' || array[2] === '10') {
                    array.reverse();
                }


                this.compareCells(array, bool);
            }
        } else {
            this.compareCells([cellNumber], bool);
        }
    }

    compareCells(cellArray, isHighlight, highlightSecondArray = true) {
        this.highlightArray = [...cellArray];

        cellArray.map(i => {
            const mainCell = Object.entries(this.mainArrayCell).find(j => i === j[0])[1];
            const secondCell = Object.entries(this.secondArrayCell).find(j => i === j[0])[1];

            isHighlight ? this.highlightCell(mainCell) : this.hideHighlightCell(mainCell);
            highlightSecondArray && isHighlight ? this.highlightCell(secondCell) : this.hideHighlightCell(secondCell);
        });
    }

    highlightCell(cell) {
        cell.type === 'Image' && cell.setTintFill(0xffffff);
        cell.setAlpha(0.5);
    }

    hideHighlightCell(cell) {
        cell.type === 'Image' && cell.clearTint();
        cell.setAlpha(0.01);
    }
}
