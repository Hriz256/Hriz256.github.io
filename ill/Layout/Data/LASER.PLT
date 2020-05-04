Format:LASERJET         ! Plotter definition file for Epson high density
Units:Mills		! All units are in 1/1000th inch

XSize:2000              ! Size of plotter bed, max = 2500, min = 100
YSize:3000              ! Size of plotter bed, max = 16000, min = 100
XStepSize:1000/300     	! Steps per inch = 300
YStepSize:1000/300     	! Steps per inch = 300
Name:"lpt1"             ! Port to which printer is attached

! Defaults
scale:1/1		!Default scale
autoshift:YES           !Default shift method
overlap:250		!overlap in mills
xshift:0 yshift:0	!Default shifts
xmirror:NO ymirror:YES	!Default mirrors
rotate:0		!Default number of counter-clockwise rotations
