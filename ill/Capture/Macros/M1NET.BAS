'*******************************************************************
' M1NET.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Xilinx M1 net properties to nets
' in the Express schematic editor.  Select the wire/bus and then
' run the macro to add the properties for Xilinx XACTstep vM1.xx.
'
' Reference: Xilinx, M1 Constraints Guide, April 1997 (Version M1.2)
'
'*******************************************************************
SUB XilinxM1NetProps
	'MACROMENU M1: Net Flags
	'MACROKEY Ctrl+F4
	'MACRODESCRIPTION Set Net Properties for Xilinx XACTstep vM1 

Begin Dialog XilinxM1NetPropsDlg 16, 10, 153, 106, "Set Xilinx M1 Net Flag Attributes"

	Text 8, 8, 56, 8, "&F Net Flag"
	TextBox 70, 8, 72, 12, .F

	Text 8, 24, 56, 8, "&H Net Flag"
	TextBox 70, 24, 72, 12, .H

	Text 8, 40, 56, 8, "&P Net Flag"
	TextBox 70, 40, 72, 12, .P

	Text 8, 56, 56, 8, "&S Net Flag"
	TextBox 70, 56, 72, 12, .S

	Text 8, 70, 56, 8, "&X Net Flag"
	TextBox 70, 70, 72, 12, .X

	OKButton 8, 86, 40, 14
	CancelButton 70, 86, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim XilinxNetDlg As XilinxM1NetPropsDlg
Status = Dialog(XilinxNetDlg)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(XilinxNetDlg.F) > 0 THEN
		SetProperty "F", XilinxNetDlg.F
		DisplayProperty "F", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(XilinxNetDlg.H) > 0 THEN
		SetProperty "H", XilinxNetDlg.H
		DisplayProperty "H", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(XilinxNetDlg.P) > 0 THEN
		SetProperty "P", XilinxNetDlg.P
		DisplayProperty "P", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(XilinxNetDlg.S) > 0 THEN
		SetProperty "S", XilinxNetDlg.S
		DisplayProperty "S", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(XilinxNetDlg.X) > 0 THEN
		SetProperty "X", XilinxNetDlg.X
		DisplayProperty "X", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
