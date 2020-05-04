*version 9.2 2309446603
u 1100
U? 27
V? 2
E? 3
R? 13
H? 2
MULT? 2
G? 3
C? 23
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
pageloc 1 0 26916 
@status
a 0 97:09:29:16:58:37;878173117 e 
c 98:04:11:12:27:38;894914858
*page 1 0 1700 1200 iX
@ports
port 197 Agnd 610 920 h
port 151 IF_IN 80 100 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB15
port 166 IF_IN 80 850 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 332 IF_OUT 1050 640 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Ccomp
port 168 Agnd 490 670 h
port 169 Agnd 540 590 h
port 325 IF_OUT 1070 510 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Iout
port 316 Agnd 710 550 h
port 251 Agnd 380 830 H
port 152 IF_IN 80 150 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB14
port 153 IF_IN 80 200 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB13
port 154 IF_IN 80 250 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB12
port 155 IF_IN 80 300 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB11
port 156 IF_IN 80 350 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB10
port 157 IF_IN 80 400 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB9
port 158 IF_IN 80 450 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB8
port 159 IF_IN 80 500 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB7
port 160 IF_IN 80 550 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB6
port 161 IF_IN 80 600 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB5
port 162 IF_IN 80 650 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB4
port 163 IF_IN 80 700 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB3
port 164 IF_IN 80 750 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB2
port 165 IF_IN 80 800 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 223 IF_IN 80 880 h
a 1 xr 3 0 19 8 hcn 100 LABEL=Iref
port 1084 interface 940 80 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VCC
port 1085 interface 940 100 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VEE
port 1086 interface 940 120 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REFGND
port 1087 interface 940 140 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND
port 1088 bubble 990 80 d
a 1 x 3 0 0 0 hcn 100 LABEL=VCC
port 1089 bubble 990 100 d
a 1 x 3 0 0 0 hcn 100 LABEL=VEE
port 1090 bubble 990 120 d
a 1 x 3 0 0 0 hcn 100 LABEL=REFGND
port 1091 bubble 990 140 d
a 1 x 3 0 0 0 hcn 100 LABEL=AGND
@parts
part 333 C 590 890 d
a 0 u 13 0 27 35 hln 100 VALUE=10p
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C2
a 0 a 0:13 0 0 0 hln 100 PKGREF=C2
part 180 E 530 890 U
a 0 s 11 0 10 34 hln 100 PART=E
a 1 ap 9 0 10 4 hln 100 REFDES=E1
a 0 a 0:13 0 0 0 hln 100 PKGREF=E1
a 0 u 0 0 0 10 hln 100 GAIN=500000
part 207 R 540 840 h
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R1
a 0 u 13 0 15 25 hln 100 VALUE=18k
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 364 R 540 520 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 u 13 0 15 25 hln 100 VALUE=1G
part 167 Vsrc 490 610 h
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
a 0 a 0:13 0 0 0 hln 100 PKGREF=V1
a 1 u 13 13 38 26 hcn 100 DC=-1V
part 481 GMULT 900 490 U
a 0 sp 11 0 10 34 hln 100 PART=GMULT
a 0 a 0:13 0 0 0 hln 100 PKGREF=G2
a 1 ap 9 0 62 67 hln 100 REFDES=G2
part 585 inv 330 100 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U19
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U19
part 589 inv 330 150 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U20
a 0 ap 9 0 40 0 hln 100 REFDES=U20
part 592 inv 330 200 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U21
a 0 ap 9 0 40 0 hln 100 REFDES=U21
part 595 inv 330 250 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U22
a 0 ap 9 0 40 0 hln 100 REFDES=U22
part 598 inv 330 300 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U23
a 0 ap 9 0 40 0 hln 100 REFDES=U23
part 601 inv 330 350 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U24
a 0 ap 9 0 40 0 hln 100 REFDES=U24
part 604 inv 330 400 h
a 0 sp 11 0 40 40 hln 100 PART=inv
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U25
a 0 ap 9 0 40 0 hln 100 REFDES=U25
part 252 MULT 630 510 U
a 0 sp 0 0 16 32 hln 100 PART=MULT
a 1 ap 0 0 10 2 hln 100 REFDES=MULT1
a 0 a 0:13 0 0 0 hln 100 PKGREF=MULT1
part 261 G 720 510 h
a 0 s 11 0 10 34 hln 100 PART=G
a 1 ap 9 0 10 4 hln 100 REFDES=G1
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
part 228 H 420 880 V
a 0 s 11 0 10 34 hln 100 PART=H
a 1 ap 9 0 10 4 hln 100 REFDES=H1
a 0 a 0:13 0 0 0 hln 100 PKGREF=H1
a 0 u 13 13 0 10 hln 100 GAIN=8
part 317 C 810 520 d
a 0 u 13 0 56 15 hln 100 VALUE=@Cout
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
a 0 ap 9 0 43 14 hln 100 REFDES=C1
part 416 DACcurLIM 430 150 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT2
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT2
part 352 DACCUR 500 840 h
a 0 a 0:13 0 0 0 hln 100 PKGREF=D1
a 0 a 9 0 15 0 hln 100 REFDES=D1
a 0 s 13 0 2 25 hln 100 MODEL=DACCUR
part 353 DACCUR 490 870 v
a 0 a 0:13 0 0 0 hln 100 PKGREF=D2
a 0 a 9 0 5 2 hln 100 REFDES=D2
a 0 s 13 0 19 4 hln 100 MODEL=DACCUR
part 415 DACcurLIM 430 100 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT1
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT1
part 417 DACcurLIM 430 200 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT3
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT3
part 418 DACcurLIM 430 250 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT4
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT4
part 421 DACcurLIM 430 400 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT7
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT7
part 420 DACcurLIM 430 350 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT6
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT6
part 419 DACcurLIM 430 300 h
a 0 s 0 0 14 48 hln 100 PART=DACcurLIM
a 0 a 0:13 0 0 0 hln 100 PKGREF=LIMIT5
a 0 a 0 0 -12 -2 hln 100 REFDES=LIMIT5
part 483 admtce 580 220 h
a 0 s 11 0 68 90 hrn 100 PART=admtce
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U18
a 0 a 9 0 10 -2 hln 100 REFDES=U18
part 337 dc_buf 130 150 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
a 0 a 9 0 40 0 hln 100 REFDES=U3
part 338 dc_buf 130 200 h
a 0 s 11 0 40 40 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
a 0 a 9 0 40 0 hln 100 REFDES=U4
part 339 dc_buf 130 250 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
a 0 a 9 0 40 0 hln 100 REFDES=U5
part 340 dc_buf 130 300 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
a 0 a 9 0 40 0 hln 100 REFDES=U6
part 341 dc_buf 130 350 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
a 0 a 9 0 40 0 hln 100 REFDES=U7
part 342 dc_buf 130 400 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 a 9 0 40 0 hln 100 REFDES=U8
part 343 dc_buf 130 450 h
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 a 9 0 40 0 hln 100 REFDES=U9
part 344 dc_buf 130 500 h
a 0 s 11 0 36 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 a 9 0 40 0 hln 100 REFDES=U10
part 345 dc_buf 130 550 h
a 0 s 11 0 38 34 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 0 a 9 0 40 0 hln 100 REFDES=U11
part 350 dc_buf 130 800 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U16
a 0 a 9 0 40 0 hln 100 REFDES=U16
part 348 dc_buf 130 700 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U14
a 0 a 9 0 40 0 hln 100 REFDES=U14
part 349 dc_buf 130 750 h
a 0 s 11 0 38 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U15
a 0 a 9 0 40 0 hln 100 REFDES=U15
part 346 dc_buf 130 600 h
a 0 s 11 0 38 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 a 9 0 40 0 hln 100 REFDES=U12
part 347 dc_buf 130 650 h
a 0 s 11 0 40 36 hln 100 PART=dc_buf
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U13
a 0 a 9 0 40 0 hln 100 REFDES=U13
part 336 dc_buf 130 100 h
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
a 0 a 9 0 40 0 hln 100 REFDES=U2
a 0 s 11 0 40 36 hln 100 PART=dc_buf
part 351 dc_buf 130 850 h
a 0 u 13 13 16 56 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 11 0 40 38 hln 100 PART=dc_buf
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U17
a 0 a 9 0 40 0 hln 100 REFDES=U17
part 2 dc_dac16 380 440 h
a 0 s 11 0 68 182 hrn 100 PART=dc_dac16
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 9 0 10 -2 hln 100 REFDES=U1
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
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
w 192
a 0 up 0:33 0 0 0 hln 100 V=
s 580 840 580 890 191
s 580 890 570 890 840
s 590 890 580 890 204
s 790 890 790 640 328
s 790 640 1050 640 330
a 0 up 33 0 920 639 hct 100 V=
s 590 890 790 890 335
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
w 94
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 540 200 540 93
a 0 up 33 0 290 539 hct 100 V=
s 200 540 200 600 95
a 0 up 33 0 202 570 hlt 100 LVL=
s 200 600 180 600 97
w 88
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 550 210 550 87
a 0 up 33 0 295 549 hct 100 V=
s 210 550 210 650 89
a 0 up 33 0 212 600 hlt 100 LVL=
s 210 650 180 650 91
w 82
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 560 220 560 81
a 0 up 33 0 300 559 hct 100 V=
s 220 560 220 700 83
a 0 up 33 0 222 630 hlt 100 LVL=
s 220 700 180 700 85
w 75
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 570 230 570 74
s 230 570 230 750 76
a 0 up 33 0 232 660 hlt 100 LVL=
a 0 up 33 0 232 660 hlt 100 V=
s 230 750 180 750 78
w 69
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 580 240 580 68
s 240 580 240 800 70
a 0 up 33 0 242 690 hlt 100 LVL=
a 0 up 33 0 242 690 hlt 100 V=
s 240 800 180 800 72
w 63
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 590 250 590 62
s 250 590 250 850 64
a 0 up 33 0 252 720 hlt 100 LVL=
a 0 up 33 0 252 720 hlt 100 V=
s 250 850 180 850 66
w 177
a 0 up 0:33 0 0 0 hln 100 V=
s 540 560 540 590 178
s 460 560 540 560 176
a 0 up 33 0 500 559 hct 100 V=
w 175
a 0 up 0:33 0 0 0 hln 100 V=
s 490 650 490 670 174
a 0 up 33 0 492 660 hlt 100 V=
w 171
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 490 580 490 610 172
a 0 up 33 0 492 595 hlt 100 V=
s 460 580 490 580 170
a 0 up 33 0 475 579 hct 100 LVL=
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
w 20
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 440 270 440 19
s 270 440 270 100 21
a 0 up 33 0 272 270 hlt 100 LVL=
a 0 up 33 0 272 270 hlt 100 V=
s 270 100 180 100 796
s 330 100 270 100 23
w 588
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 100 380 100 422
a 0 up 33 0 405 99 hct 100 V=
a 0 up 33 0 405 99 hct 100 LVL=
w 26
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 450 260 450 25
s 260 450 260 150 27
a 0 up 33 0 262 300 hlt 100 LVL=
a 0 up 33 0 262 300 hlt 100 V=
s 260 150 180 150 792
s 330 150 260 150 29
w 607
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 150 380 150 424
a 0 up 33 0 405 149 hct 100 V=
w 32
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 460 250 460 31
s 250 460 250 200 33
a 0 up 33 0 252 330 hlt 100 LVL=
a 0 up 33 0 252 330 hlt 100 V=
s 250 200 180 200 788
s 330 200 250 200 35
w 608
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 200 380 200 426
a 0 up 33 0 405 199 hct 100 V=
a 0 up 33 0 405 199 hct 100 LVL=
w 38
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 470 240 470 37
s 240 470 240 250 39
a 0 up 33 0 242 360 hlt 100 V=
s 240 250 180 250 784
s 330 250 240 250 41
a 0 up 33 0 210 249 hct 100 LVL=
w 609
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 250 380 250 428
a 0 up 33 0 405 249 hct 100 V=
a 0 up 33 0 405 249 hct 100 LVL=
w 44
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 480 230 480 43
s 230 480 230 300 45
a 0 up 33 0 232 390 hlt 100 V=
s 230 300 180 300 780
s 330 300 230 300 47
a 0 up 33 0 205 299 hct 100 LVL=
w 610
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 300 380 300 430
a 0 up 33 0 405 299 hct 100 V=
a 0 up 33 0 405 299 hct 100 LVL=
w 50
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 490 220 490 49
a 0 up 33 0 300 489 hct 100 V=
s 220 490 220 350 51
s 220 350 180 350 776
s 330 350 220 350 53
a 0 up 33 0 200 349 hct 100 LVL=
w 611
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 430 350 380 350 432
a 0 up 33 0 405 349 hct 100 V=
a 0 up 33 0 405 349 hct 100 LVL=
w 56
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 380 500 210 500 55
a 0 up 33 0 295 499 hct 100 V=
s 210 500 210 400 57
s 210 400 180 400 772
s 330 400 210 400 59
a 0 up 33 0 195 399 hct 100 LVL=
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
w 717
a 0 up 0:33 0 0 0 hln 100 V=
s 870 480 870 550 531
s 900 480 870 480 529
s 870 450 870 480 537
s 900 450 870 450 535
s 870 420 870 450 550
s 980 420 870 420 548
s 980 460 980 420 546
s 960 460 980 460 544
s 870 550 810 550 714
s 810 550 770 550 721
s 770 520 760 520 312
s 770 550 770 520 310
s 710 550 770 550 308
a 0 up 33 0 740 549 hct 100 V=
s 710 520 710 550 306
s 720 520 710 520 304
w 254
a 0 up 0:33 0 0 0 hln 100 V=
s 420 770 420 840 285
s 640 520 640 770 257
a 0 up 33 0 642 645 hlt 100 V=
s 640 770 420 770 255
w 260
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 540 520 540 510 365
s 540 510 630 510 745
a 0 up 33 0 585 509 hct 100 LVL=
s 460 510 540 510 259
a 0 up 33 0 585 509 hct 100 V=
w 674
a 0 up 0:33 0 0 0 hln 100 V=
s 660 510 720 510 725
a 0 up 33 0 690 509 hct 100 V=
w 288
s 380 830 380 800 264
s 410 840 410 800 287
s 410 800 380 800 289
w 1074
a 0 up 0:33 0 0 0 hln 100 V=
s 410 915 410 880 1072
s 80 915 80 880 1073
s 410 915 80 915 293
a 0 up 33 0 210 914 hct 100 V=
w 150
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 850 80 850 1079
a 0 up 33 0 105 849 hct 100 LVL=
w 146
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 750 80 750 1057
a 0 up 33 0 105 749 hct 100 LVL=
w 148
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 800 80 800 1063
a 0 up 33 0 105 799 hct 100 LVL=
w 144
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 700 80 700 1052
a 0 up 33 0 105 699 hct 100 LVL=
w 142
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 650 80 650 1047
a 0 up 33 0 105 649 hct 100 LVL=
w 140
a 0 up 0:33 0 0 0 hln 100 LVL=
s 130 600 80 600 1042
a 0 up 33 0 105 599 hct 100 LVL=
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
w 1093
s 940 80 990 80 1092
w 1095
s 990 100 940 100 1094
w 1097
s 940 120 990 120 1096
w 1099
s 990 140 940 140 1098
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
+ w 192
j 570 890
+ p 180 3
+ w 192
j 590 890
+ p 333 1
+ w 192
j 580 890
+ w 192
+ w 192
j 1050 640
+ s 332
+ w 192
j 80 100
+ s 151
+ w 120
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
j 80 600
+ s 161
+ w 140
j 80 650
+ s 162
+ w 142
j 80 700
+ s 163
+ w 144
j 80 750
+ s 164
+ w 146
j 80 800
+ s 165
+ w 148
j 80 850
+ s 166
+ w 150
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
j 540 560
+ p 364 2
+ w 177
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
j 870 450
+ w 717
+ w 717
j 960 460
+ p 481 OUT-
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
j 540 520
+ p 364 1
+ w 260
j 630 510
+ p 252 IN2
+ w 260
j 540 510
+ w 260
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
j 80 400
+ s 157
+ w 132
j 410 880
+ p 228 2
+ w 1074
j 80 880
+ s 223
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
j 180 800
+ p 350 O
+ w 69
j 130 800
+ p 350 I0
+ w 148
j 180 700
+ p 348 O
+ w 82
j 130 700
+ p 348 I0
+ w 144
j 180 750
+ p 349 O
+ w 75
j 130 750
+ p 349 I0
+ w 146
j 180 600
+ p 346 O
+ w 94
j 130 600
+ p 346 I0
+ w 140
j 180 650
+ p 347 O
+ w 88
j 130 650
+ p 347 I0
+ w 142
j 180 100
+ p 336 O
+ w 20
j 130 100
+ p 336 I0
+ w 120
j 180 850
+ p 351 O
+ w 63
j 130 850
+ p 351 I0
+ w 150
j 380 510
+ p 2 DB8
+ w 114
j 380 520
+ p 2 DB7
+ w 108
j 380 530
+ p 2 DB6
+ w 100
j 380 540
+ p 2 DB5
+ w 94
j 380 550
+ p 2 DB4
+ w 88
j 380 560
+ p 2 DB3
+ w 82
j 380 570
+ p 2 DB2
+ w 75
j 380 580
+ p 2 DB1
+ w 69
j 380 590
+ p 2 DB0
+ w 63
j 460 560
+ p 2 REF
+ w 177
j 460 580
+ p 2 GND
+ w 171
j 380 440
+ p 2 DB15
+ w 20
j 380 450
+ p 2 DB14
+ w 26
j 380 460
+ p 2 DB13
+ w 32
j 380 470
+ p 2 DB12
+ w 38
j 380 480
+ p 2 DB11
+ w 44
j 380 490
+ p 2 DB10
+ w 50
j 380 500
+ p 2 DB9
+ w 56
j 460 510
+ p 2 OUT
+ w 260
j 940 80
+ s 1084
+ w 1093
j 990 80
+ s 1088
+ w 1093
j 940 100
+ s 1085
+ w 1095
j 990 100
+ s 1089
+ w 1095
j 940 120
+ s 1086
+ w 1097
j 990 120
+ s 1090
+ w 1097
j 940 140
+ s 1087
+ w 1099
j 990 140
+ s 1091
+ w 1099
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=User
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 735 t 6 280 990 560 1080 0 191
Pin functions for this model are based on DAC16 
Iref - Reference Current Input
DB15-DB0 - 16-Bit Digital Input Bus. DB15 is MSB.
Iout - Current Output
Ccomp - Current Ladder Compensation
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
t 955 t 5 395 634 424 652 0 3
DAC
v 956 v 0 385 630
385 655
435 655
435 630
385 630
;
v 957 v 0 390 635
390 650
430 650
430 635
390 635
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
t 965 t 5 860 379 1105 410 0 39
Iout=8*Iref*(65535-Digital_Code)/65535)
v 1081 v 0 855 375
855 400
1060 400
1060 375
855 375
;
v 1083 v 0 850 370
850 405
1065 405
1065 370
850 370
;
t 733 t 6 40 1065 260 990 0 127
Cout - Analog Output capacitance
Cin - Digital Input capacitance (in IO MODEL)
IO_MODEL - Digital input model (see notes)


t 731 t 5 680 995 1170 1075 0 413
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
3. Settling time is not modeled. Propagation delay can be added to the DAC timing model for this delay.