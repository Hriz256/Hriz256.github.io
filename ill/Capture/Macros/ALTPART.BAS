'*******************************************************************
' ALTPART.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Altera part/symbol properties to
' parts in the Express schematic editor.  Select the part and then
' run the macro to add the properties for Altera MAX+PLUS II.
'
' Reference: MAX+plus II Version 8.0 Help, topic: Assigning
'            Resources in a Third-Party Design Editor
'
'*******************************************************************
SUB AlteraPartProps1
	'MACROMENU Set Altera Part/Net Properties
	'MACROKEY Ctrl+F1
	'MACRODESCRIPTION Set Altera Part/Net Properties

Begin Dialog AlteraPartProps1Dlg 16, 10, 306, 76, "Set Altera Part/Net Properties"

	Text 8, 8, 56, 8, "CHIP_&PIN_LC"
	TextBox 70, 8, 210, 12, .CHIP_PIN_LC

	Text 8, 24, 56, 8, "CLI&QUE"
	TextBox 70, 24, 210, 12, .CLIQUE

	Text 8, 40, 56, 8, "&LOGIC_OPTION"
	TextBox 70, 40, 210, 12, .LOGIC_OPTION

	OKButton 102, 56, 40, 14
	CancelButton 162, 56, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim Alteradlg1 As AlteraPartProps1Dlg
Status = Dialog(Alteradlg1)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN

	IF Len(Alteradlg1.CHIP_PIN_LC) > 0 THEN
		SetProperty "CHIP_PIN_LC", Alteradlg1.CHIP_PIN_LC
'		DisplayProperty "CHIP_PIN_LC", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Alteradlg1.CLIQUE) > 0 THEN
		SetProperty "CLIQUE", Alteradlg1.CLIQUE
'		DisplayProperty "CLIQUE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Alteradlg1.LOGIC_OPTION) > 0 THEN
		SetProperty "LOGIC_OPTION", Alteradlg1.LOGIC_OPTION
'		DisplayProperty "LOGIC_OPTION", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
