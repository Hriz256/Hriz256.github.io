*version 9.2 2558708689
u 1381
U? 13
V? 2
R? 4
E? 4
C? 2
PM? 1
? 1
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
pageloc 1 0 23087 
@status
c 100:04:11:19:00:33;958096833
a 0 98:03:07:09:24:27;891966267 e 
n 2409 97:09:06:10:08:53;876157733 e 
*page 1 0 1200 900 iB
@ports
port 195 Agnd 390 365 h
port 196 Agnd 440 465 h
port 239 Agnd 360 295 h
port 568 IF_IN 150 245 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VinA
port 569 IF_IN 150 305 h
a 1 xr 3 0 19 8 hcn 100 LABEL=VinB
port 570 IF_IN 150 405 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REF_IN
port 571 IF_IN 150 455 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REF_OUT
port 572 IF_IN 150 555 h
a 1 xr 3 0 19 8 hcn 100 LABEL=REF_GND
port 605 IF_IN 150 65 h
a 1 xr 3 0 19 8 hcn 100 LABEL=OEN
port 567 IF_IN 150 115 h
a 1 xr 3 0 19 8 hcn 100 LABEL=CLOCK
port 367 HI 695 145 h
port 585 IF_OUT 1280 275 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit2
port 583 IF_OUT 1280 285 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit3
port 582 IF_OUT 1280 295 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit4
port 581 IF_OUT 1280 305 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit5
port 580 IF_OUT 1280 315 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit6
port 579 IF_OUT 1280 325 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit7
port 578 IF_OUT 1280 335 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit8
port 577 IF_OUT 1280 345 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit9
port 576 IF_OUT 1280 355 h
a 1 xr 3 0 31 8 hcn 100 LABEL=Bit10
port 573 IF_OUT 1280 255 h
a 1 xr 3 0 31 8 hcn 100 LABEL=OTR
port 608 IF_OUT 1280 245 h
a 1 xr 3 0 31 8 hcn 100 LABEL=MSB
port 584 IF_OUT 1280 265 h
a 1 xr 3 0 31 8 hcn 100 LABEL=\MSB\
port 1375 interface 1290 50 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AVDD
port 1376 interface 1290 70 h
a 1 xr 3 0 19 8 hcn 100 LABEL=DVDD
port 1377 interface 1290 90 h
a 1 xr 3 0 19 8 hcn 100 LABEL=AGND
port 1378 bubble 1350 50 d
a 1 x 3 0 0 0 hcn 100 LABEL=AVDD
port 1379 bubble 1350 70 d
a 1 x 3 0 0 0 hcn 100 LABEL=DVDD
port 1380 bubble 1350 90 d
a 1 x 3 0 0 0 hcn 100 LABEL=AGND
@parts
part 138 VSRC 240 475 h
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
a 1 u 13 13 -22 28 hcn 100 DC=2.5V
a 0 a 0:13 0 0 0 hln 100 PKGREF=V1
part 207 E 310 265 h
a 0 s 11 0 10 34 hln 100 PART=E
a 0 u 13 13 7 0 hln 100 GAIN=1
a 1 ap 9 0 23 36 hln 100 REFDES=E1
a 0 a 0:13 0 0 0 hln 100 PKGREF=E1
part 159 E 350 345 h
a 0 s 11 0 10 34 hln 100 PART=E
a 0 u 13 13 -29 1 hln 100 GAIN=@gain_ref
a 0 a 0:13 0 0 0 hln 100 PKGREF=E2
a 1 ap 9 0 24 35 hln 100 REFDES=E2
part 208 R 200 255 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 27 36 hln 100 VALUE=@Rin
a 0 ap 9 0 15 0 hln 100 REFDES=R1
a 0 a 0:13 0 0 0 hln 100 PKGREF=R1
part 209 C 250 255 d
a 0 sp 0 0 0 10 hlb 100 PART=C
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=CK05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 ap 9 0 15 0 hln 100 REFDES=C1
a 0 u 13 0 30 3 hln 100 VALUE=@Cin
a 0 a 0:13 0 0 0 hln 100 PKGREF=C1
part 139 R 170 455 h
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 -5 31 hln 100 VALUE=@R_ref_out
a 0 ap 9 0 15 0 hln 100 REFDES=R2
a 0 a 0:13 0 0 0 hln 100 PKGREF=R2
part 140 R 310 445 d
a 0 sp 0 0 0 10 hlb 100 PART=R
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 u 13 0 5 57 hln 100 VALUE=@R_ref_in
a 0 ap 9 0 15 0 hln 100 REFDES=R3
a 0 a 0:13 0 0 0 hln 100 PKGREF=R3
part 111 INV 370 115 h
a 0 sp 11 0 40 40 hln 100 PART=INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 ap 9 0 40 0 hln 100 REFDES=U1
a 0 a 0:13 0 0 0 hln 100 PKGREF=U1
part 160 E 400 445 h
a 0 s 11 0 10 34 hln 100 PART=E
a 0 u 13 13 -21 58 hln 100 GAIN=@gain_ref_gnd
a 0 a 0:13 0 0 0 hln 100 PKGREF=E3
a 1 ap 9 0 25 36 hln 100 REFDES=E3
part 588 INV 1090 215 h
a 0 sp 11 0 40 40 hln 100 PART=INV
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 x 0 0 0 10 hln 100 IMPL=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U4
a 0 ap 9 0 40 0 hln 100 REFDES=U4
part 689 adcpar_constrnt 155 115 d
a 0 u 13 13 60 -10 hlb 100 PMAXFREQ=@MAXFREQ
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 s 11 0 45 83 hrn 100 PART=adcpar_constrnt
a 0 u 13 13 96 -10 hlb 100 PMIN_HI=@WIDTH_MIN_HI
a 0 u 13 13 83 -10 hlb 100 PMIN_LO=@WIDTH_MIN_LO
a 0 u 13 13 72 -10 hlb 100 PMINFREQ=@MINFREQ
a 0 a 0:13 0 0 0 hln 100 PKGREF=U2
a 0 a 9 0 29 43 hln 100 REFDES=U2
part 867 dc_buf 200 115 h
a 0 u 13 13 42 40 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 11 0 32 50 hln 100 PART=dc_buf
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U3
a 0 a 9 0 26 8 hln 100 REFDES=U3
part 866 dc_buf 200 65 h
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 u 13 13 46 40 hlb 100 PIO_MODEL=@IO_MODEL
a 0 s 11 0 48 48 hln 100 PART=dc_buf
a 0 a 0:13 0 0 0 hln 100 PKGREF=U5
a 0 a 9 0 28 0 hln 100 REFDES=U5
part 1252 dc_adc10 410 265 h
a 0 s 11 0 74 130 hrn 100 PART=dc_adc10
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U10
a 0 a 9 0 10 -2 hln 100 REFDES=U10
part 1286 dc_ram12 845 205 h
a 0 s 11 0 80 178 hrn 100 PART=dc_ram12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U11
a 0 a 9 0 20 2 hln 100 REFDES=U11
part 1287 dc_ram12 975 205 h
a 0 s 11 0 80 178 hrn 100 PART=dc_ram12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U12
a 0 a 9 0 20 2 hln 100 REFDES=U12
part 1248 dc_buf12 1185 235 h
a 0 s 11 0 60 154 hrn 100 PART=dc_buf12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U6
a 0 a 9 0 10 -2 hln 100 REFDES=U6
part 1251 dc_ram12 715 205 h
a 0 s 11 0 80 178 hrn 100 PART=dc_ram12
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=
a 0 a 0:13 0 0 0 hln 100 PKGREF=U9
a 0 a 9 0 20 2 hln 100 REFDES=U9
a 0 u 13 13 2 270 hlb 100 PTPADLMX=@TPADLMX
part 1 titleblk 1520 970 h
a 1 x 13 0 180 60 hcn 100 PAGETITLE=A/D Converter - Parallel Interface
a 1 s 13 0 350 10 hcn 100 PAGESIZE=B
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
@conn
w 179
a 0 up 0:33 0 0 0 hln 100 V=
s 350 355 350 455 188
a 0 up 33 0 352 405 hlt 100 V=
s 400 455 350 455 176
s 350 455 350 555 174
s 240 555 150 555 157
s 240 555 240 515 155
s 350 555 310 555 153
s 310 555 240 555 798
s 310 485 310 555 151
w 146
a 0 up 0:33 0 0 0 hln 100 V=
s 170 455 150 455 145
a 0 up 33 0 160 454 hct 100 V=
w 228
a 0 up 0:33 0 0 0 hln 100 V=
s 250 305 250 285 236
s 250 305 200 305 418
s 310 305 250 305 325
a 0 up 33 0 280 304 hct 100 V=
s 200 305 200 295 233
s 200 305 150 305 235
s 310 275 310 305 227
w 214
a 0 up 0:33 0 0 0 hln 100 V=
s 250 255 250 245 224
s 250 245 200 245 412
a 0 up 33 0 225 244 hct 100 V=
s 300 245 250 245 319
s 200 245 200 255 221
s 200 245 150 245 223
s 300 265 300 245 215
s 310 265 300 265 213
w 241
a 0 up 0:33 0 0 0 hln 100 V=
s 360 275 360 295 242
a 0 up 33 0 362 285 hlt 100 V=
s 350 275 360 275 240
w 202
a 0 up 0:33 0 0 0 hln 100 V=
s 440 455 440 465 201
a 0 up 33 0 442 460 hlt 100 V=
w 200
a 0 up 0:33 0 0 0 hln 100 V=
s 390 355 390 365 199
a 0 up 33 0 392 360 hlt 100 V=
w 142
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 240 455 240 475 143
s 210 455 240 455 141
a 0 up 33 0 225 454 hct 100 V=
a 0 up 33 0 225 454 hct 100 LVL=
w 180
a 0 up 0:33 0 0 0 hln 100 V=
s 240 345 240 405 192
s 350 345 240 345 190
a 0 up 33 0 295 344 hct 100 V=
s 390 405 310 405 182
s 310 405 240 405 804
s 310 445 310 405 147
s 390 445 390 405 168
s 400 445 390 445 166
s 240 405 150 405 1090
w 452
a 0 up 0:33 0 0 0 hln 100 LVL=
s 200 115 155 115 1164
a 0 up 33 0 175 114 hct 100 LVL=
s 155 115 150 115 1368
w 604
a 0 up 0:33 0 0 0 hln 100 LVL=
s 200 65 150 65 851
a 0 up 33 0 175 64 hct 100 LVL=
w 198
a 0 sr 0 0 0 0 hln 100 LABEL=Ref
a 0 up 0:33 0 0 0 hln 100 V=
s 390 345 410 345 197
a 0 up 33 0 400 344 hct 100 V=
a 0 sr 3 0 405 358 hcn 100 LABEL=Ref
w 212
a 0 up 0:33 0 0 0 hln 100 V=
a 0 up 0:33 0 0 0 hln 100 LVL=
s 410 265 350 265 1095
a 0 up 33 0 380 264 hct 100 V=
a 0 up 33 0 380 264 hct 100 LVL=
w 596
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 340 115 250 115 738
a 0 up 33 0 245 114 hct 100 LVL=
s 410 285 390 285 256
s 390 185 390 285 460
a 0 up 33 0 392 235 hlt 100 V=
s 340 185 390 185 458
s 340 115 340 185 455
s 370 115 340 115 451
w 204
a 0 sr 0 0 0 0 hln 100 LABEL=Ground
a 0 up 0:33 0 0 0 hln 100 V=
s 470 445 470 385 205
a 0 up 33 0 472 415 hlt 100 V=
a 0 sr 3 0 472 415 hln 100 LABEL=Ground
s 440 445 470 445 203
w 1214
a 0 up 0:33 0 0 0 hln 100 LVL=
s 380 325 380 245 246
s 410 325 380 325 1134
s 380 245 695 245 1146
a 0 up 33 0 537 244 hct 100 LVL=
s 695 245 695 255 1084
s 695 255 715 255 1086
w 58
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 265 715 265 1147
a 0 up 33 0 606 264 hct 100 LVL=
w 40
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 355 715 355 1131
a 0 up 33 0 606 354 hct 100 LVL=
w 52
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 295 715 295 1096
a 0 up 33 0 606 294 hct 100 LVL=
w 54
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 285 715 285 53
a 0 up 33 0 606 284 hct 100 LVL=
w 50
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 305 715 305 49
a 0 up 33 0 606 304 hct 100 LVL=
w 48
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 315 715 315 47
a 0 up 33 0 606 314 hct 100 LVL=
w 46
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 325 715 325 45
a 0 up 33 0 606 324 hct 100 LVL=
w 44
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 335 715 335 43
a 0 up 33 0 606 334 hct 100 LVL=
w 42
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 345 715 345 41
a 0 up 33 0 606 344 hct 100 LVL=
w 56
a 0 up 0:33 0 0 0 hln 100 LVL=
s 500 275 715 275 55
a 0 up 33 0 606 274 hct 100 LVL=
w 1027
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 295 845 295 1102
a 0 up 33 0 825 294 hct 100 LVL=
w 1029
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 285 845 285 1101
a 0 up 33 0 825 284 hct 100 LVL=
w 1031
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 275 845 275 1100
a 0 up 33 0 825 274 hct 100 LVL=
w 1015
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 355 845 355 1014
a 0 up 33 0 825 354 hct 100 LVL=
w 1017
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 345 845 345 1016
a 0 up 33 0 825 344 hct 100 LVL=
w 1019
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 335 845 335 1018
a 0 up 33 0 825 334 hct 100 LVL=
w 1021
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 325 845 325 1020
a 0 up 33 0 825 324 hct 100 LVL=
w 1023
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 315 845 315 1022
a 0 up 33 0 825 314 hct 100 LVL=
w 1025
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 305 845 305 1024
a 0 up 33 0 825 304 hct 100 LVL=
w 531
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 355 1185 355 530
a 0 up 33 0 1125 354 hct 100 LVL=
w 533
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 345 1185 345 532
a 0 up 33 0 1125 344 hct 100 LVL=
w 535
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 335 1185 335 534
a 0 up 33 0 1125 334 hct 100 LVL=
w 537
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 325 1185 325 536
a 0 up 33 0 1125 324 hct 100 LVL=
w 539
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 315 1185 315 538
a 0 up 33 0 1125 314 hct 100 LVL=
w 541
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 305 1185 305 540
a 0 up 33 0 1125 304 hct 100 LVL=
w 543
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 295 1185 295 542
a 0 up 33 0 1125 294 hct 100 LVL=
w 545
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 285 1185 285 544
a 0 up 33 0 1125 284 hct 100 LVL=
w 473
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 355 975 355 472
a 0 up 33 0 955 354 hct 100 LVL=
w 475
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 345 975 345 474
a 0 up 33 0 955 344 hct 100 LVL=
w 477
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 335 975 335 476
a 0 up 33 0 955 334 hct 100 LVL=
w 479
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 325 975 325 478
a 0 up 33 0 955 324 hct 100 LVL=
w 481
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 315 975 315 480
a 0 up 33 0 955 314 hct 100 LVL=
w 483
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 305 975 305 482
a 0 up 33 0 955 304 hct 100 LVL=
w 485
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 295 975 295 484
a 0 up 33 0 955 294 hct 100 LVL=
w 487
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 285 975 285 486
a 0 up 33 0 955 284 hct 100 LVL=
w 489
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 275 975 275 488
a 0 up 33 0 955 274 hct 100 LVL=
w 1258
a 0 up 0:33 0 0 0 hln 100 LVL=
s 695 205 695 155 349
s 695 205 715 205 661
s 695 225 695 205 341
s 715 225 695 225 339
s 825 225 845 225 1197
s 845 205 825 205 358
s 825 205 825 155 1264
s 825 225 825 205 1196
s 695 155 695 145 1284
s 825 155 695 155 1263
s 975 225 960 225 985
s 960 225 960 205 1230
s 960 205 960 155 1278
s 960 205 975 205 782
s 960 155 825 155 944
w 1266
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 935 115 805 115 1215
s 420 115 450 115 761
a 0 up 33 0 535 114 hct 100 LVL=
s 450 215 450 115 383
s 715 215 450 215 1103
s 805 115 450 115 1272
a 0 up 33 0 627 114 hct 100 LVL=
a 0 up 33 0 627 114 hct 100 V=
s 805 115 805 215 376
s 935 215 935 115 1038
s 805 215 845 215 952
s 975 215 935 215 975
w 1292
s 805 265 845 265 1291
w 1294
a 0 up 0:33 0 0 0 hln 100 LVL=
s 805 255 845 255 1293
a 0 up 33 0 825 254 hct 100 LVL=
w 1298
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 265 975 265 1297
a 0 up 33 0 955 264 hct 100 LVL=
w 1300
a 0 up 0:33 0 0 0 hln 100 LVL=
s 935 255 975 255 1299
a 0 up 33 0 955 254 hct 100 LVL=
w 1176
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1140 245 1185 245 1177
a 0 up 33 0 1162 244 hct 100 LVL=
s 1140 215 1140 245 1175
w 651
a 0 up 0:33 0 0 0 hln 100 LVL=
a 0 up 0:33 0 0 0 hln 100 V=
s 1165 65 250 65 1139
a 0 up 33 0 632 64 hct 100 LVL=
a 0 up 33 0 707 64 hct 100 V=
s 1165 65 1165 235 1169
s 1165 235 1185 235 1303
w 1314
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 275 1185 275 1313
a 0 up 33 0 1125 274 hct 100 LVL=
w 645
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 275 1280 275 644
a 0 up 33 0 1267 274 hct 100 LVL=
w 643
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 285 1280 285 642
a 0 up 33 0 1267 284 hct 100 LVL=
w 641
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 295 1280 295 640
a 0 up 33 0 1267 294 hct 100 LVL=
w 639
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 305 1280 305 638
a 0 up 33 0 1267 304 hct 100 LVL=
w 637
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 315 1280 315 636
a 0 up 33 0 1267 314 hct 100 LVL=
w 635
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 325 1280 325 634
a 0 up 33 0 1267 324 hct 100 LVL=
w 633
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 335 1280 335 632
a 0 up 33 0 1267 334 hct 100 LVL=
w 631
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 345 1280 345 1184
a 0 up 33 0 1267 344 hct 100 LVL=
w 629
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 355 1280 355 628
a 0 up 33 0 1267 354 hct 100 LVL=
w 649
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 255 1280 255 730
a 0 up 33 0 1267 254 hct 100 LVL=
w 647
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 265 1280 265 646
a 0 up 33 0 1267 264 hct 100 LVL=
w 1183
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1255 245 1280 245 1182
a 0 up 33 0 1267 244 hct 100 LVL=
w 1125
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 255 1185 255 1213
a 0 up 33 0 1125 254 hct 100 LVL=
w 1316
a 0 up 0:33 0 0 0 hln 100 LVL=
s 1065 265 1070 265 1315
a 0 up 33 0 1125 264 hct 100 LVL=
s 1070 215 1090 215 586
a 0 up 33 0 1150 214 hct 100 LVL=
s 1070 265 1185 265 1367
a 0 up 33 0 1127 264 hct 100 LVL=
s 1070 215 1070 265 1365
w 1370
s 1290 50 1350 50 1369
a 0 up 33 0 1320 49 hct 100 V=
w 1372
s 1290 70 1350 70 1371
a 0 up 33 0 1320 69 hct 100 V=
w 1374
s 1290 90 1350 90 1373
a 0 up 33 0 1320 89 hct 100 V=
@junction
j 340 115
+ w 596
+ w 596
j 150 115
+ s 567
+ w 452
j 150 65
+ s 605
+ w 604
j 390 345
+ p 159 3
+ w 198
j 350 355
+ p 159 2
+ w 179
j 350 455
+ w 179
+ w 179
j 150 555
+ s 572
+ w 179
j 240 555
+ w 179
+ w 179
j 310 485
+ p 140 2
+ w 179
j 310 555
+ w 179
+ w 179
j 170 455
+ p 139 1
+ w 146
j 150 455
+ s 571
+ w 146
j 150 405
+ s 570
+ w 180
j 350 345
+ p 159 1
+ w 180
j 240 405
+ w 180
+ w 180
j 310 445
+ p 140 1
+ w 180
j 310 405
+ w 180
+ w 180
j 250 285
+ p 209 2
+ w 228
j 250 305
+ w 228
+ w 228
j 200 295
+ p 208 2
+ w 228
j 150 305
+ s 569
+ w 228
j 200 305
+ w 228
+ w 228
j 310 275
+ p 207 2
+ w 228
j 250 255
+ p 209 1
+ w 214
j 250 245
+ w 214
+ w 214
j 200 255
+ p 208 1
+ w 214
j 150 245
+ s 568
+ w 214
j 200 245
+ w 214
+ w 214
j 310 265
+ p 207 1
+ w 214
j 360 295
+ s 239
+ w 241
j 350 275
+ p 207 4
+ w 241
j 350 265
+ p 207 3
+ w 212
j 440 465
+ s 196
+ w 202
j 390 355
+ p 159 4
+ w 200
j 390 365
+ s 195
+ w 200
j 210 455
+ p 139 2
+ w 142
j 240 515
+ p 138 -
+ w 179
j 240 475
+ p 138 +
+ w 142
j 370 115
+ p 111 I0
+ w 596
j 400 455
+ p 160 2
+ w 179
j 400 445
+ p 160 1
+ w 180
j 440 455
+ p 160 4
+ w 202
j 420 115
+ p 111 O
+ w 1266
j 450 115
+ w 1266
+ w 1266
j 695 205
+ w 1258
+ w 1258
j 695 145
+ s 367
+ w 1258
j 440 445
+ p 160 3
+ w 204
j 805 115
+ w 1266
+ w 1266
j 960 205
+ w 1258
+ w 1258
j 825 205
+ w 1258
+ w 1258
j 695 155
+ w 1258
+ w 1258
j 825 155
+ w 1258
+ w 1258
j 1140 215
+ p 588 O
+ w 1176
j 1280 275
+ s 585
+ w 645
j 1280 285
+ s 583
+ w 643
j 1280 295
+ s 582
+ w 641
j 1280 305
+ s 581
+ w 639
j 1280 315
+ s 580
+ w 637
j 1280 325
+ s 579
+ w 635
j 1280 335
+ s 578
+ w 633
j 1280 345
+ s 577
+ w 631
j 1280 355
+ s 576
+ w 629
j 1280 255
+ s 573
+ w 649
j 1280 265
+ s 584
+ w 647
j 1280 245
+ s 608
+ w 1183
j 1090 215
+ p 588 I0
+ w 1316
j 1070 265
+ w 1316
+ w 1316
j 155 115
+ p 689 SIGNAL
+ w 452
j 200 115
+ p 867 I0
+ w 452
j 250 115
+ p 867 O
+ w 596
j 200 65
+ p 866 I0
+ w 604
j 250 65
+ p 866 O
+ w 651
j 410 345
+ p 1252 REF
+ w 198
j 410 265
+ p 1252 IN
+ w 212
j 410 285
+ p 1252 CNVRT
+ w 596
j 470 385
+ p 1252 GND
+ w 204
j 410 325
+ p 1252 OVR
+ w 1214
j 500 265
+ p 1252 DB9
+ w 58
j 500 355
+ p 1252 DB0
+ w 40
j 500 295
+ p 1252 DB6
+ w 52
j 500 285
+ p 1252 DB7
+ w 54
j 500 305
+ p 1252 DB5
+ w 50
j 500 315
+ p 1252 DB4
+ w 48
j 500 325
+ p 1252 DB3
+ w 46
j 500 335
+ p 1252 DB2
+ w 44
j 500 345
+ p 1252 DB1
+ w 42
j 500 275
+ p 1252 DB8
+ w 56
j 845 295
+ p 1286 W6
+ w 1027
j 845 285
+ p 1286 W7
+ w 1029
j 845 275
+ p 1286 W8
+ w 1031
j 845 355
+ p 1286 W0
+ w 1015
j 845 345
+ p 1286 W1
+ w 1017
j 845 335
+ p 1286 W2
+ w 1019
j 845 325
+ p 1286 W3
+ w 1021
j 845 315
+ p 1286 W4
+ w 1023
j 845 305
+ p 1286 W5
+ w 1025
j 935 355
+ p 1286 R0
+ w 473
j 935 345
+ p 1286 R1
+ w 475
j 935 335
+ p 1286 R2
+ w 477
j 935 325
+ p 1286 R3
+ w 479
j 935 315
+ p 1286 R4
+ w 481
j 935 305
+ p 1286 R5
+ w 483
j 935 295
+ p 1286 R6
+ w 485
j 935 285
+ p 1286 R7
+ w 487
j 935 275
+ p 1286 R8
+ w 489
j 845 205
+ p 1286 READ
+ w 1258
j 845 225
+ p 1286 ADDRS
+ w 1258
j 845 215
+ p 1286 WRITE
+ w 1266
j 845 265
+ p 1286 W9
+ w 1292
j 845 255
+ p 1286 W10
+ w 1294
j 935 265
+ p 1286 R9
+ w 1298
j 935 255
+ p 1286 R10
+ w 1300
j 1065 355
+ p 1287 R0
+ w 531
j 1065 345
+ p 1287 R1
+ w 533
j 1065 335
+ p 1287 R2
+ w 535
j 1065 325
+ p 1287 R3
+ w 537
j 1065 315
+ p 1287 R4
+ w 539
j 1065 305
+ p 1287 R5
+ w 541
j 1065 295
+ p 1287 R6
+ w 543
j 1065 285
+ p 1287 R7
+ w 545
j 975 355
+ p 1287 W0
+ w 473
j 975 345
+ p 1287 W1
+ w 475
j 975 335
+ p 1287 W2
+ w 477
j 975 325
+ p 1287 W3
+ w 479
j 975 315
+ p 1287 W4
+ w 481
j 975 305
+ p 1287 W5
+ w 483
j 975 295
+ p 1287 W6
+ w 485
j 975 285
+ p 1287 W7
+ w 487
j 975 275
+ p 1287 W8
+ w 489
j 975 205
+ p 1287 READ
+ w 1258
j 975 225
+ p 1287 ADDRS
+ w 1258
j 975 215
+ p 1287 WRITE
+ w 1266
j 975 265
+ p 1287 W9
+ w 1298
j 975 255
+ p 1287 W10
+ w 1300
j 1065 275
+ p 1287 R8
+ w 1314
j 1065 255
+ p 1287 R10
+ w 1125
j 1065 265
+ p 1287 R9
+ w 1316
j 1185 355
+ p 1248 I11
+ w 531
j 1185 345
+ p 1248 I10
+ w 533
j 1185 335
+ p 1248 I9
+ w 535
j 1185 325
+ p 1248 I8
+ w 537
j 1185 315
+ p 1248 I7
+ w 539
j 1185 305
+ p 1248 I6
+ w 541
j 1185 295
+ p 1248 I5
+ w 543
j 1185 285
+ p 1248 I4
+ w 545
j 1185 245
+ p 1248 I0
+ w 1176
j 1185 235
+ p 1248 OE
+ w 651
j 1185 275
+ p 1248 I3
+ w 1314
j 1255 275
+ p 1248 O3
+ w 645
j 1255 285
+ p 1248 O4
+ w 643
j 1255 295
+ p 1248 O5
+ w 641
j 1255 305
+ p 1248 O6
+ w 639
j 1255 315
+ p 1248 O7
+ w 637
j 1255 325
+ p 1248 O8
+ w 635
j 1255 335
+ p 1248 O9
+ w 633
j 1255 345
+ p 1248 O10
+ w 631
j 1255 355
+ p 1248 O11
+ w 629
j 1255 255
+ p 1248 O1
+ w 649
j 1255 265
+ p 1248 O2
+ w 647
j 1255 245
+ p 1248 O0
+ w 1183
j 1185 255
+ p 1248 I1
+ w 1125
j 1185 265
+ p 1248 I2
+ w 1316
j 715 255
+ p 1251 W10
+ w 1214
j 715 265
+ p 1251 W9
+ w 58
j 715 355
+ p 1251 W0
+ w 40
j 715 295
+ p 1251 W6
+ w 52
j 715 285
+ p 1251 W7
+ w 54
j 715 305
+ p 1251 W5
+ w 50
j 715 315
+ p 1251 W4
+ w 48
j 715 325
+ p 1251 W3
+ w 46
j 715 335
+ p 1251 W2
+ w 44
j 715 345
+ p 1251 W1
+ w 42
j 715 275
+ p 1251 W8
+ w 56
j 805 295
+ p 1251 R6
+ w 1027
j 805 285
+ p 1251 R7
+ w 1029
j 805 275
+ p 1251 R8
+ w 1031
j 805 355
+ p 1251 R0
+ w 1015
j 805 345
+ p 1251 R1
+ w 1017
j 805 335
+ p 1251 R2
+ w 1019
j 805 325
+ p 1251 R3
+ w 1021
j 805 315
+ p 1251 R4
+ w 1023
j 805 305
+ p 1251 R5
+ w 1025
j 715 205
+ p 1251 READ
+ w 1258
j 715 225
+ p 1251 ADDRS
+ w 1258
j 715 215
+ p 1251 WRITE
+ w 1266
j 805 265
+ p 1251 R9
+ w 1292
j 805 255
+ p 1251 R10
+ w 1294
j 1290 50
+ s 1375
+ w 1370
j 1290 70
+ s 1376
+ w 1372
j 1290 90
+ s 1377
+ w 1374
j 1350 50
+ s 1378
+ w 1370
j 1350 70
+ s 1379
+ w 1372
j 1350 90
+ s 1380
+ w 1374
@attributes
a 0 s 0:13 0 0 0 hln 100 PAGETITLE=
a 0 s 0:13 0 0 0 hln 100 PAGENO=1
a 0 s 0:13 0 0 0 hln 100 PAGESIZE=B
a 0 s 0:13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 691 t 5 120 587 345 610 0 22
PARAMETER DEFINITIONS:
t 830 t 5 410 215 440 231 0 3
ADC
v 831 v 0 410 215
410 230
435 230
435 215
410 215
;
v 832 v 0 405 210
405 235
440 235
440 210
405 210
;
t 833 t 5 35 270 118 286 0 18
Differential Input
v 834 v 0 35 270
35 285
115 285
115 270
35 270
;
v 835 v 0 30 265
30 290
120 290
120 265
30 265
;
t 836 t 5 30 485 123 501 0 17
Reference Voltage
v 837 v 0 30 485
30 500
120 500
120 485
30 485
;
v 838 v 0 25 480
25 505
125 505
125 480
25 480
;
t 842 t 5 35 179 130 195 0 18
Contraint Checking
v 845 v 0 35 180
35 195
125 195
125 180
35 180
;
v 847 v 0 30 175
30 200
130 200
130 175
30 175
;
t 709 t 5 1010 589 1054 607 0 6
NOTES:
t 692 t 5 135 605 545 930 0 715
Rin - Differential input resistance
Cin - Differential input capacitance
R_ref_out - Internal reference resistance
R_ref_in - Input reference input resistance
gain_ref - To determine the input upper voltage expected
gain_ref_gnd - To determine the input lower voltage expected
TPADxxx - RAM propagation delay for Pipeline Delay for each of 3 stages
TPZxTY - Data access time
TPxZTY - Ouput float delay
MAXFREQ - Maximum frequency constraint
MINFREQ - Minimum frequency constraint
WIDTH_MIN_LO - Minimum clock pulse width low constraint
WIDTH_MIN_HIGH - Minimum clock pulse width high constraint
IO_MODEL - Digital input/output model to be used (see note)
Cdin - Digital input capacitance (in IO MODEL)
t 826 t 5 1190 166 1265 150 0 13
Output Buffer
v 828 v 0 1190 150
1190 165
1265 165
1265 150
1190 150
;
t 742 t 5 850 78 928 98 0 14
Pipeline Delay
v 824 v 0 850 80
850 95
920 95
920 80
850 80
;
v 825 v 0 845 75
845 100
925 100
925 75
845 75
;
v 829 v 0 1185 145
1185 170
1270 170
1270 145
1185 145
;
t 1165 t 5 530 594 1015 880 0 547
PIN DESCRIPTIONS (based on AD872):
MSB - Most Significant Bit
BIT2-BIT9 Data Bits 2 through 9
BIT10 (LSB) - Least Significant Bit
CLK - Clock Input. Conversions will be initiated on rising edge.
OTR - Out of Range is Active HIGH on leading edge of code 0 or the trailing edge of code 4096.
OEN - Output Enable
Vina - (+) Analog Input Signal
Vinb - (-) Analog Input Signal
REF_IN - Reference Input +2.5V input gives +/- 1V full-scale range
REF_OUT - +2.5V Reference Output. Tie to REF_IN for normal operation.
REF_GND - Reference Ground.
t 708 t 5 1475 605 1020 725 0 296
1. Digital power is +5V. See the PSpice A/D User's Guide  for information on changing the digital power supplies for 3.3V power.
2. The input/output model can be changed through the parameter IO_MODEL. Recommended models are IO_HCT for CMOS and IO_ALS for TTL. Custom models may also be defined.
