*version 9.2 228488067
u 808
U? 14
R? 3
C? 2
G? 2
? 1
T? 1
@libraries
@analysis
@targets
@attributes
@translators
a 0 u 13 0 0 0 hln 100 PCBOARDS=PCB
a 0 u 13 0 0 0 hln 100 PSPICE=PSPICE
a 0 u 13 0 0 0 hln 100 XILINX=XILINX
a 0 u 13 0 0 0 hln 100 TANGO=PCB
a 0 u 13 0 0 0 hln 100 SCICARDS=PCB
a 0 u 13 0 0 0 hln 100 PROTEL=PCB
a 0 u 13 0 0 0 hln 100 PCAD=PCB
a 0 u 13 0 0 0 hln 100 PADS=PCB
a 0 u 13 0 0 0 hln 100 ORCAD=PCB
a 0 u 13 0 0 0 hln 100 EDIF=PCB
a 0 u 13 0 0 0 hln 100 CADSTAR=PCB
a 0 u 13 0 0 0 hln 100 POLARIS=PSPICE
@setup
unconnectedPins 0
connectViaLabel 0
connectViaLocalLabels 0
NoStim4ExtIFPortsWarnings 1
AutoGenStim4ExtIFPorts 1
@index
pageloc 1 0 12871 
@status
c 99:05:25:12:49:53;930340193
a 0 98:03:08:11:40:41;892060841 e 
*page 1 0 1200 1000 iB
@ports
port 271 IF_IN 70 155 h
a 1 xr 3 0 19 8 hcn 100 LABEL=\LDAC\
port 360 HI 240 275 h
port 297 IF_IN 70 255 h
a 1 xr 3 0 19 8 hcn 100 LABEL=\CS\
port 296 IF_IN 70 205 h
a 1 xr 3 0 19 8 hcn 100 LABEL=\WR\
port 298 IF_IN 70 305 h
a 1 xr 3 0 19 8 hcn 100 LABEL=\RESET\
port 305 IF_IN 70 605 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 306 IF_IN 70 655 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 333 IF_OUT 1030 490 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Vref
port 334 IF_OUT 1030 560 h
a 1 xr 3 0 31 8 hcn 100 LABEL=AGND
port 332 IF_OUT 1030 405 h
a 1 xr 3 0 31 8 hcn 100 LABEL=VOUT
port 262 Agnd 1020 455 h
port 802 interface 100 870 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VDD
port 804 interface 100 890 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VSS
port 806 bubble 160 870 d
a 1 x 3 0 0 0 hcn 100 LABEL=VDD
port 807 bubble 160 890 d
a 1 x 3 0 0 0 hcn 100 LABEL=VSS
@parts
part 459 or2 230 165 h
a 0 sp 11 0 50 48 hln 100 PART=or2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U1
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
part 460 or2 230 225 h
a 0 sp 11 0 50 48 hln 100 PART=or2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U2
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
part 73 dc_buf 100 205 h
a 0 u 0:13 0 -12 52 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 32 hln 100 PART=dc_buf
a 0 a 9 0 20 2 hln 100 REFDES=U3
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
part 72 dc_buf 100 155 h
a 0 u 0:13 0 14 50 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 40 hln 100 PART=dc_buf
a 0 a 9 0 22 0 hln 100 REFDES=U4
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
part 74 dc_buf 100 255 h
a 0 u 0:13 0 54 62 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 34 hln 100 PART=dc_buf
a 0 u 0:13 0 0 20 hlb 100 IO_LEVEL=0
a 0 a 9 0 20 0 hln 100 REFDES=U5
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
part 113 dc_buf 100 305 h
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 38 34 hln 100 PART=dc_buf
a 0 a 9 0 20 0 hln 100 REFDES=U6
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
part 5 dacpar_constrnt 210 85 h
a 0 s 11 0 78 50 hrn 100 PART=dacpar_constrnt
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 9 0 10 -2 hln 100 REFDES=U7
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
part 81 dc_buf 100 605 h
a 0 u 0:13 0 40 54 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 ap 9 0 40 0 hln 100 REFDES=U8
part 82 dc_buf 100 655 h
a 0 u 13 13 38 62 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 ap 9 0 14 -2 hln 100 REFDES=U9
part 752 dc_reg2 360 355 h
a 0 sp 11 0 100 80 hrn 100 PART=dc_reg2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 ap 9 0 14 -2 hln 100 REFDES=U10
part 757 dc_reg2 520 355 h
a 0 sp 11 0 100 80 hrn 100 PART=dc_reg2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 0 ap 9 0 14 -2 hln 100 REFDES=U11
part 218 C 760 510 d
a 0 u 13 0 28 2 hln 100 VALUE=50p
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 217 R 800 500 d
a 0 u 13 0 39 -1 hln 100 VALUE=8k
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 25 0 hln 100 REFDES=R1
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 249 GTABLE 940 415 U
a 0 u 13 13 184 89 hln 100 TABLE=(@VSINK,@ISINK) (@VSOURCE,@ISOURCE)
a 0 sp 11 0 54 35 hln 100 PART=GTABLE
a 1 ap 9 0 30 46 hln 100 REFDES=G1
a 0 u 13 0 56 2 hln 100 EXPR=200K*V(%IN+, %IN-)
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
part 263 R 1020 415 d
a 0 u 13 0 27 1 hln 100 VALUE=1G
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 751 dc_dac2 690 395 h
a 0 sp 11 0 110 82 hrn 100 PART=dc_dac2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U13
a 0 ap 9 0 18 -2 hln 100 REFDES=U13
part 436 slewrate 780 415 h
a 0 u 13 13 9 54 hln 100 BW=0.5Meg
a 0 s 11 0 60 30 hrn 100 PART=slewrate
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 10 42 hln 100 PSR=@SR
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 a 9 0 10 -2 hln 100 REFDES=U12
part 1 titleblk 1520 970 h
a 1 x 13 0 180 60 hcn 100 PAGETITLE=D/A Converter - Parallel Interface
a 1 s 13 0 350 10 hcn 100 PAGESIZE=B
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 84
a 0 up 0:33 0 0 0 hln 100 LVL=
s 180 95 180 205 122
a 0 up 33 0 182 150 hlt 100 LVL=
s 180 205 210 205 124
s 210 95 180 95 120
s 230 185 210 185 83
s 210 185 210 205 85
s 210 225 230 225 87
s 210 205 210 225 91
s 150 205 180 205 89
w 93
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 85 170 255 127
a 0 up 33 0 172 170 hlt 100 LVL=
s 170 255 150 255 129
s 210 85 170 85 125
s 230 245 190 245 92
s 190 245 190 255 94
s 190 255 170 255 96
w 99
a 0 up 0:33 0 0 0 hln 100 LVL=
s 210 105 190 105 116
s 230 165 190 165 98
s 190 165 190 155 100
a 0 up 33 0 192 130 hlt 100 LVL=
s 190 155 190 105 582
s 190 155 150 155 102
w 273
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 155 100 155 272
a 0 up 33 0 85 154 hct 100 LVL=
w 275
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 205 100 205 274
a 0 up 33 0 85 204 hct 100 LVL=
w 277
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 255 100 255 276
a 0 up 33 0 85 254 hct 100 LVL=
w 279
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 305 100 305 278
a 0 up 33 0 85 304 hct 100 LVL=
w 293
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 605 100 605 292
a 0 up 33 0 85 604 hct 100 LVL=
w 295
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 655 100 655 294
a 0 up 33 0 85 654 hct 100 LVL=
w 193
a 0 up 0:33 0 0 0 hln 100 LVL=
s 320 375 360 375 196
s 320 235 320 375 194
a 0 up 33 0 322 305 hlt 100 LVL=
s 300 235 320 235 192
w 137
a 0 up 0:33 0 0 0 hln 100 LVL=
s 330 395 360 395 142
s 330 605 330 395 140
a 0 up 33 0 332 500 hlt 100 LVL=
s 150 605 330 605 136
w 131
a 0 up 0:33 0 0 0 hln 100 LVL=
s 340 655 150 655 134
s 340 405 340 655 132
a 0 up 33 0 342 530 hlt 100 LVL=
s 360 405 340 405 130
w 199
a 0 up 0:33 0 0 0 hln 100 LVL=
s 480 175 300 175 202
s 480 375 480 175 200
a 0 up 33 0 482 275 hlt 100 LVL=
s 520 375 480 375 198
w 36
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 405 470 405 21
a 0 up 33 0 495 404 hct 100 LVL=
w 38
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 395 470 395 23
a 0 up 33 0 495 394 hct 100 LVL=
w 205
a 0 up 0:33 0 0 0 hln 100 LVL=
s 360 275 360 355 453
s 360 275 240 275 455
s 520 275 520 355 447
s 520 275 360 275 214
a 0 up 33 0 415 274 hct 100 LVL=
w 187
a 0 up 0:33 0 0 0 hln 100 LVL=
s 340 365 360 365 451
s 340 305 340 365 449
s 510 365 520 365 443
s 510 305 510 365 441
s 510 305 340 305 190
s 340 305 150 305 184
a 0 up 33 0 245 304 hct 100 LVL=
w 68
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 405 630 405 53
a 0 up 33 0 660 404 hct 100 LVL=
w 70
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 395 630 395 55
a 0 up 33 0 660 394 hct 100 LVL=
w 320
a 0 up 0:33 0 0 0 hln 100 V=
s 800 500 800 490 233
s 800 490 760 490 606
s 1030 490 800 490 231
a 0 up 33 0 915 489 hct 100 V=
s 760 510 760 490 652
s 690 425 690 490 656
s 690 490 760 490 658
w 220
a 0 up 0:33 0 0 0 hln 100 V=
s 760 560 760 540 223
s 760 560 800 560 601
s 800 560 800 540 227
s 800 560 1030 560 328
a 0 up 33 0 915 559 hct 100 V=
s 740 560 760 560 666
s 740 455 740 560 664
w 384
a 0 up 0:33 0 0 0 hln 100 V=
s 850 415 940 415 438
a 0 up 33 0 895 414 hct 100 V=
w 637
a 0 up 0:33 0 0 0 hln 100 V=
s 1020 405 1030 405 270
s 1020 415 1020 405 268
s 990 405 1010 405 763
s 1010 405 1020 405 785
s 1010 405 1010 360 353
a 0 up 33 0 1012 382 hlt 100 V=
s 940 405 940 360 252
s 1010 360 940 360 356
w 724
a 0 up 0:33 0 0 0 hln 100 V=
s 1020 435 1020 445 267
w 738
a 0 up 0:33 0 0 0 hln 100 V=
s 1000 415 1000 455 258
a 0 up 33 0 1002 435 hlt 100 V=
s 990 415 1000 415 256
s 1000 455 1020 455 739
w 672
s 770 415 780 415 671
w 799
s 100 870 160 870 798
a 0 up 33 0 130 869 hct 100 V=
w 801
s 100 890 160 890 800
a 0 up 33 0 130 889 hct 100 V=
@junction
j 70 305
+ s 298
+ w 279
j 70 205
+ s 296
+ w 275
j 70 255
+ s 297
+ w 277
j 70 155
+ s 271
+ w 273
j 230 185
+ p 459 I1
+ w 84
j 230 225
+ p 460 I0
+ w 84
j 210 205
+ w 84
+ w 84
j 180 205
+ w 84
+ w 84
j 230 245
+ p 460 I1
+ w 93
j 170 255
+ w 93
+ w 93
j 300 235
+ p 460 O
+ w 193
j 230 165
+ p 459 I0
+ w 99
j 190 155
+ w 99
+ w 99
j 300 175
+ p 459 O
+ w 199
j 240 275
+ s 360
+ w 205
j 360 275
+ w 205
+ w 205
j 340 305
+ w 187
+ w 187
j 150 205
+ p 73 O
+ w 84
j 100 205
+ p 73 I0
+ w 275
j 150 155
+ p 72 O
+ w 99
j 100 155
+ p 72 I0
+ w 273
j 150 255
+ p 74 O
+ w 93
j 100 255
+ p 74 I0
+ w 277
j 100 305
+ p 113 I0
+ w 279
j 150 305
+ p 113 O
+ w 187
j 210 95
+ p 5 WRBAR
+ w 84
j 210 85
+ p 5 CSBAR
+ w 93
j 210 105
+ p 5 LDACBAR
+ w 99
j 100 605
+ p 81 I0
+ w 293
j 70 605
+ s 305
+ w 293
j 100 655
+ p 82 I0
+ w 295
j 70 655
+ s 306
+ w 295
j 150 605
+ p 81 O
+ w 137
j 150 655
+ p 82 O
+ w 131
j 360 375
+ p 752 GATE
+ w 193
j 470 405
+ p 752 Q0
+ w 36
j 470 395
+ p 752 Q1
+ w 38
j 360 355
+ p 752 PREBAR
+ w 205
j 360 365
+ p 752 CLRBAR
+ w 187
j 360 395
+ p 752 D1
+ w 137
j 360 405
+ p 752 D0
+ w 131
j 630 405
+ p 757 Q0
+ w 68
j 630 395
+ p 757 Q1
+ w 70
j 520 375
+ p 757 GATE
+ w 199
j 520 405
+ p 757 D0
+ w 36
j 520 395
+ p 757 D1
+ w 38
j 520 355
+ p 757 PREBAR
+ w 205
j 520 365
+ p 757 CLRBAR
+ w 187
j 690 405
+ p 751 DB0
+ w 68
j 690 395
+ p 751 DB1
+ w 70
j 800 500
+ p 217 1
+ w 320
j 1030 490
+ s 333
+ w 320
j 800 490
+ w 320
+ w 320
j 760 510
+ p 218 1
+ w 320
j 690 425
+ p 751 REF
+ w 320
j 760 490
+ w 320
+ w 320
j 760 540
+ p 218 2
+ w 220
j 800 540
+ p 217 2
+ w 220
j 1030 560
+ s 334
+ w 220
j 800 560
+ w 220
+ w 220
j 760 560
+ w 220
+ w 220
j 740 455
+ p 751 GND
+ w 220
j 1020 455
+ p 263 2
+ s 262
j 940 415
+ p 249 IN+
+ w 384
j 1030 405
+ s 332
+ w 637
j 1020 415
+ p 263 1
+ w 637
j 990 405
+ p 249 OUT-
+ w 637
j 1020 405
+ w 637
+ w 637
j 1010 405
+ w 637
+ w 637
j 940 405
+ p 249 IN-
+ w 637
j 990 415
+ p 249 OUT+
+ w 738
j 1020 455
+ p 263 2
+ w 738
j 1020 455
+ s 262
+ w 738
j 770 415
+ p 751 OUT
+ w 672
j 100 870
+ s 802
+ w 799
j 100 890
+ s 804
+ w 801
j 160 870
+ s 806
+ w 799
j 160 890
+ s 807
+ w 801
j 850 415
+ p 436 OUT
+ w 384
j 780 415
+ p 436 IN
+ w 672
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=B
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 533 t 5 695 344 724 362 0 3
DAC
t 542 t 5 55 99 121 117 0 13
Input Buffers
v 543 v 0 55 100
55 115
115 115
120 115
120 100
55 100
;
v 544 v 0 50 95
50 120
125 120
125 95
50 95
;
t 536 t 5 565 294 645 315 0 9
DAC Latch
v 537 v 0 565 295
565 310
630 310
630 295
565 295
;
v 538 v 0 560 290
560 315
635 315
635 290
560 290
;
v 535 v 0 685 340
685 365
735 365
735 340
685 340
;
v 534 v 0 690 345
690 360
730 360
730 345
690 345
;
t 631 t 5 220 34 330 60 0 18
Contraint Checking
t 539 t 5 385 234 460 250 0 11
Input Latch
v 640 v 0 215 35
215 50
320 50
320 35
215 35
;
v 641 v 0 210 30
210 55
325 55
325 30
210 30
;
v 642 v 0 380 235
380 250
450 250
450 235
380 235
;
v 643 v 0 375 230
375 255
455 255
455 230
375 230
;
t 523 t 5 375 689 605 710 0 22
PARAMETER DEFINITIONS:
t 667 t 5 710 689 940 710 0 17
PIN DESCRIPTIONS:
t 524 t 5 390 704 735 950 0 477
THDGMN - Data valid to Write hold time
TSUDGMN - Data valid to Write setup time
SR - Slew rate of voltage output
BW - Low frequency pole for slew rate 
ISINK - Output sink current at VSINK
VSINK - Output voltage at ISINK
ISOURCE - Output source current at VSOURCE
VSOURCE - Output voltage at ISOURCE
IO_MODEL - Digital input model (see notes)
CSMINLO - CSbar minimum pulse width low
LDACMINLO - LDACbar minimum pulse width low
WRMINLO - WRbar minimum pulse width low
t 525 t 5 1035 669 1079 687 0 6
NOTES:
t 668 t 6 725 940 1025 720 0 131
Pins based on AD7224.
DB1-0 - Data Bits
LDAC*, CS*, WR*, RESET* - Control 
Vout - Voltage Ouput
Vref - Referency Voltage Output
t 530 t 5 935 289 1060 310 0 16
Current Limiting
v 531 v 0 935 290
935 305
1030 305
1030 290
935 290
;
v 532 v 0 930 285
930 310
1035 310
1035 285
930 285
;
v 529 v 0 770 350
770 385
880 385
880 350
770 350
;
v 528 v 0 775 355
775 380
875 380
875 355
775 355
;
t 527 t 5 780 359 883 377 0 18
Slew Rate Limiting
t 526 t 5 1045 705 1490 785 0 308
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
