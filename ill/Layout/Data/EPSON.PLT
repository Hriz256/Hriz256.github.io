Format:EPSON2           ! Plotter definition file for Epson high density
Units:Mills		! All units are in 1/1000th inch

XSize:2000              ! Size of plotter bed, max = 2500, min = 100
                        ! Use XSize 2000 for 14 inch width paper
			! Use XSize 1150 for 8 1/2 inch width paper
YSize:16000             ! Size of plotter bed, max = 16000, min = 100
XStepSize:1000/144      ! Steps per inch = 144
YStepSize:1000/144   	! Steps per inch = 144
Name:"lpt1"             ! file to receive output

! Defaults
scale:1/1			!Default scale
autoshift:YES                   !Default shift method
overlap:250			!overlap in mills
xshift:0 yshift:0		!Default shifts
xmirror:NO ymirror:YES		!Default mirrors
rotate:0			!Default number of counter-clockwise rotations
