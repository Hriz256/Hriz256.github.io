'*******************************************************************
' M1PART1.BAS Version 8/22/97
' OrCAD Express Version 7.10
'
' This macro will let you assign Xilinx part/symbol properties to
' parts in the Express schematic editor.  Select the part and then
' run the macro to add the properties for Xilinx XACTstep VM1.xx.
'
' Reference: Xilinx, M1 Constraints Guide, April 1997 (Version M1.2)
'
'*******************************************************************
SUB XilinxM1PartProps1
	'MACROMENU M1: ADD-LOWPWR
	'MACROKEY Ctrl+F1
	'MACRODESCRIPTION Set Part Properties (ADD through LOWPWR) for Xilinx XACTstep vM1 

Begin Dialog XilinxM1PartProps1Dlg 16, 10, 306, 204, "Set Xilinx M1 Constraints"

	Text 8, 8, 56, 8, "&ADD"
	TextBox 70, 8, 72, 12, .ADD

	Text 8, 24, 56, 8, "&BASE"
	TextBox 70, 24, 72, 12, .BASE

	Text 8, 40, 56, 8, "BLKNM"
	TextBox 70, 40, 72, 12, .BLKNM

	Text 8, 56, 56, 8, "BUFG"
	TextBox 70, 56, 72, 12, .BUFG

	Text 8, 72, 56, 8, "COLLAPSE"
	TextBox 70, 72, 72, 12, .COLLAPSE

	Text 8, 88, 56, 8, "CONFIG"
	TextBox 70, 88, 72, 12, .CONFIG

	Text 8, 104, 56, 8, "&D_INVERT"
	TextBox 70, 104, 72, 12, .D_INVERT

	Text 8, 120, 56, 8, "DECODE"
	TextBox 70, 120, 72, 12, .DECODE

	Text 8, 136, 56, 8, "DIVIDE1_BY"
	TextBox 70, 136, 72, 12, .DIVIDE1_BY

	Text 8, 152, 56, 8, "DIVIDE2_BY"
	TextBox 70, 152, 72, 12, .DIVIDE2_BY

	Text 8, 168, 56, 8, "DOUBLE"
	TextBox 70, 168, 72, 12, .DOUBLE

' 2nd Column -----------------------------------------

	Text 162, 8, 56, 8, "&EQUATE_F"
	TextBox 224, 8, 72, 12, .EQUATE_F

	Text 162, 24, 56, 8, "EQUATE_G"
	TextBox 224, 24, 72, 12, .EQUATE_G

	Text 162, 40, 56, 8, "&FAST"
	TextBox 224, 40, 72, 12, .FAST

	Text 162, 56, 56, 8, "FILE"
	TextBox 224, 56, 72, 12, .FILE

	Text 162, 72, 56, 8, "&HBLKNM"
	TextBox 224, 72, 72, 12, .HBLKNM

	Text 162, 88, 56, 8, "HU_SET"
	TextBox 224, 88, 72, 12, .HU_SET

	Text 162, 104, 56, 8, "&INIT"
	TextBox 224, 104, 72, 12, .INIT

	Text 162, 120, 56, 8, "IO"
	TextBox 224, 120, 72, 12, .IO

	Text 162, 136, 56, 8, "&KEEP"
	TextBox 224, 136, 72, 12, .KEEP

	Text 162, 152, 56, 8, "&LOC"
	TextBox 224, 152, 72, 12, .LOC

	Text 162, 168, 56, 8, "LOWPWR"
	TextBox 224, 168, 72, 12, .LOWPWR

	OKButton 102, 184, 40, 14
	CancelButton 162, 184, 40, 14

End Dialog

'************************************
' Show the dialog
'************************************
Dim Xilinxdlg1 As XilinxM1PartProps1Dlg
Status = Dialog(Xilinxdlg1)

'************************************
' User hit OK ---> set properties
'************************************
IF Status = -1 THEN
	IF Len(Xilinxdlg1.ADD) > 0 THEN
		SetProperty "ADD", Xilinxdlg1.ADD
		DisplayProperty "ADD", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.BASE) > 0 THEN
		SetProperty "BASE", Xilinxdlg1.BASE
		DisplayProperty "BASE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.BLKNM) > 0 THEN
		SetProperty "BLKNM", Xilinxdlg1.BLKNM
		DisplayProperty "BLKNM", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.BUFG) > 0 THEN
		SetProperty "BUFG", Xilinxdlg1.BUFG
		DisplayProperty "BUFG", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.COLLAPSE) > 0 THEN
		SetProperty "COLLAPSE", Xilinxdlg1.COLLAPSE
		DisplayProperty "COLLAPSE", "", 0, FALSE, FALSE, 48, 0
	END IF


	IF Len(Xilinxdlg1.CONFIG) > 0 THEN
		SetProperty "CONFIG", Xilinxdlg1.CONFIG
		DisplayProperty "CONFIG", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.D_INVERT) > 0 THEN
		SetProperty "D_INVERT", Xilinxdlg1.D_INVERT
		DisplayProperty "D_INVERT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.DECODE) > 0 THEN
		SetProperty "DECODE", Xilinxdlg1.DECODE
		DisplayProperty "DECODE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.DIVIDE1_BY) > 0 THEN
		SetProperty "DIVIDE1_BY", Xilinxdlg1.DIVIDE1_BY
		DisplayProperty "DIVIDE1_BY", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.DIVIDE2_BY) > 0 THEN
		SetProperty "DIVIDE2_BY", Xilinxdlg1.DIVIDE2_BY
		DisplayProperty "DIVIDE2_BY", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.DOUBLE) > 0 THEN
		SetProperty "DOUBLE", Xilinxdlg1.DOUBLE
		DisplayProperty "DOUBLE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.EQUATE_F) > 0 THEN
		SetProperty "EQUATE_F", Xilinxdlg1.EQUATE_F
		DisplayProperty "EQUATE_F", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.EQUATE_G) > 0 THEN
		SetProperty "EQUATE_G", Xilinxdlg1.EQUATE_G
		DisplayProperty "EQUATE_G", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.FAST) > 0 THEN
		SetProperty "FAST", Xilinxdlg1.FAST
		DisplayProperty "FAST", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.FILE) > 0 THEN
		SetProperty "FILE", Xilinxdlg1.FILE
		DisplayProperty "FILE", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.HBLKNM) > 0 THEN
		SetProperty "HBLKNM", Xilinxdlg1.HBLKNM
		DisplayProperty "HBLKNM", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.HU_SET) > 0 THEN
		SetProperty "HU_SET", Xilinxdlg1.HU_SET
		DisplayProperty "HU_SET", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.INIT) > 0 THEN
		SetProperty "INIT", Xilinxdlg1.INIT
		DisplayProperty "INIT", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.IO) > 0 THEN
		SetProperty "IO", Xilinxdlg1.IO
		DisplayProperty "IO", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.KEEP) > 0 THEN
		SetProperty "KEEP", Xilinxdlg1.KEEP
		DisplayProperty "KEEP", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.LOC) > 0 THEN
		SetProperty "LOC", Xilinxdlg1.LOC
		DisplayProperty "LOC", "", 0, FALSE, FALSE, 48, 0
	END IF

	IF Len(Xilinxdlg1.LOWPWR) > 0 THEN
		SetProperty "LOWPWR", Xilinxdlg1.LOWPWR
		DisplayProperty "LOWPWR", "", 0, FALSE, FALSE, 48, 0
	END IF

END IF

END SUB
