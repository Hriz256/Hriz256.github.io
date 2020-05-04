*version 9.2 204216284
u 1002
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
pageloc 1 0 23845 
@status
c 99:05:25:12:50:19;930340219
a 0 98:03:08:12:07:45;892062465 e 
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
port 723 IF_IN 70 555 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB7
port 783 hi 100 385 h
port 262 Agnd 1020 515 h
port 333 IF_OUT 1140 580 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Vref
port 334 IF_OUT 1140 650 h
a 1 xr 3 0 31 8 hcn 100 LABEL=AGND
port 332 IF_OUT 1140 455 h
a 1 xr 3 0 31 8 hcn 100 LABEL=VOUT
port 696 IF_IN 70 395 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB23
port 782 IF_IN 70 405 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB22
port 777 IF_IN 70 415 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB21
port 776 IF_IN 70 425 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB20
port 769 IF_IN 70 435 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB19
port 768 IF_IN 70 445 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB18
port 753 IF_IN 70 455 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB17
port 752 IF_IN 70 465 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB16
port 747 IF_IN 70 475 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB15
port 746 IF_IN 70 485 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB14
port 741 IF_IN 70 495 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB13
port 740 IF_IN 70 505 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB12
port 735 IF_IN 70 515 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB11
port 734 IF_IN 70 525 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB10
port 729 IF_IN 70 535 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB9
port 728 IF_IN 70 545 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB8
port 722 IF_IN 70 565 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB6
port 717 IF_IN 70 575 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB5
port 716 IF_IN 70 585 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB4
port 711 IF_IN 70 595 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB3
port 710 IF_IN 70 605 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB2
port 702 IF_IN 70 615 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB1
port 699 IF_IN 70 625 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DB0
port 998 interface 1100 130 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VDD
port 999 interface 1100 150 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VSS
port 1000 bubble 1160 130 d
a 1 x 3 0 0 0 hcn 100 LABEL=VDD
port 1001 bubble 1160 150 d
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
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
a 0 ap 9 0 20 2 hln 100 REFDES=U3
part 72 dc_buf 100 155 h
a 0 u 0:13 0 14 50 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 40 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
a 0 ap 9 0 22 0 hln 100 REFDES=U4
part 74 dc_buf 100 255 h
a 0 u 0:13 0 54 62 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 40 34 hln 100 PART=dc_buf
a 0 u 0:13 0 0 20 hlb 100 IO_LEVEL=0
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
a 0 ap 9 0 20 0 hln 100 REFDES=U5
part 113 dc_buf 100 305 h
a 0 u 0:13 0 -4 74 hlb 100 PIO_MODEL=@IO_MODEL
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 38 34 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
a 0 ap 9 0 20 0 hln 100 REFDES=U6
part 5 dacpar_constrnt 210 85 h
a 0 s 11 0 78 50 hrn 100 PART=dacpar_constrnt
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U7
a 0 ap 9 0 10 -2 hln 100 REFDES=U7
part 689 dc_buf24 100 385 h
a 0 sp 11 0 60 272 hrn 100 PART=dc_buf24
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 -10 286 hlb 100 PTPZLTY=
a 0 u 13 13 -10 296 hlb 100 PTPZHTY=
a 0 u 13 13 -10 306 hlb 100 PTPLZTY=
a 0 u 13 13 -10 316 hlb 100 PTPHZTY=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U8
a 0 ap 9 0 10 -2 hln 100 REFDES=U8
part 263 R 1020 465 d
a 0 u 13 0 27 1 hln 100 VALUE=1G
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
a 0 ap 9 0 15 0 hln 100 REFDES=R1
part 249 GTABLE 940 465 U
a 0 u 13 13 184 89 hln 100 TABLE=(@VSINK,@ISINK) (@VSOURCE,@ISOURCE)
a 0 sp 11 0 54 35 hln 100 PART=GTABLE
a 1 ap 9 0 30 46 hln 100 REFDES=G1
a 0 u 13 0 56 2 hln 100 EXPR=200K*V(%IN+, %IN-)
a 0 a 0:13 0 0 0 hln 100 PKGREF=G1
part 808 dc_reg24 360 355 h
a 0 sp 11 0 110 304 hrn 100 PART=dc_reg24
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 ap 9 0 22 -2 hln 100 REFDES=U10
part 687 dc_reg24 520 355 h
a 0 sp 11 0 110 304 hrn 100 PART=dc_reg24
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 0 ap 9 0 22 -2 hln 100 REFDES=U11
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
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
a 0 ap 9 0 25 0 hln 100 REFDES=R2
part 686 dc_dac24 690 395 h
a 0 sp 11 0 62 288 hrn 100 PART=dc_dac24
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 ap 9 0 12 0 hln 100 REFDES=U12
part 436 slewrate 780 465 h
a 0 u 13 13 9 54 hln 100 BW=0.5Meg
a 0 s 11 0 60 30 hrn 100 PART=slewrate
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 10 42 hln 100 PSR=@SR
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 a 9 0 10 -2 hln 100 REFDES=U9
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
w 199
a 0 up 0:33 0 0 0 hln 100 LVL=
s 480 175 300 175 202
s 480 375 480 175 200
a 0 up 33 0 482 275 hlt 100 LVL=
s 520 375 480 375 198
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
w 193
a 0 up 0:33 0 0 0 hln 100 LVL=
s 320 375 360 375 196
s 320 235 320 375 194
a 0 up 33 0 322 305 hlt 100 LVL=
s 300 235 320 235 192
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
w 695
s 70 395 100 395 694
a 0 up 33 0 85 394 hct 100 LVL=
w 698
s 70 625 100 625 697
a 0 up 33 0 85 624 hct 100 LVL=
w 701
s 70 615 100 615 700
a 0 up 33 0 85 614 hct 100 LVL=
w 707
s 70 605 100 605 706
a 0 up 33 0 85 604 hct 100 LVL=
w 709
s 70 595 100 595 708
a 0 up 33 0 85 594 hct 100 LVL=
w 713
s 70 585 100 585 712
a 0 up 33 0 85 584 hct 100 LVL=
w 715
s 70 575 100 575 714
a 0 up 33 0 85 574 hct 100 LVL=
w 719
s 70 565 100 565 718
a 0 up 33 0 85 564 hct 100 LVL=
w 721
s 70 555 100 555 720
a 0 up 33 0 85 554 hct 100 LVL=
w 725
s 70 545 100 545 724
a 0 up 33 0 85 544 hct 100 LVL=
w 727
s 70 535 100 535 726
a 0 up 33 0 85 534 hct 100 LVL=
w 731
s 70 525 100 525 730
a 0 up 33 0 85 524 hct 100 LVL=
w 733
s 70 515 100 515 732
a 0 up 33 0 85 514 hct 100 LVL=
w 737
s 70 505 100 505 736
a 0 up 33 0 85 504 hct 100 LVL=
w 739
s 70 495 100 495 738
a 0 up 33 0 85 494 hct 100 LVL=
w 743
s 70 485 100 485 742
a 0 up 33 0 85 484 hct 100 LVL=
w 745
s 70 475 100 475 744
a 0 up 33 0 85 474 hct 100 LVL=
w 749
s 70 465 100 465 748
a 0 up 33 0 85 464 hct 100 LVL=
w 751
s 70 455 100 455 750
a 0 up 33 0 85 454 hct 100 LVL=
w 765
s 70 445 100 445 764
a 0 up 33 0 85 444 hct 100 LVL=
w 767
s 70 435 100 435 766
a 0 up 33 0 85 434 hct 100 LVL=
w 773
s 70 425 100 425 772
a 0 up 33 0 85 424 hct 100 LVL=
w 775
s 70 415 100 415 774
a 0 up 33 0 85 414 hct 100 LVL=
w 781
s 70 405 100 405 780
a 0 up 33 0 85 404 hct 100 LVL=
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
w 832
s 170 495 360 495 831
w 834
s 170 505 360 505 833
w 848
s 170 515 360 515 847
w 850
s 170 525 360 525 849
w 852
s 170 535 360 535 851
w 854
s 170 545 360 545 853
w 856
s 170 555 360 555 855
w 858
s 170 565 360 565 857
w 860
s 170 575 360 575 859
w 862
s 170 585 360 585 861
w 864
s 170 595 360 595 863
w 866
s 170 605 360 605 865
w 868
s 170 615 360 615 867
w 870
s 170 625 360 625 869
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
w 672
s 770 465 780 465 671
w 884
s 520 545 470 545 883
a 0 up 33 0 495 544 hct 100 LVL=
w 886
s 520 535 470 535 885
a 0 up 33 0 495 534 hct 100 LVL=
w 888
s 520 525 470 525 887
a 0 up 33 0 495 524 hct 100 LVL=
w 890
s 520 515 470 515 889
a 0 up 33 0 495 514 hct 100 LVL=
w 892
s 520 505 470 505 891
a 0 up 33 0 495 504 hct 100 LVL=
w 894
s 520 495 470 495 893
a 0 up 33 0 495 494 hct 100 LVL=
w 896
s 520 485 470 485 895
a 0 up 33 0 495 484 hct 100 LVL=
w 898
s 520 475 470 475 897
a 0 up 33 0 495 474 hct 100 LVL=
w 900
s 520 625 470 625 899
a 0 up 33 0 495 624 hct 100 LVL=
w 902
s 520 615 470 615 901
a 0 up 33 0 495 614 hct 100 LVL=
w 904
s 520 605 470 605 903
a 0 up 33 0 495 604 hct 100 LVL=
w 906
s 520 595 470 595 905
a 0 up 33 0 495 594 hct 100 LVL=
w 908
s 520 585 470 585 907
a 0 up 33 0 495 584 hct 100 LVL=
w 910
s 520 575 470 575 909
a 0 up 33 0 495 574 hct 100 LVL=
w 912
s 520 565 470 565 911
a 0 up 33 0 495 564 hct 100 LVL=
w 914
s 520 555 470 555 913
a 0 up 33 0 495 554 hct 100 LVL=
w 932
s 690 535 630 535 931
a 0 up 33 0 660 534 hct 100 LVL=
w 934
s 690 525 630 525 933
a 0 up 33 0 660 524 hct 100 LVL=
w 936
s 690 515 630 515 935
a 0 up 33 0 660 514 hct 100 LVL=
w 938
s 690 505 630 505 937
a 0 up 33 0 660 504 hct 100 LVL=
w 940
s 690 495 630 495 939
a 0 up 33 0 660 494 hct 100 LVL=
w 942
s 690 485 630 485 941
a 0 up 33 0 660 484 hct 100 LVL=
w 944
s 690 475 630 475 943
a 0 up 33 0 660 474 hct 100 LVL=
w 946
s 690 545 630 545 945
a 0 up 33 0 660 544 hct 100 LVL=
w 948
s 690 615 630 615 947
a 0 up 33 0 660 614 hct 100 LVL=
w 950
s 690 605 630 605 949
a 0 up 33 0 660 604 hct 100 LVL=
w 952
s 690 595 630 595 951
a 0 up 33 0 660 594 hct 100 LVL=
w 954
s 690 585 630 585 953
a 0 up 33 0 660 584 hct 100 LVL=
w 956
s 690 575 630 575 955
a 0 up 33 0 660 574 hct 100 LVL=
w 958
s 690 565 630 565 957
a 0 up 33 0 660 564 hct 100 LVL=
w 960
s 690 555 630 555 959
a 0 up 33 0 660 554 hct 100 LVL=
w 962
s 690 625 630 625 961
a 0 up 33 0 660 624 hct 100 LVL=
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
s 870 650 870 630 223
s 870 650 910 650 601
s 910 650 910 630 227
s 910 650 1140 650 328
a 0 up 33 0 1025 649 hct 100 V=
s 770 535 770 650 980
s 770 650 870 650 983
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
w 995
s 1100 130 1160 130 994
a 0 up 33 0 1130 129 hct 100 V=
w 997
s 1100 150 1160 150 996
a 0 up 33 0 1130 149 hct 100 V=
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
j 520 365
+ p 687 CLRBAR
+ w 187
j 520 465
+ p 687 D16
+ w 24
j 520 455
+ p 687 D17
+ w 26
j 520 445
+ p 687 D18
+ w 28
j 520 435
+ p 687 D19
+ w 30
j 520 425
+ p 687 D20
+ w 32
j 520 415
+ p 687 D21
+ w 34
j 520 405
+ p 687 D22
+ w 36
j 520 395
+ p 687 D23
+ w 38
j 520 375
+ p 687 GATE
+ w 199
j 520 355
+ p 687 PREBAR
+ w 205
j 630 455
+ p 687 Q17
+ w 58
j 630 445
+ p 687 Q18
+ w 60
j 630 435
+ p 687 Q19
+ w 62
j 630 425
+ p 687 Q20
+ w 64
j 630 415
+ p 687 Q21
+ w 66
j 630 405
+ p 687 Q22
+ w 68
j 630 395
+ p 687 Q23
+ w 70
j 630 465
+ p 687 Q16
+ w 56
j 360 375
+ p 808 GATE
+ w 193
j 360 365
+ p 808 CLRBAR
+ w 187
j 470 465
+ p 808 Q16
+ w 24
j 470 455
+ p 808 Q17
+ w 26
j 470 445
+ p 808 Q18
+ w 28
j 470 435
+ p 808 Q19
+ w 30
j 470 425
+ p 808 Q20
+ w 32
j 470 415
+ p 808 Q21
+ w 34
j 470 405
+ p 808 Q22
+ w 36
j 470 395
+ p 808 Q23
+ w 38
j 360 355
+ p 808 PREBAR
+ w 205
j 70 395
+ s 696
+ w 695
j 70 625
+ s 699
+ w 698
j 70 615
+ s 702
+ w 701
j 70 605
+ s 710
+ w 707
j 70 595
+ s 711
+ w 709
j 70 585
+ s 716
+ w 713
j 70 575
+ s 717
+ w 715
j 70 565
+ s 722
+ w 719
j 70 555
+ s 723
+ w 721
j 70 545
+ s 728
+ w 725
j 70 535
+ s 729
+ w 727
j 70 525
+ s 734
+ w 731
j 70 515
+ s 735
+ w 733
j 70 505
+ s 740
+ w 737
j 70 495
+ s 741
+ w 739
j 70 485
+ s 746
+ w 743
j 70 475
+ s 747
+ w 745
j 70 455
+ s 753
+ w 751
j 70 445
+ s 768
+ w 765
j 70 435
+ s 769
+ w 767
j 70 425
+ s 776
+ w 773
j 70 415
+ s 777
+ w 775
j 70 405
+ s 782
+ w 781
j 360 395
+ p 808 D23
+ w 810
j 360 405
+ p 808 D22
+ w 814
j 360 415
+ p 808 D21
+ w 816
j 360 425
+ p 808 D20
+ w 818
j 360 435
+ p 808 D19
+ w 820
j 360 445
+ p 808 D18
+ w 822
j 360 455
+ p 808 D17
+ w 824
j 360 465
+ p 808 D16
+ w 826
j 360 475
+ p 808 D15
+ w 828
j 360 485
+ p 808 D14
+ w 830
j 360 495
+ p 808 D13
+ w 832
j 100 395
+ p 689 I0
+ w 695
j 100 625
+ p 689 I23
+ w 698
j 100 615
+ p 689 I22
+ w 701
j 100 605
+ p 689 I21
+ w 707
j 100 595
+ p 689 I20
+ w 709
j 100 585
+ p 689 I19
+ w 713
j 100 575
+ p 689 I18
+ w 715
j 100 565
+ p 689 I17
+ w 719
j 100 555
+ p 689 I16
+ w 721
j 100 545
+ p 689 I15
+ w 725
j 100 535
+ p 689 I14
+ w 727
j 100 525
+ p 689 I13
+ w 731
j 100 515
+ p 689 I12
+ w 733
j 100 505
+ p 689 I11
+ w 737
j 100 495
+ p 689 I10
+ w 739
j 100 485
+ p 689 I9
+ w 743
j 100 475
+ p 689 I8
+ w 745
j 100 465
+ p 689 I7
+ w 749
j 100 455
+ p 689 I6
+ w 751
j 100 445
+ p 689 I5
+ w 765
j 100 435
+ p 689 I4
+ w 767
j 100 425
+ p 689 I3
+ w 773
j 100 415
+ p 689 I2
+ w 775
j 100 405
+ p 689 I1
+ w 781
j 100 385
+ p 689 OE
+ s 783
j 170 395
+ p 689 O0
+ w 810
j 170 405
+ p 689 O1
+ w 814
j 170 415
+ p 689 O2
+ w 816
j 170 425
+ p 689 O3
+ w 818
j 170 435
+ p 689 O4
+ w 820
j 170 445
+ p 689 O5
+ w 822
j 170 455
+ p 689 O6
+ w 824
j 170 465
+ p 689 O7
+ w 826
j 170 475
+ p 689 O8
+ w 828
j 170 485
+ p 689 O9
+ w 830
j 170 495
+ p 689 O10
+ w 832
j 170 505
+ p 689 O11
+ w 834
j 360 505
+ p 808 D12
+ w 834
j 170 515
+ p 689 O12
+ w 848
j 360 515
+ p 808 D11
+ w 848
j 170 525
+ p 689 O13
+ w 850
j 360 525
+ p 808 D10
+ w 850
j 170 535
+ p 689 O14
+ w 852
j 360 535
+ p 808 D9
+ w 852
j 170 545
+ p 689 O15
+ w 854
j 360 545
+ p 808 D8
+ w 854
j 170 555
+ p 689 O16
+ w 856
j 360 555
+ p 808 D7
+ w 856
j 170 565
+ p 689 O17
+ w 858
j 360 565
+ p 808 D6
+ w 858
j 170 575
+ p 689 O18
+ w 860
j 360 575
+ p 808 D5
+ w 860
j 170 585
+ p 689 O19
+ w 862
j 360 585
+ p 808 D4
+ w 862
j 170 595
+ p 689 O20
+ w 864
j 360 595
+ p 808 D3
+ w 864
j 170 605
+ p 689 O21
+ w 866
j 360 605
+ p 808 D2
+ w 866
j 170 615
+ p 689 O22
+ w 868
j 360 615
+ p 808 D1
+ w 868
j 170 625
+ p 689 O23
+ w 870
j 360 625
+ p 808 D0
+ w 870
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
j 520 545
+ p 687 D8
+ w 884
j 470 545
+ p 808 Q8
+ w 884
j 520 535
+ p 687 D9
+ w 886
j 470 535
+ p 808 Q9
+ w 886
j 520 525
+ p 687 D10
+ w 888
j 470 525
+ p 808 Q10
+ w 888
j 520 515
+ p 687 D11
+ w 890
j 470 515
+ p 808 Q11
+ w 890
j 520 505
+ p 687 D12
+ w 892
j 470 505
+ p 808 Q12
+ w 892
j 520 495
+ p 687 D13
+ w 894
j 470 495
+ p 808 Q13
+ w 894
j 520 485
+ p 687 D14
+ w 896
j 470 485
+ p 808 Q14
+ w 896
j 520 475
+ p 687 D15
+ w 898
j 470 475
+ p 808 Q15
+ w 898
j 520 625
+ p 687 D0
+ w 900
j 470 625
+ p 808 Q0
+ w 900
j 520 615
+ p 687 D1
+ w 902
j 470 615
+ p 808 Q1
+ w 902
j 520 605
+ p 687 D2
+ w 904
j 470 605
+ p 808 Q2
+ w 904
j 520 595
+ p 687 D3
+ w 906
j 470 595
+ p 808 Q3
+ w 906
j 520 585
+ p 687 D4
+ w 908
j 470 585
+ p 808 Q4
+ w 908
j 520 575
+ p 687 D5
+ w 910
j 470 575
+ p 808 Q5
+ w 910
j 520 565
+ p 687 D6
+ w 912
j 470 565
+ p 808 Q6
+ w 912
j 520 555
+ p 687 D7
+ w 914
j 470 555
+ p 808 Q7
+ w 914
j 690 455
+ p 686 DB17
+ w 58
j 690 445
+ p 686 DB18
+ w 60
j 690 435
+ p 686 DB19
+ w 62
j 690 425
+ p 686 DB20
+ w 64
j 690 415
+ p 686 DB21
+ w 66
j 690 405
+ p 686 DB22
+ w 68
j 690 395
+ p 686 DB23
+ w 70
j 690 465
+ p 686 DB16
+ w 56
j 770 465
+ p 686 OUT
+ w 672
j 690 535
+ p 686 DB9
+ w 932
j 630 535
+ p 687 Q9
+ w 932
j 690 525
+ p 686 DB10
+ w 934
j 630 525
+ p 687 Q10
+ w 934
j 690 515
+ p 686 DB11
+ w 936
j 630 515
+ p 687 Q11
+ w 936
j 690 505
+ p 686 DB12
+ w 938
j 630 505
+ p 687 Q12
+ w 938
j 690 495
+ p 686 DB13
+ w 940
j 630 495
+ p 687 Q13
+ w 940
j 690 485
+ p 686 DB14
+ w 942
j 630 485
+ p 687 Q14
+ w 942
j 690 475
+ p 686 DB15
+ w 944
j 630 475
+ p 687 Q15
+ w 944
j 690 545
+ p 686 DB8
+ w 946
j 630 545
+ p 687 Q8
+ w 946
j 690 615
+ p 686 DB1
+ w 948
j 630 615
+ p 687 Q1
+ w 948
j 690 605
+ p 686 DB2
+ w 950
j 630 605
+ p 687 Q2
+ w 950
j 690 595
+ p 686 DB3
+ w 952
j 630 595
+ p 687 Q3
+ w 952
j 690 585
+ p 686 DB4
+ w 954
j 630 585
+ p 687 Q4
+ w 954
j 690 575
+ p 686 DB5
+ w 956
j 630 575
+ p 687 Q5
+ w 956
j 690 565
+ p 686 DB6
+ w 958
j 630 565
+ p 687 Q6
+ w 958
j 690 555
+ p 686 DB7
+ w 960
j 630 555
+ p 687 Q7
+ w 960
j 690 625
+ p 686 DB0
+ w 962
j 630 625
+ p 687 Q0
+ w 962
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
j 770 515
+ p 686 REF
+ w 320
j 870 630
+ p 218 2
+ w 978
j 910 630
+ p 217 2
+ w 978
j 1140 650
+ s 334
+ w 978
j 770 535
+ p 686 GND
+ w 978
j 1140 455
+ s 332
+ w 637
j 1020 455
+ w 637
+ w 637
j 70 465
+ s 752
+ w 749
j 1100 130
+ s 998
+ w 995
j 1100 150
+ s 999
+ w 997
j 1160 130
+ s 1000
+ w 995
j 1160 150
+ s 1001
+ w 997
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
DB23-0 - Data Bits
LDAC*, CS*, WR*, RESET* - Control 
Vout - Voltage Ouput
Vref - Referency Voltage Output
t 526 t 5 720 855 1165 935 0 308
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The digital input model can be changed through the parameter IO_MODEL. Recommended models are IO_HC for CMOS input and IO_ALS for TTL input. Custom models may also be defined.