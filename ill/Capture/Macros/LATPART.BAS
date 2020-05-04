'*******************************************************************
' LATPART.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Lattice part/symbol properties to
' parts in the Express schematic editor.  Select the part and then
' run the macro to add the properties for Lattice pDS+.
'
'*******************************************************************
SUB LatticePartProps1
	'MACROMENU Set Lattice Part Properties
	'MACROKEY Ctrl+F1
	'MACRODESCRIPTION Set Part Properties for Lattice pDS+

Begin Dialog LatticePartProps1Dlg 16, 10, 275, 76, "Set Lattice Part Properties"

	Text 8, 8, 56, 8, "&LXOR2"
	TextBox 70, 8, 144, 12, .LXOR2

	Text 8, 24, 56, 8, "OPTIMIZE"
	TextBox 70, 24, 144, 12, .OPTIMIZE

	Text 8, 40, 56, 8, "&PROTECT"
	TextBox 70, 40, 144, 12, .PROTECT

	Text 8, 56, 56, 8, "&REGTYPE"
	TextBox 70, 56, 144, 12, .REGTYPE

	OKButton 224, 8, 40, 14
	CancelButton 224, 28, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim Latticedlg1 As LatticePartProps1Dlg
Status = Dialog(Latticedlg1)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(Latticedlg1.LXOR2) > 0 THEN
		SetProperty "LXOR2", Latticedlg1.LXOR2
		DisplayProperty "LXOR2", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Latticedlg1.OPTIMIZE) > 0 THEN
		SetProperty "OPTIMIZE", Latticedlg1.OPTIMIZE
		DisplayProperty "OPTIMIZE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Latticedlg1.PROTECT) > 0 THEN
		SetProperty "PROTECT", Latticedlg1.PROTECT
		DisplayProperty "PROTECT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Latticedlg1.REGTYPE) > 0 THEN
		SetProperty "REGTYPE", Latticedlg1.REGTYPE
		DisplayProperty "REGTYPE", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
