'*******************************************************************
' M1PART3.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Xilinx M1 part/symbol properties to
' parts in the Express schematic editor.  Select the part and then
' run the macro to add the properties for Xilinx XACTstep vM1.
'
' Reference: Xilinx, M1 Constraints Guide, April 1997 (Version M1.2)
'
'*******************************************************************
SUB XilinxM1PartProps3
	'MACROMENU M1: U_SET-WIREAND 
	'MACROKEY Ctrl+F3
	'MACRODESCRIPTION Set Xilinx M1 Part Properties (U_SET through WIREAND)

Begin Dialog XilinxM1PartProps3Dlg 16, 10, 153, 76, "Set Xilinx M1 Constraints"

	Text 8, 8, 56, 8, "&U_SET"
	TextBox 70, 8, 72, 12, .U_SET

	Text 8, 24, 56, 8, "USE_RLOC"
	TextBox 70, 24, 72, 12, .USE_RLOC

	Text 8, 40, 56, 8, "&WIREAND"
	TextBox 70, 40, 72, 12, .WIREAND

	OKButton 8, 56, 40, 14
	CancelButton 70, 56, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim Xilinxdlg3 As XilinxM1PartProps3Dlg
Status = Dialog(Xilinxdlg3)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN

	IF Len(Xilinxdlg3.U_SET) > 0 THEN
		SetProperty "U_SET", Xilinxdlg3.U_SET
		DisplayProperty "U_SET", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg3.USE_RLOC) > 0 THEN
		SetProperty "USE_RLOC", Xilinxdlg3.USE_RLOC
		DisplayProperty "USE_RLOC", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg3.WIREAND) > 0 THEN
		SetProperty "WIREAND", Xilinxdlg3.WIREAND
		DisplayProperty "WIREAND", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
