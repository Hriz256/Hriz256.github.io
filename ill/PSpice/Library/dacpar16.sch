*version 9.2 3851380313
u 1042
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
pageloc 1 0 22282 
@status
c 99:05:25:12:49:36;930340176
a 0 98:03:08:13:33:36;892067616 e 
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
port 262 Agnd 1020 515 h
port 333 IF_OUT 1140 580 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Vref
port 334 IF_OUT 1140 650 h
a 1 xr 3 0 31 8 hcn 100 LABEL=AGND
port 332 IF_OUT 1140 455 h
a 1 xr 3 0 31 8 hcn 100 LABEL=VOUT
port 783 hi 100 385 h
port 723 IF_IN 70 475 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB7
port 747 IF_IN 70 395 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB15
port 746 IF_IN 70 405 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB14
port 741 IF_IN 70 415 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB13
port 740 IF_IN 70 425 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB12
port 735 IF_IN 70 435 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB11
port 734 IF_IN 70 445 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB10
port 729 IF_IN 70 455 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB9
port 728 IF_IN 70 465 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB8
port 722 IF_IN 70 485 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB6
port 717 IF_IN 70 495 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB5
port 716 IF_IN 70 505 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB4
port 711 IF_IN 70 515 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB3
port 710 IF_IN 70 525 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB2
port 702 IF_IN 70 535 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 699 IF_IN 70 545 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 1038 interface 1110 140 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VDD
port 1039 interface 1110 160 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VSS
port 1040 bubble 1170 140 d
a 1 x 3 0 0 0 hcn 100 LABEL=VDD
port 1041 bubble 1170 160 d
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
part 263 R 1020 465 d
a 0 u 13 0 27 1 hln 100 VALUE=1G
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R1
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 249 GTABLE 940 465 U
a 0 u 13 13 184 89 hln 100 TABLE=(@VSINK,@ISINK) (@VSOURCE,@ISOURCE)
a 0 sp 11 0 54 35 hln 100 PART=GTABLE
a 1 ap 9 0 30 46 hln 100 REFDES=G1
a 0 u 13 0 56 2 hln 100 EXPR=200K*V(%IN+, %IN-)
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
part 218 C 870 600 d
a 0 u 13 0 28 2 hln 100 VALUE=50p
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 217 R 910 590 d
a 0 u 13 0 39 -1 hln 100 VALUE=8k
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 25 0 hln 100 REFDES=R2
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 73 dc_buf 100 205 h
a 0 u 0:13 0 -12 52 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 32 hln 100 PART=dc_buf
a 0 a 9 0 20 2 hln 100 REFDES=U3
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
part 72 dc_buf 100 155 h
a 0 u 0:13 0 14 50 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 40 hln 100 PART=dc_buf
a 0 a 9 0 22 0 hln 100 REFDES=U4
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
part 74 dc_buf 100 255 h
a 0 u 0:13 0 54 62 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 34 hln 100 PART=dc_buf
a 0 u 0:13 0 0 20 hlb 100 IO_LEVEL=0
a 0 a 9 0 20 0 hln 100 REFDES=U5
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
part 113 dc_buf 100 305 h
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 38 34 hln 100 PART=dc_buf
a 0 a 9 0 20 0 hln 100 REFDES=U6
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
part 5 dacpar_constrnt 210 85 h
a 0 s 11 0 78 50 hrn 100 PART=dacpar_constrnt
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 9 0 10 -2 hln 100 REFDES=U7
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
part 1024 dc_buf16 100 385 h
a 0 s 11 0 60 196 hrn 100 PART=dc_buf16
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 0 a 9 0 10 -2 hln 100 REFDES=U11
a 0 u 13 13 -10 210 hlb 100 PTPZLTY=
a 0 u 13 13 -10 220 hlb 100 PTPZHTY=
a 0 u 13 13 -10 230 hlb 100 PTPLZTY=
a 0 u 13 13 -10 240 hlb 100 PTPHZTY=
part 1025 dc_reg16 520 355 h
a 0 u 13 13 120 284 hln 100 PTPGQTY=
a 0 u 13 13 120 272 hln 100 PTWGHMN=
a 0 s 11 0 102 220 hrn 100 PART=dc_reg16
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 a 9 0 22 -2 hln 100 REFDES=U10
part 1022 dc_dac16 690 395 h
a 0 s 11 0 68 182 hrn 100 PART=dc_dac16
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 a 9 0 10 -2 hln 100 REFDES=U12
part 1023 dc_reg16 360 355 h
a 0 u 13 13 120 258 hln 100 PTSUDGMN=@TSUDGMN
a 0 s 11 0 102 220 hrn 100 PART=dc_reg16
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 a 9 0 22 -2 hln 100 REFDES=U9
a 0 u 13 13 120 284 hln 100 PTPGQTY=
a 0 u 13 13 120 272 hln 100 PTWGHMN=
a 0 u 13 13 120 244 hln 100 PTHDGMN=@THDGMN
part 436 slewrate 780 465 h
a 0 u 13 13 9 54 hln 100 BW=0.5Meg
a 0 s 11 0 60 30 hrn 100 PART=slewrate
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 10 42 hln 100 PSR=@SR
a 0 a 9 0 10 -2 hln 100 REFDES=U8
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
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
w 384
a 0 up 0:33 0 0 0 hln 100 V=
s 850 465 940 465 438
a 0 up 33 0 895 464 hct 100 V=
w 339
a 0 up 0:33 0 0 0 hln 100 V=
s 1020 505 1020 510 793
s 1020 510 1020 515 880
s 1000 510 1020 510 351
s 990 465 1000 465 256
s 1000 510 1000 465 682
a 0 up 33 0 1002 485 hlt 100 V=
w 637
a 0 up 0:33 0 0 0 hln 100 V=
s 1020 465 1020 455 268
s 990 455 1010 455 788
s 1010 455 1020 455 875
s 1010 455 1010 410 353
a 0 up 33 0 1012 432 hlt 100 V=
s 940 455 940 410 252
s 1010 410 940 410 356
s 1020 455 1140 455 270
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
w 884
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 545 470 545 883
a 0 up 33 0 495 544 hct 100 LVL=
w 886
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 535 470 535 885
a 0 up 33 0 495 534 hct 100 LVL=
w 888
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 525 470 525 887
a 0 up 33 0 495 524 hct 100 LVL=
w 890
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 515 470 515 889
a 0 up 33 0 495 514 hct 100 LVL=
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
w 848
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 515 360 515 847
a 0 up 33 0 265 514 hct 100 LVL=
w 850
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 525 360 525 849
a 0 up 33 0 265 524 hct 100 LVL=
w 852
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 535 360 535 851
a 0 up 33 0 265 534 hct 100 LVL=
w 854
a 0 up 0:33 0 0 0 hln 100 LVL=
s 170 545 360 545 853
a 0 up 33 0 265 544 hct 100 LVL=
w 698
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 545 100 545 697
a 0 up 33 0 85 544 hct 100 LVL=
w 701
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 535 100 535 700
a 0 up 33 0 85 534 hct 100 LVL=
w 707
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 525 100 525 706
a 0 up 33 0 85 524 hct 100 LVL=
w 709
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 515 100 515 708
a 0 up 33 0 85 514 hct 100 LVL=
w 713
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 505 100 505 712
a 0 up 33 0 85 504 hct 100 LVL=
w 715
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 495 100 495 714
a 0 up 33 0 85 494 hct 100 LVL=
w 719
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 485 100 485 718
a 0 up 33 0 85 484 hct 100 LVL=
w 721
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 475 100 475 720
a 0 up 33 0 85 474 hct 100 LVL=
w 725
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 465 100 465 724
a 0 up 33 0 85 464 hct 100 LVL=
w 727
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 455 100 455 726
a 0 up 33 0 85 454 hct 100 LVL=
w 731
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 445 100 445 730
a 0 up 33 0 85 444 hct 100 LVL=
w 733
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 435 100 435 732
a 0 up 33 0 85 434 hct 100 LVL=
w 737
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 425 100 425 736
a 0 up 33 0 85 424 hct 100 LVL=
w 739
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 415 100 415 738
a 0 up 33 0 85 414 hct 100 LVL=
w 743
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 405 100 405 742
a 0 up 33 0 85 404 hct 100 LVL=
w 745
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 395 100 395 744
a 0 up 33 0 85 394 hct 100 LVL=
w 672
a 0 up 0:33 0 0 0 hln 100 V=
s 770 465 780 465 671
a 0 up 33 0 775 464 hct 100 V=
w 320
a 0 up 0:33 0 0 0 hln 100 V=
s 910 590 910 580 233
s 910 580 870 580 606
s 1140 580 910 580 231
a 0 up 33 0 1025 579 hct 100 V=
s 870 600 870 580 652
s 800 515 800 580 656
s 800 580 870 580 658
s 800 515 770 515 975
w 978
a 0 up 0:33 0 0 0 hln 100 V=
s 870 650 870 630 223
s 870 650 910 650 601
s 910 650 910 630 227
s 910 650 1140 650 328
a 0 up 33 0 1025 649 hct 100 V=
s 770 535 770 650 980
s 770 650 870 650 983
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
w 932
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 535 630 535 931
a 0 up 33 0 660 534 hct 100 LVL=
w 934
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 525 630 525 933
a 0 up 33 0 660 524 hct 100 LVL=
w 936
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 515 630 515 935
a 0 up 33 0 660 514 hct 100 LVL=
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
w 946
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 545 630 545 945
a 0 up 33 0 660 544 hct 100 LVL=
w 58
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 455 630 455 43
a 0 up 33 0 660 454 hct 100 LVL=
w 60
a 0 up 0:33 0 0 0 hln 100 LVL=
s 690 445 630 445 45
a 0 up 33 0 660 444 hct 100 LVL=
w 1035
s 1110 140 1170 140 1034
a 0 up 33 0 1140 139 hct 100 V=
w 1037
s 1110 160 1170 160 1036
a 0 up 33 0 1140 159 hct 100 V=
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
j 940 465
+ p 249 IN+
+ w 384
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
j 910 590
+ p 217 1
+ w 320
j 1140 580
+ s 333
+ w 320
j 910 580
+ w 320
+ w 320
j 870 600
+ p 218 1
+ w 320
j 870 580
+ w 320
+ w 320
j 910 650
+ w 978
+ w 978
j 870 650
+ w 978
+ w 978
j 870 630
+ p 218 2
+ w 978
j 910 630
+ p 217 2
+ w 978
j 1140 650
+ s 334
+ w 978
j 1140 455
+ s 332
+ w 637
j 1020 455
+ w 637
+ w 637
j 70 545
+ s 699
+ w 698
j 70 535
+ s 702
+ w 701
j 70 525
+ s 710
+ w 707
j 70 515
+ s 711
+ w 709
j 70 505
+ s 716
+ w 713
j 70 495
+ s 717
+ w 715
j 70 485
+ s 722
+ w 719
j 70 475
+ s 723
+ w 721
j 70 465
+ s 728
+ w 725
j 70 455
+ s 729
+ w 727
j 70 445
+ s 734
+ w 731
j 70 435
+ s 735
+ w 733
j 70 425
+ s 740
+ w 737
j 70 415
+ s 741
+ w 739
j 70 405
+ s 746
+ w 743
j 70 395
+ s 747
+ w 745
j 150 205
+ p 73 O
+ w 84
j 100 205
+ p 73 I0
+ w 275
j 150 155
+ p 72 O
+ w 99
j 100 155
+ p 72 I0
+ w 273
j 150 255
+ p 74 O
+ w 93
j 100 255
+ p 74 I0
+ w 277
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
j 100 385
+ p 1024 OE
+ s 783
j 170 395
+ p 1024 O0
+ w 810
j 170 405
+ p 1024 O1
+ w 814
j 170 415
+ p 1024 O2
+ w 816
j 170 425
+ p 1024 O3
+ w 818
j 170 435
+ p 1024 O4
+ w 820
j 170 445
+ p 1024 O5
+ w 822
j 170 455
+ p 1024 O6
+ w 824
j 170 465
+ p 1024 O7
+ w 826
j 170 475
+ p 1024 O8
+ w 828
j 170 485
+ p 1024 O9
+ w 830
j 170 495
+ p 1024 O10
+ w 832
j 170 505
+ p 1024 O11
+ w 834
j 170 515
+ p 1024 O12
+ w 848
j 170 525
+ p 1024 O13
+ w 850
j 170 535
+ p 1024 O14
+ w 852
j 170 545
+ p 1024 O15
+ w 854
j 100 545
+ p 1024 I15
+ w 698
j 100 535
+ p 1024 I14
+ w 701
j 100 525
+ p 1024 I13
+ w 707
j 100 515
+ p 1024 I12
+ w 709
j 100 505
+ p 1024 I11
+ w 713
j 100 495
+ p 1024 I10
+ w 715
j 100 485
+ p 1024 I9
+ w 719
j 100 475
+ p 1024 I8
+ w 721
j 100 465
+ p 1024 I7
+ w 725
j 100 455
+ p 1024 I6
+ w 727
j 100 445
+ p 1024 I5
+ w 731
j 100 435
+ p 1024 I4
+ w 733
j 100 425
+ p 1024 I3
+ w 737
j 100 415
+ p 1024 I2
+ w 739
j 100 405
+ p 1024 I1
+ w 743
j 100 395
+ p 1024 I0
+ w 745
j 520 375
+ p 1025 GATE
+ w 199
j 520 455
+ p 1025 D9
+ w 26
j 520 445
+ p 1025 D10
+ w 28
j 520 435
+ p 1025 D11
+ w 30
j 520 425
+ p 1025 D12
+ w 32
j 520 415
+ p 1025 D13
+ w 34
j 520 405
+ p 1025 D14
+ w 36
j 520 395
+ p 1025 D15
+ w 38
j 520 355
+ p 1025 PREBAR
+ w 205
j 520 545
+ p 1025 D0
+ w 884
j 520 535
+ p 1025 D1
+ w 886
j 520 525
+ p 1025 D2
+ w 888
j 520 515
+ p 1025 D3
+ w 890
j 520 505
+ p 1025 D4
+ w 892
j 520 495
+ p 1025 D5
+ w 894
j 520 485
+ p 1025 D6
+ w 896
j 520 475
+ p 1025 D7
+ w 898
j 520 365
+ p 1025 CLRBAR
+ w 187
j 520 465
+ p 1025 D8
+ w 24
j 630 435
+ p 1025 Q11
+ w 62
j 630 425
+ p 1025 Q12
+ w 64
j 630 415
+ p 1025 Q13
+ w 66
j 630 405
+ p 1025 Q14
+ w 68
j 630 395
+ p 1025 Q15
+ w 70
j 630 465
+ p 1025 Q8
+ w 56
j 630 535
+ p 1025 Q1
+ w 932
j 630 525
+ p 1025 Q2
+ w 934
j 630 515
+ p 1025 Q3
+ w 936
j 630 505
+ p 1025 Q4
+ w 938
j 630 495
+ p 1025 Q5
+ w 940
j 630 485
+ p 1025 Q6
+ w 942
j 630 475
+ p 1025 Q7
+ w 944
j 630 545
+ p 1025 Q0
+ w 946
j 630 455
+ p 1025 Q9
+ w 58
j 630 445
+ p 1025 Q10
+ w 60
j 770 465
+ p 1022 OUT
+ w 672
j 770 515
+ p 1022 REF
+ w 320
j 770 535
+ p 1022 GND
+ w 978
j 690 435
+ p 1022 DB11
+ w 62
j 690 425
+ p 1022 DB12
+ w 64
j 690 415
+ p 1022 DB13
+ w 66
j 690 405
+ p 1022 DB14
+ w 68
j 690 395
+ p 1022 DB15
+ w 70
j 690 465
+ p 1022 DB8
+ w 56
j 690 535
+ p 1022 DB1
+ w 932
j 690 525
+ p 1022 DB2
+ w 934
j 690 515
+ p 1022 DB3
+ w 936
j 690 505
+ p 1022 DB4
+ w 938
j 690 495
+ p 1022 DB5
+ w 940
j 690 485
+ p 1022 DB6
+ w 942
j 690 475
+ p 1022 DB7
+ w 944
j 690 545
+ p 1022 DB0
+ w 946
j 690 455
+ p 1022 DB9
+ w 58
j 690 445
+ p 1022 DB10
+ w 60
j 360 375
+ p 1023 GATE
+ w 193
j 470 455
+ p 1023 Q9
+ w 26
j 470 445
+ p 1023 Q10
+ w 28
j 470 435
+ p 1023 Q11
+ w 30
j 470 425
+ p 1023 Q12
+ w 32
j 470 415
+ p 1023 Q13
+ w 34
j 470 405
+ p 1023 Q14
+ w 36
j 470 395
+ p 1023 Q15
+ w 38
j 360 355
+ p 1023 PREBAR
+ w 205
j 470 545
+ p 1023 Q0
+ w 884
j 470 535
+ p 1023 Q1
+ w 886
j 470 525
+ p 1023 Q2
+ w 888
j 470 515
+ p 1023 Q3
+ w 890
j 470 505
+ p 1023 Q4
+ w 892
j 470 495
+ p 1023 Q5
+ w 894
j 470 485
+ p 1023 Q6
+ w 896
j 470 475
+ p 1023 Q7
+ w 898
j 360 365
+ p 1023 CLRBAR
+ w 187
j 470 465
+ p 1023 Q8
+ w 24
j 360 395
+ p 1023 D15
+ w 810
j 360 405
+ p 1023 D14
+ w 814
j 360 415
+ p 1023 D13
+ w 816
j 360 425
+ p 1023 D12
+ w 818
j 360 435
+ p 1023 D11
+ w 820
j 360 445
+ p 1023 D10
+ w 822
j 360 455
+ p 1023 D9
+ w 824
j 360 465
+ p 1023 D8
+ w 826
j 360 475
+ p 1023 D7
+ w 828
j 360 485
+ p 1023 D6
+ w 830
j 360 495
+ p 1023 D5
+ w 832
j 360 505
+ p 1023 D4
+ w 834
j 360 515
+ p 1023 D3
+ w 848
j 360 525
+ p 1023 D2
+ w 850
j 360 535
+ p 1023 D1
+ w 852
j 360 545
+ p 1023 D0
+ w 854
j 1110 140
+ s 1038
+ w 1035
j 1110 160
+ s 1039
+ w 1037
j 1170 140
+ s 1040
+ w 1035
j 1170 160
+ s 1041
+ w 1037
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
t 530 t 5 935 339 1060 360 0 16
Current Limiting
v 531 v 0 935 340
935 355
1030 355
1030 340
935 340
;
v 532 v 0 930 335
930 360
1035 360
1035 335
930 335
;
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
t 525 t 5 710 839 754 857 0 6
NOTES:
t 523 t 5 50 839 280 860 0 22
PARAMETER DEFINITIONS:
t 667 t 5 385 839 615 860 0 17
PIN DESCRIPTIONS:
t 524 t 5 65 854 410 1100 0 479
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

t 668 t 6 400 1080 700 860 0 132
Pins based on AD7224.
DB15-0 - Data Bits
LDAC*, CS*, WR*, RESET* - Control 
Vout - Voltage Ouput
Vref - Referency Voltage Output
t 526 t 5 720 855 1165 935 0 308
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.
