*version 9.2 143084320
u 1304
U? 20
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
pageloc 1 0 22565 
@status
a 0 98:03:14:11:39:51;892579191 e 
c 98:04:11:12:29:02;894914942
*page 1 0 1700 1200 iX
@ports
port 197 Agnd 610 920 h
port 251 Agnd 380 830 H
port 332 IF_OUT 1070 640 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Ccomp
port 223 IF_IN 80 915 h
a 1 xr 3 0 19 8 hcn 100 LABEL=Iref
port 1151 Agnd 380 550 h
port 168 Agnd 430 655 h
port 325 IF_OUT 1070 490 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Iout
port 169 Agnd 540 545 h
port 316 Agnd 710 530 h
port 160 IF_IN 80 550 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 159 IF_IN 80 500 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 158 IF_IN 80 450 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB2
port 157 IF_IN 80 400 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB3
port 156 IF_IN 80 350 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB4
port 155 IF_IN 80 300 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB5
port 154 IF_IN 80 250 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB6
port 153 IF_IN 80 200 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB7
port 152 IF_IN 80 150 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB8
port 151 IF_IN 80 100 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB9
port 1296 interface 80 700 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VCC
port 1297 interface 80 720 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VEE
port 1298 interface 80 740 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REFGND
port 1299 interface 80 760 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND
port 1300 bubble 130 700 d
a 1 x 3 0 0 0 hcn 100 LABEL=VCC
port 1301 bubble 130 720 d
a 1 x 3 0 0 0 hcn 100 LABEL=VEE
port 1302 bubble 130 740 d
a 1 x 3 0 0 0 hcn 100 LABEL=REFGND
port 1303 bubble 130 760 d
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
part 228 H 420 880 V
a 0 s 11 0 10 34 hln 100 PART=H
a 1 ap 9 0 10 4 hln 100 REFDES=H1
a 0 u 13 13 0 10 hln 100 GAIN=8
a 0 a 0:13 0 0 0 hln 100 PKGREF=H1
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
part 337 dc_buf 130 150 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U8
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
part 338 dc_buf 130 200 h
a 0 s 11 0 40 40 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U9
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
part 339 dc_buf 130 250 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U10
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
part 340 dc_buf 130 300 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U11
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
part 341 dc_buf 130 350 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U12
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
part 342 dc_buf 130 400 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U13
a 0 a 0:13 0 0 0 hln 100 PKGREF=U13
part 343 dc_buf 130 450 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U14
a 0 a 0:13 0 0 0 hln 100 PKGREF=U14
part 344 dc_buf 130 500 h
a 0 s 11 0 36 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U15
a 0 a 0:13 0 0 0 hln 100 PKGREF=U15
part 345 dc_buf 130 550 h
a 0 s 11 0 38 34 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U16
a 0 a 0:13 0 0 0 hln 100 PKGREF=U16
part 336 dc_buf 130 100 h
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U17
a 0 ap 9 0 40 0 hln 100 REFDES=U17
part 333 C 590 890 d
a 0 u 13 0 27 35 hln 100 VALUE=10p
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 167 Vsrc 430 610 h
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
a 1 u 13 13 38 26 hcn 100 DC=-1V
a 0 a 0:13 0 0 0 hln 100 PKGREF=V1
part 252 MULT 630 490 U
a 0 sp 0 0 16 32 hln 100 PART=MULT
a 1 ap 0 0 10 2 hln 100 REFDES=MULT1
a 0 a 0:13 0 0 0 hln 100 PKGREF=MULT1
part 364 R 540 500 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 u 13 0 15 25 hln 100 VALUE=1G
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 317 C 810 495 d
a 0 u 13 0 56 15 hln 100 VALUE=@Cout
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 43 14 hln 100 REFDES=C2
a 0 a 0:13 0 0 0 hln 100 PKGREF=C2
part 261 G 720 490 h
a 0 s 11 0 10 34 hln 100 PART=G
a 1 ap 9 0 10 4 hln 100 REFDES=G1
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
part 483 admtce 580 220 h
a 0 s 11 0 68 90 hrn 100 PART=admtce
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U18
a 0 ap 9 0 10 -2 hln 100 REFDES=U18
part 1232 dc_dac10 380 440 h
a 0 sp 11 0 124 162 hrn 100 PART=dc_dac10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U19
a 0 ap 9 0 12 -2 hln 100 REFDES=U19
part 481 GMULT 900 460 U
a 0 sp 11 0 10 34 hln 100 PART=GMULT
a 1 ap 9 0 62 67 hln 100 REFDES=G2
a 0 a 0:13 0 0 0 hln 100 PKGREF=G2
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
w 288
s 380 830 380 800 264
s 410 840 410 800 287
s 410 800 380 800 289
w 138
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 550 80 550 1037
a 0 up 33 0 105 549 hct 100 LVL=
w 136
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 500 80 500 1032
a 0 up 33 0 105 499 hct 100 LVL=
w 134
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 450 80 450 1027
a 0 up 33 0 105 449 hct 100 LVL=
w 132
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 400 80 400 1022
a 0 up 33 0 105 399 hct 100 LVL=
w 130
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 350 80 350 1011
a 0 up 33 0 105 349 hct 100 LVL=
w 128
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 300 80 300 1006
a 0 up 33 0 105 299 hct 100 LVL=
w 126
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 250 80 250 1001
a 0 up 33 0 105 249 hct 100 LVL=
w 124
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 200 80 200 996
a 0 up 33 0 105 199 hct 100 LVL=
w 122
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 150 80 150 991
a 0 up 33 0 105 149 hct 100 LVL=
w 120
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 100 80 100 984
a 0 up 33 0 105 99 hct 100 LVL=
w 1131
a 0 up 0:33 0 0 0 hln 100 V=
s 590 890 580 890 204
s 580 840 580 890 191
s 580 890 570 890 840
s 790 640 790 890 328
s 790 890 590 890 335
s 1070 640 790 640 330
a 0 up 33 0 930 639 hct 100 V=
w 1074
a 0 up 0:33 0 0 0 hln 100 V=
s 410 915 410 880 1072
s 410 915 80 915 293
a 0 up 33 0 210 914 hct 100 V=
w 20
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 440 270 440 19
s 270 440 270 100 21
a 0 up 33 0 272 270 hlt 100 LVL=
a 0 up 33 0 272 270 hlt 100 V=
s 270 100 180 100 796
s 330 100 270 100 23
w 26
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 450 260 450 25
s 260 450 260 150 27
a 0 up 33 0 262 300 hlt 100 LVL=
a 0 up 33 0 262 300 hlt 100 V=
s 260 150 180 150 792
s 330 150 260 150 29
w 32
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 460 250 460 31
s 250 460 250 200 33
a 0 up 33 0 252 330 hlt 100 LVL=
a 0 up 33 0 252 330 hlt 100 V=
s 250 200 180 200 788
s 330 200 250 200 35
w 38
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 470 240 470 37
s 240 470 240 250 39
a 0 up 33 0 242 360 hlt 100 V=
s 240 250 180 250 784
s 330 250 240 250 41
a 0 up 33 0 210 249 hct 100 LVL=
w 44
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 480 230 480 43
s 230 480 230 300 45
a 0 up 33 0 232 390 hlt 100 V=
s 230 300 180 300 780
s 330 300 230 300 47
a 0 up 33 0 205 299 hct 100 LVL=
w 50
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 490 220 490 49
a 0 up 33 0 300 489 hct 100 V=
s 220 490 220 350 51
s 220 350 180 350 776
s 330 350 220 350 53
a 0 up 33 0 200 349 hct 100 LVL=
w 56
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 500 210 500 55
a 0 up 33 0 295 499 hct 100 V=
s 210 500 210 400 57
s 210 400 180 400 772
s 330 400 210 400 59
a 0 up 33 0 195 399 hct 100 LVL=
w 114
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 510 200 510 113
a 0 up 33 0 290 509 hct 100 LVL=
a 0 up 33 0 290 509 hct 100 V=
s 200 510 200 450 115
s 200 450 180 450 117
w 108
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 520 190 520 107
a 0 up 33 0 285 519 hct 100 V=
s 190 520 190 500 109
s 190 500 180 500 111
a 0 up 33 0 185 499 hct 100 LVL=
w 100
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 530 190 530 99
a 0 up 33 0 285 529 hct 100 V=
s 190 530 190 550 103
a 0 up 33 0 192 540 hlt 100 LVL=
s 190 550 180 550 105
w 171
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 430 580 430 610 172
a 0 up 33 0 415 579 hct 100 LVL=
a 0 up 33 0 432 595 hlt 100 V=
w 1154
s 430 655 430 650 174
a 0 up 33 0 432 653 hlt 100 V=
w 254
a 0 up 0:33 0 0 0 hln 100 V=
s 420 770 420 840 285
s 640 770 420 770 255
s 640 500 640 770 1169
w 260
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 540 500 540 490 365
s 540 490 630 490 1183
s 460 490 540 490 745
a 0 up 33 0 585 489 hct 100 LVL=
a 0 up 33 0 585 489 hct 100 V=
w 1103
s 660 490 720 490 725
a 0 up 33 0 690 489 hct 100 V=
w 1099
s 540 545 540 540 1098
w 1264
s 900 490 960 490 1231
s 810 490 900 490 1202
a 0 up 33 0 1025 489 hct 100 LVL=
s 900 460 900 490 526
s 760 490 810 490 314
a 0 up 33 0 925 489 hct 100 V=
s 810 490 810 495 318
s 960 490 1070 490 1267
s 960 450 960 490 1265
w 1272
a 0 sr 0:3 0 762 325 hln 100 LABEL=admittance
s 760 430 760 250 1219
a 0 up 33 0 762 326 hlt 100 V=
a 0 sr 3 0 762 325 hln 100 LABEL=admittance
s 660 250 760 250 558
s 760 430 900 430 1273
w 1224
s 720 500 710 500 304
s 710 500 710 530 306
s 710 530 770 530 308
a 0 up 33 0 740 529 hct 100 V=
s 770 500 760 500 312
s 770 530 770 500 310
s 810 530 770 530 1139
s 810 525 810 530 1135
s 870 530 810 530 714
s 870 390 870 420 537
s 980 390 870 390 548
s 980 430 980 390 1225
s 870 420 900 420 1275
s 870 450 870 420 1279
s 870 450 900 450 1281
s 960 430 980 430 1285
s 870 450 870 530 1286
w 1289
s 80 700 130 700 1288
w 1291
s 130 720 80 720 1290
w 1293
s 80 740 130 740 1292
w 1295
s 130 760 80 760 1294
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
+ w 1131
j 570 890
+ p 180 3
+ w 1131
j 590 890
+ p 333 1
+ w 1131
j 580 890
+ w 1131
+ w 1131
j 80 150
+ s 152
+ w 122
j 80 200
+ s 153
+ w 124
j 80 250
+ s 154
+ w 126
j 80 300
+ s 155
+ w 128
j 80 350
+ s 156
+ w 130
j 80 450
+ s 158
+ w 134
j 80 500
+ s 159
+ w 136
j 80 550
+ s 160
+ w 138
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
j 330 100
+ p 585 I0
+ w 20
j 270 100
+ w 20
+ w 20
j 380 100
+ p 585 O
+ w 588
j 330 150
+ p 589 I0
+ w 26
j 260 150
+ w 26
+ w 26
j 380 150
+ p 589 O
+ w 607
j 330 200
+ p 592 I0
+ w 32
j 250 200
+ w 32
+ w 32
j 380 200
+ p 592 O
+ w 608
j 330 250
+ p 595 I0
+ w 38
j 240 250
+ w 38
+ w 38
j 380 250
+ p 595 O
+ w 609
j 330 300
+ p 598 I0
+ w 44
j 230 300
+ w 44
+ w 44
j 380 300
+ p 598 O
+ w 610
j 330 350
+ p 601 I0
+ w 50
j 220 350
+ w 50
+ w 50
j 380 350
+ p 601 O
+ w 611
j 330 400
+ p 604 I0
+ w 56
j 210 400
+ w 56
+ w 56
j 380 400
+ p 604 O
+ w 612
j 420 840
+ p 228 3
+ w 254
j 380 830
+ s 251
+ w 288
j 410 840
+ p 228 4
+ w 288
j 80 400
+ s 157
+ w 132
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
j 180 150
+ p 337 O
+ w 26
j 130 150
+ p 337 I0
+ w 122
j 180 200
+ p 338 O
+ w 32
j 130 200
+ p 338 I0
+ w 124
j 180 250
+ p 339 O
+ w 38
j 130 250
+ p 339 I0
+ w 126
j 180 300
+ p 340 O
+ w 44
j 130 300
+ p 340 I0
+ w 128
j 180 350
+ p 341 O
+ w 50
j 130 350
+ p 341 I0
+ w 130
j 180 400
+ p 342 O
+ w 56
j 130 400
+ p 342 I0
+ w 132
j 180 450
+ p 343 O
+ w 114
j 130 450
+ p 343 I0
+ w 134
j 180 500
+ p 344 O
+ w 108
j 130 500
+ p 344 I0
+ w 136
j 180 550
+ p 345 O
+ w 100
j 130 550
+ p 345 I0
+ w 138
j 180 100
+ p 336 O
+ w 20
j 130 100
+ p 336 I0
+ w 120
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
j 1070 640
+ s 332
+ w 1131
j 80 915
+ s 223
+ w 1074
j 380 440
+ p 1232 DB9
+ w 20
j 380 450
+ p 1232 DB8
+ w 26
j 380 460
+ p 1232 DB7
+ w 32
j 380 470
+ p 1232 DB6
+ w 38
j 380 480
+ p 1232 DB5
+ w 44
j 380 490
+ p 1232 DB4
+ w 50
j 380 500
+ p 1232 DB3
+ w 56
j 380 510
+ p 1232 DB2
+ w 114
j 380 520
+ p 1232 DB1
+ w 108
j 380 530
+ p 1232 DB0
+ w 100
j 380 550
+ s 1151
+ p 1232 REF
j 430 580
+ p 1232 GND
+ w 171
j 430 610
+ p 167 +
+ w 171
j 430 650
+ p 167 -
+ w 1154
j 430 655
+ s 168
+ w 1154
j 640 500
+ p 252 IN1
+ w 254
j 660 250
+ p 483 ADM
+ w 1272
j 540 500
+ p 364 1
+ w 260
j 630 490
+ p 252 IN2
+ w 260
j 460 490
+ p 1232 OUT
+ w 260
j 540 490
+ w 260
+ w 260
j 1070 490
+ s 325
+ w 1264
j 810 490
+ w 1264
+ w 1264
j 760 490
+ p 261 3
+ w 1264
j 810 495
+ p 317 1
+ w 1264
j 900 460
+ p 481 IN1+
+ w 1264
j 900 490
+ w 1264
+ w 1264
j 770 530
+ w 1224
+ w 1224
j 810 530
+ w 1224
+ w 1224
j 720 500
+ p 261 2
+ w 1224
j 710 530
+ s 316
+ w 1224
j 760 500
+ p 261 4
+ w 1224
j 810 525
+ p 317 2
+ w 1224
j 660 490
+ p 252 OUT
+ w 1103
j 720 490
+ p 261 1
+ w 1103
j 540 540
+ p 364 2
+ w 1099
j 540 545
+ s 169
+ w 1099
j 80 100
+ s 151
+ w 120
j 960 450
+ p 481 OUT+
+ w 1264
j 960 490
+ w 1264
+ w 1264
j 900 430
+ p 481 IN2+
+ w 1272
j 870 420
+ w 1224
+ w 1224
j 900 420
+ p 481 IN2-
+ w 1224
j 900 450
+ p 481 IN1-
+ w 1224
j 960 430
+ p 481 OUT-
+ w 1224
j 870 450
+ w 1224
+ w 1224
j 80 700
+ s 1296
+ w 1289
j 80 720
+ s 1297
+ w 1291
j 80 740
+ s 1298
+ w 1293
j 80 760
+ s 1299
+ w 1295
j 130 700
+ s 1300
+ w 1289
j 130 720
+ s 1301
+ w 1291
j 130 740
+ s 1302
+ w 1293
j 130 760
+ s 1303
+ w 1295
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=User
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 952 t 5 115 39 181 57 0 13
Input Buffers
v 953 v 0 115 40
115 55
175 55
180 55
180 40
115 40
;
v 954 v 0 110 35
110 60
185 60
185 35
110 35
;
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
t 964 t 5 530 794 670 815 0 28
Current to Voltage Converter
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


v 1081 v 0 855 345
855 370
1060 370
1060 345
855 345
;
v 1083 v 0 850 340
850 375
1065 375
1065 340
850 340
;
t 955 t 5 360 609 389 627 0 3
DAC
v 956 v 0 350 605
350 630
400 630
400 605
350 605
;
v 957 v 0 355 610
355 625
395 625
395 610
355 610
;
t 977 t 5 655 472 510 450 0 24
8*Iref*(Vdacout/Vdacref)
v 979 v 0 505 450
505 470
640 470
640 450
505 450
;
v 980 v 0 500 445
500 475
645 475
645 445
500 445
;
t 963 t 5 680 454 820 480 0 28
Voltage to Current Converter
v 972 v 0 675 455
675 470
815 470
815 455
675 455
;
v 973 v 0 670 450
670 475
820 475
820 450
670 450
;
t 965 t 5 860 349 1105 380 0 37
Iout=8*Iref*(1023-Digital_Code)/1023)
t 735 t 6 280 990 560 1080 0 189
Pin functions for this model are based on DAC16 
Iref - Reference Current Input
DB9-DB0 - 10-Bit Digital Input Bus. DB9 is MSB.
Iout - Current Output
Ccomp - Current Ladder Compensation
t 731 t 5 680 995 1170 1075 0 413
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
3. Settling time is not modeled. Propagation delay can be added to the DAC timing model for this delay.