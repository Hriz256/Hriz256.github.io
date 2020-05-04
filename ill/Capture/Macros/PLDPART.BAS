'*******************************************************************
' PLDPART.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign OrCAD part/symbol properties to
' parts in the Express schematic editor.  Select the part and then
' run the macro to add the properties for OrCAD Express PAL/GAL/PROM fitter.
'
'*******************************************************************
SUB OrCADPLDPartProps1
	'MACROMENU Set OrCAD PLD Part Properties
	'MACROKEY Ctrl+F1
	'MACRODESCRIPTION Set OrCAD Part Properties

Begin Dialog OrCADPLDPartProps1Dlg 16, 10, 275, 64, "Set OrCAD Part Properties"

	Text 8, 8, 56, 8, "CVALUE"
	TextBox 70, 8, 144, 12, .CVALUE

	Text 8, 24, 56, 8, "&SVALUE"
	TextBox 70, 24, 144, 12, .SVALUE

	OKButton 224, 8, 40, 14
	CancelButton 224, 28, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim OrCADdlg1 As OrCADPLDPartProps1Dlg
Status = Dialog(OrCADdlg1)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(OrCADdlg1.CVALUE) > 0 THEN
		SetProperty "GENERIC=CVALUE", OrCADdlg1.CVALUE
		DisplayProperty "GENERIC=CVALUE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(OrCADdlg1.SVALUE) > 0 THEN
		SetProperty "GENERIC=SVALUE", OrCADdlg1.SVALUE
		DisplayProperty "GENERIC=SVALUE", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
