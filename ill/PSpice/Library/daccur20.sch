*version 9.2 1131110828
u 1598
U? 11
V? 2
E? 2
R? 3
H? 2
MULT? 2
G? 3
C? 3
D? 3
LIMIT? 8
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
pageloc 1 0 23103 
@status
a 0 98:03:14:12:31:38;892582298 e 
c 98:04:11:12:29:47;894914987
*page 1 0 1700 1200 iX
@ports
port 197 Agnd 610 920 h
port 168 Agnd 490 670 h
port 169 Agnd 540 590 h
port 325 IF_OUT 1070 510 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Iout
port 316 Agnd 710 550 h
port 251 Agnd 380 830 H
port 332 IF_OUT 1070 640 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Ccomp
port 1165 hi 115 430 h
port 223 IF_IN 125 915 h
a 1 xr 3 0 19 8 hcn 100 LABEL=Iref
port 166 IF_IN 120 630 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 165 IF_IN 120 620 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 164 IF_IN 120 610 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB2
port 162 IF_IN 120 590 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB4
port 160 IF_IN 120 570 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB6
port 158 IF_IN 120 550 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB8
port 156 IF_IN 120 530 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB10
port 154 IF_IN 120 510 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB12
port 152 IF_IN 120 490 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB14
port 151 IF_IN 120 480 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB15
port 153 IF_IN 120 500 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB13
port 155 IF_IN 120 520 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB11
port 157 IF_IN 120 540 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB9
port 159 IF_IN 120 560 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB7
port 161 IF_IN 120 580 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB5
port 163 IF_IN 120 600 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB3
port 1179 IF_IN 120 460 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB17
port 1181 IF_IN 120 440 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB19
port 1180 IF_IN 120 450 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB18
port 1178 IF_IN 120 470 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB16
port 1590 interface 120 120 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VCC
port 1591 interface 120 140 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VEE
port 1592 interface 120 160 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REFGND
port 1593 interface 120 180 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND
port 1594 bubble 170 120 d
a 1 x 3 0 0 0 hcn 100 LABEL=VCC
port 1595 bubble 170 140 d
a 1 x 3 0 0 0 hcn 100 LABEL=VEE
port 1596 bubble 170 160 d
a 1 x 3 0 0 0 hcn 100 LABEL=REFGND
port 1597 bubble 170 180 d
a 1 x 3 0 0 0 hcn 100 LABEL=AGND
@parts
part 180 E 530 890 U
a 0 s 11 0 10 34 hln 100 PART=E
a 1 ap 9 0 10 4 hln 100 REFDES=E1
a 0 u 0 0 0 10 hln 100 GAIN=500000
a 0 a 0:13 0 0 0 hln 100 PKGREF=E1
part 207 R 540 840 h
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R1
a 0 u 13 0 15 25 hln 100 VALUE=18k
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 167 Vsrc 490 610 h
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
a 1 u 13 13 38 26 hcn 100 DC=-1V
a 0 a 0:13 0 0 0 hln 100 PKGREF=V1
part 585 inv 330 100 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U1
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
part 589 inv 330 150 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U2
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
part 592 inv 330 200 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U3
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
part 595 inv 330 250 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U4
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
part 598 inv 330 300 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U5
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
part 601 inv 330 350 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U6
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
part 604 inv 330 400 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U7
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
part 252 MULT 630 510 U
a 0 sp 0 0 16 32 hln 100 PART=MULT
a 1 ap 0 0 10 2 hln 100 REFDES=MULT1
a 0 a 0:13 0 0 0 hln 100 PKGREF=MULT1
part 261 G 720 510 h
a 0 s 11 0 10 34 hln 100 PART=G
a 1 ap 9 0 10 4 hln 100 REFDES=G2
a 0 a 0:13 0 0 0 hln 100 PKGREF=G2
part 228 H 420 880 V
a 0 s 11 0 10 34 hln 100 PART=H
a 1 ap 9 0 10 4 hln 100 REFDES=H1
a 0 u 13 13 0 10 hln 100 GAIN=8
a 0 a 0:13 0 0 0 hln 100 PKGREF=H1
part 317 C 810 520 d
a 0 u 13 0 56 15 hln 100 VALUE=@Cout
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 43 14 hln 100 REFDES=C1
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 416 DACcurLIM 430 150 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 ap 0 0 -12 -2 hln 100 REFDES=LIMIT1
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT1
part 352 DACCUR 500 840 h
a 0 a 9 0 15 0 hln 100 REFDES=D1
a 0 s 13 0 2 25 hln 100 MODEL=DACCUR
a 0 a 0:13 0 0 0 hln 100 PKGREF=D1
part 353 DACCUR 490 870 v
a 0 a 9 0 5 2 hln 100 REFDES=D2
a 0 s 13 0 19 4 hln 100 MODEL=DACCUR
a 0 a 0:13 0 0 0 hln 100 PKGREF=D2
part 415 DACcurLIM 430 100 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 ap 0 0 -12 -2 hln 100 REFDES=LIMIT2
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT2
part 417 DACcurLIM 430 200 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT3
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT3
part 418 DACcurLIM 430 250 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT4
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT4
part 421 DACcurLIM 430 400 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 ap 0 0 -12 -2 hln 100 REFDES=LIMIT5
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT5
part 420 DACcurLIM 430 350 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT6
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT6
part 419 DACcurLIM 430 300 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 ap 0 0 -12 -2 hln 100 REFDES=LIMIT7
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT7
part 483 admtce 580 220 h
a 0 s 11 0 68 90 hrn 100 PART=admtce
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 ap 9 0 10 -2 hln 100 REFDES=U8
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
part 333 C 590 890 d
a 0 u 13 0 27 35 hln 100 VALUE=10p
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C2
a 0 a 0:13 0 0 0 hln 100 PKGREF=C2
part 1566 dc_buf20 130 430 h
a 0 sp 11 0 58 234 hrn 100 PART=dc_buf20
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 -12 248 hlb 100 PTPZLTY=
a 0 u 13 13 -12 258 hlb 100 PTPZHTY=
a 0 u 13 13 -12 268 hlb 100 PTPLZTY=
a 0 u 13 13 -12 278 hlb 100 PTPHZTY=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 ap 9 0 10 -2 hln 100 REFDES=U10
part 1567 dc_dac20 380 440 h
a 0 sp 11 0 62 224 hrn 100 PART=dc_dac20
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 ap 9 0 10 0 hln 100 REFDES=U9
part 481 GMULT 900 490 U
a 0 sp 11 0 10 34 hln 100 PART=GMULT
a 1 ap 9 0 62 67 hln 100 REFDES=G1
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
part 364 R 540 515 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 u 13 0 15 25 hln 100 VALUE=1G
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 1 titleblk 1700 1200 h
a 1 x 13 0 180 60 hcn 100 PAGETITLE=D/A Converter - Current Output
a 1 s 13 0 350 10 hcn 100 PAGESIZE=User
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 182
a 0 up 0:33 0 0 0 hln 100 V=
s 530 890 510 890 181
s 510 890 510 920 183
s 610 920 590 920 198
s 610 880 570 880 189
s 610 920 610 880 187
s 590 920 510 920 334
a 0 up 33 0 550 919 hct 100 V=
w 355
a 0 up 0:33 0 0 0 hln 100 V=
s 530 840 540 840 354
a 0 up 33 0 535 839 hct 100 V=
w 291
a 0 up 0:33 0 0 0 hln 100 V=
s 420 880 490 880 363
a 0 up 33 0 455 879 hct 100 V=
s 490 880 530 880 868
s 490 870 490 880 361
w 359
a 0 up 0:33 0 0 0 hln 100 V=
s 490 840 500 840 356
a 0 up 33 0 495 839 hct 100 V=
w 175
a 0 up 0:33 0 0 0 hln 100 V=
s 490 650 490 670 174
a 0 up 33 0 492 660 hlt 100 V=
w 517
a 0 up 0:33 0 0 0 hln 100 V=
s 530 300 480 300 522
a 0 up 33 0 505 299 hct 100 V=
s 530 260 530 300 520
s 580 260 530 260 518
s 580 261 580 260 516
w 511
a 0 up 0:33 0 0 0 hln 100 V=
s 550 350 480 350 514
s 550 270 550 350 512
a 0 up 33 0 552 310 hlt 100 V=
s 580 270 550 270 510
w 505
a 0 up 0:33 0 0 0 hln 100 V=
s 560 400 480 400 508
s 560 280 560 400 506
a 0 up 33 0 562 340 hlt 100 V=
s 580 280 560 280 504
w 503
a 0 up 0:33 0 0 0 hln 100 V=
s 580 250 480 250 502
a 0 up 33 0 530 249 hct 100 V=
w 497
a 0 up 0:33 0 0 0 hln 100 V=
s 540 200 480 200 500
a 0 up 33 0 510 199 hct 100 V=
s 540 240 540 200 498
s 580 240 540 240 496
w 491
a 0 up 0:33 0 0 0 hln 100 V=
s 550 150 480 150 494
s 550 230 550 150 492
a 0 up 33 0 552 190 hlt 100 V=
s 580 230 550 230 490
w 485
a 0 up 0:33 0 0 0 hln 100 V=
s 560 100 480 100 488
s 560 220 560 100 486
a 0 up 33 0 562 160 hlt 100 V=
s 580 220 560 220 484
w 553
a 0 sr 0 0 0 0 hln 100 LABEL=admittance
a 0 up 0:33 0 0 0 hln 100 V=
s 760 250 760 460 556
a 0 sr 3 0 762 355 hln 100 LABEL=admittance
a 0 up 33 0 762 356 hlt 100 V=
s 760 460 900 460 554
s 660 250 760 250 558
w 588
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 100 380 100 422
a 0 up 33 0 405 99 hct 100 V=
a 0 up 33 0 405 99 hct 100 LVL=
w 607
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 150 380 150 424
a 0 up 33 0 405 149 hct 100 V=
w 608
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 200 380 200 426
a 0 up 33 0 405 199 hct 100 V=
a 0 up 33 0 405 199 hct 100 LVL=
w 609
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 250 380 250 428
a 0 up 33 0 405 249 hct 100 V=
a 0 up 33 0 405 249 hct 100 LVL=
w 610
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 300 380 300 430
a 0 up 33 0 405 299 hct 100 V=
a 0 up 33 0 405 299 hct 100 LVL=
w 611
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 350 380 350 432
a 0 up 33 0 405 349 hct 100 V=
a 0 up 33 0 405 349 hct 100 LVL=
w 612
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 400 380 400 434
a 0 up 33 0 405 399 hct 100 V=
a 0 up 33 0 405 399 hct 100 LVL=
w 525
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 900 490 890 490 524
s 890 510 970 510 543
s 960 480 970 480 539
s 970 510 1070 510 929
a 0 up 33 0 1020 509 hct 100 LVL=
s 970 480 970 510 541
s 890 490 890 510 526
s 810 510 890 510 715
a 0 up 33 0 925 509 hct 100 V=
s 810 510 810 520 318
s 760 510 810 510 314
w 254
a 0 up 0:33 0 0 0 hln 100 V=
s 420 770 420 840 285
s 640 520 640 770 257
a 0 up 33 0 642 645 hlt 100 V=
s 640 770 420 770 255
w 674
a 0 up 0:33 0 0 0 hln 100 V=
s 660 510 720 510 725
a 0 up 33 0 690 509 hct 100 V=
w 288
s 380 830 380 800 264
s 410 840 410 800 287
s 410 800 380 800 289
w 1086
a 0 up 0:33 0 0 0 hln 100 V=
s 590 890 580 890 204
s 580 840 580 890 191
s 580 890 570 890 840
s 790 640 790 890 328
s 1070 640 790 640 330
a 0 up 33 0 930 639 hct 100 V=
s 790 890 590 890 335
w 1074
a 0 up 0:33 0 0 0 hln 100 V=
s 410 915 410 880 1072
s 410 915 125 915 293
a 0 up 33 0 233 914 hct 100 V=
w 171
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 490 580 490 610 172
a 0 up 33 0 492 595 hlt 100 V=
s 460 580 490 580 170
a 0 up 33 0 475 579 hct 100 LVL=
w 1242
s 130 430 115 430 1490
w 1177
s 130 470 120 470 1486
a 0 up 33 0 100 469 hct 100 LVL=
w 1175
s 130 450 120 450 1485
a 0 up 33 0 100 449 hct 100 LVL=
w 1171
s 130 440 120 440 1483
a 0 up 33 0 100 439 hct 100 LVL=
w 1169
s 130 460 120 460 1482
a 0 up 33 0 100 459 hct 100 LVL=
w 144
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 600 120 600 1481
a 0 up 33 0 100 599 hct 100 LVL=
w 140
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 580 120 580 1480
a 0 up 33 0 100 579 hct 100 LVL=
w 136
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 560 120 560 1479
a 0 up 33 0 100 559 hct 100 LVL=
w 132
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 540 120 540 1478
a 0 up 33 0 100 539 hct 100 LVL=
w 128
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 520 120 520 1477
a 0 up 33 0 100 519 hct 100 LVL=
w 124
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 500 120 500 1476
a 0 up 33 0 100 499 hct 100 LVL=
w 120
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 480 120 480 1475
a 0 up 33 0 100 479 hct 100 LVL=
w 122
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 490 120 490 1474
a 0 up 33 0 100 489 hct 100 LVL=
w 126
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 510 120 510 1473
a 0 up 33 0 100 509 hct 100 LVL=
w 130
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 530 120 530 1472
a 0 up 33 0 100 529 hct 100 LVL=
w 134
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 550 120 550 1471
a 0 up 33 0 100 549 hct 100 LVL=
w 138
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 570 120 570 1470
a 0 up 33 0 100 569 hct 100 LVL=
w 142
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 590 120 590 1469
a 0 up 33 0 100 589 hct 100 LVL=
w 146
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 610 120 610 1468
a 0 up 33 0 100 609 hct 100 LVL=
w 148
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 620 120 620 1467
a 0 up 33 0 100 619 hct 100 LVL=
w 150
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 630 120 630 1466
a 0 up 33 0 100 629 hct 100 LVL=
w 20
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 330 100 270 100 23
s 200 440 270 440 1442
s 270 440 380 440 1565
s 270 100 270 440 1563
w 26
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 330 150 260 150 29
s 200 450 260 450 1443
s 260 450 380 450 1562
s 260 150 260 450 1560
w 32
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 330 200 250 200 35
s 200 460 250 460 1444
s 250 460 380 460 1559
s 250 200 250 460 1557
w 38
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 330 250 240 250 41
a 0 up 33 0 210 249 hct 100 LVL=
s 200 470 240 470 1445
s 240 470 380 470 1556
s 240 250 240 470 1554
w 44
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 330 300 230 300 47
a 0 up 33 0 205 299 hct 100 LVL=
s 200 480 230 480 1446
s 230 480 380 480 1551
s 230 300 230 480 1549
w 50
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 330 350 220 350 53
a 0 up 33 0 200 349 hct 100 LVL=
s 200 490 220 490 1447
s 220 490 380 490 1546
s 220 350 220 490 1544
w 56
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 330 400 210 400 59
a 0 up 33 0 195 399 hct 100 LVL=
s 200 500 210 500 1448
s 210 500 380 500 1543
s 210 400 210 500 1541
w 1120
s 200 510 380 510 1449
w 1122
s 200 520 380 520 1450
w 1124
s 200 530 380 530 1451
w 1126
s 200 540 380 540 1452
w 1128
s 200 550 380 550 1453
w 1142
s 200 560 380 560 1454
w 1144
s 200 570 380 570 1455
w 1146
s 200 580 380 580 1456
w 1148
s 200 590 380 590 1457
w 1150
s 200 600 380 600 1458
w 1152
s 200 610 380 610 1459
w 1154
s 200 620 380 620 1460
w 1156
s 200 630 380 630 1461
w 717
a 0 up 0:33 0 0 0 hln 100 V=
s 870 480 870 550 531
s 900 480 870 480 529
s 870 450 870 480 537
s 900 450 870 450 535
s 870 550 810 550 714
s 810 550 770 550 721
s 770 520 760 520 312
s 770 550 770 520 310
s 710 550 770 550 308
a 0 up 33 0 740 549 hct 100 V=
s 710 520 710 550 306
s 720 520 710 520 304
s 870 415 870 450 550
s 960 460 980 460 544
s 980 460 980 415 546
s 980 415 870 415 548
w 260
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 460 510 540 510 745
a 0 up 33 0 585 509 hct 100 V=
a 0 up 33 0 585 509 hct 100 LVL=
s 540 510 630 510 1580
s 540 515 540 510 365
w 177
a 0 up 0:33 0 0 0 hln 100 V=
s 540 560 540 590 178
s 460 560 540 560 176
a 0 up 33 0 500 559 hct 100 V=
s 540 555 540 560 1578
w 1583
s 120 120 170 120 1582
w 1585
s 170 140 120 140 1584
w 1587
s 120 160 170 160 1586
w 1589
s 170 180 120 180 1588
@junction
j 530 890
+ p 180 1
+ w 182
j 590 920
+ p 333 2
+ w 182
j 610 920
+ s 197
+ w 182
j 570 880
+ p 180 4
+ w 182
j 580 840
+ p 207 2
+ w 1086
j 570 890
+ p 180 3
+ w 1086
j 590 890
+ p 333 1
+ w 1086
j 580 890
+ w 1086
+ w 1086
j 540 840
+ p 207 1
+ w 355
j 420 880
+ p 228 1
+ w 291
j 530 880
+ p 180 2
+ w 291
j 490 880
+ w 291
+ w 291
j 540 590
+ s 169
+ w 177
j 490 650
+ p 167 -
+ w 175
j 490 670
+ s 168
+ w 175
j 490 610
+ p 167 +
+ w 171
j 900 460
+ p 481 IN2+
+ w 553
j 330 100
+ p 585 I0
+ w 20
j 380 100
+ p 585 O
+ w 588
j 330 150
+ p 589 I0
+ w 26
j 380 150
+ p 589 O
+ w 607
j 330 200
+ p 592 I0
+ w 32
j 380 200
+ p 592 O
+ w 608
j 330 250
+ p 595 I0
+ w 38
j 380 250
+ p 595 O
+ w 609
j 330 300
+ p 598 I0
+ w 44
j 380 300
+ p 598 O
+ w 610
j 330 350
+ p 601 I0
+ w 50
j 380 350
+ p 601 O
+ w 611
j 330 400
+ p 604 I0
+ w 56
j 380 400
+ p 604 O
+ w 612
j 900 490
+ p 481 IN1+
+ w 525
j 970 510
+ w 525
+ w 525
j 1070 510
+ s 325
+ w 525
j 960 480
+ p 481 OUT+
+ w 525
j 890 510
+ w 525
+ w 525
j 810 520
+ p 317 1
+ w 525
j 760 510
+ p 261 3
+ w 525
j 810 510
+ w 525
+ w 525
j 900 480
+ p 481 IN1-
+ w 717
j 870 480
+ w 717
+ w 717
j 900 450
+ p 481 IN2-
+ w 717
j 810 550
+ p 317 2
+ w 717
j 760 520
+ p 261 4
+ w 717
j 710 550
+ s 316
+ w 717
j 770 550
+ w 717
+ w 717
j 720 520
+ p 261 2
+ w 717
j 420 840
+ p 228 3
+ w 254
j 640 520
+ p 252 IN1
+ w 254
j 630 510
+ p 252 IN2
+ w 260
j 660 510
+ p 252 OUT
+ w 674
j 720 510
+ p 261 1
+ w 674
j 380 830
+ s 251
+ w 288
j 410 840
+ p 228 4
+ w 288
j 410 880
+ p 228 2
+ w 1074
j 480 150
+ p 416 OUT
+ w 491
j 430 150
+ p 416 IN
+ w 607
j 530 840
+ p 352 2
+ w 355
j 500 840
+ p 352 1
+ w 359
j 490 870
+ p 353 1
+ w 291
j 490 840
+ p 353 2
+ w 359
j 480 100
+ p 415 OUT
+ w 485
j 430 100
+ p 415 IN
+ w 588
j 480 200
+ p 417 OUT
+ w 497
j 430 200
+ p 417 IN
+ w 608
j 480 250
+ p 418 OUT
+ w 503
j 430 250
+ p 418 IN
+ w 609
j 480 400
+ p 421 OUT
+ w 505
j 430 400
+ p 421 IN
+ w 612
j 480 350
+ p 420 OUT
+ w 511
j 430 350
+ p 420 IN
+ w 611
j 480 300
+ p 419 OUT
+ w 517
j 430 300
+ p 419 IN
+ w 610
j 580 261
+ p 483 B11
+ w 517
j 580 270
+ p 483 B10
+ w 511
j 580 280
+ p 483 B9
+ w 505
j 580 250
+ p 483 B12
+ w 503
j 580 240
+ p 483 B13
+ w 497
j 580 230
+ p 483 B14
+ w 491
j 580 220
+ p 483 B15
+ w 485
j 660 250
+ p 483 ADM
+ w 553
j 1070 640
+ s 332
+ w 1086
j 115 430
+ s 1165
+ w 1242
j 125 915
+ s 223
+ w 1074
j 210 500
+ w 56
+ w 56
j 220 490
+ w 50
+ w 50
j 230 480
+ w 44
+ w 44
j 240 470
+ w 38
+ w 38
j 250 460
+ w 32
+ w 32
j 260 450
+ w 26
+ w 26
j 270 440
+ w 20
+ w 20
j 120 470
+ s 1178
+ w 1177
j 120 450
+ s 1180
+ w 1175
j 120 440
+ s 1181
+ w 1171
j 120 460
+ s 1179
+ w 1169
j 120 600
+ s 163
+ w 144
j 120 580
+ s 161
+ w 140
j 120 560
+ s 159
+ w 136
j 120 540
+ s 157
+ w 132
j 120 520
+ s 155
+ w 128
j 120 500
+ s 153
+ w 124
j 120 480
+ s 151
+ w 120
j 120 490
+ s 152
+ w 122
j 120 510
+ s 154
+ w 126
j 120 530
+ s 156
+ w 130
j 120 550
+ s 158
+ w 134
j 120 570
+ s 160
+ w 138
j 120 590
+ s 162
+ w 142
j 120 610
+ s 164
+ w 146
j 120 620
+ s 165
+ w 148
j 120 630
+ s 166
+ w 150
j 460 510
+ p 1567 OUT
+ w 260
j 460 560
+ p 1567 REF
+ w 177
j 380 440
+ p 1567 DB19
+ w 20
j 380 450
+ p 1567 DB18
+ w 26
j 380 460
+ p 1567 DB17
+ w 32
j 380 470
+ p 1567 DB16
+ w 38
j 380 480
+ p 1567 DB15
+ w 44
j 380 490
+ p 1567 DB14
+ w 50
j 380 500
+ p 1567 DB13
+ w 56
j 380 510
+ p 1567 DB12
+ w 1120
j 380 520
+ p 1567 DB11
+ w 1122
j 380 530
+ p 1567 DB10
+ w 1124
j 380 540
+ p 1567 DB9
+ w 1126
j 380 550
+ p 1567 DB8
+ w 1128
j 380 560
+ p 1567 DB7
+ w 1142
j 380 570
+ p 1567 DB6
+ w 1144
j 380 580
+ p 1567 DB5
+ w 1146
j 380 590
+ p 1567 DB4
+ w 1148
j 380 600
+ p 1567 DB3
+ w 1150
j 380 610
+ p 1567 DB2
+ w 1152
j 380 620
+ p 1567 DB1
+ w 1154
j 380 630
+ p 1567 DB0
+ w 1156
j 460 580
+ p 1567 GND
+ w 171
j 130 430
+ p 1566 OE
+ w 1242
j 130 470
+ p 1566 I3
+ w 1177
j 130 450
+ p 1566 I1
+ w 1175
j 130 440
+ p 1566 I0
+ w 1171
j 130 460
+ p 1566 I2
+ w 1169
j 130 600
+ p 1566 I16
+ w 144
j 130 580
+ p 1566 I14
+ w 140
j 130 560
+ p 1566 I12
+ w 136
j 130 540
+ p 1566 I10
+ w 132
j 130 520
+ p 1566 I8
+ w 128
j 130 500
+ p 1566 I6
+ w 124
j 130 480
+ p 1566 I4
+ w 120
j 130 490
+ p 1566 I5
+ w 122
j 130 510
+ p 1566 I7
+ w 126
j 130 530
+ p 1566 I9
+ w 130
j 130 550
+ p 1566 I11
+ w 134
j 130 570
+ p 1566 I13
+ w 138
j 130 590
+ p 1566 I15
+ w 142
j 130 610
+ p 1566 I17
+ w 146
j 130 620
+ p 1566 I18
+ w 148
j 130 630
+ p 1566 I19
+ w 150
j 200 440
+ p 1566 O0
+ w 20
j 200 450
+ p 1566 O1
+ w 26
j 200 460
+ p 1566 O2
+ w 32
j 200 470
+ p 1566 O3
+ w 38
j 200 480
+ p 1566 O4
+ w 44
j 200 490
+ p 1566 O5
+ w 50
j 200 500
+ p 1566 O6
+ w 56
j 200 510
+ p 1566 O7
+ w 1120
j 200 520
+ p 1566 O8
+ w 1122
j 200 530
+ p 1566 O9
+ w 1124
j 200 540
+ p 1566 O10
+ w 1126
j 200 550
+ p 1566 O11
+ w 1128
j 200 560
+ p 1566 O12
+ w 1142
j 200 570
+ p 1566 O13
+ w 1144
j 200 580
+ p 1566 O14
+ w 1146
j 200 590
+ p 1566 O15
+ w 1148
j 200 600
+ p 1566 O16
+ w 1150
j 200 610
+ p 1566 O17
+ w 1152
j 200 620
+ p 1566 O18
+ w 1154
j 200 630
+ p 1566 O19
+ w 1156
j 870 450
+ w 717
+ w 717
j 960 460
+ p 481 OUT-
+ w 717
j 540 515
+ p 364 1
+ w 260
j 540 510
+ w 260
+ w 260
j 540 555
+ p 364 2
+ w 177
j 540 560
+ w 177
+ w 177
j 120 120
+ s 1590
+ w 1583
j 120 140
+ s 1591
+ w 1585
j 120 160
+ s 1592
+ w 1587
j 120 180
+ s 1593
+ w 1589
j 170 120
+ s 1594
+ w 1583
j 170 140
+ s 1595
+ w 1585
j 170 160
+ s 1596
+ w 1587
j 170 180
+ s 1597
+ w 1589
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=User
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 958 t 5 600 164 727 182 0 28
Equivalent Output Admittance
v 961 v 0 595 160
595 185
745 185
745 160
590 160
;
v 962 v 0 590 155
590 190
750 190
750 155
590 155
;
t 963 t 5 680 474 820 500 0 28
Voltage to Current Converter
t 964 t 5 530 794 670 815 0 28
Current to Voltage Converter
v 972 v 0 675 475
675 490
815 490
815 475
675 475
;
v 973 v 0 670 470
670 495
820 495
820 470
670 470
;
v 974 v 0 525 795
525 810
665 810
665 795
525 795
;
v 976 v 0 520 790
520 815
670 815
670 790
520 790
;
t 977 t 5 660 492 515 470 0 24
8*Iref*(Vdacout/Vdacref)
v 979 v 0 510 470
510 490
645 490
645 470
510 470
;
v 980 v 0 505 465
505 495
650 495
650 465
505 465
;
t 734 t 5 270 992 510 970 0 17
PIN DESCRIPTIONS:
t 730 t 5 670 997 850 975 0 6
NOTES:
t 732 t 5 30 987 210 970 0 22
PARAMETER DEFINITIONS:
t 733 t 6 40 1065 260 990 0 127
Cout - Analog Output capacitance
Cin - Digital Input capacitance (in IO MODEL)
IO_MODEL - Digital input model (see notes)


t 952 t 5 130 369 196 387 0 13
Input Buffers
v 953 v 0 130 370
130 385
190 385
195 385
195 370
130 370
;
v 954 v 0 125 365
125 390
200 390
200 365
125 365
;
t 735 t 6 280 990 560 1080 0 191
Pin functions for this model are based on DAC16 
Iref - Reference Current Input
DB19-DB0 - 20-Bit Digital Input Bus. DB19 is MSB.
Iout - Current Output
Ccomp - Current Ladder Compensation
t 965 t 5 860 410 1115 355 0 45
Iout=8*Iref*((2^20-1)-Digital_Code)/(2^20-1))
v 1083 v 0 855 350
855 385
1070 385
1070 350
855 350
;
v 1081 v 0 860 355
860 380
1065 380
1065 355
860 355
;
t 955 t 5 400 664 429 682 0 3
DAC
v 956 v 0 390 660
390 685
440 685
440 660
390 660
;
v 957 v 0 395 665
395 680
435 680
435 665
395 665
;
t 731 t 5 680 995 1170 1075 0 413
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
3. Settling time is not modeled. Propagation delay can be added to the DAC timing model for this delay.
