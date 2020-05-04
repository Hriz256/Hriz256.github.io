*version 9.2 2683464389
u 2619
DSTM? 2
U? 16
V? 3
R? 4
? 1
@libraries
@analysis
.DC 0 0 0 0 1 1
.TRAN 1 0 0 0
+0 200ns
+1 20us
+3 10n
.PROBE 0 0 1 1 0 3
.LIB ADCserial.lib
.STMLIB ADCserial.stl
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
pageloc 1 0 18010 
@status
n 0 97:09:13:14:22:55;876777775 e 
s 2833 97:09:13:15:41:36;876782496 e 
c 100:04:11:19:04:01;958097041
a 0 98:03:23:10:57:16;893354236 e 
*page 1 0 1520 970 iC
@ports
port 130 HI 440 160 h
port 131 LO 440 210 h
port 1254 LO 480 100 h
port 1006 LO 600 400 H
port 2145 IF_IN 310 120 h
a 1 xr 3 0 19 8 hcn 100 LABEL=CLOCK
port 2146 IF_IN 290 600 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AIN
port 2149 IF_OUT 1160 350 h
a 1 xr 3 0 31 8 hcn 100 LABEL=CONVST/EOC
port 2150 IF_OUT 1160 520 h
a 1 xr 3 0 31 8 hcn 100 LABEL=DATA
port 2165 IF_OUT 1160 610 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Vref
port 2173 Agnd 360 730 h
port 2587 hi 750 580 h
port 2613 interface 1320 120 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VSS
port 2614 interface 1320 160 h
a 1 xr 3 0 19 8 hcn 100 LABEL=GND
port 2615 bubble 1370 120 d
a 1 x 3 0 0 0 hcn 100 LABEL=VSS
port 2616 bubble 1370 160 d
a 1 x 3 0 0 0 hcn 100 LABEL=GND
port 2617 interface 1320 80 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VDD
port 2618 bubble 1370 80 d
a 1 x 3 0 0 0 hcn 100 LABEL=VDD
@parts
part 140 INV 400 120 h
a 0 sp 11 0 40 40 hln 100 PART=INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 21 43 hln 100 REFDES=U1
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
part 146 OR2 910 200 U
a 0 sp 11 0 50 48 hln 100 PART=OR2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U2
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
part 239 AND2 1000 140 h
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 sp 11 0 12 48 hln 100 PART=AND2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 ap 9 0 40 0 hln 100 REFDES=U3
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
part 823 R 1120 230 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R1
a 0 u 13 0 15 25 hln 100 VALUE=13k
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 2091 R 360 600 h
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 15 25 hln 100 VALUE=2.5k
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 1864 DigClock 310 170 h
a 0 u 0 0 0 10 hln 100 DELAY=10ns
a 0 u 0 0 0 40 hln 100 STARTVAL=1
a 0 u 0 0 0 50 hln 100 OPPVAL=0
a 0 u 0 0 0 20 hln 100 ONTIME=10ns
a 0 u 0 0 0 30 hln 100 OFFTIME=100
a 1 ap 9 0 0 -2 hln 100 REFDES=DSTM1
a 0 a 0:13 0 0 0 hln 100 PKGREF=DSTM1
part 1004 DFFRS 570 400 H
a 0 sp 11 0 36 88 hln 100 PART=DFFRS
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hlb 100 IMPL=
a 0 ap 9 0 40 8 hln 100 REFDES=U4
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
part 2272 DELAY 500 320 v
a 0 u 13 0 32 38 hlb 100 DELAY=@tSC0
a 0 sp 11 0 26 80 hln 100 PART=DELAY
a 1 ap 9 0 40 -2 hln 100 REFDES=U5
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
part 2170 VSRC 360 650 h
a 1 u 13 0 0 0 hcn 100 DC=5V
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
a 0 a 0:13 0 0 0 hln 100 PKGREF=V1
part 2177 R 920 690 d
a 0 u 13 0 15 25 hln 100 VALUE=1G
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=R3
a 0 a 0:13 0 0 0 hln 100 PKGREF=R3
part 2153 Vsrc 980 650 h
a 1 u 13 13 49 22 hcn 100 DC=-5.25V
a 1 ap 9 0 20 10 hcn 100 REFDES=V2
a 0 a 0:13 0 0 0 hln 100 PKGREF=V2
part 947 AND2 780 390 h
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 sp 11 0 12 48 hln 100 PART=AND2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
a 0 ap 9 0 40 0 hln 100 REFDES=U6
part 946 NOR3 680 420 U
a 0 sp 11 0 44 48 hln 100 PART=NOR3
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
a 0 ap 9 0 40 0 hln 100 REFDES=U7
part 145 NOR3 750 190 U
a 0 sp 11 0 44 48 hln 100 PART=NOR3
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 ap 9 0 40 0 hln 100 REFDES=U8
part 206 OR5 830 90 h
a 0 sp 11 0 60 38 hln 100 PART=OR5
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 ap 9 0 50 0 hln 100 REFDES=U9
part 132 dc_569 530 100 h
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 140 hln 100 PART=dc_569
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 1 ap 9 0 40 -2 hln 100 REFDES=U10
part 419 dc_95_1 750 590 U
a 1 x 0 0 0 0 hcn 100 TEMPLATE=X^@REFDES %MODE %CLK1 %CLK2 %SER %A %B %C %D %QA %QB %QC %QD %PWR %GND @MODEL PARAMS:\n+ IO_LEVEL=@IO_LEVEL MNTYMXDLY=@MNTYMXDLY \n+ CLKHI=@CKHI CLKLO=@CKLO CLKMAX=@CKMAX CLKMIN=@CKMIN CKDPDMIN=@CKDMIN CKDPDMAX=@CKDMAX
a 0 u 13 13 178 4 hlb 100 CKLO=@CLKLO
a 0 u 13 13 178 18 hlb 100 CKHI=@CLKHI
a 0 u 13 13 178 30 hlb 100 CKMIN=@CLKMIN
a 0 u 13 13 178 40 hlb 100 CKMAX=@CLKMAX
a 0 u 13 13 178 52 hlb 100 CKDMIN=@CKDPDMIN
a 0 u 13 13 178 64 hlb 100 CKDMAX=@CKDPDMAX
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 36 99 hln 100 PART=dc_95_1
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 1 ap 9 0 1 -3 hln 100 REFDES=U11
part 2588 dc_adc4 510 600 h
a 0 sp 11 0 80 70 hrn 100 PART=dc_adc4
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 ap 9 0 10 -2 hln 100 REFDES=U12
part 144 NOR2 820 230 U
a 0 sp 11 0 44 48 hln 100 PART=NOR2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U13
a 0 ap 9 0 40 0 hln 100 REFDES=U13
part 2591 nor3 740 260 h
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 sp 11 0 44 48 hln 100 PART=nor3
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U14
a 0 ap 9 0 40 0 hln 100 REFDES=U14
part 2592 nan2 830 270 h
a 0 x 0 0 0 10 hcn 100 IMPL=
a 0 sp 11 0 10 50 hln 100 PART=nan2
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U15
a 0 ap 9 0 40 0 hln 100 REFDES=U15
part 1 titleblk 2020 1520 h
a 1 s 13 0 350 10 hcn 100 PAGESIZE=C
a 1 x 13 0 180 60 hcn 100 PAGETITLE=A/C converter - Serial Interface
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 1949
a 0 sr 0:3 0 362 113 hcn 100 LABEL=AsClear
a 0 up 0:33 0 0 0 hln 100 LVL=
s 390 170 530 170 2196
a 0 sr 3 0 424 183 hcn 100 LABEL=AsClear
s 310 170 390 170 2288
a 0 up 33 0 415 169 hct 100 LVL=
s 390 170 390 470 1492
s 390 470 540 470 1495
s 540 450 540 470 1498
w 2275
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 150 530 150 327
s 500 150 500 260 2197
a 0 up 33 0 502 271 hlt 100 LVL=
w 1501
a 0 sr 0:3 0 452 220 hln 100 LABEL=clr
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 500 420 510 420 1539
a 0 up 33 0 600 419 hct 100 LVL=
a 0 sr 3 0 600 418 hcn 100 LABEL=clr
s 500 320 500 420 2274
a 0 sr 3 0 500 147 hln 100 LABEL=clr
w 958
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 410 780 410 959
a 0 up 33 0 765 409 hct 100 LVL=
w 1008
a 0 up 0:33 0 0 0 hln 100 LVL=
s 570 400 600 400 1903
a 0 up 33 0 575 399 hct 100 LVL=
w 251
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1070 150 1120 150 250
a 0 up 33 0 1095 149 hct 100 LVL=
a 0 up 33 0 1095 149 hct 100 V=
s 1120 150 1120 230 824
w 241
a 0 up 0:33 0 0 0 hln 100 LVL=
s 920 110 910 110 256
a 0 up 33 0 915 109 hct 100 LVL=
s 920 140 920 110 242
s 1000 140 920 140 244
a 0 up 33 0 960 139 hct 100 LVL=
w 173
a 0 up 0:33 0 0 0 hln 100 LVL=
s 990 190 980 190 172
a 0 up 33 0 985 189 hct 100 LVL=
s 990 160 990 190 246
s 1000 160 990 160 248
w 165
a 0 up 0:33 0 0 0 hln 100 LVL=
s 910 180 820 180 1877
a 0 up 33 0 825 179 hct 100 LVL=
w 167
a 0 up 0:33 0 0 0 hln 100 LVL=
s 910 200 900 200 166
s 900 200 900 220 168
a 0 up 33 0 902 210 hlt 100 LVL=
s 900 220 890 220 170
w 112
a 0 sr 0:3 0 320 98 hcn 100 LABEL=WAE
a 0 up 0:33 0 0 0 hln 100 LVL=
s 480 100 530 100 1865
a 0 up 33 0 495 99 hct 100 LVL=
a 0 sr 3 0 495 98 hcn 100 LABEL=WAE
w 1818
a 0 up 0:33 0 0 0 hln 100 LVL=
s 450 120 530 120 227
a 0 up 33 0 490 119 hct 100 LVL=
w 60
a 0 up 0:33 0 0 0 hln 100 LVL=
s 440 160 480 160 73
a 0 up 33 0 485 159 hct 100 LVL=
s 480 160 530 160 2466
s 480 110 480 160 75
s 530 110 480 110 81
w 3
a 0 up 0:33 0 0 0 hln 100 LVL=
s 520 140 530 140 16
a 0 up 33 0 525 139 hct 100 LVL=
s 520 140 520 130 18
s 520 130 530 130 728
s 470 130 520 130 20
a 0 up 33 0 505 129 hct 100 LVL=
s 470 130 470 180 24
s 530 180 470 180 26
a 0 up 33 0 525 179 hct 100 LVL=
s 530 190 470 190 28
a 0 up 33 0 515 189 hct 100 LVL=
s 470 190 470 200 722
s 470 180 470 190 30
s 470 200 530 200 34
a 0 up 33 0 500 199 hct 100 LVL=
s 470 200 470 210 36
s 470 210 530 210 717
a 0 up 33 0 500 209 hct 100 LVL=
s 440 210 470 210 38
a 0 up 33 0 485 209 hct 100 LVL=
w 2143
a 0 up 0:33 0 0 0 hln 100 V=
s 360 600 290 600 2142
a 0 up 33 0 325 599 hct 100 V=
w 594
a 0 sr 0 0 0 0 hln 100 LABEL=Serial_out
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1160 520 810 520 2503
a 0 sr 3 0 1100 518 hcn 100 LABEL=Serial_out
a 0 up 33 0 1100 519 hct 100 LVL=
w 2183
a 0 up 0:33 0 0 0 hln 100 V=
s 920 610 980 610 2296
s 920 690 920 610 2182
s 980 650 980 610 2161
s 980 610 1160 610 2163
a 0 up 33 0 1070 609 hct 100 V=
w 2020
a 0 sr 0:3 0 745 408 hcn 100 LABEL=shifter
a 0 up 0:33 0 0 0 hln 100 LVL=
s 900 460 690 460 984
a 0 sr 3 0 795 458 hcn 100 LABEL=shifter
a 0 up 33 0 795 459 hct 100 LVL=
s 690 590 690 460 2429
s 750 590 690 590 562
s 850 400 900 400 980
s 900 400 900 460 982
w 1882
a 0 sr 0:3 0 275 68 hcn 100 LABEL=WCLK
a 0 up 0:33 0 0 0 hln 100 LVL=
s 310 120 350 120 226
a 0 sr 3 0 325 118 hcn 100 LABEL=WCLK
a 0 up 33 0 460 119 hct 100 LVL=
s 360 120 400 120 2287
s 680 490 360 490 802
s 680 560 680 490 813
s 680 560 750 560 857
s 680 570 680 560 575
s 680 570 750 570 573
s 360 490 360 120 804
s 350 120 360 120 582
s 810 70 350 70 1606
s 830 90 810 90 237
a 0 up 33 0 820 89 hct 100 LVL=
s 810 90 810 70 235
s 350 120 350 70 230
w 436
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 520 620 520 439
a 0 up 33 0 685 519 hct 100 LVL=
s 620 520 620 600 437
s 620 600 600 600 435
w 454
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 550 650 550 457
a 0 up 33 0 700 549 hct 100 LVL=
s 650 550 650 630 455
s 650 630 600 630 453
w 448
a 0 up 0:33 0 0 0 hln 100 LVL=
s 750 540 640 540 451
a 0 up 33 0 695 539 hct 100 LVL=
s 640 540 640 620 449
s 640 620 600 620 447
w 2094
a 0 sr 0:3 0 320 548 hcn 100 LABEL=Analog
a 0 up 0:33 0 0 0 hln 100 V=
s 400 600 510 600 2097
a 0 up 33 0 395 599 hct 100 V=
a 0 sr 3 0 476 598 hcn 100 LABEL=Analog
w 2081
a 0 sr 0:3 0 805 298 hcn 100 LABEL=out
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1120 350 1160 350 2332
a 0 sr 3 0 1133 348 hcn 100 LABEL=out
s 1120 270 1120 350 826
s 570 420 590 420 1021
s 590 420 590 350 1027
s 430 350 590 350 1845
a 0 up 33 0 780 349 hct 100 LVL=
s 590 350 1120 350 1926
a 0 up 33 0 735 349 hct 100 V=
a 0 sr 3 0 855 348 hcn 100 LABEL=out
s 430 350 430 610 830
s 430 610 510 610 2544
w 410
a 0 up 0:33 0 0 0 hln 100 V=
s 510 640 360 640 2498
s 360 640 360 650 2166
w 794
a 0 up 0:33 0 0 0 hln 100 LVL=
s 630 610 600 610 441
s 630 530 630 610 443
s 750 530 630 530 445
a 0 up 33 0 690 529 hct 100 LVL=
w 2171
a 0 up 0:33 0 0 0 hln 100 V=
s 360 690 360 710 2168
s 920 870 570 870 2188
s 920 730 920 870 2186
s 980 870 920 870 2156
s 980 690 980 870 2154
s 570 870 570 710 2550
a 0 up 33 0 635 729 hct 100 V=
s 360 710 360 730 2558
s 570 710 360 710 2160
s 570 710 570 660 2589
w 150
a 0 up 0:33 0 0 0 hln 100 LVL=
s 730 260 740 260 2258
s 680 180 730 180 1938
s 680 370 680 180 992
s 600 180 680 180 2410
s 680 370 760 370 951
s 590 180 600 180 149
a 0 up 33 0 615 179 hct 100 LVL=
s 600 180 600 100 207
s 760 370 760 390 953
s 600 100 830 100 210
s 760 390 780 390 955
s 730 180 750 180 2567
s 730 180 730 260 2565
w 2246
a 0 up 0:33 0 0 0 hln 100 LVL=
s 830 270 810 270 2245
a 0 up 33 0 825 269 hct 100 LVL=
w 1901
a 0 sr 0:3 0 875 228 hcn 100 LABEL=count
a 0 up 0:33 0 0 0 hln 100 LVL=
s 900 280 950 280 308
a 0 sr 3 0 925 278 hcn 100 LABEL=count
a 0 up 33 0 925 279 hct 100 LVL=
s 540 370 540 330 1056
s 950 330 950 280 1107
s 540 330 950 330 896
a 0 up 33 0 745 329 hct 100 LVL=
w 966
a 0 up 0:33 0 0 0 hln 100 LVL=
s 650 230 700 230 2254
s 680 420 650 420 975
s 650 420 650 230 1001
s 630 130 830 130 224
a 0 up 33 0 730 129 hct 100 LVL=
s 590 200 610 200 158
s 610 200 610 230 160
s 610 230 630 230 283
s 630 230 630 130 221
s 630 230 650 230 950
s 830 310 700 310 2573
s 830 290 830 310 2571
s 700 230 820 230 2596
s 700 310 700 230 2594
w 2597
a 0 up 0:33 0 0 0 hln 100 LVL=
s 660 410 660 210 998
s 620 210 660 210 2388
s 680 410 660 410 970
s 590 210 620 210 155
a 0 up 33 0 605 209 hct 100 LVL=
s 620 210 620 170 263
s 620 170 750 170 156
s 620 170 620 120 1871
s 620 120 830 120 219
s 660 210 710 210 2570
s 710 280 740 280 2262
s 710 210 820 210 2601
s 710 280 710 210 2568
w 2572
s 670 190 720 190 936
s 670 400 670 190 995
s 610 190 670 190 2398
s 680 400 670 400 961
s 590 190 610 190 147
a 0 up 33 0 615 189 hct 100 LVL=
s 610 190 610 110 212
s 610 110 830 110 215
s 720 190 750 190 2604
s 720 190 720 270 2602
s 720 270 740 270 2605
w 2608
s 1320 120 1370 120 2607
w 2610
s 1320 160 1370 160 2609
w 2612
s 1320 80 1370 80 2611
@junction
j 920 690
+ p 2177 1
+ w 2183
j 980 650
+ p 2153 +
+ w 2183
j 290 600
+ s 2146
+ w 2143
j 360 600
+ p 2091 1
+ w 2143
j 1160 350
+ s 2149
+ w 2081
j 1120 270
+ p 823 2
+ w 2081
j 1120 350
+ w 2081
+ w 2081
j 570 420
+ p 1004 CLK
+ w 2081
j 590 350
+ w 2081
+ w 2081
j 400 120
+ p 140 I0
+ w 1882
j 680 560
+ w 1882
+ w 1882
j 360 120
+ w 1882
+ w 1882
j 830 90
+ p 206 I0
+ w 1882
j 310 120
+ s 2145
+ w 1882
j 310 170
+ p 1864 1
+ w 1949
j 540 450
+ p 1004 \R\
+ w 1949
j 390 170
+ w 1949
+ w 1949
j 510 420
+ p 1004 \Q\
+ w 1501
j 680 180
+ w 150
+ w 150
j 600 180
+ w 150
+ w 150
j 540 370
+ p 1004 \S\
+ w 1901
j 920 870
+ w 2171
+ w 2171
j 400 600
+ p 2091 2
+ w 2094
j 850 400
+ p 947 O
+ w 2020
j 570 400
+ p 1004 D
+ w 1008
j 600 400
+ s 1006
+ w 1008
j 1070 150
+ p 239 O
+ w 251
j 1120 230
+ p 823 1
+ w 251
j 910 110
+ p 206 O
+ w 241
j 1000 140
+ p 239 I0
+ w 241
j 980 190
+ p 146 O
+ w 173
j 1000 160
+ p 239 I1
+ w 173
j 820 180
+ p 145 O
+ w 165
j 910 180
+ p 146 I1
+ w 165
j 910 200
+ p 146 I0
+ w 167
j 890 220
+ p 144 O
+ w 167
j 480 100
+ s 1254
+ w 112
j 450 120
+ p 140 O
+ w 1818
j 440 160
+ s 130
+ w 60
j 480 160
+ w 60
+ w 60
j 520 130
+ w 3
+ w 3
j 470 180
+ w 3
+ w 3
j 470 190
+ w 3
+ w 3
j 470 200
+ w 3
+ w 3
j 440 210
+ s 131
+ w 3
j 470 210
+ w 3
+ w 3
j 530 170
+ p 132 \ACLR\
+ w 1949
j 530 150
+ p 132 \SCLR\
+ w 2275
j 530 100
+ p 132 \G\
+ w 112
j 530 120
+ p 132 CLK
+ w 1818
j 530 110
+ p 132 U/\D\
+ w 60
j 530 160
+ p 132 \LOAD\
+ w 60
j 530 130
+ p 132 \ENT\
+ w 3
j 530 140
+ p 132 \ENP\
+ w 3
j 530 180
+ p 132 A
+ w 3
j 530 190
+ p 132 B
+ w 3
j 530 200
+ p 132 C
+ w 3
j 530 210
+ p 132 D
+ w 3
j 750 570
+ p 419 CLK1
+ w 1882
j 750 560
+ p 419 CLK2
+ w 1882
j 750 590
+ p 419 MODE
+ w 2020
j 750 530
+ p 419 C
+ w 794
j 750 520
+ p 419 D
+ w 436
j 750 550
+ p 419 A
+ w 454
j 750 540
+ p 419 B
+ w 448
j 500 260
+ p 2272 OUT
+ w 2275
j 500 320
+ p 2272 IN
+ w 1501
j 1160 520
+ s 2150
+ w 594
j 810 520
+ p 419 QD
+ w 594
j 1160 610
+ s 2165
+ w 2183
j 980 610
+ w 2183
+ w 2183
j 680 420
+ p 946 I0
+ w 966
j 750 410
+ p 946 O
+ w 958
j 820 230
+ p 144 I0
+ w 966
j 830 130
+ p 206 I4
+ w 966
j 650 230
+ w 966
+ w 966
j 630 230
+ w 966
+ w 966
j 590 200
+ p 132 QC
+ w 966
j 780 410
+ p 947 I1
+ w 958
j 670 190
+ w 2572
+ w 2572
j 610 190
+ w 2572
+ w 2572
j 620 210
+ w 2597
+ w 2597
j 620 170
+ w 2597
+ w 2597
j 360 730
+ s 2173
+ w 2171
j 360 690
+ p 2170 -
+ w 2171
j 360 650
+ p 2170 +
+ w 410
j 920 730
+ p 2177 2
+ w 2171
j 980 690
+ p 2153 -
+ w 2171
j 360 710
+ w 2171
+ w 2171
j 570 710
+ w 2171
+ w 2171
j 780 390
+ p 947 I0
+ w 150
j 750 180
+ p 145 I1
+ w 150
j 830 100
+ p 206 I1
+ w 150
j 590 180
+ p 132 QA
+ w 150
j 730 180
+ w 150
+ w 150
j 680 410
+ p 946 I1
+ w 2597
j 830 120
+ p 206 I3
+ w 2597
j 750 170
+ p 145 I2
+ w 2597
j 590 210
+ p 132 QD
+ w 2597
j 680 400
+ p 946 I2
+ w 2572
j 750 190
+ p 145 I0
+ w 2572
j 830 110
+ p 206 I2
+ w 2572
j 590 190
+ p 132 QB
+ w 2572
j 750 580
+ s 2587
+ p 419 SER
j 600 600
+ p 2588 DB3
+ w 436
j 600 630
+ p 2588 DB0
+ w 454
j 600 620
+ p 2588 DB1
+ w 448
j 510 600
+ p 2588 IN
+ w 2094
j 510 610
+ p 2588 CNVRT
+ w 2081
j 510 640
+ p 2588 REF
+ w 410
j 600 610
+ p 2588 DB2
+ w 794
j 570 660
+ p 2588 GND
+ w 2171
j 740 260
+ p 2591 I0
+ w 150
j 810 270
+ p 2591 O
+ w 2246
j 830 270
+ p 2592 I0
+ w 2246
j 900 280
+ p 2592 O
+ w 1901
j 830 290
+ p 2592 I1
+ w 966
j 700 230
+ w 966
+ w 966
j 660 210
+ w 2597
+ w 2597
j 820 210
+ p 144 I1
+ w 2597
j 740 280
+ p 2591 I2
+ w 2597
j 710 210
+ w 2597
+ w 2597
j 720 190
+ w 2572
+ w 2572
j 740 270
+ p 2591 I1
+ w 2572
j 1320 120
+ s 2613
+ w 2608
j 1320 160
+ s 2614
+ w 2610
j 1370 120
+ s 2615
+ w 2608
j 1370 160
+ s 2616
+ w 2610
j 1320 80
+ s 2617
+ w 2612
j 1370 80
+ s 2618
+ w 2612
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=C
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 2300 t 5 160 927 385 950 0 22
PARAMETER DEFINITIONS:
t 2301 t 5 1150 919 1194 937 0 6
NOTES:
t 2304 t 5 720 924 1040 940 0 36
PIN DESCRIPTIONS: ((based on MAX170)
t 2305 t 6 740 940 1070 1100 0 189
AIN - Analog Input, 0 to 5V unipolar
VREF - Reference voltage output, -5.25V
DATA - Serial Data Output
CLOCK - Clock input
CONVST/EOC* - Conversion Start Input; End-of-Conversion output
t 2480 t 5 520 35 610 51 0 15
Up/Down Counter
v 2481 v 0 490 10
490 60
670 60
670 10
490 10
;
v 2482 v 0 500 20
500 50
660 50
660 20
500 20
;
t 2483 t 5 860 485 961 501 0 21
12-bit Shift Register
v 2484 v 0 850 480
850 510
970 510
970 480
850 480
;
t 2485 t 5 540 545 571 561 0 3
ADC
v 2486 v 0 530 540
530 560
580 560
580 540
530 540
;
v 2487 v 0 520 530
520 570
590 570
590 530
530 530
;
v 2488 v 0 530 530
520 530
;
t 2303 t 6 170 950 630 1100 0 298
tSC0 - CONVST/EOC* to CLOCK Skew (typical)
CONVWHI - CONVST/EOC* Pulse Width High
CONVWLO - CONVST/EOC* Pulse Width Low
CKDPDMAX, CKDPDMIN - Clock to Data Delay
CLKMAX, CLKMIN - Clock Frequency
CLKHI - Minimu Clock Pulse High
CLKLO - Maqximum CLK Pulse Low
IO_MODEL - Input/Output Model Name
t 2302 t 5 1615 935 1160 1055 0 355
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The input/output model can be changed through the parameter IO_MODEL. Recommended models are IO_HCT for CMOS and IO_ALS for TTL. Custom models may also be defined.
3. Digital input parasitics should be placed in I/O Model