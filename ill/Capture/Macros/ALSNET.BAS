'*******************************************************************
' ALSNET.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Actel net properties to nets
' in the Express schematic editor.  Select the wire/bus and then
' run the macro to add the properties for Actel Designer.
'
'*******************************************************************
SUB ActelNetProps
	'MACROMENU Set Actel Net Properties
	'MACROKEY Ctrl+F2
	'MACRODESCRIPTION Set Actel Net Properties

Begin Dialog ActelNetPropsDlg 16, 10, 275, 76, "Set Actel Net Properties"

	Text 8, 8, 56, 8, "CRT "
	TextBox 70, 8, 144, 12, .ALSCRT

	Text 8, 24, 56, 8, "&ENM "
	TextBox 70, 24, 144, 12, .ALSENM

	Text 8, 40, 56, 8, "&PIN "
	TextBox 70, 40, 144, 12, .ALSPIN

	Text 8, 56, 56, 8, "PRESERVE "
	TextBox 70, 56, 144, 12, .ALSPRESERVE

	OKButton 224, 8, 40, 14
	CancelButton 224, 28, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim ActelNetDlg As ActelNetPropsDlg
Status = Dialog(ActelNetDlg)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(ActelNetDlg.ALSCRT) > 0 THEN
		SetProperty "ALSCRT", ActelNetDlg.ALSCRT
		DisplayProperty "ALSCRT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(ActelNetDlg.ALSENM) > 0 THEN
		SetProperty "ALSENM", ActelNetDlg.ALSENM
		DisplayProperty "ALSENM", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(ActelNetDlg.ALSPIN) > 0 THEN
		SetProperty "ALSPIN", ActelNetDlg.ALSPIN
		DisplayProperty "ALSPIN", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(ActelNetDlg.ALSPRESERVE) > 0 THEN
		SetProperty "ALSPRESERVE", ActelNetDlg.ALSPRESERVE
		DisplayProperty "ALSPRESERVE", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
