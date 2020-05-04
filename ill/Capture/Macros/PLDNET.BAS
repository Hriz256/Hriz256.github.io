'*******************************************************************
' PLDNET.BAS Version 8/26/97
' OrCAD Express Version 7.10
'
' This macro will let you assign OrCAD PAL/GAL/PROM net properties 
' to nets in the Express schematic editor.  
' Select the wire/PLDPROP and then run the macro to add the properties
' for OrCAD PAL/GAL/PROM fitter.
'
'*******************************************************************
SUB OrCADPLDNetProps
	'MACROMENU Set OrCAD PLD Net Properties
	'MACROKEY Ctrl+F2
	'MACRODESCRIPTION Set OrCAD PLD Net Properties

Begin Dialog OrCADNetPropsDlg 16, 10, 275, 60, "Set Net Properties for OrCAD PAL/GAL/PROM Fitter"

	Text 8, 8, 56, 8, "Pin &Number "
	TextBox 70, 8, 144, 12, .PLDPIN

	Text 8, 24, 56, 8, "PLD &Property "
	TextBox 70, 24, 144, 12, .PLDPROP

	Text 8, 40, 56, 8, "Pin &Type "
	TextBox 70, 40, 144, 12, .PLDTYPE

	OKButton 224, 8, 40, 14
	CancelButton 224, 28, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim OrCADNetDlg As OrCADNetPropsDlg
Status = Dialog(OrCADNetDlg)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(OrCADNetDlg.PLDTYPE) > 0 THEN
		SetProperty "PLDTYPE", OrCADNetDlg.PLDTYPE
		DisplayProperty "PLDTYPE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(OrCADNetDlg.PLDPROP) > 0 THEN
		SetProperty "PLDPROP", OrCADNetDlg.PLDPROP
		DisplayProperty "PLDPROP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(OrCADNetDlg.PLDPIN) > 0 THEN
		SetProperty "PLDPIN", OrCADNetDlg.PLDPIN
		DisplayProperty "PLDPIN", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
