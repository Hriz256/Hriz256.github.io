'*******************************************************************
' LATNET.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Lattice net properties to nets
' in the Express schematic editor.  Select the wire/GROUP and then
' run the macro to add the properties for Lattice pDS+.
'
'*******************************************************************
SUB LatticeNetProps
	'MACROMENU Set Lattice Net Properties
	'MACROKEY Ctrl+F2
	'MACRODESCRIPTION Set Net Properties for Lattice pDS+

Begin Dialog LatticeNetPropsDlg 16, 10, 275, 172, "Set Lattice Net Properties"

	Text 8, 8, 56, 8, "CLK  "
	TextBox 70, 8, 144, 12, .CLK

	Text 8, 24, 56, 8, "CRIT  "
	TextBox 70, 24, 144, 12, .CRIT

	Text 8, 40, 56, 8, "&GROUP  "
	TextBox 70, 40, 144, 12, .GROUP

	Text 8, 56, 56, 8, "&LOCK "
	TextBox 70, 56, 144, 12, .LOCK

	Text 8, 72, 56, 8, "&PRESERVE  "
	TextBox 70, 72, 144, 12, .PRESERVE

	Text 8, 88, 56, 8, "PULLUP  "
	TextBox 70, 88, 144, 12, .PULLUP

	Text 8, 104, 56, 8, "&SAP/EAP  "
	TextBox 70, 104, 144, 12, .SAP_EAP

	Text 8, 120, 56, 8, "SCP/ECP "
	TextBox 70, 120, 144, 12, .SCP_ECP

	Text 8, 136, 56, 8, "SLOWSLEW  "
	TextBox 70, 136, 144, 12, .SLOWSLEW

	Text 8, 152, 56, 8, "SNP/ENP "
	TextBox 70, 152, 144, 12, .SNP_ENP

	OKButton 224, 8, 40, 14
	CancelButton 224, 28, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim LatticeNetDlg As LatticeNetPropsDlg
Status = Dialog(LatticeNetDlg)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(LatticeNetDlg.CLK) > 0 THEN
		SetProperty "CLK", LatticeNetDlg.CLK
		DisplayProperty "CLK", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.GROUP) > 0 THEN
		SetProperty "GROUP", LatticeNetDlg.GROUP
		DisplayProperty "GROUP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.PRESERVE) > 0 THEN
		SetProperty "PRESERVE", LatticeNetDlg.PRESERVE
		DisplayProperty "PRESERVE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.SAP_EAP) > 0 THEN
		SetProperty "SAP/EAP", LatticeNetDlg.SAP_EAP
		DisplayProperty "SAP_EAP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.SCP_ECP) > 0 THEN
		SetProperty "SCP/ECP", LatticeNetDlg.SCP_ECP
		DisplayProperty "SCP_ECP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.SNP_ENP) > 0 THEN
		SetProperty "SNP/ENP", LatticeNetDlg.SNP_ENP
		DisplayProperty "SNP_ENP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.CRIT) > 0 THEN
		SetProperty "CRIT", LatticeNetDlg.CRIT
		DisplayProperty "CRIT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.LOCK) > 0 THEN
		SetProperty "LOCK", LatticeNetDlg.LOCK
		DisplayProperty "LOCK", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.PULLUP) > 0 THEN
		SetProperty "PULLUP", LatticeNetDlg.PULLUP
		DisplayProperty "PULLUP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(LatticeNetDlg.SLOWSLEW) > 0 THEN
		SetProperty "SLOWSLEW", LatticeNetDlg.SLOWSLEW
		DisplayProperty "SLOWSLEW", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
