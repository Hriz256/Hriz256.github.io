'*******************************************************************
' M1PART2.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Xilinx M1 part/symbol properties to
' parts in the Express schematic editor.  Select the part and then
' run the macro to add the properties for Xilinx XACTstep vM1.
'
' Reference: Xilinx, M1 Constraints Guide, April 1997 (Version M1.2)
'
'*******************************************************************
SUB XilinxM1PartProps2
	'MACROMENU M1: MAXDELAY-TPTHRU 
	'MACROKEY Ctrl+F2
	'MACRODESCRIPTION Set Xilinx M1 Part Properties (MAXDELAY through TPTHRU)

Begin Dialog XilinxM1PartProps2Dlg 16, 10, 306, 204, "Set Xilinx M1 Constraints"

	Text 8, 8, 56, 8, "&MAXDELAY"
	TextBox 70, 8, 72, 12, .MAXDELAY

	Text 8, 24, 56, 8, "MAXSKEW"
	TextBox 70, 24, 72, 12, .MAXSKEW

	Text 8, 40, 56, 8, "MEDDELAY"
	TextBox 70, 40, 72, 12, .MEDDELAY

	Text 8, 56, 56, 8, "MINIM"
	TextBox 70, 56, 72, 12, .MINIM

	Text 8, 72, 56, 8, "&NODELAY"
	TextBox 70, 72, 72, 12, .NODELAY

	Text 8, 88, 56, 8, "NOREDUCE"
	TextBox 70, 88, 72, 12, .NOREDUCE

	Text 8, 104, 56, 8, "OPT"
	TextBox 70, 104, 72, 12, .OPT

	Text 8, 120, 56, 8, "OPTIMIZE"
	TextBox 70, 120, 72, 12, .OPTIMIZE

	Text 8, 136, 56, 8, "OPT_EFFORT"
	TextBox 70, 136, 72, 12, .OPT_EFFORT

	Text 8, 152, 56, 8, "&PART"
	TextBox 70, 152, 72, 12, .PART

	Text 8, 168, 56, 8, "PERIOD"
	TextBox 70, 168, 72, 12, .PERIOD

' 2nd Column -----------------------------------------

	Text 162, 8, 56, 8, "PROHIBIT"
	TextBox 224, 8, 72, 12, .PROHIBIT

	Text 162, 24, 56, 8, "PWR_MODE"
	TextBox 224, 24, 72, 12, .PWR_MODE

	Text 162, 40, 56, 8, "&REG"
	TextBox 224, 40, 72, 12, .REG

	Text 162, 56, 56, 8, "RLOC"
	TextBox 224, 56, 72, 12, .RLOC

	Text 162, 72, 56, 8, "RLOC_ORIGIN"
	TextBox 224, 72, 72, 12, .RLOC_ORIGIN

	Text 162, 88, 56, 8, "RLOC_RANGE"
	TextBox 224, 88, 72, 12, .RLOC_RANGE

	Text 162, 104, 56, 8, "&SLOW"
	TextBox 224, 104, 72, 12, .SLOW

	Text 162, 120, 56, 8, "&TIG"
	TextBox 224, 120, 72, 12, .TIG

	Text 162, 136, 56, 8, "TNM"
	TextBox 224, 136, 72, 12, .TNM

	Text 162, 152, 56, 8, "TPSYNC"
	TextBox 224, 152, 72, 12, .TPSYNC

	Text 162, 168, 56, 8, "TPTHRU"
	TextBox 224, 168, 72, 12, .TPTHRU

	OKButton 102, 184, 40, 14
	CancelButton 162, 184, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim Xilinxdlg2 As XilinxM1PartProps2Dlg
Status = Dialog(Xilinxdlg2)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN

	IF Len(Xilinxdlg2.MAXDELAY) > 0 THEN
		SetProperty "MAXDELAY", Xilinxdlg2.MAXDELAY
		DisplayProperty "MAXDELAY", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.MAXSKEW) > 0 THEN
		SetProperty "MAXSKEW", Xilinxdlg2.MAXSKEW
		DisplayProperty "MAXSKEW", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.MEDDELAY) > 0 THEN
		SetProperty "MEDDELAY", Xilinxdlg2.MEDDELAY
		DisplayProperty "MEDDELAY", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.MINIM) > 0 THEN
		SetProperty "MINIM", Xilinxdlg2.MINIM
		DisplayProperty "MINIM", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.NODELAY) > 0 THEN
		SetProperty "NODELAY", Xilinxdlg2.NODELAY
		DisplayProperty "NODELAY", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.NOREDUCE) > 0 THEN
		SetProperty "NOREDUCE", Xilinxdlg2.NOREDUCE
		DisplayProperty "NOREDUCE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.OPT) > 0 THEN
		SetProperty "OPT", Xilinxdlg2.OPT
		DisplayProperty "OPT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.OPTIMIZE) > 0 THEN
		SetProperty "OPTIMIZE", Xilinxdlg2.OPTIMIZE
		DisplayProperty "OPTIMIZE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.OPT_EFFORT) > 0 THEN
		SetProperty "OPT_EFFORT", Xilinxdlg2.OPT_EFFORT
		DisplayProperty "OPT_EFFORT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.PART) > 0 THEN
		SetProperty "PART", Xilinxdlg2.PART
		DisplayProperty "PART", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.PERIOD) > 0 THEN
		SetProperty "PERIOD", Xilinxdlg2.PERIOD
		DisplayProperty "PERIOD", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.PROHIBIT) > 0 THEN
		SetProperty "PROHIBIT", Xilinxdlg2.PROHIBIT
		DisplayProperty "PROHIBIT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.PWR_MODE) > 0 THEN
		SetProperty "PWR_MODE", Xilinxdlg2.PWR_MODE
		DisplayProperty "PWR_MODE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.REG) > 0 THEN
		SetProperty "REG", Xilinxdlg2.REG
		DisplayProperty "REG", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.RLOC) > 0 THEN
		SetProperty "RLOC", Xilinxdlg2.RLOC
		DisplayProperty "RLOC", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.RLOC_ORIGIN) > 0 THEN
		SetProperty "RLOC_ORIGIN", Xilinxdlg2.RLOC_ORIGIN
		DisplayProperty "RLOC_ORIGIN", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.RLOC_RANGE) > 0 THEN
		SetProperty "RLOC_RANGE", Xilinxdlg2.RLOC_RANGE
		DisplayProperty "RLOC_RANGE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.TIG) > 0 THEN
		SetProperty "TIG", Xilinxdlg2.TIG
		DisplayProperty "TIG", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.TNM) > 0 THEN
		SetProperty "TNM", Xilinxdlg2.TNM
		DisplayProperty "TNM", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.TPSYNC) > 0 THEN
		SetProperty "TPSYNC", Xilinxdlg2.TPSYNC
		DisplayProperty "TPSYNC", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg2.TPTHRU) > 0 THEN
		SetProperty "TPTHRU", Xilinxdlg2.TPTHRU
		DisplayProperty "TPTHRU", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
