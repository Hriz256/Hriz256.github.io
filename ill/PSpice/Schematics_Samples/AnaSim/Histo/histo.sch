*version 9.2 479710926
lib "histo.slb" 112836748
u 39
U? 5
V? 2
? 2
@libraries
histo  [.slb]
@analysis
.AC 1 3 0
+0 50
+1 100
+2 1Meg
.MC 1 2 1 1 1 2 0 1 1 0
+0 15
+1 v(out)
.PROBE 0 1118480 -1 1 0 2
.LIB onestage.lib
@targets
t 1;1:"onestage";1;1: a 0 s 0 0 0 0 hln 100 PKGREF=U1
t 1;1:"onestage";1;1: a 0 s 0 0 0 0 hln 100 GATE=A
t 1;1:"onestage";1;1: a 0 s 0 0 0 0 hln 100 PKGTYPE=DIP8
t 1;1:"onestage";1;16: a 0 s 0 0 0 0 hln 100 PKGREF=R1
t 1;1:"onestage";1;16: a 0 s 0 0 0 0 hln 100 PKGTYPE=RC05
t 1;1:"onestage";1;17: a 0 s 0 0 0 0 hln 100 PKGREF=R2
t 1;1:"onestage";1;17: a 0 s 0 0 0 0 hln 100 PKGTYPE=RC05
t 1;1:"onestage";1;18: a 0 s 0 0 0 0 hln 100 PKGREF=R3
t 1;1:"onestage";1;18: a 0 s 0 0 0 0 hln 100 PKGTYPE=RC05
t 1;1:"onestage";1;22: a 0 s 0 0 0 0 hln 100 PKGREF=C1
t 1;1:"onestage";1;22: a 0 s 0 0 0 0 hln 100 PKGTYPE=CK05
t 1;1:"onestage";1;23: a 0 s 0 0 0 0 hln 100 PKGREF=C2
t 1;1:"onestage";1;23: a 0 s 0 0 0 0 hln 100 PKGTYPE=CK05
t 1;2:"onestage";1;1: a 0 s 0 0 0 0 hln 100 PKGREF=U2
t 1;2:"onestage";1;1: a 0 s 0 0 0 0 hln 100 GATE=A
t 1;2:"onestage";1;1: a 0 s 0 0 0 0 hln 100 PKGTYPE=DIP8
t 1;2:"onestage";1;16: a 0 s 0 0 0 0 hln 100 PKGREF=R4
t 1;2:"onestage";1;16: a 0 s 0 0 0 0 hln 100 PKGTYPE=RC05
t 1;2:"onestage";1;17: a 0 s 0 0 0 0 hln 100 PKGREF=R5
t 1;2:"onestage";1;17: a 0 s 0 0 0 0 hln 100 PKGTYPE=RC05
t 1;2:"onestage";1;18: a 0 s 0 0 0 0 hln 100 PKGREF=R6
t 1;2:"onestage";1;18: a 0 s 0 0 0 0 hln 100 PKGTYPE=RC05
t 1;2:"onestage";1;22: a 0 s 0 0 0 0 hln 100 PKGREF=C3
t 1;2:"onestage";1;22: a 0 s 0 0 0 0 hln 100 PKGTYPE=CK05
t 1;2:"onestage";1;23: a 0 s 0 0 0 0 hln 100 PKGREF=C4
t 1;2:"onestage";1;23: a 0 s 0 0 0 0 hln 100 PKGTYPE=CK05
@attributes
a NetlistFormat=Flat
a UseTemplates=,template
a MakeDotParamGlobal=FALSE
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
a 0 u 13 0 0 0 hln 100 POLARIS=PCB
@setup
unconnectedPins 0
connectViaLabel 0
connectViaLocalLabels 0
NoStim4ExtIFPortsWarnings 1
AutoGenStim4ExtIFPorts 1
@index
pageloc 1 0 1742 
@status
n 0 100:04:08:15:25:23;957824723 e 
s 2832 100:04:08:15:25:29;957824729 e 
p 0 95:02:29:07:55:44;796492544 e 
i PCBOARDS 95:02:29:07:55:47;796492547 e 0 
c 100:04:08:15:25:21;957824721
*page 1 0 600 450 iX
@ports
port 10 agnd 60 160 h
port 38 OFFPAGE 250 120 u
a 1 xr 3 0 23 8 hcn 100 LABEL=OUT
@parts
part 1 OneStage 90 120 h
a 0 u 13 13 10 60 hlb 100 Rin=93.1
a 0 u 13 13 10 70 hlb 100 Rfeedback=18.2k
a 0 sp 0 0 32 48 hln 100 PART=OneStage
a 0 x 0 0 0 0 hln 100 PKGREF=U1
a 0 xp 9 0 38 -2 hln 100 REFDES=U1
part 2 OneStage 180 120 h
a 0 u 13 13 10 60 hlb 100 Rin=110
a 0 u 13 13 10 70 hlb 100 Rfeedback=22.1k
a 0 sp 0 0 32 48 hln 100 PART=OneStage
a 0 x 0 0 0 0 hln 100 PKGREF=U2
a 0 xp 9 0 38 -2 hln 100 REFDES=U2
part 9 VSRC 60 120 h
a 1 u 0 0 0 0 hcn 100 AC=1
a 0 a 0 0 0 0 hln 100 PKGREF=V1
a 1 ap 9 0 20 10 hcn 100 REFDES=V1
part 26 readme 310 70 h
a 0 u 3 0 22 34 hln 100 filename=histo.rdm
a 0 sp 0 0 17 20 hln 200 PART=readme
a 0 a 0 0 0 0 hln 100 PKGREF=
part 37 titleblk 600 450 h
a 1 s 13 0 350 10 hcn 100 PAGESIZE=1
a 1 s 13 0 180 60 hcn 100 PAGETITLE=
a 1 s 13 0 340 95 hrn 100 PAGECOUNT=1
a 1 s 13 0 300 95 hrn 100 PAGENO=1
part 16 nodeMarker 240 120 h
a 0 s 0 0 0 0 hln 100 PROBEVAR=
a 0 s 0 0 0 10 hlb 100 MARKERTYPE=NODE
a 0 a 0 0 4 22 hlb 100 LABEL=1
@conn
w 8
s 180 120 150 120 7
w 12
s 60 120 90 120 11
w 15
s 240 120 250 120 14
@junction
j 150 120
+ p 1 OUT
+ w 8
j 180 120
+ p 2 IN
+ w 8
j 60 160
+ s 10
+ p 9 -
j 90 120
+ p 1 IN
+ w 12
j 60 120
+ p 9 +
+ w 12
j 240 120
+ p 2 OUT
+ w 15
j 240 120
+ p 16 pin1
+ p 2 OUT
j 240 120
+ p 16 pin1
+ w 15
j 250 120
+ s 38
+ w 15
@attributes
a 0 s 0 0 0 0 hln 100 PAGETITLE=
a 0 s 0 0 0 0 hln 100 PAGENO=1
a 0 s 0 0 0 0 hln 100 PAGESIZE=1
a 0 s 0 0 0 0 hln 100 PAGECOUNT=1
@graphics
t 0 t 5 40 41 243 65 0 26 d_info:,,,,,,,,,,,,,16, 
4th Order Chebyshev Filter
t 0 t 5 110 222 207 236 0 22
10KHz Center Frequency
t 0 t 5 120 232 193 246 0 16
1.5KHz Bandwidth
