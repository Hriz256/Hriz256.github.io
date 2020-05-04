'*******************************************************************
' ALSPART.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Actel part/symbol properties to
' parts in the Express schematic editor.  Select the part and then
' run the macro to add the properties for Actel Designer.
'
'*******************************************************************
SUB ActelPartProps1
	'MACROMENU Set Actel Part Properties
	'MACROKEY Ctrl+F1
	'MACRODESCRIPTION Set Actel Part Properties

Begin Dialog ActelPartProps1Dlg 16, 10, 275, 28, "Set Actel Part Properties"

	Text 8, 8, 56, 8, "&DONTTOUCH"
	TextBox 70, 8, 144, 12, .ALSDONTTOUCH

	OKButton 224, 8, 40, 14
	CancelButton 224, 28, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim Acteldlg1 As ActelPartProps1Dlg
Status = Dialog(Acteldlg1)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(Acteldlg1.ALSDONTTOUCH) > 0 THEN
		SetProperty "ALSDONTTOUCH", Acteldlg1.ALSDONTTOUCH
		DisplayProperty "ALSDONTTOUCH", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
