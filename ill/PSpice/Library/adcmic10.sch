*version 9.2 185472591
u 1587
U? 16
R? 6
C? 2
V? 2
E? 4
DSTM? 2
? 1
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
pageloc 1 0 20914 
@status
c 100:04:11:18:58:48;958096728
n 0 97:11:09:12:20:23;881698823 e 
a 0 98:03:21:11:34:09;893183649 e 
*page 1 0 3220 2020 iC
@ports
port 13 Agnd 270 280 h
port 8 Agnd 560 160 h
port 14 Agnd 420 260 h
port 224 Agnd 300 950 h
port 499 HI 590 250 h
port 234 IF_IN 90 90 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REF
port 235 IF_IN 90 190 h
a 1 xr 3 0 19 8 hcn 100 LABEL=CAP
port 1123 IF_OUT 1060 350 h
a 1 xr 3 0 31 8 hcn 100 LABEL=\BUSY\
port 236 IF_IN 70 500 h
a 1 xr 3 0 19 8 hcn 100 LABEL=R/\C\
port 237 IF_IN 70 600 h
a 1 xr 3 0 19 8 hcn 100 LABEL=\CS\
port 7 Agnd 220 760 h
port 238 IF_IN 70 670 h
a 1 xr 3 0 19 8 hcn 100 LABEL=Vin
port 252 IF_OUT 1090 700 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D2
port 251 IF_OUT 1090 690 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D3
port 250 IF_OUT 1090 680 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D4
port 249 IF_OUT 1090 670 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D5
port 248 IF_OUT 1090 660 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D6
port 247 IF_OUT 1090 650 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D7
port 246 IF_OUT 1090 640 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D8
port 254 IF_OUT 1090 720 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D0
port 253 IF_OUT 1090 710 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D1
port 245 IF_OUT 1090 630 h
a 1 xr 3 0 31 8 hcn 100 LABEL=D9
port 1570 hi 710 620 h
port 1579 interface 90 1050 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VDIG
port 1580 interface 90 1080 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VANA
port 1581 interface 90 1110 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND1
port 1582 interface 90 1140 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND2
port 1583 bubble 150 1050 d
a 1 x 3 0 0 0 hcn 100 LABEL=VDIG
port 1584 bubble 150 1080 d
a 1 x 3 0 0 0 hcn 100 LABEL=VANA
port 1585 bubble 150 1110 d
a 1 x 3 0 0 0 hcn 100 LABEL=AGND1
port 1586 bubble 150 1140 V
a 1 x 3 0 20 38 hcn 100 LABEL=AGND2
@parts
part 12 R 270 210 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 15 25 hln 100 VALUE=1G
a 0 ap 9 0 15 0 hln 100 REFDES=R1
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 9 Vsrc 560 110 h
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
a 1 u 13 13 42 27 hcn 100 DC=2.5V
a 0 a 0:13 0 0 0 hln 100 PKGREF=V1
part 321 R 250 900 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 30 6 hln 100 VALUE=1Meg
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 11 E 390 190 H
a 0 s 11 0 10 34 hln 100 PART=E
a 1 ap 9 0 10 4 hln 100 REFDES=E1
a 0 a 0:13 0 0 0 hln 100 PKGREF=E1
part 471 DFFRS 590 330 h
a 0 sp 11 0 36 88 hln 100 PART=DFFRS
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hlb 100 IMPL=
a 0 ap 9 0 40 8 hln 100 REFDES=U1
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
part 419 NOR2 490 490 h
a 0 sp 11 0 44 48 hln 100 PART=NOR2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U2
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
part 394 INV 380 450 h
a 0 sp 11 0 40 40 hln 100 PART=INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U3
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
part 491 OR2 450 340 h
a 0 sp 11 0 50 48 hln 100 PART=OR2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U4
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
part 392 NOR2 230 500 h
a 0 sp 11 0 44 48 hln 100 PART=NOR2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U5
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
part 186 E 190 900 h
a 0 u 13 13 -111 28 hln 100 GAIN=-@Ref_volt_gain
a 0 s 11 0 10 34 hln 100 PART=E
a 1 ap 9 0 10 4 hln 100 REFDES=E2
a 0 a 0:13 0 0 0 hln 100 PKGREF=E2
part 185 E 260 840 h
a 0 u 13 13 -180 23 hln 100 GAIN=@Ref_volt_gain
a 0 s 11 0 10 34 hln 100 PART=E
a 1 ap 9 0 10 4 hln 100 REFDES=E3
a 0 a 0:13 0 0 0 hln 100 PKGREF=E3
part 10 R 460 90 h
a 0 u 13 0 15 25 hln 100 VALUE=@R_ref_out
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R3
a 0 a 0:13 0 0 0 hln 100 PKGREF=R3
part 1212 DELAY 310 340 h
a 0 u 13 0 20 30 hlb 100 DELAY=@TBUSYRC
a 0 sp 11 0 18 18 hln 100 PART=DELAY
a 1 ap 9 0 40 -2 hln 100 REFDES=U6
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
part 1194 DELAY 340 400 h
a 0 u 13 0 20 30 hlb 100 DELAY=@TBUSY
a 0 sp 11 0 18 18 hln 100 PART=DELAY
a 1 ap 9 0 40 -2 hln 100 REFDES=U7
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
part 498 DigClock 610 420 h
a 0 u 0 0 0 10 hln 100 DELAY=10ns
a 0 u 0 0 0 40 hln 100 STARTVAL=1
a 0 u 0 0 0 50 hln 100 OPPVAL=0
a 0 u 0 0 0 20 hln 100 ONTIME=10ns
a 0 u 0 0 0 30 hln 100 OFFTIME=100
a 1 ap 9 0 0 -2 hln 100 REFDES=DSTM1
a 0 a 0:13 0 0 0 hln 100 PKGREF=DSTM1
part 5 R 220 690 d
a 0 u 13 0 31 41 hln 100 VALUE=@Rin
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R4
a 0 a 0:13 0 0 0 hln 100 PKGREF=R4
part 6 C 290 690 d
a 0 u 13 0 31 34 hln 100 VALUE=@Cin
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 1191 ADCmicro_CONSTRNT 170 500 d
a 0 u 13 13 34 132 hln 100 PMINPER=@MINPER
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 129 27 hrn 100 PART=ADCmicro_CONSTRNT
a 0 u 13 13 44 132 hln 100 PMINHOLD=@MINHOLD
a 0 u 13 13 54 132 hln 100 PMINSET=@MINSET
a 0 u 13 13 64 132 hln 100 PMINLO=@MINLO
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 ap 9 0 12 40 hln 100 REFDES=U8
part 1125 dc_buf 850 350 h
a 0 s 11 0 40 50 hln 100 PART=dc_buf
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 ap 9 0 40 0 hln 100 REFDES=U9
part 1157 dc_buf 90 600 h
a 0 u 13 13 -40 76 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 11 0 -13 47 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 ap 9 0 -17 7 hln 100 REFDES=U10
part 1154 dc_buf 90 500 h
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 u 13 13 -36 -28 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 11 0 -10 -2 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 0 ap 9 0 -8 -15 hln 100 REFDES=U11
part 338 R 310 840 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 30 6 hln 100 VALUE=1Meg
a 0 ap 9 0 15 0 hln 100 REFDES=R5
a 0 a 0:13 0 0 0 hln 100 PKGREF=R5
part 1106 INV 490 610 h
a 0 sp 11 0 40 40 hln 100 PART=INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 ap 9 0 40 0 hln 100 REFDES=U12
part 1530 dc_buf10 1010 620 h
a 0 sp 11 0 62 134 hrn 100 PART=dc_buf10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U13
a 0 ap 9 0 10 -2 hln 100 REFDES=U13
part 1532 dc_adc10 380 630 h
a 0 sp 11 0 74 130 hrn 100 PART=dc_adc10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U14
a 0 ap 9 0 10 -2 hln 100 REFDES=U14
part 1531 dc_buf10 710 620 h
a 0 sp 11 0 62 134 hrn 100 PART=dc_buf10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 0:13 0 -10 152 hlb 100 PTPZLTY=
a 0 u 0:13 0 -10 162 hlb 100 PTPZHTY=
a 0 u 0:13 0 -10 182 hlb 100 PTPHZTY=
a 0 u 0:13 0 -10 204 hlb 100 PIO_MODEL=@IO_MODEL
a 0 u 0:13 0 -10 268 hlb 100 PTPLZMN=
a 0 u 0:13 0 -10 280 hlb 100 PTPLZMX=
a 0 u 0:13 0 -10 290 hlb 100 PTPHZMN=
a 0 u 0:13 0 -10 302 hlb 100 PTPHZMX=
a 0 u 0:13 0 -10 228 hlb 100 PTPZLMN=
a 0 u 0:13 0 -10 238 hlb 100 PTPZLMX=
a 0 u 0:13 0 -10 248 hlb 100 PTPZHMN=
a 0 u 0:13 0 -10 258 hlb 100 PTPZHMX=
a 0 u 0:13 0 -10 172 hlb 100 PTPLZTY=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U15
a 0 ap 9 0 10 -2 hln 100 REFDES=U15
part 1 titleblk 2020 1520 h
a 1 x 13 0 180 60 hcn 100 PAGETITLE=A/D Converter - Microcontroller Interface
a 1 s 13 0 350 10 hcn 100 PAGESIZE=C
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 106
a 0 up 0:33 0 0 0 hln 100 V=
s 560 90 500 90 107
a 0 up 33 0 530 89 hct 100 V=
s 560 110 560 90 105
w 104
a 0 up 0:33 0 0 0 hln 100 V=
s 560 150 560 160 103
a 0 up 33 0 562 155 hlt 100 V=
w 33
a 0 up 0:33 0 0 0 hln 100 V=
s 270 250 270 280 32
a 0 up 33 0 272 265 hlt 100 V=
w 340
a 0 up 0:33 0 0 0 hln 100 V=
s 190 910 190 940 212
s 190 940 230 940 214
s 230 940 230 910 216
s 230 940 250 940 218
s 300 940 250 940 345
s 300 940 300 950 222
s 310 890 300 890 341
s 300 940 300 890 326
a 0 up 33 0 302 915 hlt 100 V=
s 300 890 300 870 198
s 300 870 300 850 369
s 260 870 300 870 196
s 260 850 260 870 194
s 310 880 310 890 339
w 117
s 420 260 420 240 126
s 330 240 420 240 120
s 350 200 330 200 116
s 330 200 330 240 118
s 420 200 390 200 124
s 420 240 420 200 122
w 521
a 0 up 0:33 0 0 0 hln 100 LVL=
s 620 250 620 300 522
a 0 up 33 0 622 275 hlt 100 LVL=
s 590 250 620 250 520
w 512
a 0 up 0:33 0 0 0 hln 100 LVL=
s 620 420 610 420 513
s 620 380 620 420 511
a 0 up 33 0 622 400 hlt 100 LVL=
w 35
a 0 up 0:33 0 0 0 hln 100 V=
s 270 190 350 190 172
s 270 210 270 190 34
s 90 190 270 190 36
a 0 up 33 0 180 189 hct 100 V=
w 515
a 0 up 0:33 0 0 0 hln 100 LVL=
s 900 350 1060 350 1127
a 0 up 33 0 980 349 hct 100 LVL=
w 1214
a 0 up 0:33 0 0 0 hln 100 LVL=
s 450 340 370 340 541
a 0 up 33 0 380 339 hct 100 LVL=
w 1201
a 0 up 0:33 0 0 0 hln 100 LVL=
s 420 360 450 360 1204
a 0 up 33 0 435 359 hct 100 LVL=
s 400 400 420 400 1200
s 420 400 420 360 1202
w 1235
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 500 90 500 1234
a 0 up 33 0 80 499 hct 100 LVL=
w 1239
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 600 90 600 1238
a 0 up 33 0 80 599 hct 100 LVL=
w 1128
a 0 up 0:33 0 0 0 hln 100 LVL=
s 650 350 670 350 502
s 670 350 670 280 504
s 670 280 560 280 506
a 0 up 33 0 615 279 hct 100 LVL=
s 560 280 560 330 516
s 560 330 590 330 518
s 670 350 850 350 1283
a 0 up 33 0 865 349 hct 100 LVL=
w 503
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 350 590 350 1281
a 0 up 33 0 555 349 hct 100 LVL=
w 1158
a 0 up 0:33 0 0 0 hln 100 LVL=
s 230 500 210 500 158
a 0 up 33 0 195 499 hct 100 LVL=
s 210 450 210 500 397
s 380 450 210 450 395
s 210 500 170 500 1340
s 170 500 140 500 1341
w 532
a 0 up 0:33 0 0 0 hln 100 LVL=
s 460 490 490 490 413
s 430 450 460 450 409
s 460 450 460 490 1289
a 0 up 33 0 462 470 hlt 100 LVL=
w 1164
a 0 up 0:33 0 0 0 hln 100 LVL=
s 460 510 490 510 407
s 460 600 460 510 405
s 230 520 210 520 160
a 0 up 33 0 195 519 hct 100 LVL=
s 210 520 210 600 400
s 170 600 140 600 1207
s 210 600 170 600 1193
s 170 600 170 570 1251
s 210 600 460 600 1287
w 24
a 0 up 0:33 0 0 0 hln 100 V=
s 290 750 290 720 27
s 220 730 220 750 23
s 220 750 290 750 374
a 0 up 33 0 255 749 hct 100 V=
s 220 750 220 760 29
w 324
a 0 up 0:33 0 0 0 hln 100 V=
s 190 90 190 840 182
a 0 up 33 0 192 465 hlt 100 V=
s 420 190 420 90 113
s 460 90 420 90 109
s 190 840 190 900 361
s 260 840 190 840 387
s 390 190 420 190 391
s 190 90 90 90 184
s 420 90 190 90 1365
w 1463
a 0 up 0:33 0 0 0 hln 100 V=
s 300 840 310 840 200
s 325 840 310 840 356
s 325 710 325 840 1362
a 0 up 33 0 327 795 hlt 100 V=
s 380 710 325 710 1550
w 1464
a 0 up 0:33 0 0 0 hln 100 LVL=
s 300 510 310 510 537
s 310 510 310 400 1195
s 310 400 310 340 1199
s 340 400 310 400 1197
s 315 510 310 510 1219
s 315 650 315 510 1319
a 0 up 33 0 317 570 hlt 100 LVL=
s 380 650 315 650 1551
w 1322
a 0 up 0:33 0 0 0 hln 100 V=
s 220 690 220 670 15
s 220 670 290 670 142
s 290 670 290 690 19
s 70 670 220 670 17
a 0 up 33 0 145 669 hct 100 V=
s 290 630 290 670 1323
s 380 630 290 630 1552
w 862
a 0 up 0:33 0 0 0 hln 100 LVL=
s 485 610 490 610 1107
s 485 630 485 610 1109
a 0 up 33 0 487 620 hlt 100 LVL=
s 470 630 485 630 1544
w 1490
a 0 up 0:33 0 0 0 hln 100 V=
s 360 900 250 900 388
a 0 up 33 0 305 899 hct 100 V=
s 230 900 250 900 206
s 360 790 360 900 1452
s 360 790 440 790 1556
s 440 790 440 750 1558
w 416
a 0 up 0:33 0 0 0 hln 100 LVL=
s 850 620 1010 620 225
s 850 500 850 620 1243
a 0 up 33 0 852 595 hlt 100 LVL=
s 560 500 850 500 1292
w 293
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1080 690 1090 690 262
a 0 up 33 0 1085 689 hct 100 LVL=
w 295
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1080 680 1090 680 264
a 0 up 33 0 1085 679 hct 100 LVL=
w 297
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1080 670 1090 670 266
a 0 up 33 0 1085 669 hct 100 LVL=
w 299
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1080 660 1090 660 268
a 0 up 33 0 1085 659 hct 100 LVL=
w 301
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1080 650 1090 650 270
a 0 up 33 0 1085 649 hct 100 LVL=
w 303
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1080 640 1090 640 272
a 0 up 33 0 1085 639 hct 100 LVL=
w 305
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1080 630 1090 630 274
a 0 up 33 0 1085 629 hct 100 LVL=
w 291
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1080 700 1090 700 260
a 0 up 33 0 1085 699 hct 100 LVL=
w 1449
s 1090 720 1080 720 1448
w 1451
s 1090 710 1080 710 1450
w 850
a 0 up 0:33 0 0 0 hln 100 LVL=
s 470 690 710 690 1545
w 848
a 0 up 0:33 0 0 0 hln 100 LVL=
s 470 700 710 700 1546
w 1025
a 0 up 0:33 0 0 0 hln 100 LVL=
s 710 660 470 660 1538
w 852
a 0 up 0:33 0 0 0 hln 100 LVL=
s 710 680 470 680 1539
w 1026
a 0 up 0:33 0 0 0 hln 100 LVL=
s 710 670 470 670 1540
w 1024
a 0 up 0:33 0 0 0 hln 100 LVL=
s 710 650 470 650 1541
w 846
a 0 up 0:33 0 0 0 hln 100 LVL=
s 710 710 470 710 1351
w 844
a 0 up 0:33 0 0 0 hln 100 LVL=
s 710 720 470 720 1352
w 672
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1010 700 780 700 921
w 674
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1010 690 780 690 922
w 676
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1010 680 780 680 923
w 678
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1010 670 780 670 924
w 680
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1010 660 780 660 925
w 682
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1010 650 780 650 926
w 684
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1010 640 780 640 927
w 686
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1010 630 780 630 928
w 670
a 0 up 0:33 0 0 0 hln 100 LVL=
s 780 710 1010 710 823
w 668
a 0 up 0:33 0 0 0 hln 100 LVL=
s 780 720 1010 720 822
w 1564
s 710 640 470 640 1533
w 1117
a 0 up 0:33 0 0 0 hln 100 LVL=
s 710 630 550 630 1047
s 550 610 550 630 1114
s 540 610 550 610 1112
w 1572
s 90 1050 150 1050 1571
w 1574
s 90 1080 150 1080 1573
w 1576
s 90 1110 150 1110 1575
w 1578
s 90 1140 150 1140 1577
@junction
j 270 210
+ p 12 1
+ w 35
j 420 260
+ s 14
+ w 117
j 420 240
+ w 117
+ w 117
j 460 90
+ p 10 1
+ w 324
j 420 90
+ w 324
+ w 324
j 500 90
+ p 10 2
+ w 106
j 560 110
+ p 9 +
+ w 106
j 560 150
+ p 9 -
+ w 104
j 560 160
+ s 8
+ w 104
j 270 250
+ p 12 2
+ w 33
j 270 280
+ s 13
+ w 33
j 230 940
+ w 340
+ w 340
j 190 840
+ w 324
+ w 324
j 300 950
+ s 224
+ w 340
j 300 940
+ w 340
+ w 340
j 300 890
+ w 340
+ w 340
j 300 870
+ w 340
+ w 340
j 260 850
+ p 185 2
+ w 340
j 300 850
+ p 185 4
+ w 340
j 260 840
+ p 185 1
+ w 324
j 390 200
+ p 11 2
+ w 117
j 350 200
+ p 11 4
+ w 117
j 350 190
+ p 11 3
+ w 35
j 390 190
+ p 11 1
+ w 324
j 450 340
+ p 491 I0
+ w 1214
j 590 330
+ p 471 D
+ w 1128
j 650 350
+ p 471 \Q\
+ w 1128
j 620 300
+ p 471 \S\
+ w 521
j 590 250
+ s 499
+ w 521
j 590 350
+ p 471 CLK
+ w 503
j 520 350
+ p 491 O
+ w 503
j 610 420
+ p 498 1
+ w 512
j 620 380
+ p 471 \R\
+ w 512
j 90 90
+ s 234
+ w 324
j 190 90
+ w 324
+ w 324
j 90 190
+ s 235
+ w 35
j 270 190
+ w 35
+ w 35
j 1060 350
+ s 1123
+ w 515
j 670 350
+ w 1128
+ w 1128
j 560 500
+ p 419 O
+ w 416
j 490 490
+ p 419 I0
+ w 532
j 490 510
+ p 419 I1
+ w 1164
j 450 360
+ p 491 I1
+ w 1201
j 170 600
+ w 1164
+ w 1164
j 210 600
+ w 1164
+ w 1164
j 70 500
+ s 236
+ w 1235
j 70 600
+ s 237
+ w 1239
j 190 900
+ p 186 1
+ w 324
j 190 910
+ p 186 2
+ w 340
j 230 910
+ p 186 4
+ w 340
j 370 340
+ p 1212 OUT
+ w 1214
j 400 400
+ p 1194 OUT
+ w 1201
j 430 450
+ p 394 O
+ w 532
j 380 450
+ p 394 I0
+ w 1158
j 230 500
+ p 392 I0
+ w 1158
j 230 520
+ p 392 I1
+ w 1164
j 210 500
+ w 1158
+ w 1158
j 290 720
+ p 6 2
+ w 24
j 220 730
+ p 5 2
+ w 24
j 220 760
+ s 7
+ w 24
j 220 750
+ w 24
+ w 24
j 170 500
+ p 1191 RC
+ w 1158
j 170 570
+ p 1191 CS
+ w 1164
j 900 350
+ p 1125 O
+ w 515
j 850 350
+ p 1125 I0
+ w 1128
j 90 600
+ p 1157 I0
+ w 1239
j 140 600
+ p 1157 O
+ w 1164
j 90 500
+ p 1154 I0
+ w 1235
j 140 500
+ p 1154 O
+ w 1158
j 250 900
+ p 321 1
+ w 1490
j 250 940
+ p 321 2
+ w 340
j 310 880
+ p 338 2
+ w 340
j 540 610
+ p 1106 O
+ w 1117
j 230 900
+ p 186 3
+ w 1490
j 490 610
+ p 1106 I0
+ w 862
j 310 840
+ p 338 1
+ w 1463
j 300 840
+ p 185 3
+ w 1463
j 220 670
+ w 1322
+ w 1322
j 220 690
+ p 5 1
+ w 1322
j 290 690
+ p 6 1
+ w 1322
j 70 670
+ s 238
+ w 1322
j 290 670
+ w 1322
+ w 1322
j 340 400
+ p 1194 IN
+ w 1464
j 310 340
+ p 1212 IN
+ w 1464
j 310 400
+ w 1464
+ w 1464
j 300 510
+ p 392 O
+ w 1464
j 310 510
+ w 1464
+ w 1464
j 1090 690
+ s 251
+ w 293
j 1090 680
+ s 250
+ w 295
j 1090 670
+ s 249
+ w 297
j 1090 660
+ s 248
+ w 299
j 1090 650
+ s 247
+ w 301
j 1090 640
+ s 246
+ w 303
j 1090 630
+ s 245
+ w 305
j 1090 700
+ s 252
+ w 291
j 1090 720
+ s 254
+ w 1449
j 1090 710
+ s 253
+ w 1451
j 470 710
+ p 1532 DB1
+ w 846
j 470 720
+ p 1532 DB0
+ w 844
j 470 630
+ p 1532 DB9
+ w 862
j 470 690
+ p 1532 DB3
+ w 850
j 470 700
+ p 1532 DB2
+ w 848
j 470 660
+ p 1532 DB6
+ w 1025
j 470 680
+ p 1532 DB4
+ w 852
j 470 670
+ p 1532 DB5
+ w 1026
j 380 710
+ p 1532 REF
+ w 1463
j 380 650
+ p 1532 CNVRT
+ w 1464
j 380 630
+ p 1532 IN
+ w 1322
j 470 650
+ p 1532 DB7
+ w 1024
j 440 750
+ p 1532 GND
+ w 1490
j 1010 720
+ p 1530 I9
+ w 668
j 1010 700
+ p 1530 I7
+ w 672
j 1010 690
+ p 1530 I6
+ w 674
j 1010 680
+ p 1530 I5
+ w 676
j 1010 670
+ p 1530 I4
+ w 678
j 1010 660
+ p 1530 I3
+ w 680
j 1010 650
+ p 1530 I2
+ w 682
j 1010 640
+ p 1530 I1
+ w 684
j 1010 630
+ p 1530 I0
+ w 686
j 1010 620
+ p 1530 OE
+ w 416
j 1080 690
+ p 1530 O6
+ w 293
j 1080 680
+ p 1530 O5
+ w 295
j 1080 670
+ p 1530 O4
+ w 297
j 1080 660
+ p 1530 O3
+ w 299
j 1080 650
+ p 1530 O2
+ w 301
j 1080 640
+ p 1530 O1
+ w 303
j 1080 630
+ p 1530 O0
+ w 305
j 1080 700
+ p 1530 O7
+ w 291
j 1080 720
+ p 1530 O9
+ w 1449
j 1080 710
+ p 1530 O8
+ w 1451
j 1010 710
+ p 1530 I8
+ w 670
j 710 630
+ p 1531 I0
+ w 1117
j 710 710
+ p 1531 I8
+ w 846
j 710 720
+ p 1531 I9
+ w 844
j 710 690
+ p 1531 I6
+ w 850
j 710 700
+ p 1531 I7
+ w 848
j 710 660
+ p 1531 I3
+ w 1025
j 710 680
+ p 1531 I5
+ w 852
j 710 670
+ p 1531 I4
+ w 1026
j 710 650
+ p 1531 I2
+ w 1024
j 780 720
+ p 1531 O9
+ w 668
j 780 700
+ p 1531 O7
+ w 672
j 780 690
+ p 1531 O6
+ w 674
j 780 680
+ p 1531 O5
+ w 676
j 780 670
+ p 1531 O4
+ w 678
j 780 660
+ p 1531 O3
+ w 680
j 780 650
+ p 1531 O2
+ w 682
j 780 640
+ p 1531 O1
+ w 684
j 780 630
+ p 1531 O0
+ w 686
j 780 710
+ p 1531 O8
+ w 670
j 470 640
+ p 1532 DB8
+ w 1564
j 710 640
+ p 1531 I1
+ w 1564
j 710 620
+ s 1570
+ p 1531 OE
j 90 1050
+ s 1579
+ w 1572
j 90 1080
+ s 1580
+ w 1574
j 90 1110
+ s 1581
+ w 1576
j 90 1140
+ s 1582
+ w 1578
j 150 1050
+ s 1583
+ w 1572
j 150 1080
+ s 1584
+ w 1574
j 150 1110
+ s 1585
+ w 1576
j 150 1140
+ s 1586
+ w 1578
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=C
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 1293 t 5 100 55 188 71 0 17
Reference Voltage
v 1294 v 0 95 55
95 70
195 70
195 55
95 55
;
v 1295 v 0 90 50
90 75
200 75
200 50
90 50
;
t 1296 t 5 580 215 665 235 0 10
Busy Logic
v 1297 v 0 580 215
580 230
645 230
645 215
580 215
;
v 1298 v 0 575 210
575 235
650 235
650 210
575 210
;
t 1299 t 5 720 560 776 576 0 10
Byte Order
v 1300 v 0 720 560
720 575
780 575
780 560
720 560
;
v 1301 v 0 715 555
715 580
785 580
785 555
715 555
;
v 1304 v 0 1005 560
1005 590
1085 590
1085 560
1005 560
;
t 1302 t 5 1075 565 1010 585 0 12
Output Delay
v 1303 v 0 1010 565
1010 585
1080 585
1080 565
1010 565
;
t 1305 t 5 50 874 164 892 0 22
Reference Voltage Gain
v 1306 v 0 45 875
45 890
165 890
165 875
45 875
;
v 1307 v 0 40 870
40 895
170 895
170 870
40 870
;
t 1254 t 5 1225 862 1465 840 0 17
PIN DESCRIPTIONS:
t 1256 t 5 1250 467 1430 450 0 22
PARAMETER DEFINITIONS:
t 1255 t 5 1235 1142 1415 1120 0 6
NOTES:
t 1253 t 6 1240 470 1620 765 0 657
Rin - Input Resistance
Cin - Input Capacitance
Ref_volt_gain - Reference Voltage Gain
R_ref_out - Reference Ouput Resistance
PTPxxMN - Min bus access and relinquish time
PTPxxTY - Typ bus access and relinquish time
PTPxxMX - Max bus access and relinquish time
TBUSYRC - BUSYbar Delay from R/Cbar low
TBUSY - BUSYbar Low time
MINHOLD - R/Cbar to CSbar hold time
MINSET - R/Cbar to CSbar setup time
MINLO - R/Cbar minimum pulse width
MINPER - Minimum time between conversions
CONVWHI - Minimum converte width high
CONVWLO - Minimum convert width Low
Cdin - Digital Input Capacitance (in IO MODEL)
IO_MODEL - Digital input model (see notes)


t 1252 t 6 1235 860 1615 1060 0 302
Pin functions for this model are based on AD976:
Vin - Analog Input
REF - Reference Input/Output
CAP - Reference Buffer Output
D[9:0] - Data bits 9-0. High impedance state when CSbar is HIGH or when R/Cbar is LOW.
R/Cbar - Read/Convert Input
CSbar - Chip Select Input
BUSYbar - Busy Output



t 1257 t 5 1235 1145 1725 1225 0 308
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
