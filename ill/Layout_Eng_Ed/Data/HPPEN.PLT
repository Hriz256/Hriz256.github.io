!Plotter definition file for Hewlett-Packard 7580 Pen Plotter

Format:HP7580           ! Plotter definition file for Hewlett-Packard
Units:Microns           ! All units are in 1/1000th meter

XSize:31420             ! A=5580, B=14200, C=19280, D=31420 Size of plotter bed
YSize:20120             ! A=9000, B=9000,  C=15060, D=20120
StepSize:25             ! Size of each pixel (25 microns)
PenSize:7               ! Width of ink from pen in mills
FillStyle:4             ! Plotting accuracy (1=Fast, 2&3=Med, 4&5=True)

Name:"COM2"             ! Default serial port or default filename
AutoFeed:NO             ! YES plotter can automatically feed paper
Handshake:2             ! 1: Hardware handshake, 2: Xon-Xoff handshake
BufferSize:1024         ! Maximum Buffer size in the plotter

scale:1/1               !Scale factor
autoshift:YES           !Default shift method (recommended)
xshift:0 yshift:0       !Explicit shift if autoshift is NO
xmirror:NO ymirror:NO   !Mirrors, X and Y
rotate:0                !Number of counter-clockwise rotations (0,1,2,3)
