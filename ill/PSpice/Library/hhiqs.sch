*version 8.0 3664836921
u 319
X? 6
C? 10
R? 3
V? 2
EAMP? 2
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
pageloc 1 0 8232 
@status
c 97:08:25:10:25:51;875208351
c 97:08:25:10:25:51;875208351
c 97:08:25:10:25:51;875208351
c 97:08:25:10:25:51;875208351
c 97:08:25:10:25:51;875208351
*page 1 0 970 720 iA
@ports
port 21 INTERFACE 80 510 h
a 1 s 3 0 17 22 hcn 100 LABEL=CLK[0-3]
port 22 INTERFACE 60 250 h
a 1 s 3 0 19 8 hcn 100 LABEL=IN
port 23 INTERFACE 910 290 u
a 1 s 3 0 19 8 hcn 100 LABEL=OUT
port 25 FOFFPAGE 120 290 v
a 1 s 3 0 25 30 hcn 100 LABEL=CP[0-3]
port 26 FOFFPAGE 520 310 v
a 1 s 3 0 25 30 hcn 100 LABEL=CP[0-3]
port 27 FOFFPAGE 710 310 v
a 1 s 3 0 25 30 hcn 100 LABEL=CP[0-3]
port 28 FOFFPAGE 140 510 u
a 1 s 3 0 7 10 hcn 100 LABEL=CP[0-3]
port 29 FOFFPAGE 820 80 v
a 1 s 3 0 25 30 hcn 100 LABEL=CP[0-3]
port 30 FOFFPAGE 310 290 v
a 1 s 3 0 25 30 hcn 100 LABEL=CP[0-3]
port 35 AGND 160 310 h
port 46 AGND 270 310 h
port 96 AGND 560 330 h
port 114 AGND 670 330 h
port 192 AGND 780 100 h
port 262 AGND 270 550 h
port 306 BUBBLE 370 290 v
a 1 x 14 0 6 14 hcn 100 LABEL=N8
port 308 BUBBLE 770 310 u
a 1 x 14 0 0 0 hcn 100 LABEL=N8
port 318 BUBBLE 410 460 d
a 1 x 14 0 0 -14 hcn 100 LABEL=N8
@parts
part 7 C 190 250 h
a 0 u 13 0 15 25 hln 100 value=@C1VAL
a 0 xp 9 0 15 0 hln 100 REFDES=C1
a 0 s 0 0 0 0 hln 100 PKGREF=C1
part 8 C 600 270 h
a 0 u 13 0 15 25 hln 100 value=@C3VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C3
a 0 s 0 0 0 0 hln 100 PKGREF=C3
part 9 C 570 150 h
a 0 u 13 0 15 25 hln 100 value=@C4VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C4
a 0 s 0 0 0 0 hln 100 PKGREF=C4
part 10 C 190 180 h
a 0 u 13 0 15 25 hln 100 value=@C5VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C5
a 0 s 0 0 0 0 hln 100 PKGREF=C5
part 11 C 380 390 h
a 0 u 13 0 15 25 hln 100 value=@C6VAL
a 0 ap 9 0 15 0 hln 100 REFDES=C6
a 0 s 0 0 0 0 hln 100 PKGREF=C6
part 12 C 310 40 h
a 0 u 13 0 15 25 hln 100 value=@C2VAL
a 0 xp 9 0 15 0 hln 100 REFDES=C2
a 0 s 0 0 0 0 hln 100 PKGREF=C2
part 13 C 390 180 h
a 0 u 13 0 15 25 hln 100 value=@CaVAL
a 0 xp 9 0 15 0 hln 100 REFDES=Ca
a 0 s 0 0 0 0 hln 100 PKGREF=Ca
part 14 C 800 220 h
a 0 u 13 0 15 25 hln 100 value=@CbVAL
a 0 xp 9 0 15 0 hln 100 REFDES=Cb
a 0 s 0 0 0 0 hln 100 PKGREF=Cb
part 16 VSRC 270 470 h
a 1 u 13 0 -10 24 hcn 100 DC=1V
a 1 xp 9 0 -18 14 hcn 100 REFDES=VSCALE
a 0 s 0 0 0 0 hln 100 PKGREF=VSCALE
part 19 EAMP 380 290 U
a 0 u 0 0 12 80 hln 100 EXPR=V(0,%-)*V(0,%+)*@GAIN
a 0 u 13 13 92 22 hln 100 GAIN=5000
a 0 s 0 0 36 68 hln 100 PART=EAMP
a 1 xp 9 0 48 44 hln 100 REFDES=EAMP1
a 0 s 0 0 0 0 hln 100 PKGREF=EAMP1
part 20 EAMP 790 310 U
a 0 u 0 0 12 80 hln 100 EXPR=V(0,%-)*V(0,%+)*@GAIN
a 0 u 13 13 92 22 hln 100 GAIN=5000
a 0 s 0 0 36 68 hln 100 PART=EAMP
a 1 xp 9 0 48 44 hln 100 REFDES=EAMP2
a 0 s 0 0 0 0 hln 100 PKGREF=EAMP2
part 1 ISWPAIR 110 230 h
a 0 s 0 0 0 80 hln 100 PART=ISWPAIR
a 0 ap 9 0 14 8 hln 100 REFDES=X1
a 0 s 0 0 0 0 hln 100 PKGREF=X1
part 2 ISWPAIR 510 250 h
a 0 s 0 0 0 80 hln 100 PART=ISWPAIR
a 0 xp 9 0 14 8 hln 100 REFDES=X3
a 0 s 0 0 0 0 hln 100 PKGREF=X3
part 3 ISWPAIRB 270 230 h
a 0 s 0 0 0 80 hln 100 PART=ISWPAIRB
a 1 xp 9 0 14 8 hln 100 REFDES=X2
a 0 s 0 0 0 0 hln 100 PKGREF=X2
part 4 ISWPAIRB 670 250 h
a 0 s 0 0 0 80 hln 100 PART=ISWPAIRB
a 1 ap 9 0 14 8 hln 100 REFDES=X4
a 0 s 0 0 0 0 hln 100 PKGREF=X4
part 5 ISWPAIRB 780 20 h
a 0 s 0 0 0 80 hln 100 PART=ISWPAIRB
a 1 ap 9 0 14 8 hln 100 REFDES=X5
a 0 s 0 0 0 0 hln 100 PKGREF=X5
part 15 R 340 510 v
a 0 u 13 0 15 25 hln 100 value=1MEG
a 0 xp 9 0 15 0 hln 100 REFDES=RSCALE
a 0 s 0 0 0 0 hln 100 PKGREF=RSCALE
part 317 r 360 460 h
a 0 sp 0 0 0 10 hlb 100 PART=r
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 u 13 0 15 25 hln 100 VALUE=1m
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
@conn
w 32
a 0 s 0 0 230 388 hln 100 LABEL=IN
s 80 390 380 390 142
a 0 s 3 0 230 388 hln 100 LABEL=IN
s 60 250 80 250 31
a 0 s 3 0 70 248 hln 100 LABEL=IN
s 80 250 90 250 141
s 80 250 80 390 138
s 90 250 100 250 169
s 90 250 90 180 166
s 90 180 190 180 170
w 38
s 140 290 140 300 37
s 140 300 160 300 40
s 160 300 160 310 42
w 63
a 0 s 0 0 180 248 hln 100 LABEL=N1
s 170 250 190 250 62
a 0 s 3 0 180 248 hln 100 LABEL=N1
w 68
a 0 s 0 0 275 38 hln 100 LABEL=N2
s 310 40 240 40 256
a 0 s 3 0 275 38 hln 100 LABEL=N2
s 220 250 240 250 67
s 240 250 260 250 187
s 240 40 240 250 259
w 73
s 290 290 290 300 72
s 290 300 270 300 75
s 270 300 270 310 77
w 82
s 370 290 380 290 84
w 88
a 0 s 3 0 305 178 hln 100 LABEL=N3
s 370 180 390 180 210
a 0 s 3 0 305 178 hln 100 LABEL=N3
s 330 250 370 250 87
s 220 180 370 180 173
s 370 250 380 250 208
s 370 250 370 180 205
s 370 180 370 150 211
s 370 150 570 150 213
w 92
a 0 s 0 0 445 178 hln 100 LABEL=MID
s 420 180 470 180 177
a 0 s 3 0 445 178 hln 100 LABEL=MID
s 460 270 470 270 91
s 470 270 500 270 183
s 470 180 470 270 180
w 98
s 540 310 540 320 97
s 540 320 560 320 100
s 560 320 560 330 102
w 106
a 0 s 0 0 585 268 hln 100 LABEL=N4
s 570 270 600 270 105
a 0 s 3 0 585 268 hln 100 LABEL=N4
w 110
a 0 s 0 0 645 268 hln 100 LABEL=N5
s 630 270 660 270 109
a 0 s 3 0 645 268 hln 100 LABEL=N5
w 116
s 670 330 670 320 115
s 670 320 690 320 118
s 690 320 690 310 120
w 124
a 0 s 3 0 760 268 hln 100 LABEL=N6
s 410 390 750 390 145
a 0 s 3 0 580 388 hln 100 LABEL=N6
s 730 270 750 270 123
s 750 270 760 270 151
s 750 390 750 270 148
s 760 270 790 270 155
a 0 s 3 0 744 268 hln 100 LABEL=N6
s 760 270 760 220 152
s 760 220 800 220 156
w 135
a 0 s 3 0 890 288 hln 100 LABEL=OUT
s 880 290 910 290 165
a 0 s 3 0 890 288 hln 100 LABEL=OUT
s 870 290 880 290 134
s 830 220 880 220 159
s 880 220 880 290 162
s 600 150 880 150 235
s 880 220 880 150 243
s 880 150 880 40 246
s 880 40 840 40 249
w 221
s 780 100 780 90 220
s 780 90 800 90 223
s 800 90 800 80 225
w 253
a 0 s 0 0 555 38 hln 100 LABEL=N7
s 770 40 340 40 252
a 0 s 3 0 555 38 hln 100 LABEL=N7
w 264
s 270 550 270 540 263
s 340 510 340 540 275
s 270 540 270 510 281
s 340 540 270 540 278
w 310
s 770 310 790 310 309
w 312
s 400 460 410 460 311
w 268
s 270 460 340 460 270
s 270 470 270 460 267
s 340 460 340 470 272
s 340 460 360 460 313
b 283
a 0 s 3 0 94 506 hln 100 LABEL=CP[0-3]
s 80 510 140 510 282
a 0 s 3 0 94 506 hln 100 LABEL=CP[0-3]
@junction
j 60 250
+ s 22
+ w 32
j 160 310
+ s 35
+ w 38
j 190 250
+ p 7 1
+ w 63
j 220 250
+ p 7 2
+ w 68
j 270 310
+ s 46
+ w 73
j 380 290
+ p 19 +
+ w 82
j 380 250
+ p 19 -
+ w 88
j 460 270
+ p 19 OUT
+ w 92
j 560 330
+ s 96
+ w 98
j 600 270
+ p 8 1
+ w 106
j 630 270
+ p 8 2
+ w 110
j 670 330
+ s 114
+ w 116
j 790 270
+ p 20 -
+ w 124
j 870 290
+ p 20 OUT
+ w 135
j 910 290
+ s 23
+ w 135
j 80 250
+ w 32
+ w 32
j 380 390
+ p 11 1
+ w 32
j 410 390
+ p 11 2
+ w 124
j 750 270
+ w 124
+ w 124
j 760 270
+ w 124
+ w 124
j 800 220
+ p 14 1
+ w 124
j 830 220
+ p 14 2
+ w 135
j 880 290
+ w 135
+ w 135
j 90 250
+ w 32
+ w 32
j 190 180
+ p 10 1
+ w 32
j 220 180
+ p 10 2
+ w 88
j 390 180
+ p 13 1
+ w 88
j 420 180
+ p 13 2
+ w 92
j 470 270
+ w 92
+ w 92
j 240 250
+ w 68
+ w 68
j 370 250
+ w 88
+ w 88
j 370 180
+ w 88
+ w 88
j 570 150
+ p 9 1
+ w 88
j 780 100
+ s 192
+ w 221
j 600 150
+ p 9 2
+ w 135
j 880 220
+ w 135
+ w 135
j 880 150
+ w 135
+ w 135
j 340 40
+ p 12 2
+ w 253
j 310 40
+ p 12 1
+ w 68
j 270 510
+ p 16 -
+ w 264
j 270 550
+ s 262
+ w 264
j 340 510
+ p 15 1
+ w 264
j 270 540
+ w 264
+ w 264
j 120 290
+ P 1 CLK0,CLK1,CLK2,CLK3
 CLK0
 CLK1
 CLK2
 CLK3
+ S 25
 CP[0]
 CP[1]
 CP[2]
 CP[3]
j 100 250
+ p 1 IN
+ w 32
j 140 290
+ p 1 AGND
+ w 38
j 170 250
+ p 1 OUT
+ w 63
j 520 310
+ P 2 CLK0,CLK1,CLK2,CLK3
 CLK0
 CLK1
 CLK2
 CLK3
+ S 26
 CP[0]
 CP[1]
 CP[2]
 CP[3]
j 500 270
+ p 2 IN
+ w 92
j 540 310
+ p 2 AGND
+ w 98
j 570 270
+ p 2 OUT
+ w 106
j 310 290
+ P 3 CLK0,CLK1,CLK2,CLK3
 CLK0
 CLK1
 CLK2
 CLK3
+ S 30
 CP[0]
 CP[1]
 CP[2]
 CP[3]
j 260 250
+ p 3 OUT
+ w 68
j 290 290
+ p 3 AGND
+ w 73
j 330 250
+ p 3 IN
+ w 88
j 710 310
+ P 4 CLK0,CLK1,CLK2,CLK3
 CLK0
 CLK1
 CLK2
 CLK3
+ S 27
 CP[0]
 CP[1]
 CP[2]
 CP[3]
j 660 270
+ p 4 OUT
+ w 110
j 690 310
+ p 4 AGND
+ w 116
j 730 270
+ p 4 IN
+ w 124
j 820 80
+ P 5 CLK0,CLK1,CLK2,CLK3
 CLK0
 CLK1
 CLK2
 CLK3
+ S 29
 CP[0]
 CP[1]
 CP[2]
 CP[3]
j 840 40
+ p 5 IN
+ w 135
j 800 80
+ p 5 AGND
+ w 221
j 770 40
+ p 5 OUT
+ w 253
j 370 290
+ s 306
+ w 82
j 790 310
+ p 20 +
+ w 310
j 770 310
+ s 308
+ w 310
j 270 470
+ p 16 +
+ w 268
j 340 470
+ p 15 2
+ w 268
j 400 460
+ p 317 2
+ w 312
j 360 460
+ p 317 1
+ w 268
j 410 460
+ s 318
+ w 312
@attributes
a 0 s 13 0 0 0 hln 100 PAGETITLE=
a 0 s 13 0 0 0 hln 100 PAGENO=1
a 0 s 13 0 0 0 hln 100 PAGESIZE=A
a 0 s 13 0 0 0 hln 100 PAGECOUNT=1
@graphics
