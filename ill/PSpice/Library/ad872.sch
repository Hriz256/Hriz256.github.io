*version 9.2 1794616828
u 1354
U? 11
V? 2
R? 4
E? 4
C? 2
PM? 1
? 10
@libraries
@analysis
.LIB adcpar.lib
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
pageloc 1 0 26505 
@status
c 100:04:11:18:55:24;958096524
a 0 98:03:07:09:12:26;891965546 e 
n 2409 97:09:06:10:08:53;876157733 e 
*page 1 0 1200 900 iB
@ports
port 195 Agnd 390 365 h
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
port 367 HI 555 145 h
port 585 IF_OUT 1190 275 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit2
port 583 IF_OUT 1190 285 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit3
port 582 IF_OUT 1190 295 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit4
port 581 IF_OUT 1190 305 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit5
port 580 IF_OUT 1190 315 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit6
port 579 IF_OUT 1190 325 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit7
port 578 IF_OUT 1190 335 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit8
port 577 IF_OUT 1190 345 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit9
port 576 IF_OUT 1190 355 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit10
port 575 IF_OUT 1190 365 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit11
port 574 IF_OUT 1190 375 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit12
port 573 IF_OUT 1190 255 h
a 1 xr 3 0 31 8 hcn 100 LABEL=OTR
port 608 IF_OUT 1190 245 h
a 1 xr 3 0 31 8 hcn 100 LABEL=MSB
port 584 IF_OUT 1190 265 h
a 1 xr 3 0 31 8 hcn 100 LABEL=\MSB\
port 1309 interface 1350 90 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DVDD
port 1312 bubble 1410 90 d
a 1 x 3 0 0 0 hcn 100 LABEL=DVDD
port 1313 bubble 1410 110 d
a 1 x 3 0 0 0 hcn 100 LABEL=AGND1
port 1310 interface 1350 110 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND1
port 1317 interface 1350 130 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND2
port 1316 bubble 1410 130 d
a 1 x 3 0 0 0 hcn 100 LABEL=AGND2
port 1321 interface 1350 150 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DRGND1
port 1320 bubble 1410 150 d
a 1 x 3 0 0 0 hcn 100 LABEL=DRGND1
port 1325 interface 1350 170 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DRGND2
port 1324 bubble 1410 170 d
a 1 x 3 0 0 0 hcn 100 LABEL=DRGND2
port 1329 interface 1350 190 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AVSS1
port 1328 bubble 1410 190 d
a 1 x 3 0 0 0 hcn 100 LABEL=AVSS1
port 1333 interface 1350 210 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AVSS2
port 1332 bubble 1410 210 d
a 1 x 3 0 0 0 hcn 100 LABEL=AVSS2
port 1308 interface 1350 70 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AVDD2
port 1311 bubble 1410 70 d
a 1 x 3 0 0 0 hcn 100 LABEL=AVDD2
port 1348 interface 1350 50 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AVDD1
port 1349 bubble 1410 50 d
a 1 x 3 0 0 0 hcn 100 LABEL=AVDD1
port 1337 interface 1350 230 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DRVDD1
port 1336 bubble 1410 230 d
a 1 x 3 0 0 0 hcn 100 LABEL=DRVDD1
port 1352 interface 1350 250 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DRVDD2
port 1353 bubble 1410 250 d
a 1 x 3 0 0 0 hcn 100 LABEL=DRVDD2
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
part 160 E 400 445 h
a 0 s 11 0 10 34 hln 100 PART=E
a 1 ap 9 0 25 36 hln 100 REFDES=E2
a 0 u 13 13 -21 58 hln 100 GAIN=@gain_ref_gnd
a 0 a 0:13 0 0 0 hln 100 PKGREF=E2
part 159 E 350 345 h
a 0 s 11 0 10 34 hln 100 PART=E
a 0 u 13 13 -29 1 hln 100 GAIN=@gain_ref
a 1 ap 9 0 24 35 hln 100 REFDES=E3
a 0 a 0:13 0 0 0 hln 100 PKGREF=E3
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
part 689 adcpar_constrnt 155 115 d
a 0 u 13 13 60 -10 hlb 100 PMAXFREQ=@MAXFREQ
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 45 83 hrn 100 PART=adcpar_constrnt
a 0 u 13 13 96 -10 hlb 100 PMIN_HI=@WIDTH_MIN_HI
a 0 u 13 13 83 -10 hlb 100 PMIN_LO=@WIDTH_MIN_LO
a 0 u 13 13 72 -10 hlb 100 PMINFREQ=@MINFREQ
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
a 0 ap 9 0 29 43 hln 100 REFDES=U2
part 867 dc_buf 200 115 h
a 0 u 13 13 42 40 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 11 0 32 50 hln 100 PART=dc_buf
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
a 0 ap 9 0 26 8 hln 100 REFDES=U3
part 864 dc_ram14 625 205 h
a 0 s 11 0 78 200 hrn 100 PART=dc_ram14
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
a 0 ap 9 0 10 -2 hln 100 REFDES=U4
part 862 dc_ram14 755 205 h
a 0 s 11 0 78 200 hrn 100 PART=dc_ram14
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
a 0 ap 9 0 10 -2 hln 100 REFDES=U5
part 619 dc_buf14 1095 235 h
a 0 s 11 0 60 170 hrn 100 PART=dc_buf14
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 -10 214 hlb 100 PTPHZTY=@TPHZTY
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 ap 9 0 10 -2 hln 100 REFDES=U8
part 863 dc_ram14 885 205 h
a 0 s 11 0 78 200 hrn 100 PART=dc_ram14
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 ap 9 0 10 -2 hln 100 REFDES=U9
part 866 dc_buf 200 65 h
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 46 40 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 11 0 48 48 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
a 0 ap 9 0 28 0 hln 100 REFDES=U6
part 1189 DC_ADC12 410 265 h
a 0 sp 11 0 -30 158 hln 100 PART=DC_ADC12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 ap 9 0 10 8 hln 100 REFDES=U10
a 0 u 13 13 81 166 hln 100 CNVWHI=@CONVWHI
a 0 u 13 13 80 180 hln 100 CNVWLO=@CONVWLO
part 588 INV 1000 215 h
a 0 sp 11 0 40 40 hln 100 PART=INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
a 0 ap 9 0 40 0 hln 100 REFDES=U7
part 1 titleblk 1520 970 h
a 1 x 13 0 180 60 hcn 100 PAGETITLE=A/D Converter - Parallel Interface
a 1 s 13 0 350 10 hcn 100 PAGESIZE=B
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 179
a 0 up 0:33 0 0 0 hln 100 V=
s 350 355 350 455 188
a 0 up 33 0 352 405 hlt 100 V=
s 400 455 350 455 176
s 350 455 350 555 174
s 240 555 150 555 157
s 240 555 240 515 155
s 350 555 310 555 153
s 310 555 240 555 798
s 310 485 310 555 151
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
w 200
a 0 up 0:33 0 0 0 hln 100 V=
s 390 355 390 365 199
a 0 up 33 0 392 360 hlt 100 V=
w 142
a 0 up 0:33 0 0 0 hln 100 V=
s 240 455 240 475 143
s 210 455 240 455 141
a 0 up 33 0 225 454 hct 100 V=
w 180
a 0 up 0:33 0 0 0 hln 100 V=
s 240 345 240 405 192
s 350 345 240 345 190
a 0 up 33 0 295 344 hct 100 V=
s 390 405 310 405 182
s 310 405 240 405 804
s 310 445 310 405 147
s 390 445 390 405 168
s 400 445 390 445 166
s 240 405 150 405 1090
w 452
a 0 up 0:33 0 0 0 hln 100 LVL=
s 200 115 155 115 1163
a 0 up 33 0 175 114 hct 100 LVL=
s 155 115 150 115 1164
w 604
a 0 up 0:33 0 0 0 hln 100 LVL=
s 200 65 150 65 851
a 0 up 33 0 175 64 hct 100 LVL=
w 596
a 0 up 0:33 0 0 0 hln 100 LVL=
s 340 115 250 115 738
a 0 up 33 0 245 114 hct 100 LVL=
s 410 285 390 285 256
s 390 185 390 285 460
s 340 185 390 185 458
s 340 115 340 185 455
s 370 115 340 115 451
w 1249
a 0 up 0:33 0 0 0 hln 100 LVL=
s 420 115 450 115 761
a 0 up 33 0 535 114 hct 100 LVL=
s 450 215 450 115 383
s 625 215 450 215 1103
s 715 115 450 115 1246
a 0 up 33 0 582 114 hct 100 LVL=
s 715 215 755 215 952
s 715 115 715 215 376
s 715 115 845 115 1227
s 885 215 845 215 975
s 845 215 845 115 1038
w 651
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1075 65 250 65 1139
a 0 up 33 0 587 64 hct 100 LVL=
s 1075 235 1095 235 1171
s 1075 65 1075 235 1169
w 1025
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 305 755 305 1024
a 0 up 33 0 735 304 hct 100 LVL=
w 1023
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 315 755 315 1022
a 0 up 33 0 735 314 hct 100 LVL=
w 1021
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 325 755 325 1020
a 0 up 33 0 735 324 hct 100 LVL=
w 1019
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 335 755 335 1018
a 0 up 33 0 735 334 hct 100 LVL=
w 1017
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 345 755 345 1016
a 0 up 33 0 735 344 hct 100 LVL=
w 1015
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 355 755 355 1014
a 0 up 33 0 735 354 hct 100 LVL=
w 1013
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 365 755 365 1012
a 0 up 33 0 735 364 hct 100 LVL=
w 489
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 275 885 275 488
a 0 up 33 0 865 274 hct 100 LVL=
w 487
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 285 885 285 486
a 0 up 33 0 865 284 hct 100 LVL=
w 485
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 295 885 295 484
a 0 up 33 0 865 294 hct 100 LVL=
w 483
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 305 885 305 482
a 0 up 33 0 865 304 hct 100 LVL=
w 481
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 315 885 315 480
a 0 up 33 0 865 314 hct 100 LVL=
w 479
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 325 885 325 478
a 0 up 33 0 865 324 hct 100 LVL=
w 477
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 335 885 335 476
a 0 up 33 0 865 334 hct 100 LVL=
w 475
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 345 885 345 474
a 0 up 33 0 865 344 hct 100 LVL=
w 473
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 355 885 355 472
a 0 up 33 0 865 354 hct 100 LVL=
w 471
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 365 885 365 470
a 0 up 33 0 865 364 hct 100 LVL=
w 1031
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 275 755 275 1100
a 0 up 33 0 735 274 hct 100 LVL=
w 1029
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 285 755 285 1101
a 0 up 33 0 735 284 hct 100 LVL=
w 1027
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 295 755 295 1102
a 0 up 33 0 735 294 hct 100 LVL=
w 493
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 255 885 255 1105
a 0 up 33 0 865 254 hct 100 LVL=
w 469
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 375 885 375 1128
a 0 up 33 0 865 374 hct 100 LVL=
w 1011
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 375 755 375 1110
a 0 up 33 0 735 374 hct 100 LVL=
w 1035
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 255 755 255 1144
a 0 up 33 0 735 254 hct 100 LVL=
w 547
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 275 1095 275 546
a 0 up 33 0 1035 274 hct 100 LVL=
w 545
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 285 1095 285 544
a 0 up 33 0 1035 284 hct 100 LVL=
w 543
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 295 1095 295 542
a 0 up 33 0 1035 294 hct 100 LVL=
w 541
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 305 1095 305 540
a 0 up 33 0 1035 304 hct 100 LVL=
w 539
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 315 1095 315 538
a 0 up 33 0 1035 314 hct 100 LVL=
w 537
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 325 1095 325 536
a 0 up 33 0 1035 324 hct 100 LVL=
w 535
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 335 1095 335 534
a 0 up 33 0 1035 334 hct 100 LVL=
w 533
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 345 1095 345 532
a 0 up 33 0 1035 344 hct 100 LVL=
w 531
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 355 1095 355 530
a 0 up 33 0 1035 354 hct 100 LVL=
w 529
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 365 1095 365 528
a 0 up 33 0 1035 364 hct 100 LVL=
w 606
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 375 1095 375 921
a 0 up 33 0 1035 374 hct 100 LVL=
w 1176
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1050 215 1050 245 1175
s 1050 245 1095 245 1177
a 0 up 33 0 1072 244 hct 100 LVL=
w 38
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 365 480 365 1203
a 0 up 33 0 564 364 hct 100 LVL=
w 36
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 375 480 375 1202
a 0 up 33 0 564 374 hct 100 LVL=
w 40
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 355 480 355 1201
a 0 up 33 0 564 354 hct 100 LVL=
w 52
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 295 480 295 1200
a 0 up 33 0 564 294 hct 100 LVL=
w 54
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 285 480 285 1199
a 0 up 33 0 564 284 hct 100 LVL=
w 50
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 305 480 305 1198
a 0 up 33 0 564 304 hct 100 LVL=
w 48
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 315 480 315 1197
a 0 up 33 0 564 314 hct 100 LVL=
w 46
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 325 480 325 1196
a 0 up 33 0 564 324 hct 100 LVL=
w 44
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 335 480 335 1195
a 0 up 33 0 564 334 hct 100 LVL=
w 42
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 345 480 345 1194
a 0 up 33 0 564 344 hct 100 LVL=
w 56
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 275 480 275 1193
a 0 up 33 0 564 274 hct 100 LVL=
w 1213
s 735 145 735 175 1040
s 885 225 870 225 985
s 870 225 870 205 1062
s 870 205 870 175 1260
s 870 205 885 205 782
s 870 175 735 175 944
s 755 205 735 205 358
s 735 205 735 175 1238
s 735 225 735 205 1003
s 755 225 735 225 363
s 625 225 605 225 339
s 605 225 605 205 341
s 605 205 625 205 661
s 605 205 605 145 349
s 605 145 735 145 1234
s 555 145 605 145 362
w 212
a 0 up 0:33 0 0 0 hln 100 V=
s 410 265 350 265 1293
a 0 up 33 0 380 264 hct 100 V=
w 645
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 275 1190 275 644
a 0 up 33 0 1177 274 hct 100 LVL=
w 643
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 285 1190 285 642
a 0 up 33 0 1177 284 hct 100 LVL=
w 641
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 295 1190 295 640
a 0 up 33 0 1177 294 hct 100 LVL=
w 639
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 305 1190 305 638
a 0 up 33 0 1177 304 hct 100 LVL=
w 637
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 315 1190 315 636
a 0 up 33 0 1177 314 hct 100 LVL=
w 635
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 325 1190 325 634
a 0 up 33 0 1177 324 hct 100 LVL=
w 633
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 335 1190 335 632
a 0 up 33 0 1177 334 hct 100 LVL=
w 631
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 345 1190 345 1184
a 0 up 33 0 1177 344 hct 100 LVL=
w 629
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 355 1190 355 628
a 0 up 33 0 1177 354 hct 100 LVL=
w 627
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 365 1190 365 626
a 0 up 33 0 1177 364 hct 100 LVL=
w 625
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 375 1190 375 624
a 0 up 33 0 1177 374 hct 100 LVL=
w 1125
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 255 1095 255 1181
a 0 up 33 0 1037 254 hct 100 LVL=
w 649
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 255 1190 255 730
a 0 up 33 0 1177 254 hct 100 LVL=
w 647
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 265 1190 265 1285
a 0 up 33 0 1177 264 hct 100 LVL=
w 1033
a 0 up 0:33 0 0 0 hln 100 LVL=
s 715 265 755 265 1279
a 0 up 33 0 735 264 hct 100 LVL=
w 491
a 0 up 0:33 0 0 0 hln 100 LVL=
s 845 265 885 265 1281
a 0 up 33 0 865 264 hct 100 LVL=
w 198
a 0 sr 0 0 0 0 hln 100 LABEL=Ref
a 0 up 0:33 0 0 0 hln 100 V=
s 390 345 410 345 197
a 0 sr 3 0 405 358 hcn 100 LABEL=Ref
a 0 up 33 0 400 344 hct 100 V=
w 204
a 0 sr 0 0 0 0 hln 100 LABEL=Ground
a 0 up 0:33 0 0 0 hln 100 V=
s 450 445 450 405 1291
a 0 sr 3 0 452 425 hln 100 LABEL=Ground
a 0 up 33 0 452 425 hlt 100 V=
s 440 445 450 445 203
w 1245
a 0 up 0:33 0 0 0 hln 100 LVL=
s 380 325 380 245 246
s 410 325 380 325 1134
s 605 245 605 255 1084
s 605 255 625 255 1086
s 380 245 605 245 1287
a 0 up 33 0 492 244 hct 100 LVL=
w 549
a 0 up 0:33 0 0 0 hln 100 LVL=
s 975 265 980 265 1153
a 0 up 33 0 1035 264 hct 100 LVL=
s 980 215 1000 215 586
a 0 up 33 0 1060 214 hct 100 LVL=
s 980 265 1095 265 1300
s 980 215 980 265 1295
w 58
a 0 up 0:33 0 0 0 hln 100 LVL=
s 625 265 480 265 1277
a 0 up 33 0 564 264 hct 100 LVL=
w 1183
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1165 245 1190 245 1301
a 0 up 33 0 1177 244 hct 100 LVL=
w 1323
s 1350 170 1410 170 1322
a 0 up 33 0 1380 169 hct 100 V=
w 1327
s 1350 190 1410 190 1326
a 0 up 33 0 1380 189 hct 100 V=
w 1331
s 1350 210 1410 210 1330
a 0 up 33 0 1380 209 hct 100 V=
w 1335
s 1350 230 1410 230 1334
a 0 up 33 0 1380 229 hct 100 V=
w 1315
s 1350 130 1410 130 1314
a 0 up 33 0 1380 129 hct 100 V=
w 1319
s 1350 150 1410 150 1344
a 0 up 33 0 1390 149 hct 100 V=
w 1303
s 1350 70 1410 70 1302
a 0 up 33 0 1380 69 hct 100 V=
w 1305
s 1350 90 1410 90 1304
a 0 up 33 0 1380 89 hct 100 V=
w 1307
s 1350 110 1410 110 1306
a 0 up 33 0 1380 109 hct 100 V=
w 1347
s 1350 50 1410 50 1346
a 0 up 33 0 1380 49 hct 100 V=
w 1351
s 1350 250 1410 250 1350
a 0 up 33 0 1380 249 hct 100 V=
@junction
j 340 115
+ w 596
+ w 596
j 150 65
+ s 605
+ w 604
j 350 455
+ w 179
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
j 240 405
+ w 180
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
j 390 365
+ s 195
+ w 200
j 210 455
+ p 139 2
+ w 142
j 370 115
+ p 111 I0
+ w 596
j 420 115
+ p 111 O
+ w 1249
j 450 115
+ w 1249
+ w 1249
j 155 115
+ p 689 SIGNAL
+ w 452
j 250 115
+ p 867 O
+ w 596
j 200 115
+ p 867 I0
+ w 452
j 200 65
+ p 866 I0
+ w 604
j 250 65
+ p 866 O
+ w 651
j 1095 275
+ p 619 I3
+ w 547
j 1095 285
+ p 619 I4
+ w 545
j 1095 295
+ p 619 I5
+ w 543
j 1095 305
+ p 619 I6
+ w 541
j 1095 315
+ p 619 I7
+ w 539
j 1095 325
+ p 619 I8
+ w 537
j 1095 335
+ p 619 I9
+ w 535
j 1095 345
+ p 619 I10
+ w 533
j 1095 355
+ p 619 I11
+ w 531
j 1095 365
+ p 619 I12
+ w 529
j 1095 375
+ p 619 I13
+ w 606
j 1095 265
+ p 619 I2
+ w 549
j 1050 215
+ p 588 O
+ w 1176
j 1095 245
+ p 619 I0
+ w 1176
j 1095 255
+ p 619 I1
+ w 1125
j 1165 245
+ p 619 O0
+ w 1183
j 1165 255
+ p 619 O1
+ w 649
j 1165 265
+ p 619 O2
+ w 647
j 1165 275
+ p 619 O3
+ w 645
j 1165 285
+ p 619 O4
+ w 643
j 1165 295
+ p 619 O5
+ w 641
j 1165 305
+ p 619 O6
+ w 639
j 1165 315
+ p 619 O7
+ w 637
j 1165 325
+ p 619 O8
+ w 635
j 1165 335
+ p 619 O9
+ w 633
j 1165 355
+ p 619 O11
+ w 629
j 1165 345
+ p 619 O10
+ w 631
j 1165 365
+ p 619 O12
+ w 627
j 1165 375
+ p 619 O13
+ w 625
j 870 205
+ w 1213
+ w 1213
j 735 175
+ w 1213
+ w 1213
j 735 205
+ w 1213
+ w 1213
j 605 205
+ w 1213
+ w 1213
j 555 145
+ s 367
+ w 1213
j 605 145
+ w 1213
+ w 1213
j 1095 235
+ p 619 OE
+ w 651
j 715 115
+ w 1249
+ w 1249
j 150 555
+ s 572
+ w 179
j 150 455
+ s 571
+ w 146
j 150 405
+ s 570
+ w 180
j 150 305
+ s 569
+ w 228
j 150 245
+ s 568
+ w 214
j 150 115
+ s 567
+ w 452
j 390 345
+ p 159 3
+ w 198
j 350 355
+ p 159 2
+ w 179
j 350 345
+ p 159 1
+ w 180
j 390 355
+ p 159 4
+ w 200
j 410 325
+ p 1189 OVR
+ w 1245
j 410 345
+ p 1189 REF
+ w 198
j 450 405
+ p 1189 GND
+ w 204
j 410 265
+ p 1189 IN
+ w 212
j 410 285
+ p 1189 CNVRT
+ w 596
j 480 265
+ p 1189 DB11
+ w 58
j 480 365
+ p 1189 DB1
+ w 38
j 480 375
+ p 1189 DB0
+ w 36
j 480 355
+ p 1189 DB2
+ w 40
j 480 295
+ p 1189 DB8
+ w 52
j 480 285
+ p 1189 DB9
+ w 54
j 480 305
+ p 1189 DB7
+ w 50
j 480 315
+ p 1189 DB6
+ w 48
j 480 325
+ p 1189 DB5
+ w 46
j 480 335
+ p 1189 DB4
+ w 44
j 480 345
+ p 1189 DB3
+ w 42
j 480 275
+ p 1189 DB10
+ w 56
j 240 515
+ p 138 -
+ w 179
j 240 475
+ p 138 +
+ w 142
j 625 215
+ p 864 WRITE
+ w 1249
j 715 305
+ p 864 R7
+ w 1025
j 715 315
+ p 864 R6
+ w 1023
j 715 325
+ p 864 R5
+ w 1021
j 715 335
+ p 864 R4
+ w 1019
j 715 345
+ p 864 R3
+ w 1017
j 715 355
+ p 864 R2
+ w 1015
j 715 365
+ p 864 R1
+ w 1013
j 715 275
+ p 864 R10
+ w 1031
j 715 285
+ p 864 R9
+ w 1029
j 715 295
+ p 864 R8
+ w 1027
j 715 375
+ p 864 R0
+ w 1011
j 715 255
+ p 864 R12
+ w 1035
j 715 265
+ p 864 R11
+ w 1033
j 625 265
+ p 864 W11
+ w 58
j 625 365
+ p 864 W1
+ w 38
j 625 375
+ p 864 W0
+ w 36
j 625 355
+ p 864 W2
+ w 40
j 625 295
+ p 864 W8
+ w 52
j 625 285
+ p 864 W9
+ w 54
j 625 305
+ p 864 W7
+ w 50
j 625 315
+ p 864 W6
+ w 48
j 625 325
+ p 864 W5
+ w 46
j 625 335
+ p 864 W4
+ w 44
j 625 345
+ p 864 W3
+ w 42
j 625 275
+ p 864 W10
+ w 56
j 625 225
+ p 864 ADDRS
+ w 1213
j 625 205
+ p 864 READ
+ w 1213
j 625 255
+ p 864 W12
+ w 1245
j 755 305
+ p 862 W7
+ w 1025
j 755 315
+ p 862 W6
+ w 1023
j 755 325
+ p 862 W5
+ w 1021
j 755 335
+ p 862 W4
+ w 1019
j 755 345
+ p 862 W3
+ w 1017
j 755 355
+ p 862 W2
+ w 1015
j 755 365
+ p 862 W1
+ w 1013
j 845 275
+ p 862 R10
+ w 489
j 845 285
+ p 862 R9
+ w 487
j 845 295
+ p 862 R8
+ w 485
j 845 305
+ p 862 R7
+ w 483
j 845 315
+ p 862 R6
+ w 481
j 845 325
+ p 862 R5
+ w 479
j 845 335
+ p 862 R4
+ w 477
j 845 345
+ p 862 R3
+ w 475
j 845 355
+ p 862 R2
+ w 473
j 845 365
+ p 862 R1
+ w 471
j 755 275
+ p 862 W10
+ w 1031
j 755 285
+ p 862 W9
+ w 1029
j 755 295
+ p 862 W8
+ w 1027
j 845 255
+ p 862 R12
+ w 493
j 845 375
+ p 862 R0
+ w 469
j 755 375
+ p 862 W0
+ w 1011
j 755 255
+ p 862 W12
+ w 1035
j 845 265
+ p 862 R11
+ w 491
j 755 265
+ p 862 W11
+ w 1033
j 755 205
+ p 862 READ
+ w 1213
j 755 225
+ p 862 ADDRS
+ w 1213
j 755 215
+ p 862 WRITE
+ w 1249
j 885 275
+ p 863 W10
+ w 489
j 885 285
+ p 863 W9
+ w 487
j 885 295
+ p 863 W8
+ w 485
j 885 305
+ p 863 W7
+ w 483
j 885 315
+ p 863 W6
+ w 481
j 885 325
+ p 863 W5
+ w 479
j 885 335
+ p 863 W4
+ w 477
j 885 345
+ p 863 W3
+ w 475
j 885 355
+ p 863 W2
+ w 473
j 885 365
+ p 863 W1
+ w 471
j 885 255
+ p 863 W12
+ w 493
j 885 375
+ p 863 W0
+ w 469
j 885 265
+ p 863 W11
+ w 491
j 975 275
+ p 863 R10
+ w 547
j 975 285
+ p 863 R9
+ w 545
j 975 295
+ p 863 R8
+ w 543
j 975 305
+ p 863 R7
+ w 541
j 975 315
+ p 863 R6
+ w 539
j 975 325
+ p 863 R5
+ w 537
j 975 335
+ p 863 R4
+ w 535
j 975 345
+ p 863 R3
+ w 533
j 975 355
+ p 863 R2
+ w 531
j 975 365
+ p 863 R1
+ w 529
j 975 375
+ p 863 R0
+ w 606
j 975 265
+ p 863 R11
+ w 549
j 975 255
+ p 863 R12
+ w 1125
j 885 225
+ p 863 ADDRS
+ w 1213
j 885 205
+ p 863 READ
+ w 1213
j 885 215
+ p 863 WRITE
+ w 1249
j 440 445
+ p 160 3
+ w 204
j 400 455
+ p 160 2
+ w 179
j 400 445
+ p 160 1
+ w 180
j 440 455
+ p 160 4
+ w 202
j 1190 275
+ s 585
+ w 645
j 1190 285
+ s 583
+ w 643
j 1190 295
+ s 582
+ w 641
j 1190 305
+ s 581
+ w 639
j 1190 315
+ s 580
+ w 637
j 1190 325
+ s 579
+ w 635
j 1190 335
+ s 578
+ w 633
j 1190 345
+ s 577
+ w 631
j 1190 355
+ s 576
+ w 629
j 1190 365
+ s 575
+ w 627
j 1190 375
+ s 574
+ w 625
j 1000 215
+ p 588 I0
+ w 549
j 980 265
+ w 549
+ w 549
j 1190 255
+ s 573
+ w 649
j 1190 265
+ s 584
+ w 647
j 1190 245
+ s 608
+ w 1183
j 1410 170
+ s 1324
+ w 1323
j 1350 170
+ s 1325
+ w 1323
j 1410 190
+ s 1328
+ w 1327
j 1350 190
+ s 1329
+ w 1327
j 1410 210
+ s 1332
+ w 1331
j 1350 210
+ s 1333
+ w 1331
j 1410 230
+ s 1336
+ w 1335
j 1350 230
+ s 1337
+ w 1335
j 1410 130
+ s 1316
+ w 1315
j 1350 130
+ s 1317
+ w 1315
j 1350 150
+ s 1321
+ w 1319
j 1410 150
+ s 1320
+ w 1319
j 1350 70
+ s 1308
+ w 1303
j 1410 70
+ s 1311
+ w 1303
j 1350 90
+ s 1309
+ w 1305
j 1410 90
+ s 1312
+ w 1305
j 1410 110
+ s 1313
+ w 1307
j 1350 110
+ s 1310
+ w 1307
j 1350 50
+ s 1348
+ w 1347
j 1410 50
+ s 1349
+ w 1347
j 1350 250
+ s 1352
+ w 1351
j 1410 250
+ s 1353
+ w 1351
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
t 826 t 5 1100 166 1175 150 0 13
Output Buffer
v 828 v 0 1100 150
1100 165
1175 165
1175 150
1100 150
;
t 742 t 5 760 78 838 98 0 14
Pipeline Delay
v 824 v 0 760 80
760 95
830 95
830 80
760 80
;
v 825 v 0 755 75
755 100
835 100
835 75
755 75
;
v 829 v 0 1095 145
1095 170
1180 170
1180 145
1095 145
;
t 1165 t 5 530 880 990 595 0 549
PIN DESCRIPTIONS (based on AD872):
MSB - Most Significant Bit
BIT2-BIT11 Data Bits 2 through 11
BIT12 (LSB) - Least Significant Bit
CLK - Clock Input. Conversions will be initiated on rising edge.
OTR - Out of Range is Active HIGH on leading edge of code 0 or the trailing edge of code 4096.
OEN - Output Enable
Vina - (+) Analog Input Signal
Vinb - (-) Analog Input Signal
REF_IN - Reference Input +2.5V input gives +/- 1V full-scale range
REF_OUT - +2.5V Reference Output. Tie to REF_IN for normal operation.
REF_GND - Reference Ground.
t 692 t 5 135 930 485 605 0 774
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
CONVWHI - Convert width high
CONVWLO - Convert width low
IO_MODEL - Digital input/output model to be used (see note)
Cdin - Digital input capacitance (in IO MODEL)
t 708 t 5 1475 605 1020 725 0 296
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The input/output model can be changed through the parameter IO_MODEL. Recommended models are IO_HCT for CMOS and IO_ALS for TTL. Custom models may also be defined.
