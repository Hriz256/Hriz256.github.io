*version 9.2 1007630698
u 1256
U? 24
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
pageloc 1 0 25649 
@status
a 0 98:03:14:10:20:12;892574412 e 
c 98:04:11:12:29:25;894914965
*page 1 0 1700 1200 iX
@ports
port 197 Agnd 615 920 h
port 251 Agnd 385 830 H
port 168 Agnd 495 650 h
port 169 Agnd 545 570 h
port 325 IF_OUT 1075 480 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Iout
port 316 Agnd 715 520 h
port 332 IF_OUT 1075 640 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Ccomp
port 223 IF_IN 85 915 h
a 1 xr 3 0 19 8 hcn 100 LABEL=Iref
port 164 IF_IN 85 750 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 163 IF_IN 85 700 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 162 IF_IN 85 650 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB2
port 161 IF_IN 85 600 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB3
port 160 IF_IN 85 550 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB4
port 159 IF_IN 85 500 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB5
port 158 IF_IN 85 450 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB6
port 157 IF_IN 85 400 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB7
port 156 IF_IN 85 350 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB8
port 155 IF_IN 85 300 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB9
port 154 IF_IN 85 250 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB10
port 153 IF_IN 85 200 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB11
port 152 IF_IN 85 150 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB12
port 151 IF_IN 85 100 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB13
port 1248 interface 80 810 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VCC
port 1249 interface 80 830 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VEE
port 1250 interface 80 850 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REFGND
port 1251 interface 80 870 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND
port 1252 bubble 130 810 d
a 1 x 3 0 0 0 hcn 100 LABEL=VCC
port 1253 bubble 130 830 d
a 1 x 3 0 0 0 hcn 100 LABEL=VEE
port 1254 bubble 130 850 d
a 1 x 3 0 0 0 hcn 100 LABEL=REFGND
port 1255 bubble 130 870 d
a 1 x 3 0 0 0 hcn 100 LABEL=AGND
@parts
part 180 E 535 890 U
a 0 s 11 0 10 34 hln 100 PART=E
a 1 ap 9 0 10 4 hln 100 REFDES=E1
a 0 u 0 0 0 10 hln 100 GAIN=500000
a 0 a 0:13 0 0 0 hln 100 PKGREF=E1
part 207 R 545 840 h
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R1
a 0 u 13 0 15 25 hln 100 VALUE=18k
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 585 inv 335 100 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
a 0 ap 9 0 40 0 hln 100 REFDES=U1
part 589 inv 335 150 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
a 0 ap 9 0 40 0 hln 100 REFDES=U2
part 592 inv 335 200 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
a 0 ap 9 0 40 0 hln 100 REFDES=U3
part 595 inv 335 250 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
a 0 ap 9 0 40 0 hln 100 REFDES=U4
part 598 inv 335 300 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
a 0 ap 9 0 40 0 hln 100 REFDES=U5
part 601 inv 335 350 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
a 0 ap 9 0 40 0 hln 100 REFDES=U6
part 604 inv 335 400 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
a 0 ap 9 0 40 0 hln 100 REFDES=U7
part 228 H 425 880 V
a 0 s 11 0 10 34 hln 100 PART=H
a 1 ap 9 0 10 4 hln 100 REFDES=H1
a 0 u 13 13 0 10 hln 100 GAIN=8
a 0 a 0:13 0 0 0 hln 100 PKGREF=H1
part 416 DACcurLIM 435 150 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT1
a 0 ap 0 0 -12 -2 hln 100 REFDES=LIMIT1
part 352 DACCUR 505 840 h
a 0 a 9 0 15 0 hln 100 REFDES=D1
a 0 s 13 0 2 25 hln 100 MODEL=DACCUR
a 0 a 0:13 0 0 0 hln 100 PKGREF=D1
part 353 DACCUR 495 870 v
a 0 a 9 0 5 2 hln 100 REFDES=D2
a 0 s 13 0 19 4 hln 100 MODEL=DACCUR
a 0 a 0:13 0 0 0 hln 100 PKGREF=D2
part 415 DACcurLIM 435 100 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT2
a 0 ap 0 0 -12 -2 hln 100 REFDES=LIMIT2
part 417 DACcurLIM 435 200 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT3
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT3
part 418 DACcurLIM 435 250 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT4
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT4
part 421 DACcurLIM 435 400 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT5
a 0 ap 0 0 -12 -2 hln 100 REFDES=LIMIT5
part 420 DACcurLIM 435 350 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT6
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT6
part 419 DACcurLIM 435 300 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT7
a 0 ap 0 0 -12 -2 hln 100 REFDES=LIMIT7
part 483 admtce 585 220 h
a 0 s 11 0 68 90 hrn 100 PART=admtce
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 ap 9 0 10 -2 hln 100 REFDES=U8
part 337 dc_buf 135 150 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 ap 9 0 40 0 hln 100 REFDES=U9
part 338 dc_buf 135 200 h
a 0 s 11 0 40 40 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 ap 9 0 40 0 hln 100 REFDES=U10
part 339 dc_buf 135 250 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 0 ap 9 0 40 0 hln 100 REFDES=U11
part 340 dc_buf 135 300 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 ap 9 0 40 0 hln 100 REFDES=U12
part 341 dc_buf 135 350 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U13
a 0 ap 9 0 40 0 hln 100 REFDES=U13
part 342 dc_buf 135 400 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U14
a 0 ap 9 0 40 0 hln 100 REFDES=U14
part 343 dc_buf 135 450 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U15
a 0 ap 9 0 40 0 hln 100 REFDES=U15
part 344 dc_buf 135 500 h
a 0 s 11 0 36 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U16
a 0 ap 9 0 40 0 hln 100 REFDES=U16
part 345 dc_buf 135 550 h
a 0 s 11 0 38 34 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U17
a 0 ap 9 0 40 0 hln 100 REFDES=U17
part 348 dc_buf 135 700 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U18
a 0 ap 9 0 40 0 hln 100 REFDES=U18
part 349 dc_buf 135 750 h
a 0 s 11 0 38 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U19
a 0 ap 9 0 40 0 hln 100 REFDES=U19
part 346 dc_buf 135 600 h
a 0 s 11 0 38 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U20
a 0 ap 9 0 40 0 hln 100 REFDES=U20
part 347 dc_buf 135 650 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U21
a 0 ap 9 0 40 0 hln 100 REFDES=U21
part 336 dc_buf 135 100 h
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U22
a 0 ap 9 0 40 0 hln 100 REFDES=U22
part 167 Vsrc 495 590 h
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
a 1 u 13 13 38 26 hcn 100 DC=-1V
a 0 a 0:13 0 0 0 hln 100 PKGREF=V1
part 364 R 545 490 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 u 13 0 15 25 hln 100 VALUE=1G
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 1087 dc_dac14 385 440 h
a 0 sp 11 0 70 166 hrn 100 PART=dc_dac14
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U23
a 0 ap 9 0 12 0 hln 100 REFDES=U23
part 481 GMULT 905 460 U
a 0 sp 11 0 10 34 hln 100 PART=GMULT
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
a 1 ap 9 0 62 67 hln 100 REFDES=G1
part 317 C 815 490 d
a 0 u 13 0 56 15 hln 100 VALUE=@Cout
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 43 14 hln 100 REFDES=C1
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 261 G 725 480 h
a 0 s 11 0 10 34 hln 100 PART=G
a 0 a 0:13 0 0 0 hln 100 PKGREF=G2
a 1 ap 9 0 10 4 hln 100 REFDES=G2
part 333 C 595 890 d
a 0 u 13 0 27 35 hln 100 VALUE=10p
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C2
a 0 a 0:13 0 0 0 hln 100 PKGREF=C2
part 252 MULT 635 480 U
a 0 sp 0 0 16 32 hln 100 PART=MULT
a 1 ap 0 0 10 2 hln 100 REFDES=MULT1
a 0 a 0:13 0 0 0 hln 100 PKGREF=MULT1
part 1 titleblk 1700 1200 h
a 1 x 13 0 180 60 hcn 100 PAGETITLE=D/A Converter - Current Output
a 1 s 13 0 350 10 hcn 100 PAGESIZE=User
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 1074
a 0 up 0:33 0 0 0 hln 100 V=
s 415 915 415 880 1072
s 415 915 85 915 293
a 0 up 33 0 215 914 hct 100 V=
w 1131
a 0 up 0:33 0 0 0 hln 100 V=
s 595 890 585 890 204
s 585 840 585 890 191
s 585 890 575 890 840
s 795 640 795 890 328
s 795 890 595 890 335
s 1075 640 795 640 330
a 0 up 33 0 935 639 hct 100 V=
w 525
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 765 480 815 480 314
s 815 480 815 490 318
s 815 480 895 480 715
a 0 up 33 0 930 479 hct 100 V=
s 895 460 895 480 526
s 975 450 975 480 541
s 975 480 1075 480 929
a 0 up 33 0 1025 479 hct 100 LVL=
s 965 450 975 450 539
s 895 480 975 480 543
s 905 460 895 460 524
w 717
a 0 up 0:33 0 0 0 hln 100 V=
s 725 490 715 490 304
s 715 490 715 520 306
s 715 520 775 520 308
a 0 up 33 0 745 519 hct 100 V=
s 775 520 775 490 310
s 775 490 765 490 312
s 815 520 775 520 721
s 875 520 815 520 714
s 965 430 985 430 544
s 985 430 985 390 546
s 985 390 875 390 548
s 875 390 875 420 550
s 905 420 875 420 535
s 875 420 875 450 537
s 905 450 875 450 529
s 875 450 875 520 531
w 553
a 0 sr 0:3 0 762 340 hln 100 LABEL=admittance
a 0 up 0:33 0 0 0 hln 100 V=
s 765 250 765 430 556
a 0 sr 3 0 767 340 hln 100 LABEL=admittance
a 0 up 33 0 767 341 hlt 100 V=
s 665 250 765 250 558
s 765 430 905 430 554
w 175
a 0 up 0:33 0 0 0 hln 100 V=
s 495 630 495 650 174
a 0 up 33 0 497 640 hlt 100 V=
w 171
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 465 560 495 560 170
a 0 up 33 0 480 559 hct 100 LVL=
s 495 560 495 590 172
a 0 up 33 0 497 575 hlt 100 V=
w 1099
a 0 up 0:33 0 0 0 hln 100 V=
s 545 540 545 530 1098
s 465 540 545 540 176
a 0 up 33 0 505 539 hct 100 V=
s 545 540 545 570 178
w 114
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 510 205 510 113
a 0 up 33 0 295 509 hct 100 LVL=
a 0 up 33 0 295 509 hct 100 V=
s 205 510 205 450 115
s 205 450 185 450 117
w 56
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 500 215 500 55
a 0 up 33 0 300 499 hct 100 V=
s 215 500 215 400 57
s 215 400 185 400 772
s 335 400 215 400 59
a 0 up 33 0 200 399 hct 100 LVL=
w 50
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 490 225 490 49
a 0 up 33 0 305 489 hct 100 V=
s 225 490 225 350 51
s 225 350 185 350 776
s 335 350 225 350 53
a 0 up 33 0 205 349 hct 100 LVL=
w 44
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 480 235 480 43
s 235 480 235 300 45
a 0 up 33 0 237 390 hlt 100 V=
s 235 300 185 300 780
s 335 300 235 300 47
a 0 up 33 0 210 299 hct 100 LVL=
w 38
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 470 245 470 37
s 245 470 245 250 39
a 0 up 33 0 247 360 hlt 100 V=
s 245 250 185 250 784
s 335 250 245 250 41
a 0 up 33 0 215 249 hct 100 LVL=
w 32
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 460 255 460 31
s 255 460 255 200 33
a 0 up 33 0 257 330 hlt 100 LVL=
a 0 up 33 0 257 330 hlt 100 V=
s 255 200 185 200 788
s 335 200 255 200 35
w 26
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 450 265 450 25
s 265 450 265 150 27
a 0 up 33 0 267 300 hlt 100 LVL=
a 0 up 33 0 267 300 hlt 100 V=
s 265 150 185 150 792
s 335 150 265 150 29
w 20
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 440 275 440 19
s 275 440 275 100 21
a 0 up 33 0 277 270 hlt 100 LVL=
a 0 up 33 0 277 270 hlt 100 V=
s 275 100 185 100 796
s 335 100 275 100 23
w 75
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 570 235 570 74
s 235 570 235 750 76
a 0 up 33 0 237 660 hlt 100 LVL=
a 0 up 33 0 237 660 hlt 100 V=
s 235 750 185 750 78
w 82
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 560 225 560 81
a 0 up 33 0 305 559 hct 100 V=
s 225 560 225 700 83
a 0 up 33 0 227 630 hlt 100 LVL=
s 225 700 185 700 85
w 88
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 550 215 550 87
a 0 up 33 0 300 549 hct 100 V=
s 215 550 215 650 89
a 0 up 33 0 217 600 hlt 100 LVL=
s 215 650 185 650 91
w 94
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 540 205 540 93
a 0 up 33 0 295 539 hct 100 V=
s 205 540 205 600 95
a 0 up 33 0 207 570 hlt 100 LVL=
s 205 600 185 600 97
w 100
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 530 195 530 99
a 0 up 33 0 290 529 hct 100 V=
s 195 530 195 550 103
a 0 up 33 0 197 540 hlt 100 LVL=
s 195 550 185 550 105
w 108
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 385 520 195 520 107
a 0 up 33 0 290 519 hct 100 V=
s 195 520 195 500 109
s 195 500 185 500 111
a 0 up 33 0 190 499 hct 100 LVL=
w 120
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 100 85 100 984
a 0 up 33 0 110 99 hct 100 LVL=
w 122
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 150 85 150 991
a 0 up 33 0 110 149 hct 100 LVL=
w 124
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 200 85 200 996
a 0 up 33 0 110 199 hct 100 LVL=
w 126
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 250 85 250 1001
a 0 up 33 0 110 249 hct 100 LVL=
w 128
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 300 85 300 1006
a 0 up 33 0 110 299 hct 100 LVL=
w 130
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 350 85 350 1011
a 0 up 33 0 110 349 hct 100 LVL=
w 132
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 400 85 400 1022
a 0 up 33 0 110 399 hct 100 LVL=
w 134
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 450 85 450 1027
a 0 up 33 0 110 449 hct 100 LVL=
w 136
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 500 85 500 1032
a 0 up 33 0 110 499 hct 100 LVL=
w 138
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 550 85 550 1037
a 0 up 33 0 110 549 hct 100 LVL=
w 140
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 600 85 600 1042
a 0 up 33 0 110 599 hct 100 LVL=
w 142
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 650 85 650 1047
a 0 up 33 0 110 649 hct 100 LVL=
w 144
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 700 85 700 1052
a 0 up 33 0 110 699 hct 100 LVL=
w 146
a 0 up 0:33 0 0 0 hln 100 LVL=
s 135 750 85 750 1057
a 0 up 33 0 110 749 hct 100 LVL=
w 288
s 385 830 385 800 264
s 415 840 415 800 287
s 415 800 385 800 289
w 612
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 435 400 385 400 434
a 0 up 33 0 410 399 hct 100 V=
a 0 up 33 0 410 399 hct 100 LVL=
w 611
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 435 350 385 350 432
a 0 up 33 0 410 349 hct 100 V=
a 0 up 33 0 410 349 hct 100 LVL=
w 610
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 435 300 385 300 430
a 0 up 33 0 410 299 hct 100 V=
a 0 up 33 0 410 299 hct 100 LVL=
w 609
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 435 250 385 250 428
a 0 up 33 0 410 249 hct 100 V=
a 0 up 33 0 410 249 hct 100 LVL=
w 608
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 435 200 385 200 426
a 0 up 33 0 410 199 hct 100 V=
a 0 up 33 0 410 199 hct 100 LVL=
w 607
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 435 150 385 150 424
a 0 up 33 0 410 149 hct 100 V=
w 588
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 435 100 385 100 422
a 0 up 33 0 410 99 hct 100 V=
a 0 up 33 0 410 99 hct 100 LVL=
w 485
a 0 up 0:33 0 0 0 hln 100 V=
s 565 100 485 100 488
s 565 220 565 100 486
a 0 up 33 0 567 160 hlt 100 V=
s 585 220 565 220 484
w 491
a 0 up 0:33 0 0 0 hln 100 V=
s 555 150 485 150 494
s 555 230 555 150 492
a 0 up 33 0 557 190 hlt 100 V=
s 585 230 555 230 490
w 497
a 0 up 0:33 0 0 0 hln 100 V=
s 545 200 485 200 500
a 0 up 33 0 515 199 hct 100 V=
s 545 240 545 200 498
s 585 240 545 240 496
w 503
a 0 up 0:33 0 0 0 hln 100 V=
s 585 250 485 250 502
a 0 up 33 0 535 249 hct 100 V=
w 505
a 0 up 0:33 0 0 0 hln 100 V=
s 565 400 485 400 508
s 565 280 565 400 506
a 0 up 33 0 567 340 hlt 100 V=
s 585 280 565 280 504
w 511
a 0 up 0:33 0 0 0 hln 100 V=
s 555 350 485 350 514
s 555 270 555 350 512
a 0 up 33 0 557 310 hlt 100 V=
s 585 270 555 270 510
w 517
a 0 up 0:33 0 0 0 hln 100 V=
s 535 300 485 300 522
a 0 up 33 0 510 299 hct 100 V=
s 535 260 535 300 520
s 585 260 535 260 518
s 585 261 585 260 516
w 359
a 0 up 0:33 0 0 0 hln 100 V=
s 495 840 505 840 356
a 0 up 33 0 500 839 hct 100 V=
w 291
a 0 up 0:33 0 0 0 hln 100 V=
s 425 880 495 880 868
a 0 up 33 0 460 879 hct 100 V=
s 495 880 535 880 1231
s 495 870 495 880 361
w 355
a 0 up 0:33 0 0 0 hln 100 V=
s 535 840 545 840 354
a 0 up 33 0 540 839 hct 100 V=
w 182
a 0 up 0:33 0 0 0 hln 100 V=
s 535 890 515 890 181
s 515 890 515 920 183
s 615 920 595 920 198
s 615 880 575 880 189
s 615 920 615 880 187
s 595 920 515 920 334
a 0 up 33 0 555 919 hct 100 V=
w 1103
a 0 up 0:33 0 0 0 hln 100 V=
s 665 480 725 480 1237
a 0 up 33 0 695 479 hct 100 V=
w 260
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 545 490 545 480 365
s 545 480 635 480 745
a 0 up 33 0 590 479 hct 100 LVL=
s 465 480 545 480 1091
a 0 up 33 0 590 479 hct 100 V=
w 254
a 0 up 0:33 0 0 0 hln 100 V=
s 425 770 425 840 285
s 645 770 425 770 255
s 645 770 645 490 1238
a 0 up 33 0 647 633 hlt 100 V=
w 1241
s 80 810 130 810 1240
w 1243
s 130 830 80 830 1242
w 1245
s 80 850 130 850 1244
w 1247
s 130 870 80 870 1246
@junction
j 415 880
+ p 228 2
+ w 1074
j 85 915
+ s 223
+ w 1074
j 595 890
+ p 333 1
+ w 1131
j 585 840
+ p 207 2
+ w 1131
j 575 890
+ p 180 3
+ w 1131
j 585 890
+ w 1131
+ w 1131
j 1075 640
+ s 332
+ w 1131
j 765 480
+ p 261 3
+ w 525
j 815 490
+ p 317 1
+ w 525
j 815 480
+ w 525
+ w 525
j 1075 480
+ s 325
+ w 525
j 965 450
+ p 481 OUT+
+ w 525
j 895 480
+ w 525
+ w 525
j 975 480
+ w 525
+ w 525
j 905 460
+ p 481 IN1+
+ w 525
j 725 490
+ p 261 2
+ w 717
j 715 520
+ s 316
+ w 717
j 765 490
+ p 261 4
+ w 717
j 815 520
+ p 317 2
+ w 717
j 775 520
+ w 717
+ w 717
j 875 420
+ w 717
+ w 717
j 965 430
+ p 481 OUT-
+ w 717
j 905 420
+ p 481 IN2-
+ w 717
j 905 450
+ p 481 IN1-
+ w 717
j 875 450
+ w 717
+ w 717
j 665 250
+ p 483 ADM
+ w 553
j 905 430
+ p 481 IN2+
+ w 553
j 725 480
+ p 261 1
+ w 1103
j 425 840
+ p 228 3
+ w 254
j 495 630
+ p 167 -
+ w 175
j 495 650
+ s 168
+ w 175
j 465 560
+ p 1087 GND
+ w 171
j 495 590
+ p 167 +
+ w 171
j 545 530
+ p 364 2
+ w 1099
j 465 540
+ p 1087 REF
+ w 1099
j 545 570
+ s 169
+ w 1099
j 545 540
+ w 1099
+ w 1099
j 545 490
+ p 364 1
+ w 260
j 465 480
+ p 1087 OUT
+ w 260
j 545 480
+ w 260
+ w 260
j 385 510
+ p 1087 DB6
+ w 114
j 185 450
+ p 343 O
+ w 114
j 385 500
+ p 1087 DB7
+ w 56
j 185 400
+ p 342 O
+ w 56
j 335 400
+ p 604 I0
+ w 56
j 215 400
+ w 56
+ w 56
j 385 490
+ p 1087 DB8
+ w 50
j 185 350
+ p 341 O
+ w 50
j 335 350
+ p 601 I0
+ w 50
j 225 350
+ w 50
+ w 50
j 385 480
+ p 1087 DB9
+ w 44
j 185 300
+ p 340 O
+ w 44
j 335 300
+ p 598 I0
+ w 44
j 235 300
+ w 44
+ w 44
j 385 470
+ p 1087 DB10
+ w 38
j 185 250
+ p 339 O
+ w 38
j 335 250
+ p 595 I0
+ w 38
j 245 250
+ w 38
+ w 38
j 385 460
+ p 1087 DB11
+ w 32
j 185 200
+ p 338 O
+ w 32
j 335 200
+ p 592 I0
+ w 32
j 255 200
+ w 32
+ w 32
j 385 450
+ p 1087 DB12
+ w 26
j 185 150
+ p 337 O
+ w 26
j 335 150
+ p 589 I0
+ w 26
j 265 150
+ w 26
+ w 26
j 385 440
+ p 1087 DB13
+ w 20
j 185 100
+ p 336 O
+ w 20
j 335 100
+ p 585 I0
+ w 20
j 275 100
+ w 20
+ w 20
j 385 570
+ p 1087 DB0
+ w 75
j 185 750
+ p 349 O
+ w 75
j 385 560
+ p 1087 DB1
+ w 82
j 185 700
+ p 348 O
+ w 82
j 385 550
+ p 1087 DB2
+ w 88
j 185 650
+ p 347 O
+ w 88
j 385 540
+ p 1087 DB3
+ w 94
j 185 600
+ p 346 O
+ w 94
j 385 530
+ p 1087 DB4
+ w 100
j 185 550
+ p 345 O
+ w 100
j 385 520
+ p 1087 DB5
+ w 108
j 185 500
+ p 344 O
+ w 108
j 135 100
+ p 336 I0
+ w 120
j 85 100
+ s 151
+ w 120
j 135 150
+ p 337 I0
+ w 122
j 85 150
+ s 152
+ w 122
j 135 200
+ p 338 I0
+ w 124
j 85 200
+ s 153
+ w 124
j 135 250
+ p 339 I0
+ w 126
j 85 250
+ s 154
+ w 126
j 135 300
+ p 340 I0
+ w 128
j 85 300
+ s 155
+ w 128
j 135 350
+ p 341 I0
+ w 130
j 85 350
+ s 156
+ w 130
j 135 400
+ p 342 I0
+ w 132
j 85 400
+ s 157
+ w 132
j 135 450
+ p 343 I0
+ w 134
j 85 450
+ s 158
+ w 134
j 135 500
+ p 344 I0
+ w 136
j 85 500
+ s 159
+ w 136
j 135 550
+ p 345 I0
+ w 138
j 85 550
+ s 160
+ w 138
j 135 600
+ p 346 I0
+ w 140
j 85 600
+ s 161
+ w 140
j 135 650
+ p 347 I0
+ w 142
j 85 650
+ s 162
+ w 142
j 135 700
+ p 348 I0
+ w 144
j 85 700
+ s 163
+ w 144
j 135 750
+ p 349 I0
+ w 146
j 85 750
+ s 164
+ w 146
j 385 830
+ s 251
+ w 288
j 415 840
+ p 228 4
+ w 288
j 385 400
+ p 604 O
+ w 612
j 435 400
+ p 421 IN
+ w 612
j 385 350
+ p 601 O
+ w 611
j 435 350
+ p 420 IN
+ w 611
j 385 300
+ p 598 O
+ w 610
j 435 300
+ p 419 IN
+ w 610
j 385 250
+ p 595 O
+ w 609
j 435 250
+ p 418 IN
+ w 609
j 385 200
+ p 592 O
+ w 608
j 435 200
+ p 417 IN
+ w 608
j 385 150
+ p 589 O
+ w 607
j 435 150
+ p 416 IN
+ w 607
j 385 100
+ p 585 O
+ w 588
j 435 100
+ p 415 IN
+ w 588
j 485 100
+ p 415 OUT
+ w 485
j 585 220
+ p 483 B15
+ w 485
j 485 150
+ p 416 OUT
+ w 491
j 585 230
+ p 483 B14
+ w 491
j 485 200
+ p 417 OUT
+ w 497
j 585 240
+ p 483 B13
+ w 497
j 485 250
+ p 418 OUT
+ w 503
j 585 250
+ p 483 B12
+ w 503
j 485 400
+ p 421 OUT
+ w 505
j 585 280
+ p 483 B9
+ w 505
j 485 350
+ p 420 OUT
+ w 511
j 585 270
+ p 483 B10
+ w 511
j 485 300
+ p 419 OUT
+ w 517
j 585 261
+ p 483 B11
+ w 517
j 505 840
+ p 352 1
+ w 359
j 495 840
+ p 353 2
+ w 359
j 425 880
+ p 228 1
+ w 291
j 535 880
+ p 180 2
+ w 291
j 495 870
+ p 353 1
+ w 291
j 495 880
+ w 291
+ w 291
j 545 840
+ p 207 1
+ w 355
j 535 840
+ p 352 2
+ w 355
j 535 890
+ p 180 1
+ w 182
j 595 920
+ p 333 2
+ w 182
j 615 920
+ s 197
+ w 182
j 575 880
+ p 180 4
+ w 182
j 635 480
+ p 252 IN2
+ w 260
j 665 480
+ p 252 OUT
+ w 1103
j 645 490
+ p 252 IN1
+ w 254
j 80 810
+ s 1248
+ w 1241
j 80 830
+ s 1249
+ w 1243
j 80 850
+ s 1250
+ w 1245
j 80 870
+ s 1251
+ w 1247
j 130 810
+ s 1252
+ w 1241
j 130 830
+ s 1253
+ w 1243
j 130 850
+ s 1254
+ w 1245
j 130 870
+ s 1255
+ w 1247
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=User
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 952 t 5 120 39 186 57 0 13
Input Buffers
v 953 v 0 120 40
120 55
180 55
185 55
185 40
120 40
;
v 954 v 0 115 35
115 60
190 60
190 35
115 35
;
t 958 t 5 605 164 732 182 0 28
Equivalent Output Admittance
v 961 v 0 600 160
600 185
750 185
750 160
595 160
;
v 962 v 0 595 155
595 190
755 190
755 155
595 155
;
t 964 t 5 535 794 675 815 0 28
Current to Voltage Converter
v 974 v 0 530 795
530 810
670 810
670 795
530 795
;
v 976 v 0 525 790
525 815
675 815
675 790
525 790
;
t 734 t 5 275 992 515 970 0 17
PIN DESCRIPTIONS:
t 730 t 5 675 997 855 975 0 6
NOTES:
t 732 t 5 35 987 215 970 0 22
PARAMETER DEFINITIONS:
t 733 t 6 45 1065 265 990 0 127
Cout - Analog Output capacitance
Cin - Digital Input capacitance (in IO MODEL)
IO_MODEL - Digital input model (see notes)


t 977 t 5 660 462 515 440 0 24
8*Iref*(Vdacout/Vdacref)
v 979 v 0 510 440
510 460
645 460
645 440
510 440
;
v 980 v 0 505 435
505 465
650 465
650 435
505 435
;
t 963 t 5 685 444 825 470 0 28
Voltage to Current Converter
v 1081 v 0 860 345
860 370
1065 370
1065 345
860 345
;
v 1083 v 0 855 340
855 375
1070 375
1070 340
855 340
;
v 972 v 0 680 445
680 460
820 460
820 445
680 445
;
v 973 v 0 675 440
675 465
825 465
825 440
675 440
;
t 955 t 5 400 609 429 627 0 3
DAC
v 956 v 0 390 605
390 630
440 630
440 605
390 605
;
v 957 v 0 395 610
395 625
435 625
435 610
395 610
;
t 965 t 5 865 349 1110 380 0 39
Iout=8*Iref*(16383-Digital_Code)/16383)
t 735 t 6 285 990 565 1080 0 191
Pin functions for this model are based on DAC16 
Iref - Reference Current Input
DB13-DB0 - 14-Bit Digital Input Bus. DB13 is MSB.
Iout - Current Output
Ccomp - Current Ladder Compensation
t 731 t 5 685 995 1175 1075 0 413
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
3. Settling time is not modeled. Propagation delay can be added to the DAC timing model for this delay.
