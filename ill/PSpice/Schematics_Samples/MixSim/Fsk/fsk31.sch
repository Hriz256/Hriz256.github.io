*version 9.1 2181476377
u 73
E? 4
R? 4
C? 2
@libraries
@analysis
@targets
@attributes
@translators
a 0 u 13 0 0 0 hln 100 PSPICE=DEFAULT
a 0 u 13 0 0 0 hln 100 PCBOARDS=PCB
a 0 u 13 0 0 0 hln 100 CADSTAR=PCB
a 0 u 13 0 0 0 hln 100 EDIF=PCB
a 0 u 13 0 0 0 hln 100 ORCAD=PCB
a 0 u 13 0 0 0 hln 100 PADS=PCB
a 0 u 13 0 0 0 hln 100 PCAD=PCB
a 0 u 13 0 0 0 hln 100 PROTEL=PCB
a 0 u 13 0 0 0 hln 100 TANGO=PCB
a 0 u 13 0 0 0 hln 100 SCICARDS=PCB
a 0 u 13 0 0 0 hln 100 POLARIS=PCB
a 0 u 13 0 0 0 hln 100 PRINT=DEFAULT
@setup
unconnectedPins 0
connectViaLabel 0
connectViaLocalLabels 0
NoStim4ExtIFPortsWarnings 1
AutoGenStim4ExtIFPorts 1
@index
pageloc 1 0 2035 
@status
c 99:07:05:09:03:30;933869010
*page 1 0 970 720 iA
@ports
port 1 interface 190 160 h
a 1 s 14 0 21 8 hcn 100 LABEL=in
port 35 agnd 250 220 h
port 2 interface 330 160 H
a 1 s 14 0 19 8 hcn 100 LABEL=out
@parts
part 69 r 270 160 h
a 0 u 13 0 15 25 hln 100 VALUE=10
a 0 sp 0 0 0 10 hlb 100 PART=r
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 x 0:13 0 0 0 hln 100 PKGREF=R1
a 0 xp 9 0 15 0 hln 100 REFDES=R1
part 72 r 320 210 v
a 0 sp 0 0 0 10 hlb 100 PART=r
a 0 s 0:13 0 0 0 hln 100 PKGTYPE=RC05
a 0 s 0:13 0 0 0 hln 100 GATE=
a 0 x 0:13 0 0 0 hln 100 PKGREF=R2
a 0 xp 9 0 15 0 hln 100 REFDES=R2
a 0 u 13 0 15 25 hln 100 VALUE=1K
part 71 etable 220 160 h
a 0 sp 11 0 10 34 hln 100 PART=etable
a 0 x 0:13 0 0 0 hln 100 PKGREF=E1
a 1 xp 9 0 10 2 hln 100 REFDES=E1
a 0 u 0:13 0 8 42 hln 100 EXPR=V(%IN+,%IN-)
a 0 u 13 0 -16 102 hln 100 TABLE=(-1uV,0.2V) (1uV,3.5V)
part 49 readme 270 90 h
a 0 u 3 0 22 34 hln 100 filename=fsksub.rdm
a 0 sp 0 0 17 20 hln 200 PART=readme
a 0 a 0 0 0 0 hln 100 PKGREF=
@conn
w 16
a 0 up 0:33 0 0 0 hln 100 V=
s 190 160 220 160 15
a 0 up 33 0 205 159 hct 100 V=
w 20
a 0 up 0:33 0 0 0 hln 100 V=
s 320 160 310 160 57
a 0 up 33 0 280 159 hct 100 V=
s 320 160 320 170 39
s 320 160 330 160 43
w 24
a 0 up 0:33 0 0 0 hln 100 V=
s 190 220 220 220 23
s 220 220 250 220 29
s 220 170 220 220 25
s 270 170 270 220 30
a 0 up 33 0 272 195 hlt 100 V=
s 250 220 270 220 36
s 320 220 270 220 56
s 320 210 320 220 44
s 320 220 350 220 54
@junction
j 190 160
+ s 1
+ w 16
j 220 220
+ w 24
+ w 24
j 270 220
+ w 24
+ w 24
j 250 220
+ s 35
+ w 24
j 320 220
+ w 24
+ w 24
j 330 160
+ s 2
+ w 20
j 320 160
+ w 20
+ w 20
j 310 160
+ p 69 2
+ w 20
j 270 160
+ p 71 OUT+
+ p 69 1
j 270 170
+ p 71 OUT-
+ w 24
j 220 170
+ p 71 IN-
+ w 24
j 220 160
+ p 71 IN+
+ w 16
j 320 170
+ p 72 2
+ w 20
j 320 210
+ p 72 1
+ w 24
@attributes
a 0 s 13 0 0 0 hln 100 PAGETITLE=
a 0 s 13 0 0 0 hln 100 PAGENO=1
a 0 s 13 0 0 0 hln 100 PAGESIZE=A
a 0 s 13 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 0 t 5 180 48 298 76 0 10 d_info:,,,,,,,,,,,,,20, 
Comparator
