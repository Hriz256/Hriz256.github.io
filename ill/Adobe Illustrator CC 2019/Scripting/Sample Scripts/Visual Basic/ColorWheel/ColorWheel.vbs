'*************************************************************
' 
' ADOBE SYSTEMS INCORPORATED 
' Copyright 2005-2010 Adobe Systems Incorporated 
' All Rights Reserved 

' NOTICE:  Adobe permits you to use, modify, and 
' distribute this file in accordance with the terms
' of the Adobe license agreement accompanying it.  
' If you have received this file from a source 
' other than Adobe, then your use, modification,
' or distribution of it requires the prior 
' written permission of Adobe. 
' 
'*************************************************************

' ColorWheel.vbs

' DESCRIPTION

' This example shows how to draw lines between points on a circle.
' It also demonstrates how to create RGB colors and apply them as 
' either a stroke color or a fill color. The default values draw
' the circle as shown in Result.ai.
' 
'*************************************************************

' NOTE: To change the size of the ColorWheel change the "myRadius" variable.
'       To change other values read comments inside the script.

' General Illustrator objects
Set aiApp = CreateObject("Illustrator.Application")

myMsg = "alert(""Number of Dot = 16  Width of Lines = 3  Opacity of Lines = 30. Please change values in script to use different values"")"
aiApp.DoJavaScript myMsg

' Change values here to draw the colorwheel with different values
myNumberOfDots = 16
myPathWidth = 3
myPathOpacity = 30

' OR
' Input the values from the user
' myNumberOfDots = InputBox("Enter Number of Dots on the Circle", "ColorWheel", 16)
' myPathWidth = InputBox("Enter width of Lines", "ColorWheel", 3)
' myPathOpacity = InputBox("Enter Opacity of Lines", "ColorWheel",30)

myRadius = 60.0
myCenterX = 300.0
myCenterY = 300.0

' Get the user supplied number of dots on the circle
pi = 4.0 * Atn(1)
pi2 = pi * 2.0
myStepSize = (2.0 * pi) / myNumberOfDots

Set aiDoc = aiApp.Documents.Add(aiDocumentRGBColor)
Set aiGroup = aiDoc.GroupItems.Add

' Generate a list (an array) of positions for the dots
' The array will have (x,y) in each of its entries
Dim myList()
ReDim myList(myNumberOfDots, 2)

myAngle = 0
For myIndex = 0 To (myNumberOfDots - 1)
    myList(myIndex, 0) = myCenterX + (myRadius * Cos(myAngle))
    myList(myIndex, 1) = myCenterY + (myRadius * Sin(myAngle))
    myAngle = myAngle + myStepSize
Next

halfNumberOfDots = myNumberOfDots / 2

' Draw lines between each dot
myAngle = 0

' Set the graphic state of the document to match as many of the properties that you
' want new graphic to be created with as possible
aiDoc.DefaultFilled = False
aiDoc.DefaultStroked = True
aiDoc.DefaultStrokeWidth = CDbl(myPathWidth)

Dim StartP(1)
Dim EndP(1)

For myIndex = 1 To myNumberOfDots
    Set myColor = GetColor(myAngle)
    aiDoc.DefaultStrokeColor = myColor
    myAngle = myAngle + myStepSize

    StartP(0) = myList(myIndex - 1, 0)
    StartP(1) = myList(myIndex - 1, 1)
    myEndNodeIndex = myIndex + 1
    
    For myInnerIndex = 2 To halfNumberOfDots
        If (myEndNodeIndex > myNumberOfDots) Then
            myEndNodeIndex = myEndNodeIndex - myNumberOfDots
        End If
        EndP(0) = myList(myEndNodeIndex - 1, 0)
        EndP(1) = myList(myEndNodeIndex - 1, 1)
        myEndNodeIndex = myEndNodeIndex + 1
        
        CreateLine aiGroup, (StartP(0)), (StartP(1)), (EndP(0)), (EndP(1)), CDbl(myPathOpacity)
    Next
Next

' Draw the little dots
myAngle = 0

' Set the graphic state of the document to match as many of the properties that you
' want new graphic to be created with as possible
aiDoc.DefaultFilled = True
aiDoc.DefaultStroked = False
For myIndex = 0 To (myNumberOfDots - 1)
    aiDoc.DefaultFillColor = GetColor(myAngle)
    
    Set aiPath = aiGroup.PathItems.Ellipse(myList(myIndex, 1) + 3, myList(myIndex, 0) - 3, 6, 6)
    aiPath.Opacity = 85
    myAngle = myAngle + myStepSize
Next

aiApp.Redraw

' ***************************************************

Function GetColor(inAngle)

	myPI34 = (3 * pi) / 4
	myPI64 = (6 * pi) / 4

	' Calculate Red
	If ((inAngle < myPI34) Or (inAngle > myPI64)) Then
	    If (inAngle > myPI64) Then
		dist = inAngle - myPI64
	    Else
		dist = inAngle
	    End If
	    myRed = (1 - (dist / myPI34)) * 255
	Else
	    myRed = 0
	End If

	' Calculate Green
	dist = Abs(inAngle - myPI34)
	If (dist < myPI34) Then
	    myGreen = (1 - (dist / myPI34)) * 255
	Else
	    myGreen = 0
	End If

	' Calculate Blue
	dist = Abs(inAngle - myPI64)
	If (dist < myPI34) Then
	    myBlue = (1 - (dist / myPI34)) * 255
	Else
	    myBlue = 0
	End If

	Set theRGBValue = CreateObject("Illustrator.RGBColor")

	theRGBValue.Red = myRed
	theRGBValue.Green = myGreen
	theRGBValue.Blue = myBlue

	Set GetColor = theRGBValue
End Function


' ***************************************************

Private Sub CreateLine(inGroupItem, inStartX, inStartY, inEndX, inEndY, inOpacity)
	
	Set aiPath = inGroupItem.PathItems.Add

	aiPath.SetEntirePath Array( Array(inStartX, inStartY), Array(inEndX, inEndY) )

	' If you want to modify the LeftDirection or the RightDirection point of the individual
	' segments in the path you will have to create the path segment as in the following code:
	' CreatePathPoint aiPath, inStartX, inStartY
	' CreatePathPoint aiPath, inEndX, inEndY

	aiPath.Opacity = inOpacity

End Sub


' ***************************************************

Private Sub CreatePathPoint(inPathItem, inX, inY)
	Set aiPathPoint = inPathItem.PathPoints.Add

	aiPathPoint.Anchor = Array(inX, inY)
	aiPathPoint.LeftDirection = Array(inX, inY)
	aiPathPoint.RightDirection = Array(inX, inY)
	aiPathPoint.PointType = 1
End Sub

'' SIG '' Begin signature block
'' SIG '' MIId9gYJKoZIhvcNAQcCoIId5zCCHeMCAQExDzANBglg
'' SIG '' hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
'' SIG '' BgEEAYI3AgEeMCQCAQEEEE7wKRaZJ7VNj+Ws4Q8X66sC
'' SIG '' AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
'' SIG '' Bf3SjGblfjpFwCkY6nVAOSsEY1etGq4JQeuNpx59Etag
'' SIG '' ggy9MIIF+TCCBOGgAwIBAgIQCyi/yoIU43OhIKQWlL0I
'' SIG '' 0TANBgkqhkiG9w0BAQsFADBsMQswCQYDVQQGEwJVUzEV
'' SIG '' MBMGA1UEChMMRGlnaUNlcnQgSW5jMRkwFwYDVQQLExB3
'' SIG '' d3cuZGlnaWNlcnQuY29tMSswKQYDVQQDEyJEaWdpQ2Vy
'' SIG '' dCBFViBDb2RlIFNpZ25pbmcgQ0EgKFNIQTIpMB4XDTE3
'' SIG '' MDkxMjAwMDAwMFoXDTE5MDkwNDEyMDAwMFowggEOMR0w
'' SIG '' GwYDVQQPDBRQcml2YXRlIE9yZ2FuaXphdGlvbjETMBEG
'' SIG '' CysGAQQBgjc8AgEDEwJVUzEZMBcGCysGAQQBgjc8AgEC
'' SIG '' EwhEZWxhd2FyZTEQMA4GA1UEBRMHMjc0ODEyOTELMAkG
'' SIG '' A1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWExETAP
'' SIG '' BgNVBAcTCFNhbiBKb3NlMSMwIQYDVQQKExpBZG9iZSBT
'' SIG '' eXN0ZW1zIEluY29ycG9yYXRlZDEsMCoGA1UECxMjSWxs
'' SIG '' dXN0cmF0b3IsIEluRGVzaWduLCBJbkNvcHksIE11c2Ux
'' SIG '' IzAhBgNVBAMTGkFkb2JlIFN5c3RlbXMgSW5jb3Jwb3Jh
'' SIG '' dGVkMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
'' SIG '' AQEAnhYRBCR+95gemHCaFsfAV1ALdH2GUNPz1ooyf6nY
'' SIG '' 1NKwKVxN64PpoSn/fKjK1QJIw5uzN0z7aGr5JXvnrPEw
'' SIG '' bmpG65QL/qOCiCIqMcXx+MIjIGypkJmb+59+Ab4K00RA
'' SIG '' Flll715EfxsFMGdIpbrKm030fAuzKExYOIRJLnRlKrSy
'' SIG '' 9oSPM3L1e4pFZnkyzVYehm2MncgW0IhwDaVghCeTQFPK
'' SIG '' jB0D7RnfxRArF48XduQrXHcUSrIEqPzTiktZQ17Za3LG
'' SIG '' eDoewx8uNSN1tqSNYp4TtWwxLx6xa+PtauC/LISU73rV
'' SIG '' q1D0Aj2QWRlR63L1Hb4VihIJ923oue9o5BKj5wIDAQAB
'' SIG '' o4IB8TCCAe0wHwYDVR0jBBgwFoAUj+h+8G0yagAFI8dw
'' SIG '' l2o6kP9r6tQwHQYDVR0OBBYEFPUntSUbASkCCQp1WA6Y
'' SIG '' x1sTP2kAMC4GA1UdEQQnMCWgIwYIKwYBBQUHCAOgFzAV
'' SIG '' DBNVUy1ERUxBV0FSRS0yNzQ4MTI5MA4GA1UdDwEB/wQE
'' SIG '' AwIHgDATBgNVHSUEDDAKBggrBgEFBQcDAzB7BgNVHR8E
'' SIG '' dDByMDegNaAzhjFodHRwOi8vY3JsMy5kaWdpY2VydC5j
'' SIG '' b20vRVZDb2RlU2lnbmluZ1NIQTItZzEuY3JsMDegNaAz
'' SIG '' hjFodHRwOi8vY3JsNC5kaWdpY2VydC5jb20vRVZDb2Rl
'' SIG '' U2lnbmluZ1NIQTItZzEuY3JsMEsGA1UdIAREMEIwNwYJ
'' SIG '' YIZIAYb9bAMCMCowKAYIKwYBBQUHAgEWHGh0dHBzOi8v
'' SIG '' d3d3LmRpZ2ljZXJ0LmNvbS9DUFMwBwYFZ4EMAQMwfgYI
'' SIG '' KwYBBQUHAQEEcjBwMCQGCCsGAQUFBzABhhhodHRwOi8v
'' SIG '' b2NzcC5kaWdpY2VydC5jb20wSAYIKwYBBQUHMAKGPGh0
'' SIG '' dHA6Ly9jYWNlcnRzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2Vy
'' SIG '' dEVWQ29kZVNpZ25pbmdDQS1TSEEyLmNydDAMBgNVHRMB
'' SIG '' Af8EAjAAMA0GCSqGSIb3DQEBCwUAA4IBAQBtVt3TvLPD
'' SIG '' hw9UfLa8tk5aSoPfBiKjiKTqmfpT63F8Mu5MIM7Uy9c1
'' SIG '' eBXNKiWviN4ACm7Msf48fLO9V+QmrTguZLQBp8/ApqiK
'' SIG '' ovRaaYKTUUQbjnUgWHnt6/UG5Le89RVWn0756Y2JyiAG
'' SIG '' RfpaZILVsICbvA+cF2sosdMCRNISvxsJ7IHLHUq+7N3R
'' SIG '' RyP5IkHk4zw1PAU/1IJ2Z1ODUzzPOw347ChJYzweWxcM
'' SIG '' cwlsVOaXkGwI8KiYvf37jUK+3DvlNsIuDX1BCcZprxuq
'' SIG '' PZ/Fg5E9SANSBPxQ2N4POexWyakBlgb34+c+sIeCpy0t
'' SIG '' sSF5AfRBLJhLlXR3uscTGJm8MIIGvDCCBaSgAwIBAgIQ
'' SIG '' A/G04V86gvEUlniz19hHXDANBgkqhkiG9w0BAQsFADBs
'' SIG '' MQswCQYDVQQGEwJVUzEVMBMGA1UEChMMRGlnaUNlcnQg
'' SIG '' SW5jMRkwFwYDVQQLExB3d3cuZGlnaWNlcnQuY29tMSsw
'' SIG '' KQYDVQQDEyJEaWdpQ2VydCBIaWdoIEFzc3VyYW5jZSBF
'' SIG '' ViBSb290IENBMB4XDTEyMDQxODEyMDAwMFoXDTI3MDQx
'' SIG '' ODEyMDAwMFowbDELMAkGA1UEBhMCVVMxFTATBgNVBAoT
'' SIG '' DERpZ2lDZXJ0IEluYzEZMBcGA1UECxMQd3d3LmRpZ2lj
'' SIG '' ZXJ0LmNvbTErMCkGA1UEAxMiRGlnaUNlcnQgRVYgQ29k
'' SIG '' ZSBTaWduaW5nIENBIChTSEEyKTCCASIwDQYJKoZIhvcN
'' SIG '' AQEBBQADggEPADCCAQoCggEBAKdT+g+ytRPxZM+EgPyu
'' SIG '' gDXRttfHoyysGiys8YSsOjUSOpKRulfkxMnzL6hIPLfW
'' SIG '' btyXIrpReWGvQy8Nt5u0STGuRFg+pKGWp4dPI37DbGUk
'' SIG '' kFU+ocojfMVC6cR6YkWbfd5jdMueYyX4hJqarUVPrn0f
'' SIG '' yBPLdZvJ4eGK+AsMmPTKPtBFqnoepViTNjS+Ky4rMVhm
'' SIG '' tDIQn53wUqHv6D7TdvJAWtz6aj0bS612sIxc7ja6g+ow
'' SIG '' qEze8QsqWEGIrgCJqwPRFoIgInbrXlQ4EmLh0nAk2+0f
'' SIG '' cNJkCYAt4radzh/yuyHzbNvYsxl7ilCf7+w2Clyat0rT
'' SIG '' CKA5ef3dvz06CSUCAwEAAaOCA1gwggNUMBIGA1UdEwEB
'' SIG '' /wQIMAYBAf8CAQAwDgYDVR0PAQH/BAQDAgGGMBMGA1Ud
'' SIG '' JQQMMAoGCCsGAQUFBwMDMH8GCCsGAQUFBwEBBHMwcTAk
'' SIG '' BggrBgEFBQcwAYYYaHR0cDovL29jc3AuZGlnaWNlcnQu
'' SIG '' Y29tMEkGCCsGAQUFBzAChj1odHRwOi8vY2FjZXJ0cy5k
'' SIG '' aWdpY2VydC5jb20vRGlnaUNlcnRIaWdoQXNzdXJhbmNl
'' SIG '' RVZSb290Q0EuY3J0MIGPBgNVHR8EgYcwgYQwQKA+oDyG
'' SIG '' Omh0dHA6Ly9jcmwzLmRpZ2ljZXJ0LmNvbS9EaWdpQ2Vy
'' SIG '' dEhpZ2hBc3N1cmFuY2VFVlJvb3RDQS5jcmwwQKA+oDyG
'' SIG '' Omh0dHA6Ly9jcmw0LmRpZ2ljZXJ0LmNvbS9EaWdpQ2Vy
'' SIG '' dEhpZ2hBc3N1cmFuY2VFVlJvb3RDQS5jcmwwggHEBgNV
'' SIG '' HSAEggG7MIIBtzCCAbMGCWCGSAGG/WwDAjCCAaQwOgYI
'' SIG '' KwYBBQUHAgEWLmh0dHA6Ly93d3cuZGlnaWNlcnQuY29t
'' SIG '' L3NzbC1jcHMtcmVwb3NpdG9yeS5odG0wggFkBggrBgEF
'' SIG '' BQcCAjCCAVYeggFSAEEAbgB5ACAAdQBzAGUAIABvAGYA
'' SIG '' IAB0AGgAaQBzACAAQwBlAHIAdABpAGYAaQBjAGEAdABl
'' SIG '' ACAAYwBvAG4AcwB0AGkAdAB1AHQAZQBzACAAYQBjAGMA
'' SIG '' ZQBwAHQAYQBuAGMAZQAgAG8AZgAgAHQAaABlACAARABp
'' SIG '' AGcAaQBDAGUAcgB0ACAAQwBQAC8AQwBQAFMAIABhAG4A
'' SIG '' ZAAgAHQAaABlACAAUgBlAGwAeQBpAG4AZwAgAFAAYQBy
'' SIG '' AHQAeQAgAEEAZwByAGUAZQBtAGUAbgB0ACAAdwBoAGkA
'' SIG '' YwBoACAAbABpAG0AaQB0ACAAbABpAGEAYgBpAGwAaQB0
'' SIG '' AHkAIABhAG4AZAAgAGEAcgBlACAAaQBuAGMAbwByAHAA
'' SIG '' bwByAGEAdABlAGQAIABoAGUAcgBlAGkAbgAgAGIAeQAg
'' SIG '' AHIAZQBmAGUAcgBlAG4AYwBlAC4wHQYDVR0OBBYEFI/o
'' SIG '' fvBtMmoABSPHcJdqOpD/a+rUMB8GA1UdIwQYMBaAFLE+
'' SIG '' w2kD+L9HAdSYJhoIAu9jZCvDMA0GCSqGSIb3DQEBCwUA
'' SIG '' A4IBAQAZM0oMgTM32602yeTJOru1Gy56ouL0Q0IXnr9O
'' SIG '' oU3hsdvpgd2fAfLkiNXp/gn9IcHsXYDS8NbBQ8L+dyvb
'' SIG '' +deRM85s1bIZO+Yu1smTT4hAjs3h9X7xD8ZZVnLo62pB
'' SIG '' vRzVRtV8ScpmOBXBv+CRcHeH3MmNMckMKaIz7Y3ih82J
'' SIG '' jT8b/9XgGpeLfNpt+6jGsjpma3sBs83YpjTsEgGrlVil
'' SIG '' xFNXqGDm5wISoLkjZKJNu3yBJWQhvs/uQhhDl7ulNwav
'' SIG '' Tf8mpU1hS+xGQbhlzrh5ngiWC4GMijuPx5mMoypumG1e
'' SIG '' YcaWt4q5YS2TuOsOBEPX9f6m8GLUmWqlwcHwZJSAMYIQ
'' SIG '' kTCCEI0CAQEwgYAwbDELMAkGA1UEBhMCVVMxFTATBgNV
'' SIG '' BAoTDERpZ2lDZXJ0IEluYzEZMBcGA1UECxMQd3d3LmRp
'' SIG '' Z2ljZXJ0LmNvbTErMCkGA1UEAxMiRGlnaUNlcnQgRVYg
'' SIG '' Q29kZSBTaWduaW5nIENBIChTSEEyKQIQCyi/yoIU43Oh
'' SIG '' IKQWlL0I0TANBglghkgBZQMEAgEFAKCBojAZBgkqhkiG
'' SIG '' 9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgEL
'' SIG '' MQ4wDAYKKwYBBAGCNwIBFTAvBgkqhkiG9w0BCQQxIgQg
'' SIG '' 1U3LznqReRU5CAm7Qu4vB4Bqva5PzdcGCHlgCseJQRww
'' SIG '' NgYKKwYBBAGCNwIBDDEoMCagJIAiAEEAZABvAGIAZQAg
'' SIG '' AEkAbABsAHUAcwB0AHIAYQB0AG8AcjANBgkqhkiG9w0B
'' SIG '' AQEFAASCAQAzJNzxIsdCpz5tj9ijTGdkuzU/tJOlZ1bg
'' SIG '' 6cl8/ofFNeiGVS9eDhWykN5MW3CM3YQ9Ee7nwCwZphpi
'' SIG '' N2KAbOEOsr4kPKzdw7cPSrlJK8pWgxU/vsoSHGb0ipdO
'' SIG '' iWrupnhQbnZXwgoNMnolTpa5rK5ynZqMeUCrJRNJ7sJI
'' SIG '' Dw60BJGmrYwls92ViEb5NgDZTmHSurm0LZ9u8NzNmVOK
'' SIG '' LkubHeRFwU0mCz+jbicmsSzi9c+lHb3PiAJdrAUvRPod
'' SIG '' yyYS1ruZNhGd5udEkzthV7tcLCoY+AW8d+JRXX5GfFqq
'' SIG '' YbcPeXI9SOo7FElVCWUGvcdj4QNN2VfmBWgBRQCw7iH3
'' SIG '' oYIOPDCCDjgGCisGAQQBgjcDAwExgg4oMIIOJAYJKoZI
'' SIG '' hvcNAQcCoIIOFTCCDhECAQMxDTALBglghkgBZQMEAgEw
'' SIG '' ggEOBgsqhkiG9w0BCRABBKCB/gSB+zCB+AIBAQYLYIZI
'' SIG '' AYb4RQEHFwMwMTANBglghkgBZQMEAgEFAAQg7l2/eEfm
'' SIG '' L7xtNDMLL/wc3e7eEOamm4TDuKDM7AdpGUACFE4xL/WS
'' SIG '' CALt19u729L6GZZMv97tGA8yMDE4MDkyMzE2MTYyOVow
'' SIG '' AwIBHqCBhqSBgzCBgDELMAkGA1UEBhMCVVMxHTAbBgNV
'' SIG '' BAoTFFN5bWFudGVjIENvcnBvcmF0aW9uMR8wHQYDVQQL
'' SIG '' ExZTeW1hbnRlYyBUcnVzdCBOZXR3b3JrMTEwLwYDVQQD
'' SIG '' EyhTeW1hbnRlYyBTSEEyNTYgVGltZVN0YW1waW5nIFNp
'' SIG '' Z25lciAtIEczoIIKizCCBTgwggQgoAMCAQICEHsFsdRJ
'' SIG '' aFFE98mJ0pwZnRIwDQYJKoZIhvcNAQELBQAwgb0xCzAJ
'' SIG '' BgNVBAYTAlVTMRcwFQYDVQQKEw5WZXJpU2lnbiwgSW5j
'' SIG '' LjEfMB0GA1UECxMWVmVyaVNpZ24gVHJ1c3QgTmV0d29y
'' SIG '' azE6MDgGA1UECxMxKGMpIDIwMDggVmVyaVNpZ24sIElu
'' SIG '' Yy4gLSBGb3IgYXV0aG9yaXplZCB1c2Ugb25seTE4MDYG
'' SIG '' A1UEAxMvVmVyaVNpZ24gVW5pdmVyc2FsIFJvb3QgQ2Vy
'' SIG '' dGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTYwMTEyMDAw
'' SIG '' MDAwWhcNMzEwMTExMjM1OTU5WjB3MQswCQYDVQQGEwJV
'' SIG '' UzEdMBsGA1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24x
'' SIG '' HzAdBgNVBAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsx
'' SIG '' KDAmBgNVBAMTH1N5bWFudGVjIFNIQTI1NiBUaW1lU3Rh
'' SIG '' bXBpbmcgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
'' SIG '' ggEKAoIBAQC7WZ1ZVU+djHJdGoGi61XzsAGtPHGsMo8F
'' SIG '' a4aaJwAyl2pNyWQUSym7wtkpuS7sY7Phzz8LVpD4Yht+
'' SIG '' 66YH4t5/Xm1AONSRBudBfHkcy8utG7/YlZHz8O5s+K2W
'' SIG '' OS5/wSe4eDnFhKXt7a+Hjs6Nx23q0pi1Oh8eOZ3D9Jqo
'' SIG '' 9IThxNF8ccYGKbQ/5IMNJsN7CD5N+Qq3M0n/yjvU9bKb
'' SIG '' S+GImRr1wOkzFNbfx4Dbke7+vJJXcnf0zajM/gn1kze+
'' SIG '' lYhqxdz0sUvUzugJkV+1hHk1inisGTKPI8EyQRtZDqk+
'' SIG '' scz51ivvt9jk1R1tETqS9pPJnONI7rtTDtQ2l4Z4xaE3
'' SIG '' AgMBAAGjggF3MIIBczAOBgNVHQ8BAf8EBAMCAQYwEgYD
'' SIG '' VR0TAQH/BAgwBgEB/wIBADBmBgNVHSAEXzBdMFsGC2CG
'' SIG '' SAGG+EUBBxcDMEwwIwYIKwYBBQUHAgEWF2h0dHBzOi8v
'' SIG '' ZC5zeW1jYi5jb20vY3BzMCUGCCsGAQUFBwICMBkaF2h0
'' SIG '' dHBzOi8vZC5zeW1jYi5jb20vcnBhMC4GCCsGAQUFBwEB
'' SIG '' BCIwIDAeBggrBgEFBQcwAYYSaHR0cDovL3Muc3ltY2Qu
'' SIG '' Y29tMDYGA1UdHwQvMC0wK6ApoCeGJWh0dHA6Ly9zLnN5
'' SIG '' bWNiLmNvbS91bml2ZXJzYWwtcm9vdC5jcmwwEwYDVR0l
'' SIG '' BAwwCgYIKwYBBQUHAwgwKAYDVR0RBCEwH6QdMBsxGTAX
'' SIG '' BgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTMwHQYDVR0OBBYE
'' SIG '' FK9j1sqjToVy4Ke8QfMpojh/gHViMB8GA1UdIwQYMBaA
'' SIG '' FLZ3+mlIR59TEtXC6gcydgfRlwcZMA0GCSqGSIb3DQEB
'' SIG '' CwUAA4IBAQB16rAt1TQZXDJF/g7h1E+meMFv1+rd3E/z
'' SIG '' ociBiPenjxXmQCmt5l30otlWZIRxMCrdHmEXZiBWBpgZ
'' SIG '' jV1x8viXvAn9HJFHyeLojQP7zJAv1gpsTjPs1rSTyEyQ
'' SIG '' Y0g5QCHE3dZuiZg8tZiX6KkGtwnJj1NXQZAv4R5NTtzK
'' SIG '' EHhsQm7wtsX4YVxS9U72a433Snq+8839A9fZ9gOoD+NT
'' SIG '' 9wp17MZ1LqpmhQSZt/gGV+HGDvbor9rsmxgfqrnjOgC/
'' SIG '' zoqUywHbnsc4uw9Sq9HjlANgCk2g/idtFDL8P5dA4b+Z
'' SIG '' idvkORS92uTTw+orWrOVWFUEfcea7CMDjYUq0v+uqWGB
'' SIG '' MIIFSzCCBDOgAwIBAgIQe9Tlr7rMBz+hASMEIkFNEjAN
'' SIG '' BgkqhkiG9w0BAQsFADB3MQswCQYDVQQGEwJVUzEdMBsG
'' SIG '' A1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xHzAdBgNV
'' SIG '' BAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsxKDAmBgNV
'' SIG '' BAMTH1N5bWFudGVjIFNIQTI1NiBUaW1lU3RhbXBpbmcg
'' SIG '' Q0EwHhcNMTcxMjIzMDAwMDAwWhcNMjkwMzIyMjM1OTU5
'' SIG '' WjCBgDELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5bWFu
'' SIG '' dGVjIENvcnBvcmF0aW9uMR8wHQYDVQQLExZTeW1hbnRl
'' SIG '' YyBUcnVzdCBOZXR3b3JrMTEwLwYDVQQDEyhTeW1hbnRl
'' SIG '' YyBTSEEyNTYgVGltZVN0YW1waW5nIFNpZ25lciAtIEcz
'' SIG '' MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
'' SIG '' rw6Kqvjcv2l7VBdxRwm9jTyB+HQVd2eQnP3eTgKeS3b2
'' SIG '' 5TY+ZdUkIG0w+d0dg+k/J0ozTm0WiuSNQI0iqr6nCxvS
'' SIG '' B7Y8tRokKPgbclE9yAmIJgg6+fpDI3VHcAyzX1uPCB1y
'' SIG '' SFdlTa8CPED39N0yOJM/5Sym81kjy4DeE035EMmqChhs
'' SIG '' VWFX0fECLMS1q/JsI9KfDQ8ZbK2FYmn9ToXBilIxq1vY
'' SIG '' yXRS41dsIr9Vf2/KBqs/SrcidmXs7DbylpWBJiz9u5iq
'' SIG '' ATjTryVAmwlT8ClXhVhe6oVIQSGH5d600yaye0BTWHmO
'' SIG '' UjEGTZQDRcTOPAPstwDyOiLFtG/l77CKmwIDAQABo4IB
'' SIG '' xzCCAcMwDAYDVR0TAQH/BAIwADBmBgNVHSAEXzBdMFsG
'' SIG '' C2CGSAGG+EUBBxcDMEwwIwYIKwYBBQUHAgEWF2h0dHBz
'' SIG '' Oi8vZC5zeW1jYi5jb20vY3BzMCUGCCsGAQUFBwICMBka
'' SIG '' F2h0dHBzOi8vZC5zeW1jYi5jb20vcnBhMEAGA1UdHwQ5
'' SIG '' MDcwNaAzoDGGL2h0dHA6Ly90cy1jcmwud3Muc3ltYW50
'' SIG '' ZWMuY29tL3NoYTI1Ni10c3MtY2EuY3JsMBYGA1UdJQEB
'' SIG '' /wQMMAoGCCsGAQUFBwMIMA4GA1UdDwEB/wQEAwIHgDB3
'' SIG '' BggrBgEFBQcBAQRrMGkwKgYIKwYBBQUHMAGGHmh0dHA6
'' SIG '' Ly90cy1vY3NwLndzLnN5bWFudGVjLmNvbTA7BggrBgEF
'' SIG '' BQcwAoYvaHR0cDovL3RzLWFpYS53cy5zeW1hbnRlYy5j
'' SIG '' b20vc2hhMjU2LXRzcy1jYS5jZXIwKAYDVR0RBCEwH6Qd
'' SIG '' MBsxGTAXBgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTYwHQYD
'' SIG '' VR0OBBYEFKUTAamfhcwbbhYeXzsxqnk2AHsdMB8GA1Ud
'' SIG '' IwQYMBaAFK9j1sqjToVy4Ke8QfMpojh/gHViMA0GCSqG
'' SIG '' SIb3DQEBCwUAA4IBAQBGnq/wuKJfoplIz6gnSyHNsrmm
'' SIG '' cnBjL+NVKXs5Rk7nfmUGWIu8V4qSDQjYELo2JPoKe/s7
'' SIG '' 02K/SpQV5oLbilRt/yj+Z89xP+YzCdmiWRD0Hkr+Zcze
'' SIG '' 1GvjUil1AEorpczLm+ipTfe0F1mSQcO3P4bm9sB/RDxG
'' SIG '' XBda46Q71Wkm1SF94YBnfmKst04uFZrlnCOvWxHqcalB
'' SIG '' +Q15OKmhDc+0sdo+mnrHIsV0zd9HCYbE/JElshuW6YUI
'' SIG '' 6N3qdGBuYKVWeg3IRFjc5vlIFJ7lv94AvXexmBRyFCTf
'' SIG '' xxEsHwA/w0sUxmcczB4Go5BfXFSLPuMzW4IPxbeGAk5x
'' SIG '' n+lmRT92MYICWjCCAlYCAQEwgYswdzELMAkGA1UEBhMC
'' SIG '' VVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9u
'' SIG '' MR8wHQYDVQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3Jr
'' SIG '' MSgwJgYDVQQDEx9TeW1hbnRlYyBTSEEyNTYgVGltZVN0
'' SIG '' YW1waW5nIENBAhB71OWvuswHP6EBIwQiQU0SMAsGCWCG
'' SIG '' SAFlAwQCAaCBpDAaBgkqhkiG9w0BCQMxDQYLKoZIhvcN
'' SIG '' AQkQAQQwHAYJKoZIhvcNAQkFMQ8XDTE4MDkyMzE2MTYy
'' SIG '' OVowLwYJKoZIhvcNAQkEMSIEIMsxnEq7hC5UO9w/Q135
'' SIG '' x61kOcXR0OvBEu6EBuZm6HbgMDcGCyqGSIb3DQEJEAIv
'' SIG '' MSgwJjAkMCIEIMR0znYAfQI5Tg2l5N58FMaA+eKCATz+
'' SIG '' 9lPvXbcf32H4MAsGCSqGSIb3DQEBAQSCAQADMP6GJw5H
'' SIG '' nZkRgD3LyapigvvGMLQppNptcFsrRaHs/f2pLWHd+F3P
'' SIG '' QKzjeXfBZEd1E8/4l77awoKSV0bKzuUVUBYABWWqeNdh
'' SIG '' 0az7GzfkYVwYq5dA9XpduK/jRvkfEckRVXaFDG9CILRH
'' SIG '' XCa2reCn++DGoOW8sfHWwRQ7sYWfT1NW1NnL2yV4DiZn
'' SIG '' caAEO61Bb8s29sIxmbkXvPTb4ZOLuK6K7M4Os6Dout8B
'' SIG '' PRPKpiWTY4ozbEWfrIHy1SYZgnsraxKr9fkbAqJz/4r0
'' SIG '' La8/ZY7E7iEhN2IY7JkSjZ4SCb3D4u6cC1+LCUUcsjSA
'' SIG '' iPU/LJh8erXOfh0Mxod5WNq5
'' SIG '' End signature block
