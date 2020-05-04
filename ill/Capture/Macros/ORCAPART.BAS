'*******************************************************************
' ORCAPART.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Lucent part/symbol properties to
' parts in the Express schematic editor.  Select the part and then
' run the macro to add the properties for Lucent Foundry.
'
' Reference: Lucent ORCA Foundry User's Guide, Appendix B - PROPERTIES
'
'*******************************************************************
SUB LucentPartProps1
	'MACROMENU ORCA: Part Properties
	'MACROKEY Ctrl+F1
	'MACRODESCRIPTION Set Lucent Part Properties

Begin Dialog LucentPartProps1Dlg 16, 10, 306, 156, "Set Part Properties for Lucent ORCA Foundry"

	Text 8, 8, 56, 8, "COMP"
	TextBox 70, 8, 72, 12, .COMP

	Text 8, 24, 56, 8, "&DELAYMODE"
	TextBox 70, 24, 72, 12, .DELAYMODE

	Text 8, 40, 56, 8, "DIN"
	TextBox 70, 40, 72, 12, .DIN

	Text 8, 56, 56, 8, "DOUT"
	TextBox 70, 56, 72, 12, .DOUT

	Text 8, 72, 56, 8, "&ENDPOINT"
	TextBox 70, 72, 72, 12, .ENDPOINT

	Text 8, 88, 56, 8, "&IBUFLEVEL"
	TextBox 70, 88, 72, 12, .IBUFLEVEL

	Text 8, 104, 56, 8, "INITSTATE"
	TextBox 70, 104, 72, 12, .INITSTATE

' 2nd Column -----------------------------------------

	Text 162, 8, 56, 8, "INITSTATE (SIM)"
	TextBox 224, 8, 72, 12, .INITSTATESIM

	Text 162, 24, 56, 8, "&LOAD"
	TextBox 224, 24, 72, 12, .LOAD

	Text 162, 40, 56, 8, "LOC"
	TextBox 224, 40, 72, 12, .LOC

	Text 162, 56, 56, 8, "LUT"
	TextBox 224, 56, 72, 12, .LUT

	Text 162, 72, 56, 8, "OBUFLEVEL"
	TextBox 224, 72, 72, 12, .OBUFLEVEL

	Text 162, 88, 56, 8, "&PFULOCK"
	TextBox 224, 88, 72, 12, .PFULOCK

	Text 162, 104, 56, 8, "&SLEW"
	TextBox 224, 104, 72, 12, .SLEW

	Text 162, 120, 56, 8, "STARTPOINT"
	TextBox 224, 120, 72, 12, .STARTPOINT

	OKButton 102, 136, 40, 14
	CancelButton 162, 136, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim Lucentdlg1 As LucentPartProps1Dlg
Status = Dialog(Lucentdlg1)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(Lucentdlg1.COMP) > 0 THEN
		SetProperty "COMP", Lucentdlg1.COMP
		DisplayProperty "COMP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.DELAYMODE) > 0 THEN
		SetProperty "DELAYMODE", Lucentdlg1.DELAYMODE
		DisplayProperty "DELAYMODE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.DIN) > 0 THEN
		SetProperty "DIN", Lucentdlg1.DIN
		DisplayProperty "DIN", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.DOUT) > 0 THEN
		SetProperty "DOUT", Lucentdlg1.DOUT
		DisplayProperty "DOUT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.ENDPOINT) > 0 THEN
		SetProperty "ENDPOINT", Lucentdlg1.ENDPOINT
		DisplayProperty "ENDPOINT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.IBUFLEVEL) > 0 THEN
		SetProperty "IBUFLEVEL", Lucentdlg1.IBUFLEVEL
		DisplayProperty "IBUFLEVEL", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.INITSTATE) > 0 THEN
		SetProperty "INITSTATE", Lucentdlg1.INITSTATE
		DisplayProperty "INITSTATE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.INITSTATESIM) > 0 THEN
		SetProperty "GENERIC=INITVAL", Lucentdlg1.INITSTATESIM
		DisplayProperty "GENERIC=INITVAL", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.LOAD) > 0 THEN
		SetProperty "LOAD", Lucentdlg1.LOAD
		DisplayProperty "LOAD", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.LOC) > 0 THEN
		SetProperty "LOC", Lucentdlg1.LOC
		DisplayProperty "LOC", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.LUT) > 0 THEN
		SetProperty "LUT", Lucentdlg1.LUT
		DisplayProperty "LUT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.OBUFLEVEL) > 0 THEN
		SetProperty "OBUFLEVEL", Lucentdlg1.OBUFLEVEL
		DisplayProperty "OBUFLEVEL", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.PFULOCK) > 0 THEN
		SetProperty "PFULOCK", Lucentdlg1.PFULOCK
		DisplayProperty "PFULOCK", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.SLEW) > 0 THEN
		SetProperty "SLEW", Lucentdlg1.SLEW
		DisplayProperty "SLEW", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Lucentdlg1.STARTPOINT) > 0 THEN
		SetProperty "STARTPOINT", Lucentdlg1.STARTPOINT
		DisplayProperty "STARTPOINT", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
