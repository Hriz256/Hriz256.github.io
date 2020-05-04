'*******************************************************************
' ORCANET.BAS Version 8/26/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Lucent net properties to nets
' in the Express schematic editor.  Select the wire/bus and then
' run the macro to add the properties for Lucent Foundry.
'
' Reference: Lucent ORCA Foundry User's Guide, Appendix B - PROPERTIES
'
'*******************************************************************
SUB LucentNetProps
	'MACROMENU ORCA: Net Properties
	'MACROKEY Ctrl+F2
	'MACRODESCRIPTION Set Lucent Net Properties

Begin Dialog LucentNetPropsDlg 16, 10, 306, 140, "Set Lucent Net Properties"

	Text 8, 8, 56, 8, "&BLOCKNET"
	TextBox 70, 8, 72, 12, .BLOCKNET

	Text 8, 24, 56, 8, "BUS"
	TextBox 70, 24, 72, 12, .BUS

	Text 8, 40, 56, 8, "CRITICAL"
	TextBox 70, 40, 72, 12, .CRITICAL

	Text 8, 56, 56, 8, "&ENDPOINT (NET)"
	TextBox 70, 56, 72, 12, .ENDPOINTNET

	Text 8, 72, 56, 8, "&FREQUENCY Clock"
	TextBox 70, 72, 72, 12, .FREQUENCY

	Text 8, 88, 56, 8, "&HALFLINE Tristate Bus  "
	TextBox 70, 88, 72, 12, .HALFLINE

	Text 8, 104, 56, 8, "&LOC  "
	TextBox 70, 104, 72, 12, .LOC

' 2nd Column -----------------------------------------

	Text 162, 8, 56, 8, "LONGLINE Tristate Bus  "
	TextBox 224, 8, 72, 12, .LONGLINE

	Text 162, 24, 56, 8, "&MAXDELAY  "
	TextBox 224, 24, 72, 12, .MAXDELAY

	Text 162, 40, 56, 8, "&NOCLIP  "
	TextBox 224, 40, 72, 12, .NOCLIP

	Text 162, 56, 56, 8, "NOMERGE  "
	TextBox 224, 56, 72, 12, .NOMERGE

	Text 162, 72, 56, 8, "NONCRITICAL  "
	TextBox 224, 72, 72, 12, .NONCRITICAL

	Text 162, 88, 56, 8, "&PRI  "
	TextBox 224, 88, 72, 12, .PRI

	Text 162, 104, 66, 8, "&STARTPOINT (NET)"
	TextBox 224, 104, 72, 12, .STARTPOINTNET

	OKButton 102, 120, 40, 14
	CancelButton 162, 120, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim LucentNetDlg As LucentNetPropsDlg
Status = Dialog(LucentNetDlg)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(LucentNetDlg.BLOCKNET) > 0 THEN
		SetProperty "BLOCKNET", LucentNetDlg.BLOCKNET
		DisplayProperty "BLOCKNET", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.BUS) > 0 THEN
		SetProperty "BUS", LucentNetDlg.BUS
		DisplayProperty "BUS", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.CRITICAL) > 0 THEN
		SetProperty "CRITICAL", LucentNetDlg.CRITICAL
		DisplayProperty "CRITICAL", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.ENDPOINTNET) > 0 THEN
		SetProperty "ENDPOINT", LucentNetDlg.ENDPOINTNET
		DisplayProperty "ENDPOINT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.FREQUENCY) > 0 THEN
		SetProperty "FREQUENCY", LucentNetDlg.FREQUENCY
		DisplayProperty "FREQUENCY", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.HALFLINE) > 0 THEN
		SetProperty "HALFLINE", LucentNetDlg.HALFLINE
		DisplayProperty "HALFLINE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.LOC) > 0 THEN
		SetProperty "LOC", LucentNetDlg.LOC
		DisplayProperty "LOC", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.LONGLINE) > 0 THEN
		SetProperty "LONGLINE", LucentNetDlg.LONGLINE
		DisplayProperty "LONGLINE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.MAXDELAY) > 0 THEN
		SetProperty "MAXDELAY", LucentNetDlg.MAXDELAY
		DisplayProperty "MAXDELAY", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.NOCLIP) > 0 THEN
		SetProperty "NOCLIP", LucentNetDlg.NOCLIP
		DisplayProperty "NOCLIP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.NOMERGE) > 0 THEN
		SetProperty "NOMERGE", LucentNetDlg.NOMERGE
		DisplayProperty "NOMERGE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.NONCRITICAL) > 0 THEN
		SetProperty "NONCRITICAL", LucentNetDlg.NONCRITICAL
		DisplayProperty "NONCRITICAL", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.PRI) > 0 THEN
		SetProperty "PRI", LucentNetDlg.PRI
		DisplayProperty "PRI", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LucentNetDlg.STARTPOINTNET) > 0 THEN
		SetProperty "STARTPOINT", LucentNetDlg.STARTPOINTNET
		DisplayProperty "STARTPOINT", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
