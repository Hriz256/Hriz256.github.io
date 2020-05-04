*version 8.0 1025676869
u 391
C? 9
X? 7
EAMP? 2
V? 2
R? 3
@libraries
@analysis
@targets
@attributes
@translators
a 0 u 13 0 0 0 hln 100 TANGO=PCB
a 0 u 13 0 0 0 hln 100 SCICARDS=PCB
a 0 u 13 0 0 0 hln 100 PROTEL=PCB
a 0 u 13 0 0 0 hln 100 PCBOARDS=PCB
a 0 u 13 0 0 0 hln 100 PCAD=PCB
a 0 u 13 0 0 0 hln 100 PADS=PCB
a 0 u 13 0 0 0 hln 100 ORCAD=PCB
a 0 u 13 0 0 0 hln 100 EDIF=PCB
a 0 u 13 0 0 0 hln 100 CADSTAR=PCB
a 0 u 13 0 0 0 hln 100 PSPICE=DEFAULT
a 0 u 13 0 0 0 hln 100 XILINX=XILINX
a 0 u 13 0 0 0 hln 100 POLARIS=PCB
@setup
unconnectedPins 0
connectViaLabel 0
connectViaLocalLabels 0
NoStim4ExtIFPortsWarnings 1
AutoGenStim4ExtIFPorts 1
@index
pageloc 1 0 9324 
@status
c 97:08:25:10:43:28;875209408
c 97:08:25:10:43:28;875209408
c 97:08:25:10:43:28;875209408
c 97:08:25:10:43:28;875209408
c 97:08:25:10:43:28;875209408
c 97:08:25:10:43:28;875209408
*page 1 0 970 720 iA
@ports
port 16 FOFFPAGE 120 300 v
a 1 s 3 0 23 28 hcn 100 LABEL=CP[0-5]
port 17 FOFFPAGE 520 320 v
a 1 s 3 0 25 30 hcn 100 LABEL=CP[0-5]
port 18 FOFFPAGE 770 80 v
a 1 s 3 0 23 36 hcn 100 LABEL=CP[0-5]
port 20 FOFFPAGE 730 320 v
a 1 s 3 0 23 26 hcn 100 LABEL=CP[0-5]
port 22 FOFFPAGE 300 300 v
a 1 s 3 0 23 36 hcn 100 LABEL=CP[0-5]
port 24 FOFFPAGE 120 140 v
a 1 s 3 0 23 36 hcn 100 LABEL=CP[0-5]
port 26 FOFFPAGE 150 450 u
a 1 s 3 0 7 8 hcn 100 LABEL=CP[0-5]
port 51 AGND 160 320 h
port 63 AGND 560 340 h
port 75 AGND 160 160 h
port 87 AGND 260 320 H
port 99 AGND 690 340 H
port 111 AGND 730 100 H
port 113 INTERFACE 60 260 h
a 1 s 3 0 19 8 hcn 100 LABEL=IN
port 114 INTERFACE 120 450 h
a 1 s 3 0 13 22 hcn 100 LABEL=CLK[0-5]
port 115 INTERFACE 910 300 u
a 1 s 3 0 19 8 hcn 100 LABEL=OUT
port 366 AGND 290 520 h
port 380 BUBBLE 360 300 v
a 1 x 14 0 6 14 hcn 100 LABEL=N9
port 382 BUBBLE 780 320 u
a 1 x 14 0 0 0 hcn 100 LABEL=N9
port 390 BUBBLE 420 440 d
a 1 x 14 0 0 -14 hcn 100 LABEL=N9
@parts
part 1 c 190 260 h
a 0 u 13 0 15 25 hln 100 value=@C1VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 s 0 0 0 0 hln 100 PKGREF=C1
part 2 c 290 40 h
a 0 u 13 0 15 25 hln 100 value=@C2VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C2
a 0 s 0 0 0 0 hln 100 PKGREF=C2
part 3 c 600 280 h
a 0 u 13 0 15 25 hln 100 value=@C3VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C3
a 0 s 0 0 0 0 hln 100 PKGREF=C3
part 4 c 670 90 v
a 0 u 13 0 13 57 hln 100 value=@C4VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C4
a 0 s 0 0 0 0 hln 100 PKGREF=C4
part 5 c 390 100 h
a 0 u 13 0 15 25 hln 100 value=@C5VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C5
a 0 s 0 0 0 0 hln 100 PKGREF=C5
part 6 c 400 390 h
a 0 u 13 0 15 25 hln 100 value=@C6VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C6
a 0 s 0 0 0 0 hln 100 PKGREF=C6
part 7 c 400 190 h
a 0 u 13 0 15 25 hln 100 value=@CaVAL
a 0 xp 9 0 15 0 hln 100 REFDES=Ca
a 0 s 0 0 0 0 hln 100 PKGREF=Ca
part 8 c 810 220 h
a 0 u 13 0 15 25 hln 100 value=@CbVAL
a 0 xp 9 0 15 0 hln 100 REFDES=Cb
a 0 s 0 0 0 0 hln 100 PKGREF=Cb
part 9 SWPAIR 110 240 h
a 0 s 0 0 0 80 hln 100 PART=SWPAIR
a 0 ap 9 0 14 8 hln 100 REFDES=X1
a 0 s 0 0 0 0 hln 100 PKGREF=X1
part 10 SWPAIR 510 260 h
a 0 s 0 0 0 80 hln 100 PART=SWPAIR
a 0 ap 9 0 14 8 hln 100 REFDES=X2
a 0 s 0 0 0 0 hln 100 PKGREF=X2
part 11 SWPAIR 110 80 h
a 0 s 0 0 0 80 hln 100 PART=SWPAIR
a 0 ap 9 0 14 8 hln 100 REFDES=X3
a 0 s 0 0 0 0 hln 100 PKGREF=X3
part 12 SWPAIRB 260 240 h
a 0 s 0 0 0 80 hln 100 PART=SWPAIRB
a 1 ap 9 0 14 8 hln 100 REFDES=X4
a 0 s 0 0 0 0 hln 100 PKGREF=X4
part 13 SWPAIRB 690 260 h
a 0 s 0 0 0 80 hln 100 PART=SWPAIRB
a 1 ap 9 0 14 8 hln 100 REFDES=X5
a 0 s 0 0 0 0 hln 100 PKGREF=X5
part 14 SWPAIRB 730 20 h
a 0 s 0 0 0 80 hln 100 PART=SWPAIRB
a 1 ap 9 0 14 8 hln 100 REFDES=X6
a 0 s 0 0 0 0 hln 100 PKGREF=X6
part 30 EAMP 370 300 U
a 0 u 0 0 12 80 hln 100 EXPR=V(0,%-)*V(0,%+)*@GAIN
a 0 u 13 13 92 20 hln 100 GAIN=5000
a 0 s 0 0 36 68 hln 100 PART=EAMP
a 1 xp 9 0 44 42 hln 100 REFDES=EAMP1
a 0 s 0 0 0 0 hln 100 PKGREF=EAMP1
part 31 EAMP 790 320 U
a 0 u 0 0 12 80 hln 100 EXPR=V(0,%-)*V(0,%+)*@GAIN
a 0 u 13 13 92 20 hln 100 GAIN=5000
a 0 s 0 0 36 68 hln 100 PART=EAMP
a 1 xp 9 0 44 42 hln 100 REFDES=EAMP2
a 0 s 0 0 0 0 hln 100 PKGREF=EAMP2
part 346 VSRC 290 450 h
a 1 u 13 0 -24 32 hcn 100 DC=1V
a 1 xp 9 0 -24 22 hcn 100 REFDES=VSCALE
a 0 s 0 0 0 0 hln 100 PKGREF=VSCALE
part 389 r 370 440 h
a 0 sp 0 0 0 10 hlb 100 PART=r
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 u 13 0 15 25 hln 100 VALUE=1m
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 347 R 350 490 v
a 0 u 13 0 5 51 hln 100 value=1MEG
a 0 s 0 0 0 0 hln 100 PKGREF=RSCALE
a 0 xp 9 0 19 60 hln 100 REFDES=RSCALE
@conn
w 119
s 140 300 140 310 118
s 140 310 160 310 121
s 160 310 160 320 123
w 128
s 280 300 280 310 127
s 280 310 260 310 130
s 260 310 260 320 132
w 146
a 0 s 0 0 845 38 hln 100 LABEL=OUT
s 790 40 900 40 274
a 0 s 3 0 845 38 hln 100 LABEL=OUT
s 870 300 900 300 145
s 900 300 910 300 280
s 900 40 900 220 277
s 900 220 900 300 292
s 840 220 900 220 288
w 159
s 710 320 710 330 158
s 710 330 690 330 161
s 690 330 690 340 163
w 168
a 0 s 0 0 595 388 hln 100 LABEL=N6
s 430 390 760 390 338
a 0 s 3 0 595 388 hln 100 LABEL=N6
s 750 280 760 280 167
s 780 280 790 280 284
s 780 280 780 220 281
s 780 220 810 220 285
s 760 280 780 280 344
s 760 390 760 280 341
w 173
s 780 320 790 320 175
w 179
a 0 s 0 0 650 278 hln 100 LABEL=N5
s 630 280 670 280 178
a 0 s 3 0 650 278 hln 100 LABEL=N5
s 670 280 680 280 296
s 670 280 670 100 293
s 670 100 670 90 310
s 420 100 670 100 306
w 183
s 540 320 540 330 182
s 540 330 560 330 185
s 560 330 560 340 187
w 192
a 0 s 0 0 585 278 hln 100 LABEL=N4
s 570 280 600 280 191
a 0 s 3 0 585 278 hln 100 LABEL=N4
w 196
a 0 s 0 0 482 235 hln 100 LABEL=MID
s 480 190 480 280 220
a 0 s 3 0 482 235 hln 100 LABEL=MID
s 450 280 480 280 195
s 430 190 480 190 217
s 480 280 500 280 223
w 200
a 0 s 0 0 340 258 hln 100 LABEL=N3
s 360 260 320 260 213
a 0 s 3 0 340 258 hln 100 LABEL=N3
s 370 260 360 260 199
s 360 260 360 190 210
s 360 190 400 190 214
w 205
s 360 300 370 300 207
w 225
s 140 140 140 150 224
s 140 150 160 150 227
s 160 150 160 160 229
w 234
a 0 s 0 0 230 258 hln 100 LABEL=N2
s 220 260 240 260 233
a 0 s 3 0 224 258 hln 100 LABEL=N2
s 240 260 250 260 319
s 240 260 240 40 315
s 290 40 240 40 373
w 238
a 0 s 0 0 180 258 hln 100 LABEL=N1
s 170 260 190 260 237
a 0 s 3 0 180 258 hln 100 LABEL=N1
w 242
a 0 s 0 0 240 388 hln 100 LABEL=IN
s 400 390 80 390 331
a 0 s 3 0 240 388 hln 100 LABEL=IN
s 60 260 80 260 241
s 90 260 100 260 248
s 90 260 90 100 245
s 90 100 100 100 249
s 80 260 90 260 337
s 80 390 80 260 334
w 253
a 0 s 0 0 280 98 hln 100 LABEL=N8
s 390 100 170 100 252
a 0 s 3 0 280 98 hln 100 LABEL=N8
w 266
s 750 80 750 90 265
s 750 90 730 90 268
s 730 90 730 100 270
w 322
a 0 s 0 0 495 38 hln 100 LABEL=N7
s 320 40 670 40 371
a 0 s 3 0 495 38 hln 100 LABEL=N7
s 670 60 670 40 298
s 670 40 720 40 303
w 349
s 290 490 290 500 348
s 290 500 290 520 354
s 290 500 350 500 351
s 350 500 350 490 355
w 384
s 410 440 420 440 383
w 359
s 350 440 290 440 361
s 350 450 350 440 358
s 290 440 290 450 363
s 350 440 370 440 385
b 377
a 0 s 0 0 135 448 hln 100 LABEL=CP[0-5]
s 120 450 150 450 376
a 0 s 3 0 115 442 hln 100 LABEL=CP[0-5]
@junction
j 140 300
+ p 9 AGND
+ w 119
j 160 320
+ s 51
+ w 119
j 120 300
+ P 9 CLK0,CLK1,CLK2,CLK3,CLK4,CLK5
 CLK0
 CLK1
 CLK2
 CLK3
 CLK4
 CLK5
+ S 16
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
j 280 300
+ p 12 AGND
+ w 128
j 260 320
+ s 87
+ w 128
j 300 300
+ P 12 CLK0,CLK1,CLK2,CLK3,CLK4,CLK5
 CLK0
 CLK1
 CLK2
 CLK3
 CLK4
 CLK5
+ S 22
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
j 870 300
+ p 31 OUT
+ w 146
j 910 300
+ s 115
+ w 146
j 710 320
+ p 13 AGND
+ w 159
j 690 340
+ s 99
+ w 159
j 730 320
+ P 13 CLK0,CLK1,CLK2,CLK3,CLK4,CLK5
 CLK0
 CLK1
 CLK2
 CLK3
 CLK4
 CLK5
+ S 20
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
j 750 280
+ p 13 IN
+ w 168
j 790 280
+ p 31 -
+ w 168
j 790 320
+ p 31 +
+ w 173
j 630 280
+ p 3 2
+ w 179
j 680 280
+ p 13 OUT
+ w 179
j 540 320
+ p 10 AGND
+ w 183
j 560 340
+ s 63
+ w 183
j 520 320
+ P 10 CLK0,CLK1,CLK2,CLK3,CLK4,CLK5
 CLK0
 CLK1
 CLK2
 CLK3
 CLK4
 CLK5
+ S 17
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
j 600 280
+ p 3 1
+ w 192
j 570 280
+ p 10 OUT
+ w 192
j 500 280
+ p 10 IN
+ w 196
j 450 280
+ p 30 OUT
+ w 196
j 320 260
+ p 12 IN
+ w 200
j 370 260
+ p 30 -
+ w 200
j 370 300
+ p 30 +
+ w 205
j 360 260
+ w 200
+ w 200
j 400 190
+ p 7 1
+ w 200
j 430 190
+ p 7 2
+ w 196
j 480 280
+ w 196
+ w 196
j 140 140
+ p 11 AGND
+ w 225
j 160 160
+ s 75
+ w 225
j 120 140
+ P 11 CLK0,CLK1,CLK2,CLK3,CLK4,CLK5
 CLK0
 CLK1
 CLK2
 CLK3
 CLK4
 CLK5
+ S 24
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
j 220 260
+ p 1 2
+ w 234
j 250 260
+ p 12 OUT
+ w 234
j 190 260
+ p 1 1
+ w 238
j 170 260
+ p 9 OUT
+ w 238
j 100 260
+ p 9 IN
+ w 242
j 60 260
+ s 113
+ w 242
j 90 260
+ w 242
+ w 242
j 100 100
+ p 11 IN
+ w 242
j 390 100
+ p 5 1
+ w 253
j 170 100
+ p 11 OUT
+ w 253
j 750 80
+ p 14 AGND
+ w 266
j 730 100
+ s 111
+ w 266
j 770 80
+ P 14 CLK0,CLK1,CLK2,CLK3,CLK4,CLK5
 CLK0
 CLK1
 CLK2
 CLK3
 CLK4
 CLK5
+ S 18
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
j 790 40
+ p 14 IN
+ w 146
j 900 300
+ w 146
+ w 146
j 780 280
+ w 168
+ w 168
j 810 220
+ p 8 1
+ w 168
j 840 220
+ p 8 2
+ w 146
j 900 220
+ w 146
+ w 146
j 670 280
+ w 179
+ w 179
j 670 90
+ p 4 1
+ w 179
j 670 60
+ p 4 2
+ w 322
j 720 40
+ p 14 OUT
+ w 322
j 420 100
+ p 5 2
+ w 179
j 670 100
+ w 179
+ w 179
j 240 260
+ w 234
+ w 234
j 670 40
+ w 322
+ w 322
j 400 390
+ p 6 1
+ w 242
j 80 260
+ w 242
+ w 242
j 430 390
+ p 6 2
+ w 168
j 760 280
+ w 168
+ w 168
j 290 490
+ p 346 -
+ w 349
j 290 500
+ w 349
+ w 349
j 350 490
+ p 347 1
+ w 349
j 350 450
+ p 347 2
+ w 359
j 290 450
+ p 346 +
+ w 359
j 290 520
+ s 366
+ w 349
j 320 40
+ p 2 2
+ w 322
j 290 40
+ p 2 1
+ w 234
j 150 450
+ S 26
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
+ b 377
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
j 120 450
+ S 114
 CLK[0]
 CLK[1]
 CLK[2]
 CLK[3]
 CLK[4]
 CLK[5]
+ b 377
 CP[0]
 CP[1]
 CP[2]
 CP[3]
 CP[4]
 CP[5]
j 360 300
+ s 380
+ w 205
j 780 320
+ s 382
+ w 173
j 350 440
+ w 359
+ w 359
j 410 440
+ p 389 2
+ w 384
j 370 440
+ p 389 1
+ w 359
j 420 440
+ s 390
+ w 384
@attributes
a 0 s 13 0 0 0 hln 100 PAGETITLE=
a 0 s 13 0 0 0 hln 100 PAGENO=1
a 0 s 13 0 0 0 hln 100 PAGESIZE=A
a 0 s 13 0 0 0 hln 100 PAGECOUNT=1
@graphics