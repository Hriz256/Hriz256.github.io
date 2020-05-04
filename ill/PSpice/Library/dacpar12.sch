*version 9.2 3232287459
u 1129
U? 13
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
pageloc 1 0 19402 
@status
c 99:05:25:12:49:03;930340143
a 0 98:03:08:13:38:48;892067928 e 
*page 1 0 1520 970 iC
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
port 723 IF_IN 70 435 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB7
port 735 IF_IN 70 395 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB11
port 734 IF_IN 70 405 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB10
port 729 IF_IN 70 415 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB9
port 728 IF_IN 70 425 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB8
port 722 IF_IN 70 445 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB6
port 717 IF_IN 70 455 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB5
port 716 IF_IN 70 465 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB4
port 711 IF_IN 70 475 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB3
port 710 IF_IN 70 485 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB2
port 702 IF_IN 70 495 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 699 IF_IN 70 505 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 783 hi 100 385 h
port 333 IF_OUT 1145 625 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Vref
port 334 IF_OUT 1145 695 h
a 1 xr 3 0 31 8 hcn 100 LABEL=AGND
port 262 Agnd 1020 515 h
port 332 IF_OUT 1140 455 h
a 1 xr 3 0 31 8 hcn 100 LABEL=VOUT
port 1125 interface 1090 120 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VDD
port 1126 interface 1090 140 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VSS
port 1127 bubble 1150 120 d
a 1 x 3 0 0 0 hcn 100 LABEL=VDD
port 1128 bubble 1150 140 d
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
a 0 ap 9 0 20 2 hln 100 REFDES=U3
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
part 72 dc_buf 100 155 h
a 0 u 0:13 0 14 50 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 40 hln 100 PART=dc_buf
a 0 ap 9 0 22 0 hln 100 REFDES=U4
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
part 74 dc_buf 100 255 h
a 0 u 0:13 0 54 62 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 34 hln 100 PART=dc_buf
a 0 u 0:13 0 0 20 hlb 100 IO_LEVEL=0
a 0 ap 9 0 20 0 hln 100 REFDES=U5
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
part 113 dc_buf 100 305 h
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 38 34 hln 100 PART=dc_buf
a 0 ap 9 0 20 0 hln 100 REFDES=U6
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
part 5 dacpar_constrnt 210 85 h
a 0 s 11 0 78 50 hrn 100 PART=dacpar_constrnt
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 ap 9 0 10 -2 hln 100 REFDES=U7
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
part 1072 dc_reg12 360 355 h
a 0 sp 11 0 100 178 hrn 100 PART=dc_reg12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 ap 9 0 12 -2 hln 100 REFDES=U9
part 1074 dc_reg12 520 355 h
a 0 sp 11 0 100 178 hrn 100 PART=dc_reg12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 ap 9 0 12 -2 hln 100 REFDES=U10
part 218 C 875 645 d
a 0 u 13 0 28 2 hln 100 VALUE=50p
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 217 R 915 635 d
a 0 u 13 0 39 -1 hln 100 VALUE=8k
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 25 0 hln 100 REFDES=R1
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 263 R 1020 465 d
a 0 u 13 0 27 1 hln 100 VALUE=1G
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 249 GTABLE 940 465 U
a 0 u 13 13 184 89 hln 100 TABLE=(@VSINK,@ISINK) (@VSOURCE,@ISOURCE)
a 0 sp 11 0 54 35 hln 100 PART=GTABLE
a 1 ap 9 0 30 46 hln 100 REFDES=G1
a 0 u 13 0 56 2 hln 100 EXPR=200K*V(%IN+, %IN-)
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
part 1071 dc_dac12 690 395 h
a 0 sp 11 0 108 160 hrn 100 PART=dc_dac12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 ap 9 0 10 -2 hln 100 REFDES=U12
part 1073 dc_buf12 100 385 h
a 0 sp 11 0 60 154 hrn 100 PART=dc_buf12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 ap 9 0 10 -2 hln 100 REFDES=U8
a 0 u 13 13 -10 184 hlb 100 PTPZLTY=
a 0 u 13 13 -10 194 hlb 100 PTPZHTY=
a 0 u 13 13 -10 204 hlb 100 PTPLZTY=
a 0 u 13 13 -10 214 hlb 100 PTPHZTY=
part 436 slewrate 780 465 h
a 0 u 13 13 9 54 hln 100 BW=0.5Meg
a 0 s 11 0 60 30 hrn 100 PART=slewrate
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 10 42 hln 100 PSR=@SR
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 0 a 9 0 10 -2 hln 100 REFDES=U11
part 1 titleblk 2020 1520 h
a 1 x 13 0 180 60 hcn 100 PAGETITLE=D/A Converter - Parallel Interface
a 1 s 13 0 350 10 hcn 100 PAGESIZE=C
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
w 698
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 505 100 505 697
a 0 up 33 0 85 504 hct 100 LVL=
w 701
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 495 100 495 700
a 0 up 33 0 85 494 hct 100 LVL=
w 707
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 485 100 485 706
a 0 up 33 0 85 484 hct 100 LVL=
w 709
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 475 100 475 708
a 0 up 33 0 85 474 hct 100 LVL=
w 713
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 465 100 465 712
a 0 up 33 0 85 464 hct 100 LVL=
w 715
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 455 100 455 714
a 0 up 33 0 85 454 hct 100 LVL=
w 719
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 445 100 445 718
a 0 up 33 0 85 444 hct 100 LVL=
w 721
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 435 100 435 720
a 0 up 33 0 85 434 hct 100 LVL=
w 725
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 425 100 425 724
a 0 up 33 0 85 424 hct 100 LVL=
w 727
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 415 100 415 726
a 0 up 33 0 85 414 hct 100 LVL=
w 731
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 405 100 405 730
a 0 up 33 0 85 404 hct 100 LVL=
w 733
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 395 100 395 732
a 0 up 33 0 85 394 hct 100 LVL=
w 193
a 0 up 0:33 0 0 0 hln 100 LVL=
s 320 375 360 375 196
s 320 235 320 375 194
a 0 up 33 0 322 305 hlt 100 LVL=
s 300 235 320 235 192
w 810
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 395 360 395 811
a 0 up 33 0 265 394 hct 100 LVL=
w 814
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 405 360 405 813
a 0 up 33 0 265 404 hct 100 LVL=
w 816
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 415 360 415 815
a 0 up 33 0 265 414 hct 100 LVL=
w 818
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 425 360 425 817
a 0 up 33 0 265 424 hct 100 LVL=
w 820
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 435 360 435 819
a 0 up 33 0 265 434 hct 100 LVL=
w 822
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 445 360 445 821
a 0 up 33 0 265 444 hct 100 LVL=
w 824
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 455 360 455 823
a 0 up 33 0 265 454 hct 100 LVL=
w 826
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 465 360 465 825
a 0 up 33 0 265 464 hct 100 LVL=
w 828
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 475 360 475 827
a 0 up 33 0 265 474 hct 100 LVL=
w 830
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 485 360 485 829
a 0 up 33 0 265 484 hct 100 LVL=
w 832
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 495 360 495 831
a 0 up 33 0 265 494 hct 100 LVL=
w 834
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 505 360 505 833
a 0 up 33 0 265 504 hct 100 LVL=
w 199
a 0 up 0:33 0 0 0 hln 100 LVL=
s 480 175 300 175 202
s 480 375 480 175 200
a 0 up 33 0 482 275 hlt 100 LVL=
s 520 375 480 375 198
w 26
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 455 470 455 11
a 0 up 33 0 495 454 hct 100 LVL=
w 28
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 445 470 445 13
a 0 up 33 0 495 444 hct 100 LVL=
w 30
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 435 470 435 15
a 0 up 33 0 495 434 hct 100 LVL=
w 32
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 425 470 425 17
a 0 up 33 0 495 424 hct 100 LVL=
w 34
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 415 470 415 19
a 0 up 33 0 495 414 hct 100 LVL=
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
w 892
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 505 470 505 891
a 0 up 33 0 495 504 hct 100 LVL=
w 894
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 495 470 495 893
a 0 up 33 0 495 494 hct 100 LVL=
w 896
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 485 470 485 895
a 0 up 33 0 495 484 hct 100 LVL=
w 898
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 475 470 475 897
a 0 up 33 0 495 474 hct 100 LVL=
w 187
a 0 up 0:33 0 0 0 hln 100 LVL=
s 340 365 360 365 451
s 340 305 340 365 449
s 510 365 520 365 443
s 510 305 510 365 441
s 510 305 340 305 190
s 340 305 150 305 184
a 0 up 33 0 245 304 hct 100 LVL=
w 24
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 465 470 465 9
a 0 up 33 0 495 464 hct 100 LVL=
w 62
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 435 630 435 47
a 0 up 33 0 660 434 hct 100 LVL=
w 64
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 425 630 425 49
a 0 up 33 0 660 424 hct 100 LVL=
w 66
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 415 630 415 51
a 0 up 33 0 660 414 hct 100 LVL=
w 68
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 405 630 405 53
a 0 up 33 0 660 404 hct 100 LVL=
w 70
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 395 630 395 55
a 0 up 33 0 660 394 hct 100 LVL=
w 56
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 465 630 465 41
a 0 up 33 0 660 464 hct 100 LVL=
w 938
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 505 630 505 937
a 0 up 33 0 660 504 hct 100 LVL=
w 940
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 495 630 495 939
a 0 up 33 0 660 494 hct 100 LVL=
w 942
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 485 630 485 941
a 0 up 33 0 660 484 hct 100 LVL=
w 944
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 475 630 475 943
a 0 up 33 0 660 474 hct 100 LVL=
w 58
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 455 630 455 43
a 0 up 33 0 660 454 hct 100 LVL=
w 60
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 445 630 445 45
a 0 up 33 0 660 444 hct 100 LVL=
w 320
a 0 up 0:33 0 0 0 hln 100 V=
s 915 635 915 625 233
s 915 625 875 625 606
s 1145 625 915 625 231
a 0 up 33 0 1030 624 hct 100 V=
s 875 645 875 625 652
s 875 625 685 625 1090
s 685 625 685 525 1092
s 685 525 690 525 1094
w 1097
a 0 up 0:33 0 0 0 hln 100 V=
s 740 555 740 695 1096
s 875 695 875 675 223
s 875 695 915 695 601
s 915 695 915 675 227
s 915 695 1145 695 328
a 0 up 33 0 1030 694 hct 100 V=
s 740 695 875 695 1098
w 384
a 0 up 0:33 0 0 0 hln 100 V=
s 850 465 940 465 438
a 0 up 33 0 895 464 hct 100 V=
w 339
a 0 up 0:33 0 0 0 hln 100 V=
s 1020 505 1020 510 1060
s 1020 510 1020 515 1103
s 1000 510 1020 510 351
s 990 465 1000 465 256
s 1000 510 1000 465 682
a 0 up 33 0 1002 485 hlt 100 V=
w 637
a 0 up 0:33 0 0 0 hln 100 V=
s 1020 465 1020 455 268
s 990 455 1010 455 1066
s 1010 455 1020 455 1109
s 1010 455 1010 410 353
a 0 up 33 0 1012 432 hlt 100 V=
s 940 455 940 410 252
s 1010 410 940 410 356
s 1020 455 1140 455 270
w 672
a 0 up 0:33 0 0 0 hln 100 V=
s 770 465 780 465 671
a 0 up 33 0 775 464 hct 100 V=
w 1122
s 1090 120 1150 120 1121
a 0 up 33 0 1120 119 hct 100 V=
w 1124
s 1090 140 1150 140 1123
a 0 up 33 0 1120 139 hct 100 V=
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
j 100 205
+ p 73 I0
+ w 275
j 150 205
+ p 73 O
+ w 84
j 100 155
+ p 72 I0
+ w 273
j 150 155
+ p 72 O
+ w 99
j 100 255
+ p 74 I0
+ w 277
j 150 255
+ p 74 O
+ w 93
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
j 70 505
+ s 699
+ w 698
j 70 495
+ s 702
+ w 701
j 70 485
+ s 710
+ w 707
j 70 475
+ s 711
+ w 709
j 70 465
+ s 716
+ w 713
j 70 455
+ s 717
+ w 715
j 70 445
+ s 722
+ w 719
j 70 435
+ s 723
+ w 721
j 70 425
+ s 728
+ w 725
j 70 415
+ s 729
+ w 727
j 70 405
+ s 734
+ w 731
j 70 395
+ s 735
+ w 733
j 100 385
+ p 1073 OE
+ s 783
j 170 395
+ p 1073 O0
+ w 810
j 170 405
+ p 1073 O1
+ w 814
j 170 415
+ p 1073 O2
+ w 816
j 170 425
+ p 1073 O3
+ w 818
j 170 435
+ p 1073 O4
+ w 820
j 170 445
+ p 1073 O5
+ w 822
j 170 455
+ p 1073 O6
+ w 824
j 170 465
+ p 1073 O7
+ w 826
j 170 475
+ p 1073 O8
+ w 828
j 170 485
+ p 1073 O9
+ w 830
j 170 495
+ p 1073 O10
+ w 832
j 170 505
+ p 1073 O11
+ w 834
j 100 505
+ p 1073 I11
+ w 698
j 100 495
+ p 1073 I10
+ w 701
j 100 485
+ p 1073 I9
+ w 707
j 100 475
+ p 1073 I8
+ w 709
j 100 465
+ p 1073 I7
+ w 713
j 100 455
+ p 1073 I6
+ w 715
j 100 445
+ p 1073 I5
+ w 719
j 100 435
+ p 1073 I4
+ w 721
j 100 425
+ p 1073 I3
+ w 725
j 100 415
+ p 1073 I2
+ w 727
j 100 405
+ p 1073 I1
+ w 731
j 100 395
+ p 1073 I0
+ w 733
j 470 455
+ p 1072 Q5
+ w 26
j 470 445
+ p 1072 Q6
+ w 28
j 470 435
+ p 1072 Q7
+ w 30
j 470 425
+ p 1072 Q8
+ w 32
j 470 415
+ p 1072 Q9
+ w 34
j 470 405
+ p 1072 Q10
+ w 36
j 470 395
+ p 1072 Q11
+ w 38
j 360 355
+ p 1072 PREBAR
+ w 205
j 470 505
+ p 1072 Q0
+ w 892
j 470 495
+ p 1072 Q1
+ w 894
j 470 485
+ p 1072 Q2
+ w 896
j 470 475
+ p 1072 Q3
+ w 898
j 360 365
+ p 1072 CLRBAR
+ w 187
j 470 465
+ p 1072 Q4
+ w 24
j 360 375
+ p 1072 GATE
+ w 193
j 360 395
+ p 1072 D11
+ w 810
j 360 405
+ p 1072 D10
+ w 814
j 360 415
+ p 1072 D9
+ w 816
j 360 425
+ p 1072 D8
+ w 818
j 360 435
+ p 1072 D7
+ w 820
j 360 445
+ p 1072 D6
+ w 822
j 360 455
+ p 1072 D5
+ w 824
j 360 465
+ p 1072 D4
+ w 826
j 360 475
+ p 1072 D3
+ w 828
j 360 485
+ p 1072 D2
+ w 830
j 360 495
+ p 1072 D1
+ w 832
j 360 505
+ p 1072 D0
+ w 834
j 630 435
+ p 1074 Q7
+ w 62
j 630 425
+ p 1074 Q8
+ w 64
j 630 415
+ p 1074 Q9
+ w 66
j 630 405
+ p 1074 Q10
+ w 68
j 630 395
+ p 1074 Q11
+ w 70
j 630 465
+ p 1074 Q4
+ w 56
j 630 505
+ p 1074 Q0
+ w 938
j 630 495
+ p 1074 Q1
+ w 940
j 630 485
+ p 1074 Q2
+ w 942
j 630 475
+ p 1074 Q3
+ w 944
j 630 455
+ p 1074 Q5
+ w 58
j 630 445
+ p 1074 Q6
+ w 60
j 520 375
+ p 1074 GATE
+ w 199
j 520 455
+ p 1074 D5
+ w 26
j 520 445
+ p 1074 D6
+ w 28
j 520 435
+ p 1074 D7
+ w 30
j 520 425
+ p 1074 D8
+ w 32
j 520 415
+ p 1074 D9
+ w 34
j 520 405
+ p 1074 D10
+ w 36
j 520 395
+ p 1074 D11
+ w 38
j 520 355
+ p 1074 PREBAR
+ w 205
j 520 505
+ p 1074 D0
+ w 892
j 520 495
+ p 1074 D1
+ w 894
j 520 485
+ p 1074 D2
+ w 896
j 520 475
+ p 1074 D3
+ w 898
j 520 365
+ p 1074 CLRBAR
+ w 187
j 520 465
+ p 1074 D4
+ w 24
j 690 435
+ p 1071 DB7
+ w 62
j 690 425
+ p 1071 DB8
+ w 64
j 690 415
+ p 1071 DB9
+ w 66
j 690 405
+ p 1071 DB10
+ w 68
j 690 395
+ p 1071 DB11
+ w 70
j 690 465
+ p 1071 DB4
+ w 56
j 690 505
+ p 1071 DB0
+ w 938
j 690 495
+ p 1071 DB1
+ w 940
j 690 485
+ p 1071 DB2
+ w 942
j 690 475
+ p 1071 DB3
+ w 944
j 690 455
+ p 1071 DB5
+ w 58
j 690 445
+ p 1071 DB6
+ w 60
j 915 695
+ w 1097
+ w 1097
j 875 695
+ w 1097
+ w 1097
j 915 635
+ p 217 1
+ w 320
j 1145 625
+ s 333
+ w 320
j 915 625
+ w 320
+ w 320
j 875 645
+ p 218 1
+ w 320
j 875 625
+ w 320
+ w 320
j 690 525
+ p 1071 REF
+ w 320
j 740 555
+ p 1071 GND
+ w 1097
j 875 675
+ p 218 2
+ w 1097
j 915 675
+ p 217 2
+ w 1097
j 1145 695
+ s 334
+ w 1097
j 940 465
+ p 249 IN+
+ w 384
j 1020 505
+ p 263 2
+ w 339
j 1020 515
+ s 262
+ w 339
j 1020 510
+ w 339
+ w 339
j 990 465
+ p 249 OUT+
+ w 339
j 1020 465
+ p 263 1
+ w 637
j 990 455
+ p 249 OUT-
+ w 637
j 1010 455
+ w 637
+ w 637
j 940 455
+ p 249 IN-
+ w 637
j 1140 455
+ s 332
+ w 637
j 1020 455
+ w 637
+ w 637
j 770 465
+ p 1071 OUT
+ w 672
j 1090 120
+ s 1125
+ w 1122
j 1090 140
+ s 1126
+ w 1124
j 1150 120
+ s 1127
+ w 1122
j 1150 140
+ s 1128
+ w 1124
j 850 465
+ p 436 OUT
+ w 384
j 780 465
+ p 436 IN
+ w 672
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=C
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
t 524 t 5 65 749 410 995 0 479
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

t 525 t 5 710 729 754 747 0 6
NOTES:
t 523 t 5 50 729 280 750 0 22
PARAMETER DEFINITIONS:
t 667 t 5 385 729 615 750 0 17
PIN DESCRIPTIONS:
t 668 t 6 400 970 700 750 0 132
Pins based on AD7224.
DB11-0 - Data Bits
LDAC*, CS*, WR*, RESET* - Control 
Vout - Voltage Ouput
Vref - Referency Voltage Output
v 529 v 0 770 400
770 435
880 435
880 400
770 400
;
v 528 v 0 775 405
775 430
875 430
875 405
775 405
;
t 527 t 5 780 409 883 427 0 18
Slew Rate Limiting
t 530 t 5 935 354 1060 375 0 16
Current Limiting
v 531 v 0 935 355
935 370
1030 370
1030 355
935 355
;
v 532 v 0 930 350
930 375
1035 375
1035 350
930 350
;
t 526 t 5 720 745 1165 825 0 308
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
