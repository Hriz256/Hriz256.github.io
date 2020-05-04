*version 8.0 2654460853
u 795
U? 20
R? 6
G? 2
I? 2
C? 7
F? 2
? 2
@libraries
@analysis
@targets
@attributes
@translators
a 0 u 13 0 0 0 hln 100 TANGO=PCB
a 0 u 13 0 0 0 hln 100 SCICARDS=PCB
a 0 u 13 0 0 0 hln 100 PROTEL=PCB
a 0 u 13 0 0 0 hln 100 PCBOARDS=PCB
a 0 u 13 0 0 0 hln 100 PCAD=PCB
a 0 u 13 0 0 0 hln 100 PADS=PCB
a 0 u 13 0 0 0 hln 100 ORCAD=PCB
a 0 u 13 0 0 0 hln 100 EDIF=PCB
a 0 u 13 0 0 0 hln 100 CADSTAR=PCB
a 0 u 13 0 0 0 hln 100 PSPICE=PSPICE
a 0 u 13 0 0 0 hln 100 XILINX=XILINX
a 0 u 13 0 0 0 hln 100 POLARIS=PSPICE
@setup
unconnectedPins 1
connectViaLabel 0
connectViaLocalLabels 0
NoStim4ExtIFPortsWarnings 1
AutoGenStim4ExtIFPorts 1
@index
pageloc 1 0 14622 
@status
c 98:05:08:10:58:44;897328724
n 2409 98:05:08:08:05:45;897318345 e 
*page 1 0 1200 900 iX
@ports
port 246 LO 220 100 h
port 410 IF_OUT 1140 270 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Rfb
port 411 IF_OUT 1140 370 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Iout
port 409 IF_IN 70 550 h
a 1 xr 3 0 19 8 hcn 100 LABEL=Vref
port 677 Agnd 800 490 h
port 678 Agnd 750 620 h
port 706 Agnd 650 620 h
port 406 IF_IN 70 70 h
a 1 xr 3 0 19 8 hcn 100 LABEL=\LD\
port 407 IF_IN 70 310 h
a 1 xr 3 0 19 8 hcn 100 LABEL=CLK
port 408 IF_IN 70 490 h
a 1 xr 3 0 19 8 hcn 100 LABEL=SRI
port 765 Agnd 190 610 h
port 766 Agnd 1100 550 h
port 763 IF_OUT 1140 520 h
a 1 xr 3 0 31 8 hcn 100 LABEL=GND
port 792 HI 540 210 H
port 762 IF_IN 70 590 h
a 1 xr 3 0 19 8 hcn 100 LABEL=Vdd
@parts
part 340 Isrc 970 390 h
a 0 a 0:13 0 0 0 hln 100 PKGREF=I1
a 1 ap 9 0 20 10 hcn 100 REFDES=I1
a 1 u 0 0 0 0 hcn 100 DC=5nA
part 341 R 1020 390 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 u 13 0 35 33 hln 100 VALUE=10k
part 343 R 1050 340 v
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=R3
a 0 ap 9 0 15 0 hln 100 REFDES=R3
a 0 u 13 0 7 38 hln 100 VALUE=10k
part 338 R 870 390 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
a 0 u 13 0 25 34 hln 100 VALUE=10k
a 0 ap 9 0 11 32 hln 100 REFDES=R1
part 524 F 870 370 h
a 0 s 11 0 10 34 hln 100 PART=F
a 0 a 0:13 0 0 0 hln 100 PKGREF=F1
a 1 ap 9 0 10 4 hln 100 REFDES=F1
a 0 u 0 0 0 10 hln 100 GAIN=-1
part 666 R 750 570 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=R4
a 0 ap 9 0 15 0 hln 100 REFDES=R4
a 0 u 13 0 28 1 hln 100 VALUE=10k
part 705 C 650 570 d
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 15 25 hln 100 VALUE=8p
a 0 a 0:13 0 0 0 hln 100 PKGREF=C5
a 0 ap 9 0 15 0 hln 100 REFDES=C5
part 734 C 1070 390 d
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 32 3 hln 100 VALUE=80p
a 0 a 0:13 0 0 0 hln 100 PKGREF=C6
a 0 ap 9 0 15 0 hln 100 REFDES=C6
part 197 DC_DAC12 750 300 h
a 0 s 11 0 108 160 hrn 100 PART=DC_DAC12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
a 0 a 9 0 10 -2 hln 100 REFDES=U5
part 4 DC_95_2 240 500 U
a 0 s 11 0 40 100 hln 100 PART=DC_95_2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
a 1 a 9 0 1 -3 hln 100 REFDES=U3
a 0 u 13 13 143 21 hlb 100 DATAHOLD=80ns
a 0 u 13 13 155 6 hlb 100 DATASETUP=40ns
part 2 DC_95_2 240 210 U
a 0 s 11 0 40 100 hln 100 PART=DC_95_2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
a 1 a 9 0 1 -3 hln 100 REFDES=U1
a 0 u 13 13 143 22 hlb 100 DATAHOLD=0ns
a 0 u 13 13 154 12 hlb 100 DATASETUP=0ns
part 3 DC_95_2 240 350 U
a 0 s 11 0 40 100 hln 100 PART=DC_95_2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
a 1 a 9 0 1 -3 hln 100 REFDES=U2
a 0 u 13 13 139 20 hlb 100 DATAHOLD=0ns
a 0 u 13 13 148 9 hlb 100 DATASETUP=0ns
part 655 DC_BUF 80 490 h
a 0 s 11 0 32 50 hln 100 PART=DC_BUF
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 a 9 0 40 0 hln 100 REFDES=U8
a 0 u 13 13 -4 74 hlb 100 PIO_MODEL=IO_HCT
part 757 DAC8043_CONSTRNT 80 220 v
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 89 112 hrn 100 PART=DAC8043_CONSTRNT
a 0 a 0:13 0 0 0 hln 100 PKGREF=U18
a 0 ap 9 0 10 -2 hln 100 REFDES=U18
part 676 DC_INV 80 310 h
a 0 s 11 0 32 50 hln 100 PART=DC_INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 -4 74 hlb 100 PIO_MODEL=IO_HCT
a 0 a 0:13 0 0 0 hln 100 PKGREF=U14
a 0 a 9 0 40 0 hln 100 REFDES=U14
part 761 DC_INV 340 70 h
a 0 s 11 0 32 50 hln 100 PART=DC_INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 -4 74 hlb 100 PIO_MODEL=IO_HCT
a 0 a 0:13 0 0 0 hln 100 PKGREF=U19
a 0 ap 9 0 40 0 hln 100 REFDES=U19
part 5 DC_REG12 540 260 h
a 0 s 11 0 100 178 hrn 100 PART=DC_REG12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
a 0 a 9 0 12 -2 hln 100 REFDES=U4
a 0 u 0:13 0 0 0 hln 100 THDGMIN=0n
a 0 u 0:13 0 0 0 hln 100 TSUDGMIN=0n
a 0 u 13 13 38 198 hln 100 PTHDGMN=0
a 0 u 13 13 38 210 hln 100 PTSUDGMN=0
part 1 titleblk 1200 900 h
a 1 s 13 0 180 60 hcn 100 PAGETITLE=
a 1 s 13 0 350 10 hcn 100 PAGESIZE=User
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 529
a 0 up 0:33 0 0 0 hln 100 V=
s 870 390 870 380 346
a 0 up 33 0 872 385 hlt 100 V=
w 39
a 0 up 0:33 0 0 0 hln 100 LVL=
s 240 500 220 500 60
s 240 350 220 350 57
s 220 350 220 310 522
s 220 500 220 460 44
a 0 up 33 0 222 405 hlt 100 LVL=
s 220 460 220 350 585
s 240 460 220 460 42
s 220 310 240 310 48
s 240 210 220 210 54
s 220 210 220 170 518
s 220 310 220 210 56
s 240 170 220 170 51
s 220 170 220 100 53
s 240 460 240 450 740
s 240 170 240 160 742
s 240 310 240 300 744
w 244
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 300 650 300 221
a 0 up 33 0 700 299 hct 100 LVL=
w 242
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 310 650 310 219
a 0 up 33 0 700 309 hct 100 LVL=
w 240
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 320 650 320 217
a 0 up 33 0 700 319 hct 100 LVL=
w 238
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 330 650 330 215
a 0 up 33 0 700 329 hct 100 LVL=
w 236
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 340 650 340 213
a 0 up 33 0 700 339 hct 100 LVL=
w 234
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 350 650 350 211
a 0 up 33 0 700 349 hct 100 LVL=
w 232
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 360 650 360 209
a 0 up 33 0 700 359 hct 100 LVL=
w 230
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 370 650 370 207
a 0 up 33 0 700 369 hct 100 LVL=
w 228
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 380 650 380 205
a 0 up 33 0 700 379 hct 100 LVL=
w 226
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 390 650 390 203
a 0 up 33 0 700 389 hct 100 LVL=
w 224
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 400 650 400 201
a 0 up 33 0 700 399 hct 100 LVL=
w 222
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 410 650 410 199
a 0 up 33 0 700 409 hct 100 LVL=
w 168
a 0 up 0:33 0 0 0 hln 100 LVL=
s 540 300 480 300 171
s 480 300 480 140 169
s 480 140 300 140 167
a 0 up 33 0 390 139 hct 100 LVL=
w 162
a 0 up 0:33 0 0 0 hln 100 LVL=
s 540 310 470 310 165
s 470 310 470 150 163
s 470 150 300 150 161
a 0 up 33 0 385 149 hct 100 LVL=
w 156
a 0 up 0:33 0 0 0 hln 100 LVL=
s 540 320 460 320 159
s 460 320 460 160 157
a 0 up 33 0 462 240 hlt 100 LVL=
s 460 160 300 160 155
w 150
a 0 up 0:33 0 0 0 hln 100 LVL=
s 540 330 450 330 153
s 450 330 450 170 151
a 0 up 33 0 452 250 hlt 100 LVL=
s 450 170 300 170 149
w 98
a 0 up 0:33 0 0 0 hln 100 LVL=
s 420 390 420 440 99
s 540 390 420 390 101
a 0 up 33 0 480 389 hct 100 LVL=
s 420 440 300 440 97
w 92
a 0 up 0:33 0 0 0 hln 100 LVL=
s 430 400 430 450 93
s 540 400 430 400 95
s 430 450 300 450 91
a 0 up 33 0 365 449 hct 100 LVL=
w 86
a 0 up 0:33 0 0 0 hln 100 LVL=
s 440 410 440 460 87
s 540 410 440 410 89
s 440 460 300 460 85
a 0 up 33 0 370 459 hct 100 LVL=
w 122
a 0 up 0:33 0 0 0 hln 100 LVL=
s 430 350 430 290 123
s 540 350 430 350 125
s 430 290 300 290 121
a 0 up 33 0 365 289 hct 100 LVL=
w 116
a 0 up 0:33 0 0 0 hln 100 LVL=
s 420 360 420 300 117
s 540 360 420 360 119
a 0 up 33 0 480 359 hct 100 LVL=
s 420 300 300 300 115
w 110
a 0 up 0:33 0 0 0 hln 100 LVL=
s 410 370 410 310 111
s 540 370 410 370 113
a 0 up 33 0 475 369 hct 100 LVL=
s 410 310 300 310 109
w 174
a 0 up 0:33 0 0 0 hln 100 LVL=
s 410 380 410 430 105
s 540 380 410 380 107
a 0 up 33 0 475 379 hct 100 LVL=
s 410 430 330 430 103
s 200 340 240 340 18
s 200 390 200 340 16
s 330 390 200 390 14
s 330 430 330 390 12
s 300 430 330 430 10
w 173
a 0 up 0:33 0 0 0 hln 100 LVL=
s 440 340 440 280 129
s 540 340 440 340 131
s 440 280 330 280 127
s 200 200 240 200 28
s 200 240 200 200 26
s 330 240 200 240 24
a 0 up 33 0 265 239 hct 100 LVL=
s 330 280 330 240 22
s 300 280 330 280 20
w 391
a 0 up 0:33 0 0 0 hln 100 V=
s 1050 300 1050 270 390
s 1050 270 1140 270 392
a 0 up 33 0 1095 269 hct 100 V=
w 662
a 0 up 0:33 0 0 0 hln 100 LVL=
s 240 490 130 490 537
a 0 up 33 0 185 489 hct 100 LVL=
w 661
a 0 up 0:33 0 0 0 hln 100 LVL=
s 160 310 130 310 82
s 160 310 160 190 447
s 160 320 160 310 648
s 240 190 160 190 70
s 160 190 160 180 72
s 160 330 160 320 78
s 240 320 160 320 73
s 160 180 240 180 68
s 160 470 160 330 444
a 0 up 33 0 162 400 hlt 100 LVL=
s 240 330 160 330 76
s 240 470 160 470 79
s 160 480 160 470 81
s 240 480 160 480 64
w 668
a 0 up 0:33 0 0 0 hln 100 V=
s 750 610 750 620 667
a 0 up 33 0 759 615 hlt 100 V=
w 704
a 0 up 0:33 0 0 0 hln 100 V=
s 650 600 650 620 703
a 0 up 33 0 652 610 hlt 100 V=
w 345
a 0 up 0:33 0 0 0 hln 100 V=
s 830 370 870 370 731
a 0 up 33 0 850 369 hct 100 V=
w 525
a 0 up 0:33 0 0 0 hln 100 V=
s 910 380 910 440 532
s 1070 440 1070 420 357
s 1020 440 1070 440 361
s 1020 430 1020 440 359
s 910 440 970 440 364
s 970 440 1020 440 577
s 970 430 970 440 362
s 800 460 800 480 353
s 800 480 800 490 571
s 870 480 800 480 351
a 0 up 33 0 835 479 hct 100 V=
s 870 430 870 440 356
s 870 440 870 480 579
s 870 440 910 440 373
w 375
a 0 up 0:33 0 0 0 hln 100 V=
s 1070 370 1140 370 380
a 0 up 33 0 1105 369 hct 100 V=
s 1070 370 1070 390 378
s 1050 370 1070 370 383
s 1050 340 1050 370 381
s 1020 370 1050 370 386
s 1020 390 1020 370 384
s 970 370 1020 370 564
s 970 390 970 370 387
s 910 370 970 370 732
w 663
a 0 up 0:33 0 0 0 hln 100 V=
s 750 430 750 550 249
s 750 550 650 550 664
a 0 up 33 0 410 549 hct 100 V=
s 750 570 750 550 670
s 650 570 650 550 700
s 650 550 70 550 738
w 749
a 0 up 0:33 0 0 0 hln 100 LVL=
s 70 490 80 490 748
a 0 up 33 0 75 489 hct 100 LVL=
w 745
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 80 310 70 310 746
s 80 220 80 310 736
a 0 up 33 0 82 265 hlt 100 LVL=
w 397
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 340 70 80 70 538
a 0 up 33 0 260 69 hct 100 LVL=
a 0 up 33 0 215 69 hct 100 V=
s 80 70 70 70 759
s 80 130 80 70 725
w 405
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 70 390 70 400
s 500 280 500 70 398
a 0 up 33 0 502 175 hlt 100 LVL=
s 540 280 500 280 396
w 774
s 1100 550 1100 520 773
s 1100 520 1140 520 775
w 395
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 260 540 260 782
s 520 210 540 210 783
s 520 260 520 210 777
a 0 up 33 0 522 235 hlt 100 LVL=
s 520 270 540 270 788
s 520 260 520 270 779
w 770
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 190 590 190 610 771
s 190 590 70 590 793
a 0 up 33 0 90 589 hct 100 LVL=
a 0 up 33 0 170 589 hct 100 V=
@junction
j 910 370
+ p 524 3
+ w 375
j 1070 370
+ w 375
+ w 375
j 1050 370
+ w 375
+ w 375
j 1140 370
+ s 411
+ w 375
j 1050 340
+ p 343 1
+ w 375
j 1020 390
+ p 341 1
+ w 375
j 1020 370
+ w 375
+ w 375
j 970 390
+ p 340 +
+ w 375
j 970 370
+ w 375
+ w 375
j 910 380
+ p 524 4
+ w 525
j 800 480
+ w 525
+ w 525
j 1020 430
+ p 341 2
+ w 525
j 1020 440
+ w 525
+ w 525
j 970 430
+ p 340 -
+ w 525
j 970 440
+ w 525
+ w 525
j 870 430
+ p 338 2
+ w 525
j 870 440
+ w 525
+ w 525
j 910 440
+ w 525
+ w 525
j 870 390
+ p 338 1
+ w 529
j 870 380
+ p 524 2
+ w 529
j 870 370
+ p 524 1
+ w 345
j 220 350
+ w 39
+ w 39
j 220 460
+ w 39
+ w 39
j 220 310
+ w 39
+ w 39
j 220 210
+ w 39
+ w 39
j 220 100
+ s 246
+ w 39
j 220 170
+ w 39
+ w 39
j 330 430
+ w 174
+ w 174
j 330 280
+ w 173
+ w 173
j 160 310
+ w 661
+ w 661
j 160 190
+ w 661
+ w 661
j 160 470
+ w 661
+ w 661
j 160 330
+ w 661
+ w 661
j 160 320
+ w 661
+ w 661
j 1050 300
+ p 343 2
+ w 391
j 1140 270
+ s 410
+ w 391
j 70 550
+ s 409
+ w 663
j 750 570
+ p 666 1
+ w 663
j 750 550
+ w 663
+ w 663
j 750 610
+ p 666 2
+ w 668
j 800 490
+ s 677
+ w 525
j 750 620
+ s 678
+ w 668
j 650 550
+ w 663
+ w 663
j 650 570
+ p 705 1
+ w 663
j 650 600
+ p 705 2
+ w 704
j 650 620
+ s 706
+ w 704
j 70 70
+ s 406
+ w 397
j 1070 420
+ p 734 2
+ w 525
j 1070 390
+ p 734 1
+ w 375
j 70 490
+ s 408
+ w 749
j 750 300
+ p 197 DB11
+ w 244
j 750 310
+ p 197 DB10
+ w 242
j 750 320
+ p 197 DB9
+ w 240
j 750 330
+ p 197 DB8
+ w 238
j 750 340
+ p 197 DB7
+ w 236
j 750 350
+ p 197 DB6
+ w 234
j 750 360
+ p 197 DB5
+ w 232
j 750 370
+ p 197 DB4
+ w 230
j 750 380
+ p 197 DB3
+ w 228
j 750 390
+ p 197 DB2
+ w 226
j 750 400
+ p 197 DB1
+ w 224
j 750 410
+ p 197 DB0
+ w 222
j 830 370
+ p 197 OUT
+ w 345
j 800 460
+ p 197 GND
+ w 525
j 750 430
+ p 197 REF
+ w 663
j 240 500
+ p 4 MODE
+ w 39
j 240 460
+ p 4 A
+ w 39
j 240 450
+ p 4 B
+ w 39
j 240 440
+ p 4 C
+ w 39
j 240 430
+ p 4 D
+ w 39
j 300 440
+ p 4 QC
+ w 98
j 300 450
+ p 4 QB
+ w 92
j 300 460
+ p 4 QA
+ w 86
j 300 430
+ p 4 QD
+ w 174
j 240 490
+ p 4 SER
+ w 662
j 240 480
+ p 4 CLK1
+ w 661
j 240 470
+ p 4 CLK2
+ w 661
j 240 210
+ p 2 MODE
+ w 39
j 240 170
+ p 2 A
+ w 39
j 240 160
+ p 2 B
+ w 39
j 240 150
+ p 2 C
+ w 39
j 240 140
+ p 2 D
+ w 39
j 300 140
+ p 2 QD
+ w 168
j 300 150
+ p 2 QC
+ w 162
j 300 160
+ p 2 QB
+ w 156
j 300 170
+ p 2 QA
+ w 150
j 240 200
+ p 2 SER
+ w 173
j 240 190
+ p 2 CLK1
+ w 661
j 240 180
+ p 2 CLK2
+ w 661
j 240 350
+ p 3 MODE
+ w 39
j 240 310
+ p 3 A
+ w 39
j 240 300
+ p 3 B
+ w 39
j 240 290
+ p 3 C
+ w 39
j 240 280
+ p 3 D
+ w 39
j 300 290
+ p 3 QC
+ w 122
j 300 300
+ p 3 QB
+ w 116
j 300 310
+ p 3 QA
+ w 110
j 240 340
+ p 3 SER
+ w 174
j 300 280
+ p 3 QD
+ w 173
j 240 330
+ p 3 CLK1
+ w 661
j 240 320
+ p 3 CLK2
+ w 661
j 130 310
+ p 676 O
+ w 661
j 130 490
+ p 655 O
+ w 662
j 80 490
+ p 655 I0
+ w 749
j 70 310
+ s 407
+ w 745
j 80 310
+ p 676 I0
+ w 745
j 80 130
+ p 757 LDBAR
+ w 397
j 80 70
+ w 397
+ w 397
j 80 220
+ p 757 CLK
+ w 745
j 340 70
+ p 761 I0
+ w 397
j 390 70
+ p 761 O
+ w 405
j 190 610
+ s 765
+ w 770
j 1100 550
+ s 766
+ w 774
j 1140 520
+ s 763
+ w 774
j 650 300
+ p 5 Q11
+ w 244
j 650 310
+ p 5 Q10
+ w 242
j 650 320
+ p 5 Q9
+ w 240
j 650 330
+ p 5 Q8
+ w 238
j 650 340
+ p 5 Q7
+ w 236
j 650 350
+ p 5 Q6
+ w 234
j 650 360
+ p 5 Q5
+ w 232
j 650 370
+ p 5 Q4
+ w 230
j 650 380
+ p 5 Q3
+ w 228
j 650 390
+ p 5 Q2
+ w 226
j 650 400
+ p 5 Q1
+ w 224
j 650 410
+ p 5 Q0
+ w 222
j 540 300
+ p 5 D11
+ w 168
j 540 310
+ p 5 D10
+ w 162
j 540 320
+ p 5 D9
+ w 156
j 540 330
+ p 5 D8
+ w 150
j 540 390
+ p 5 D2
+ w 98
j 540 400
+ p 5 D1
+ w 92
j 540 410
+ p 5 D0
+ w 86
j 540 350
+ p 5 D6
+ w 122
j 540 360
+ p 5 D5
+ w 116
j 540 370
+ p 5 D4
+ w 110
j 540 380
+ p 5 D3
+ w 174
j 540 340
+ p 5 D7
+ w 173
j 540 260
+ p 5 PREBAR
+ w 395
j 540 280
+ p 5 GATE
+ w 405
j 540 270
+ p 5 CLRBAR
+ w 395
j 520 260
+ w 395
+ w 395
j 540 210
+ s 792
+ w 395
j 70 590
+ s 762
+ w 770
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=User
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics