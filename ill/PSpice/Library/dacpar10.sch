*version 9.2 901107018
u 1159
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
pageloc 1 0 16900 
@status
c 99:05:25:12:48:50;930340130
a 0 98:03:08:13:40:41;892068041 e 
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
port 333 IF_OUT 1145 605 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Vref
port 334 IF_OUT 1145 675 h
a 1 xr 3 0 31 8 hcn 100 LABEL=AGND
port 783 hi 100 385 h
port 723 IF_IN 70 415 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB7
port 729 IF_IN 70 395 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB9
port 728 IF_IN 70 405 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB8
port 722 IF_IN 70 425 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB6
port 717 IF_IN 70 435 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB5
port 716 IF_IN 70 445 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB4
port 711 IF_IN 70 455 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB3
port 710 IF_IN 70 465 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB2
port 702 IF_IN 70 475 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 699 IF_IN 70 485 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 262 Agnd 1020 495 h
port 332 IF_OUT 1140 435 h
a 1 xr 3 0 31 8 hcn 100 LABEL=VOUT
port 1155 interface 1050 130 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VDD
port 1156 interface 1050 150 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VSS
port 1157 bubble 1110 130 d
a 1 x 3 0 0 0 hcn 100 LABEL=VDD
port 1158 bubble 1110 150 d
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
part 1114 dc_reg10 360 355 h
a 0 sp 11 0 102 168 hrn 100 PART=dc_reg10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 ap 9 0 12 8 hln 100 REFDES=U8
part 1116 dc_reg10 520 355 h
a 0 sp 11 0 102 168 hrn 100 PART=dc_reg10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 ap 9 0 12 8 hln 100 REFDES=U9
part 218 C 875 625 d
a 0 u 13 0 28 2 hln 100 VALUE=50p
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 217 R 915 615 d
a 0 u 13 0 39 -1 hln 100 VALUE=8k
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 25 0 hln 100 REFDES=R1
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 263 R 1020 445 d
a 0 u 13 0 27 1 hln 100 VALUE=1G
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 249 GTABLE 940 445 U
a 0 u 13 13 184 89 hln 100 TABLE=(@VSINK,@ISINK) (@VSOURCE,@ISOURCE)
a 0 sp 11 0 54 35 hln 100 PART=GTABLE
a 1 ap 9 0 30 46 hln 100 REFDES=G1
a 0 u 13 0 56 2 hln 100 EXPR=200K*V(%IN+, %IN-)
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
part 1115 dc_dac10 690 395 h
a 0 sp 11 0 124 162 hrn 100 PART=dc_dac10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 ap 9 0 12 -2 hln 100 REFDES=U12
part 1113 dc_buf10 100 385 h
a 0 sp 11 0 62 134 hrn 100 PART=dc_buf10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 ap 9 0 10 -2 hln 100 REFDES=U10
a 0 u 13 13 -10 152 hlb 100 PTPZLTY=
a 0 u 13 13 -10 162 hlb 100 PTPZHTY=
a 0 u 13 13 -10 172 hlb 100 PTPLZTY=
a 0 u 13 13 -10 182 hlb 100 PTPHZTY=
part 436 slewrate 780 445 h
a 0 u 13 13 9 54 hln 100 BW=0.5Meg
a 0 s 11 0 60 30 hrn 100 PART=slewrate
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 10 42 hln 100 PSR=@SR
a 0 a 9 0 10 -2 hln 100 REFDES=U11
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
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
w 193
a 0 up 0:33 0 0 0 hln 100 LVL=
s 320 375 360 375 196
s 320 235 320 375 194
a 0 up 33 0 322 305 hlt 100 LVL=
s 300 235 320 235 192
w 199
a 0 up 0:33 0 0 0 hln 100 LVL=
s 480 175 300 175 202
s 480 375 480 175 200
a 0 up 33 0 482 275 hlt 100 LVL=
s 520 375 480 375 198
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
w 896
s 520 485 470 485 895
a 0 up 33 0 495 484 hct 100 LVL=
w 898
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
w 26
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 455 470 455 11
a 0 up 33 0 495 454 hct 100 LVL=
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
w 942
s 690 485 630 485 941
a 0 up 33 0 660 484 hct 100 LVL=
w 944
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
w 62
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 435 630 435 47
a 0 up 33 0 660 434 hct 100 LVL=
w 320
a 0 up 0:33 0 0 0 hln 100 V=
s 915 615 915 605 233
s 915 605 875 605 606
s 1145 605 915 605 231
a 0 up 33 0 1030 604 hct 100 V=
s 875 625 875 605 652
s 875 605 685 605 1090
s 685 605 685 505 1092
s 685 505 690 505 1094
w 1097
s 740 535 740 675 1096
s 875 675 875 655 223
s 875 675 915 675 601
s 915 675 915 655 227
s 915 675 1145 675 328
a 0 up 33 0 1030 674 hct 100 V=
s 740 675 875 675 1098
w 810
s 170 395 360 395 811
w 814
s 170 405 360 405 813
w 816
s 170 415 360 415 815
w 818
s 170 425 360 425 817
w 820
s 170 435 360 435 819
w 822
s 170 445 360 445 821
w 824
s 170 455 360 455 823
w 826
s 170 465 360 465 825
w 828
s 170 475 360 475 827
w 830
s 170 485 360 485 829
w 698
s 70 485 100 485 697
a 0 up 33 0 85 484 hct 100 LVL=
w 701
s 70 475 100 475 700
a 0 up 33 0 85 474 hct 100 LVL=
w 707
s 70 465 100 465 706
a 0 up 33 0 85 464 hct 100 LVL=
w 709
s 70 455 100 455 708
a 0 up 33 0 85 454 hct 100 LVL=
w 713
s 70 445 100 445 712
a 0 up 33 0 85 444 hct 100 LVL=
w 715
s 70 435 100 435 714
a 0 up 33 0 85 434 hct 100 LVL=
w 719
s 70 425 100 425 718
a 0 up 33 0 85 424 hct 100 LVL=
w 721
s 70 415 100 415 720
a 0 up 33 0 85 414 hct 100 LVL=
w 725
s 70 405 100 405 724
a 0 up 33 0 85 404 hct 100 LVL=
w 727
s 70 395 100 395 726
a 0 up 33 0 85 394 hct 100 LVL=
w 384
a 0 up 0:33 0 0 0 hln 100 V=
s 850 445 940 445 438
a 0 up 33 0 895 444 hct 100 V=
w 339
a 0 up 0:33 0 0 0 hln 100 V=
s 1020 485 1020 490 1103
s 1020 490 1020 495 1133
s 1000 490 1020 490 351
s 990 445 1000 445 256
s 1000 490 1000 445 682
a 0 up 33 0 1002 465 hlt 100 V=
w 637
a 0 up 0:33 0 0 0 hln 100 V=
s 1020 445 1020 435 268
s 990 435 1010 435 1109
s 1010 435 1020 435 1139
s 1010 435 1010 390 353
a 0 up 33 0 1012 412 hlt 100 V=
s 940 435 940 390 252
s 1010 390 940 390 356
s 1020 435 1140 435 270
w 672
s 770 445 780 445 671
w 1152
s 1050 130 1110 130 1151
a 0 up 33 0 1080 129 hct 100 V=
w 1154
s 1050 150 1110 150 1153
a 0 up 33 0 1080 149 hct 100 V=
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
j 470 445
+ p 1114 Q4
+ w 28
j 470 435
+ p 1114 Q5
+ w 30
j 470 425
+ p 1114 Q6
+ w 32
j 470 415
+ p 1114 Q7
+ w 34
j 470 405
+ p 1114 Q8
+ w 36
j 470 395
+ p 1114 Q9
+ w 38
j 360 355
+ p 1114 PREBAR
+ w 205
j 470 485
+ p 1114 Q0
+ w 896
j 470 475
+ p 1114 Q1
+ w 898
j 360 365
+ p 1114 CLRBAR
+ w 187
j 470 465
+ p 1114 Q2
+ w 24
j 360 375
+ p 1114 GATE
+ w 193
j 470 455
+ p 1114 Q3
+ w 26
j 360 395
+ p 1114 D9
+ w 810
j 360 405
+ p 1114 D8
+ w 814
j 360 415
+ p 1114 D7
+ w 816
j 360 425
+ p 1114 D6
+ w 818
j 360 435
+ p 1114 D5
+ w 820
j 360 445
+ p 1114 D4
+ w 822
j 360 455
+ p 1114 D3
+ w 824
j 360 465
+ p 1114 D2
+ w 826
j 360 475
+ p 1114 D1
+ w 828
j 360 485
+ p 1114 D0
+ w 830
j 520 375
+ p 1116 GATE
+ w 199
j 630 425
+ p 1116 Q6
+ w 64
j 630 415
+ p 1116 Q7
+ w 66
j 630 405
+ p 1116 Q8
+ w 68
j 630 395
+ p 1116 Q9
+ w 70
j 630 465
+ p 1116 Q2
+ w 56
j 630 485
+ p 1116 Q0
+ w 942
j 630 475
+ p 1116 Q1
+ w 944
j 630 455
+ p 1116 Q3
+ w 58
j 630 445
+ p 1116 Q4
+ w 60
j 630 435
+ p 1116 Q5
+ w 62
j 520 445
+ p 1116 D4
+ w 28
j 520 435
+ p 1116 D5
+ w 30
j 520 425
+ p 1116 D6
+ w 32
j 520 415
+ p 1116 D7
+ w 34
j 520 405
+ p 1116 D8
+ w 36
j 520 395
+ p 1116 D9
+ w 38
j 520 355
+ p 1116 PREBAR
+ w 205
j 520 485
+ p 1116 D0
+ w 896
j 520 475
+ p 1116 D1
+ w 898
j 520 365
+ p 1116 CLRBAR
+ w 187
j 520 465
+ p 1116 D2
+ w 24
j 520 455
+ p 1116 D3
+ w 26
j 690 425
+ p 1115 DB6
+ w 64
j 690 415
+ p 1115 DB7
+ w 66
j 690 405
+ p 1115 DB8
+ w 68
j 690 395
+ p 1115 DB9
+ w 70
j 690 465
+ p 1115 DB2
+ w 56
j 690 485
+ p 1115 DB0
+ w 942
j 690 475
+ p 1115 DB1
+ w 944
j 690 455
+ p 1115 DB3
+ w 58
j 690 445
+ p 1115 DB4
+ w 60
j 690 435
+ p 1115 DB5
+ w 62
j 915 615
+ p 217 1
+ w 320
j 1145 605
+ s 333
+ w 320
j 915 605
+ w 320
+ w 320
j 875 625
+ p 218 1
+ w 320
j 875 605
+ w 320
+ w 320
j 690 505
+ p 1115 REF
+ w 320
j 740 535
+ p 1115 GND
+ w 1097
j 915 675
+ w 1097
+ w 1097
j 875 655
+ p 218 2
+ w 1097
j 915 655
+ p 217 2
+ w 1097
j 1145 675
+ s 334
+ w 1097
j 875 675
+ w 1097
+ w 1097
j 100 385
+ p 1113 OE
+ s 783
j 170 395
+ p 1113 O0
+ w 810
j 170 405
+ p 1113 O1
+ w 814
j 170 415
+ p 1113 O2
+ w 816
j 170 425
+ p 1113 O3
+ w 818
j 170 435
+ p 1113 O4
+ w 820
j 170 445
+ p 1113 O5
+ w 822
j 170 455
+ p 1113 O6
+ w 824
j 170 465
+ p 1113 O7
+ w 826
j 170 475
+ p 1113 O8
+ w 828
j 170 485
+ p 1113 O9
+ w 830
j 100 485
+ p 1113 I9
+ w 698
j 70 485
+ s 699
+ w 698
j 100 475
+ p 1113 I8
+ w 701
j 70 475
+ s 702
+ w 701
j 100 465
+ p 1113 I7
+ w 707
j 70 465
+ s 710
+ w 707
j 100 455
+ p 1113 I6
+ w 709
j 70 455
+ s 711
+ w 709
j 100 445
+ p 1113 I5
+ w 713
j 70 445
+ s 716
+ w 713
j 100 435
+ p 1113 I4
+ w 715
j 70 435
+ s 717
+ w 715
j 100 425
+ p 1113 I3
+ w 719
j 70 425
+ s 722
+ w 719
j 100 415
+ p 1113 I2
+ w 721
j 70 415
+ s 723
+ w 721
j 100 405
+ p 1113 I1
+ w 725
j 70 405
+ s 728
+ w 725
j 100 395
+ p 1113 I0
+ w 727
j 70 395
+ s 729
+ w 727
j 940 445
+ p 249 IN+
+ w 384
j 1020 485
+ p 263 2
+ w 339
j 1020 495
+ s 262
+ w 339
j 1020 490
+ w 339
+ w 339
j 990 445
+ p 249 OUT+
+ w 339
j 1020 445
+ p 263 1
+ w 637
j 990 435
+ p 249 OUT-
+ w 637
j 1010 435
+ w 637
+ w 637
j 940 435
+ p 249 IN-
+ w 637
j 1140 435
+ s 332
+ w 637
j 1020 435
+ w 637
+ w 637
j 770 445
+ p 1115 OUT
+ w 672
j 1050 130
+ s 1155
+ w 1152
j 1050 150
+ s 1156
+ w 1154
j 1110 130
+ s 1157
+ w 1152
j 1110 150
+ s 1158
+ w 1154
j 850 445
+ p 436 OUT
+ w 384
j 780 445
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
v 529 v 0 770 380
770 415
880 415
880 380
770 380
;
v 528 v 0 775 385
775 410
875 410
875 385
775 385
;
t 527 t 5 780 389 883 407 0 18
Slew Rate Limiting
t 530 t 5 935 334 1060 355 0 16
Current Limiting
v 531 v 0 935 335
935 350
1030 350
1030 335
935 335
;
v 532 v 0 930 330
930 355
1035 355
1035 330
930 330
;
t 668 t 6 400 970 700 750 0 131
Pins based on AD7224.
DB9-0 - Data Bits
LDAC*, CS*, WR*, RESET* - Control 
Vout - Voltage Ouput
Vref - Referency Voltage Output
t 526 t 5 720 745 1165 825 0 308
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
