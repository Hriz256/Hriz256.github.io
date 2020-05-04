*version 9.2 3571838207
u 1605
U? 11
V? 2
R? 4
E? 4
C? 2
PM? 1
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
pageloc 1 0 17608 
@status
c 100:04:11:19:01:58;958096918
a 0 98:03:07:11:01:17;891972077 e 
n 2409 97:09:06:10:08:53;876157733 e 
*page 1 0 1200 900 iB
@ports
port 196 Agnd 440 465 h
port 239 Agnd 360 295 h
port 568 IF_IN 150 245 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VinA
port 569 IF_IN 150 305 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VinB
port 570 IF_IN 150 405 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REF_IN
port 571 IF_IN 150 455 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REF_OUT
port 572 IF_IN 150 555 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REF_GND
port 605 IF_IN 150 65 h
a 1 xr 3 0 19 8 hcn 100 LABEL=OEN
port 567 IF_IN 150 115 h
a 1 xr 3 0 19 8 hcn 100 LABEL=CLOCK
port 195 Agnd 390 385 h
port 367 HI 695 195 h
port 608 IF_OUT 1280 305 h
a 1 xr 3 0 31 8 hcn 100 LABEL=MSB
port 582 IF_OUT 1280 355 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit4
port 583 IF_OUT 1280 345 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit3
port 585 IF_OUT 1280 335 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit2
port 573 IF_OUT 1280 315 h
a 1 xr 3 0 31 8 hcn 100 LABEL=OTR
port 584 IF_OUT 1280 325 h
a 1 xr 3 0 31 8 hcn 100 LABEL=\MSB\
port 1599 interface 1260 50 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AVDD
port 1600 interface 1260 70 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DVDD
port 1601 interface 1260 90 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND
port 1602 bubble 1320 50 d
a 1 x 3 0 0 0 hcn 100 LABEL=AVDD
port 1603 bubble 1320 70 d
a 1 x 3 0 0 0 hcn 100 LABEL=DVDD
port 1604 bubble 1320 90 d
a 1 x 3 0 0 0 hcn 100 LABEL=AGND
@parts
part 138 VSRC 240 475 h
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
a 1 u 13 13 -22 28 hcn 100 DC=2.5V
a 0 a 0:13 0 0 0 hln 100 PKGREF=V1
part 207 E 310 265 h
a 0 s 11 0 10 34 hln 100 PART=E
a 0 u 13 13 7 0 hln 100 GAIN=1
a 1 ap 9 0 23 36 hln 100 REFDES=E1
a 0 a 0:13 0 0 0 hln 100 PKGREF=E1
part 208 R 200 255 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 27 36 hln 100 VALUE=@Rin
a 0 ap 9 0 15 0 hln 100 REFDES=R1
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 209 C 250 255 d
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 u 13 0 30 3 hln 100 VALUE=@Cin
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 139 R 170 455 h
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 -5 31 hln 100 VALUE=@R_ref_out
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 140 R 310 445 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 5 57 hln 100 VALUE=@R_ref_in
a 0 ap 9 0 15 0 hln 100 REFDES=R3
a 0 a 0:13 0 0 0 hln 100 PKGREF=R3
part 111 INV 370 115 h
a 0 sp 11 0 40 40 hln 100 PART=INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U1
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
part 160 E 400 445 h
a 0 s 11 0 10 34 hln 100 PART=E
a 0 u 13 13 -21 58 hln 100 GAIN=@gain_ref_gnd
a 1 ap 9 0 25 36 hln 100 REFDES=E2
a 0 a 0:13 0 0 0 hln 100 PKGREF=E2
part 159 E 350 365 h
a 0 s 11 0 10 34 hln 100 PART=E
a 0 u 13 13 -29 1 hln 100 GAIN=@gain_ref
a 1 ap 9 0 24 35 hln 100 REFDES=E3
a 0 a 0:13 0 0 0 hln 100 PKGREF=E3
part 588 INV 1090 275 h
a 0 sp 11 0 40 40 hln 100 PART=INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
a 0 ap 9 0 40 0 hln 100 REFDES=U5
part 689 adcpar_constrnt 155 115 d
a 0 u 13 13 60 -10 hlb 100 PMAXFREQ=@MAXFREQ
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 45 83 hrn 100 PART=adcpar_constrnt
a 0 u 13 13 96 -10 hlb 100 PMIN_HI=@WIDTH_MIN_HI
a 0 u 13 13 83 -10 hlb 100 PMIN_LO=@WIDTH_MIN_LO
a 0 u 13 13 72 -10 hlb 100 PMINFREQ=@MINFREQ
a 0 a 9 0 29 43 hln 100 REFDES=U2
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
part 867 dc_buf 200 115 h
a 0 u 13 13 42 40 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 11 0 32 50 hln 100 PART=dc_buf
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 9 0 26 8 hln 100 REFDES=U3
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
part 866 dc_buf 200 65 h
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 46 40 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 11 0 48 48 hln 100 PART=dc_buf
a 0 a 9 0 28 0 hln 100 REFDES=U4
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
part 1503 dc_adc4 410 325 h
a 0 s 11 0 54 72 hrn 100 PART=dc_adc4
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 92 68 hln 100 CNVWLO=@CONVWLO
a 0 u 13 13 92 82 hln 100 CNVWHI=@CONVWHI
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
a 0 a 9 0 10 -2 hln 100 REFDES=U6
part 1509 dc_buf6 1185 295 h
a 0 s 11 0 60 94 hrn 100 PART=dc_buf6
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 a 9 0 10 -2 hln 100 REFDES=U9
part 1517 dc_ram6 715 255 h
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
a 0 a 9 0 30 0 hln 100 REFDES=U7
a 0 s 11 0 86 130 hrn 100 PART=dc_ram6
part 1553 dc_ram6 845 255 h
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 a 9 0 30 0 hln 100 REFDES=U8
a 0 s 11 0 84 128 hrn 100 PART=dc_ram6
part 1554 dc_ram6 970 255 h
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 a 9 0 30 0 hln 100 REFDES=U10
a 0 s 11 0 86 132 hrn 100 PART=dc_ram6
part 1 titleblk 1520 970 h
a 1 x 13 0 180 60 hcn 100 PAGETITLE=A/D Converter - Parallel Interface
a 1 s 13 0 350 10 hcn 100 PAGESIZE=B
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 146
a 0 up 0:33 0 0 0 hln 100 V=
s 170 455 150 455 145
a 0 up 33 0 160 454 hct 100 V=
w 228
a 0 up 0:33 0 0 0 hln 100 V=
s 250 305 250 285 236
s 250 305 200 305 418
s 310 305 250 305 325
a 0 up 33 0 280 304 hct 100 V=
s 200 305 200 295 233
s 200 305 150 305 235
s 310 275 310 305 227
w 214
a 0 up 0:33 0 0 0 hln 100 V=
s 250 255 250 245 224
s 250 245 200 245 412
a 0 up 33 0 225 244 hct 100 V=
s 300 245 250 245 319
s 200 245 200 255 221
s 200 245 150 245 223
s 300 265 300 245 215
s 310 265 300 265 213
w 241
a 0 up 0:33 0 0 0 hln 100 V=
s 360 275 360 295 242
a 0 up 33 0 362 285 hlt 100 V=
s 350 275 360 275 240
w 202
a 0 up 0:33 0 0 0 hln 100 V=
s 440 455 440 465 201
a 0 up 33 0 442 460 hlt 100 V=
w 142
a 0 up 0:33 0 0 0 hln 100 V=
s 240 455 240 475 143
s 210 455 240 455 141
a 0 up 33 0 225 454 hct 100 V=
w 452
a 0 up 0:33 0 0 0 hln 100 LVL=
s 200 115 155 115 1164
a 0 up 33 0 175 114 hct 100 LVL=
s 155 115 150 115 1592
w 604
a 0 up 0:33 0 0 0 hln 100 LVL=
s 200 65 150 65 851
a 0 up 33 0 175 64 hct 100 LVL=
w 179
a 0 up 0:33 0 0 0 hln 100 V=
s 400 455 350 455 176
s 350 455 350 555 174
s 240 555 150 555 157
s 240 555 240 515 155
s 350 555 310 555 153
s 310 555 240 555 798
s 310 485 310 555 151
s 350 375 350 455 188
a 0 up 33 0 352 415 hlt 100 V=
w 180
a 0 up 0:33 0 0 0 hln 100 V=
s 390 405 310 405 182
s 310 405 240 405 804
s 310 445 310 405 147
s 390 445 390 405 168
s 400 445 390 445 166
s 240 405 150 405 1382
s 240 365 240 405 192
s 350 365 240 365 190
a 0 up 33 0 295 364 hct 100 V=
w 200
a 0 up 0:33 0 0 0 hln 100 V=
s 390 375 390 385 199
a 0 up 33 0 392 380 hlt 100 V=
w 204
a 0 sr 0 0 0 0 hln 100 LABEL=Ground
a 0 up 0:33 0 0 0 hln 100 V=
s 470 445 470 385 205
a 0 up 33 0 472 415 hlt 100 V=
a 0 sr 3 0 472 415 hln 100 LABEL=Ground
s 440 445 470 445 203
w 1387
a 0 up 0:33 0 0 0 hln 100 V=
s 390 365 410 365 1388
a 0 up 33 0 400 364 hct 100 V=
w 1505
a 0 up 0:33 0 0 0 hln 100 LVL=
s 340 185 390 185 458
s 340 115 340 185 455
s 340 115 250 115 738
a 0 up 33 0 245 114 hct 100 LVL=
s 370 115 340 115 451
s 390 185 390 335 1406
s 390 335 410 335 1408
w 212
a 0 up 0:33 0 0 0 hln 100 V=
s 410 265 350 265 1095
a 0 up 33 0 380 264 hct 100 V=
s 410 265 410 325 1507
w 651
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 65 250 65 1139
a 0 up 33 0 632 64 hct 100 LVL=
s 1165 295 1185 295 1284
s 1165 65 1165 295 1501
w 1176
s 1140 305 1185 305 1177
s 1140 275 1140 305 1175
w 42
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 345 715 345 41
a 0 up 33 0 606 344 hct 100 LVL=
w 40
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 355 715 355 1131
a 0 up 33 0 606 354 hct 100 LVL=
w 46
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 325 715 325 45
a 0 up 33 0 606 324 hct 100 LVL=
w 44
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 335 715 335 43
a 0 up 33 0 606 334 hct 100 LVL=
w 1515
s 380 300 380 355 1412
s 380 355 410 355 1414
s 380 300 695 300 1481
s 695 300 695 315 1519
s 695 315 715 315 1521
w 1015
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 355 845 355 1014
a 0 up 33 0 825 354 hct 100 LVL=
w 1017
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 345 845 345 1016
a 0 up 33 0 825 344 hct 100 LVL=
w 1019
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 335 845 335 1018
a 0 up 33 0 825 334 hct 100 LVL=
w 1021
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 325 845 325 1020
a 0 up 33 0 825 324 hct 100 LVL=
w 1023
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 315 845 315 1022
a 0 up 33 0 825 314 hct 100 LVL=
w 477
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 335 970 335 476
a 0 up 33 0 955 334 hct 100 LVL=
w 479
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 325 970 325 478
a 0 up 33 0 955 324 hct 100 LVL=
w 481
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 315 970 315 480
a 0 up 33 0 955 314 hct 100 LVL=
w 473
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 355 970 355 472
a 0 up 33 0 955 354 hct 100 LVL=
w 475
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 345 970 345 474
a 0 up 33 0 955 344 hct 100 LVL=
w 1454
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 265 450 265 1103
s 450 265 450 165 1345
s 450 165 450 115 1535
s 805 165 450 165 1262
a 0 up 33 0 627 164 hct 100 LVL=
s 420 115 450 115 761
a 0 up 33 0 535 114 hct 100 LVL=
s 805 165 805 265 376
s 935 165 805 165 1215
s 805 265 845 265 952
s 935 265 935 165 1038
s 970 265 935 265 1560
w 1552
a 0 up 0:33 0 0 0 hln 100 LVL=
s 695 275 715 275 1403
s 695 275 695 255 349
s 695 255 715 255 661
s 695 255 695 195 1458
s 825 195 695 195 1462
s 825 255 825 195 1269
s 960 195 825 195 944
a 0 up 33 0 892 194 hct 100 LVL=
s 825 275 825 255 1196
s 845 255 825 255 358
s 960 255 960 195 1469
s 825 275 845 275 1197
s 960 255 970 255 782
s 960 275 960 255 1062
s 970 275 960 275 1562
w 531
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1185 355 1060 355 1582
a 0 up 33 0 1125 354 hct 100 LVL=
w 533
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1185 345 1060 345 1584
a 0 up 33 0 1125 344 hct 100 LVL=
w 535
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1060 335 1185 335 534
a 0 up 33 0 1123 334 hct 100 LVL=
w 1183
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 305 1280 305 1182
a 0 up 33 0 1267 304 hct 100 LVL=
w 643
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 345 1280 345 642
a 0 up 33 0 1267 344 hct 100 LVL=
w 645
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 335 1280 335 644
a 0 up 33 0 1267 334 hct 100 LVL=
w 629
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 355 1280 355 628
a 0 up 33 0 1267 354 hct 100 LVL=
w 649
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 315 1280 315 730
a 0 up 33 0 1267 314 hct 100 LVL=
w 647
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 325 1280 325 646
a 0 up 33 0 1267 324 hct 100 LVL=
w 1125
s 1060 315 1185 315 1213
w 537
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1060 325 1070 325 536
a 0 up 33 0 1123 324 hct 100 LVL=
s 1070 275 1090 275 586
a 0 up 33 0 1150 274 hct 100 LVL=
s 1070 325 1185 325 1591
s 1070 275 1070 325 1589
w 1594
s 1260 50 1320 50 1593
a 0 up 33 0 1290 49 hct 100 V=
w 1596
s 1260 70 1320 70 1595
a 0 up 33 0 1290 69 hct 100 V=
w 1598
s 1260 90 1320 90 1597
a 0 up 33 0 1290 89 hct 100 V=
@junction
j 340 115
+ w 1505
+ w 1505
j 150 115
+ s 567
+ w 452
j 150 65
+ s 605
+ w 604
j 150 555
+ s 572
+ w 179
j 240 555
+ w 179
+ w 179
j 310 485
+ p 140 2
+ w 179
j 310 555
+ w 179
+ w 179
j 170 455
+ p 139 1
+ w 146
j 150 455
+ s 571
+ w 146
j 150 405
+ s 570
+ w 180
j 310 445
+ p 140 1
+ w 180
j 310 405
+ w 180
+ w 180
j 250 285
+ p 209 2
+ w 228
j 250 305
+ w 228
+ w 228
j 200 295
+ p 208 2
+ w 228
j 150 305
+ s 569
+ w 228
j 200 305
+ w 228
+ w 228
j 310 275
+ p 207 2
+ w 228
j 250 255
+ p 209 1
+ w 214
j 250 245
+ w 214
+ w 214
j 200 255
+ p 208 1
+ w 214
j 150 245
+ s 568
+ w 214
j 200 245
+ w 214
+ w 214
j 310 265
+ p 207 1
+ w 214
j 360 295
+ s 239
+ w 241
j 350 275
+ p 207 4
+ w 241
j 350 265
+ p 207 3
+ w 212
j 440 465
+ s 196
+ w 202
j 210 455
+ p 139 2
+ w 142
j 240 515
+ p 138 -
+ w 179
j 240 475
+ p 138 +
+ w 142
j 370 115
+ p 111 I0
+ w 1505
j 400 455
+ p 160 2
+ w 179
j 400 445
+ p 160 1
+ w 180
j 440 455
+ p 160 4
+ w 202
j 440 445
+ p 160 3
+ w 204
j 350 375
+ p 159 2
+ w 179
j 350 455
+ w 179
+ w 179
j 240 405
+ w 180
+ w 180
j 350 365
+ p 159 1
+ w 180
j 390 375
+ p 159 4
+ w 200
j 390 385
+ s 195
+ w 200
j 390 365
+ p 159 3
+ w 1387
j 1140 275
+ p 588 O
+ w 1176
j 960 255
+ w 1552
+ w 1552
j 825 255
+ w 1552
+ w 1552
j 695 195
+ s 367
+ w 1552
j 825 195
+ w 1552
+ w 1552
j 695 255
+ w 1552
+ w 1552
j 420 115
+ p 111 O
+ w 1454
j 450 165
+ w 1454
+ w 1454
j 805 165
+ w 1454
+ w 1454
j 1280 305
+ s 608
+ w 1183
j 1280 355
+ s 582
+ w 629
j 1280 345
+ s 583
+ w 643
j 1280 335
+ s 585
+ w 645
j 1280 315
+ s 573
+ w 649
j 1280 325
+ s 584
+ w 647
j 1090 275
+ p 588 I0
+ w 537
j 1070 325
+ w 537
+ w 537
j 155 115
+ p 689 SIGNAL
+ w 452
j 200 115
+ p 867 I0
+ w 452
j 250 115
+ p 867 O
+ w 1505
j 200 65
+ p 866 I0
+ w 604
j 250 65
+ p 866 O
+ w 651
j 470 385
+ p 1503 GND
+ w 204
j 410 365
+ p 1503 REF
+ w 1387
j 410 335
+ p 1503 CNVRT
+ w 1505
j 410 325
+ p 1503 IN
+ w 212
j 500 345
+ p 1503 DB1
+ w 42
j 500 355
+ p 1503 DB0
+ w 40
j 500 325
+ p 1503 DB3
+ w 46
j 500 335
+ p 1503 DB2
+ w 44
j 410 355
+ p 1503 OVR
+ w 1515
j 715 345
+ p 1517 W1
+ w 42
j 715 355
+ p 1517 W0
+ w 40
j 715 325
+ p 1517 W3
+ w 46
j 715 335
+ p 1517 W2
+ w 44
j 715 315
+ p 1517 W4
+ w 1515
j 805 355
+ p 1517 R0
+ w 1015
j 805 345
+ p 1517 R1
+ w 1017
j 805 335
+ p 1517 R2
+ w 1019
j 805 325
+ p 1517 R3
+ w 1021
j 805 315
+ p 1517 R4
+ w 1023
j 715 265
+ p 1517 WRITE
+ w 1454
j 715 255
+ p 1517 READ
+ w 1552
j 715 275
+ p 1517 ADDRS
+ w 1552
j 845 355
+ p 1553 W0
+ w 1015
j 845 345
+ p 1553 W1
+ w 1017
j 845 335
+ p 1553 W2
+ w 1019
j 845 325
+ p 1553 W3
+ w 1021
j 845 315
+ p 1553 W4
+ w 1023
j 935 335
+ p 1553 R2
+ w 477
j 935 325
+ p 1553 R3
+ w 479
j 935 315
+ p 1553 R4
+ w 481
j 935 355
+ p 1553 R0
+ w 473
j 935 345
+ p 1553 R1
+ w 475
j 845 265
+ p 1553 WRITE
+ w 1454
j 845 255
+ p 1553 READ
+ w 1552
j 845 275
+ p 1553 ADDRS
+ w 1552
j 1185 295
+ p 1509 OE
+ w 651
j 1185 305
+ p 1509 I0
+ w 1176
j 1185 355
+ p 1509 I5
+ w 531
j 1185 345
+ p 1509 I4
+ w 533
j 1185 335
+ p 1509 I3
+ w 535
j 1255 305
+ p 1509 O0
+ w 1183
j 1255 345
+ p 1509 O4
+ w 643
j 1255 335
+ p 1509 O3
+ w 645
j 1255 355
+ p 1509 O5
+ w 629
j 1255 315
+ p 1509 O1
+ w 649
j 1255 325
+ p 1509 O2
+ w 647
j 1185 315
+ p 1509 I1
+ w 1125
j 1185 325
+ p 1509 I2
+ w 537
j 970 335
+ p 1554 W2
+ w 477
j 970 325
+ p 1554 W3
+ w 479
j 970 315
+ p 1554 W4
+ w 481
j 970 355
+ p 1554 W0
+ w 473
j 970 345
+ p 1554 W1
+ w 475
j 970 265
+ p 1554 WRITE
+ w 1454
j 970 255
+ p 1554 READ
+ w 1552
j 970 275
+ p 1554 ADDRS
+ w 1552
j 1060 355
+ p 1554 R0
+ w 531
j 1060 345
+ p 1554 R1
+ w 533
j 1060 335
+ p 1554 R2
+ w 535
j 1060 315
+ p 1554 R4
+ w 1125
j 1060 325
+ p 1554 R3
+ w 537
j 1260 50
+ s 1599
+ w 1594
j 1260 70
+ s 1600
+ w 1596
j 1260 90
+ s 1601
+ w 1598
j 1320 50
+ s 1602
+ w 1594
j 1320 70
+ s 1603
+ w 1596
j 1320 90
+ s 1604
+ w 1598
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=B
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 691 t 5 120 587 345 610 0 22
PARAMETER DEFINITIONS:
t 830 t 5 410 215 440 231 0 3
ADC
v 831 v 0 410 215
410 230
435 230
435 215
410 215
;
v 832 v 0 405 210
405 235
440 235
440 210
405 210
;
t 833 t 5 35 270 118 286 0 18
Differential Input
v 834 v 0 35 270
35 285
115 285
115 270
35 270
;
v 835 v 0 30 265
30 290
120 290
120 265
30 265
;
t 836 t 5 30 485 123 501 0 17
Reference Voltage
v 837 v 0 30 485
30 500
120 500
120 485
30 485
;
v 838 v 0 25 480
25 505
125 505
125 480
25 480
;
t 842 t 5 35 179 130 195 0 18
Contraint Checking
v 845 v 0 35 180
35 195
125 195
125 180
35 180
;
v 847 v 0 30 175
30 200
130 200
130 175
30 175
;
t 709 t 5 1010 589 1054 607 0 6
NOTES:
t 692 t 5 135 605 545 930 0 715
Rin - Differential input resistance
Cin - Differential input capacitance
R_ref_out - Internal reference resistance
R_ref_in - Input reference input resistance
gain_ref - To determine the input upper voltage expected
gain_ref_gnd - To determine the input lower voltage expected
TPADxxx - RAM propagation delay for Pipeline Delay for each of 3 stages
TPZxTY - Data access time
TPxZTY - Ouput float delay
MAXFREQ - Maximum frequency constraint
MINFREQ - Minimum frequency constraint
WIDTH_MIN_LO - Minimum clock pulse width low constraint
WIDTH_MIN_HIGH - Minimum clock pulse width high constraint
IO_MODEL - Digital input/output model to be used (see note)
Cdin - Digital input capacitance (in IO MODEL)
t 826 t 5 1190 166 1265 150 0 13
Output Buffer
v 828 v 0 1190 150
1190 165
1265 165
1265 150
1190 150
;
t 742 t 5 850 78 928 98 0 14
Pipeline Delay
v 824 v 0 850 80
850 95
920 95
920 80
850 80
;
v 825 v 0 845 75
845 100
925 100
925 75
845 75
;
v 829 v 0 1185 145
1185 170
1270 170
1270 145
1185 145
;
t 1165 t 5 530 594 1015 880 0 546
PIN DESCRIPTIONS (based on AD872):
MSB - Most Significant Bit
BIT2-BIT3 Data Bits 2 through 3
BIT4 (LSB) - Least Significant Bit
CLK - Clock Input. Conversions will be initiated on rising edge.
OTR - Out of Range is Active HIGH on leading edge of code 0 or the trailing edge of code 4096.
OEN - Output Enable
Vina - (+) Analog Input Signal
Vinb - (-) Analog Input Signal
REF_IN - Reference Input +2.5V input gives +/- 1V full-scale range
REF_OUT - +2.5V Reference Output. Tie to REF_IN for normal operation.
REF_GND - Reference Ground.
t 708 t 5 1475 605 1020 725 0 296
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The input/output model can be changed through the parameter IO_MODEL. Recommended models are IO_HCT for CMOS and IO_ALS for TTL. Custom models may also be defined.
