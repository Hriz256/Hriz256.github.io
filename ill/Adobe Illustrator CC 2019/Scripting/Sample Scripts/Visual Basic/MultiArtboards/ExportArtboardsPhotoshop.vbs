'*************************************************************
' 
' ADOBE SYSTEMS INCORPORATED 
' Copyright 2008-2010 Adobe Systems Incorporated 
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

' ExportArtboardsPhotoshop.vbs

' DESCRIPTION

' Creates a new document containing 3 artboards, adds art to 
' each artboard then exports a selection of artboards to PSD.

'*************************************************************

Set appRef = CreateObject("Illustrator.Application")

' Create new document with 3 artboards
Set docRef = appRef.Documents.Add(1, 612.0, 792.0, 3, 2, 20.0, 3)

' Add a star to each artboard
Set artboardRef = docRef.Artboards(1)
rect = artboardRef.ArtboardRect
Set star1 = docRef.PathItems.Star (rect(0) + 300, rect(1) - 350, 200, 50, 5, false)
Set starColor = CreateObject("Illustrator.RGBColor")
starColor.Red = 255
starColor.Green = 0
starColor.Blue = 0
star1.FillColor = starColor

Set artboardRef = docRef.Artboards(2)
rect = artboardRef.ArtboardRect
Set star2 = docRef.PathItems.Star (rect(0) + 300, rect(1) - 350, 200, 50, 5, false)
starColor.Red = 0
starColor.Green = 255
starColor.Blue = 0
star2.FillColor = starColor

Set artboardRef = docRef.Artboards(3)
rect = artboardRef.ArtboardRect
Set star3 = docRef.PathItems.Star (rect(0) + 300, rect(1) - 350, 200, 50, 5, false)
starColor.Red = 0
starColor.Green = 0
starColor.Blue = 255
star3.FillColor = starColor

' Export the first and third artboards to PSD files
Set fileSystemObject = CreateObject("Scripting.FileSystemObject")

' Creating a folder browser in VBScript can be a problem (relying on either Windows API calls
' or use of ActiveX controls which may not be present on a given system). Instead, use
' Illustrator's built-in JavaScript to display a file browser. DoJavaScript can return a value,
' in this example it's the platform specific full path to the chosen export folder.
' Export the artboards to PSD
destFolder = appRef.DoJavaScript("var destFolder = Folder.selectDialog('Select the folder to export the PSD files to:'); if (destFolder) folderPath = destFolder.fsName;")

If (fileSystemObject.FolderExists(destFolder)) Then
	destFile = destFolder + "\ExportedArtboard"
	Set psdExportOptions = CreateObject("Illustrator.ExportOptionsPhotoshop")
	psdExportOptions.SaveMultipleArtboards = true
	psdExportOptions.ArtboardRange = "1,3"
	docRef.Export destFile, 2, psdExportOptions
End If


'' SIG '' Begin signature block
'' SIG '' MIId9gYJKoZIhvcNAQcCoIId5zCCHeMCAQExDzANBglg
'' SIG '' hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
'' SIG '' BgEEAYI3AgEeMCQCAQEEEE7wKRaZJ7VNj+Ws4Q8X66sC
'' SIG '' AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
'' SIG '' VfpyE0HZBrNYHIEIO6N9XOw5PImi620z7YvPNL+oo5Wg
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
'' SIG '' Jm0+Xfh7GBQJuCbuOB1C5D8ut1DnHjUb4DHA2+UMBjEw
'' SIG '' NgYKKwYBBAGCNwIBDDEoMCagJIAiAEEAZABvAGIAZQAg
'' SIG '' AEkAbABsAHUAcwB0AHIAYQB0AG8AcjANBgkqhkiG9w0B
'' SIG '' AQEFAASCAQBQF+reCcYEJAvZAavv9b5v0AU6aUPV6+3H
'' SIG '' mnaulWEi3F+8gOHs1uC7CrYephME5Hxu8jo7Dk9T+gw1
'' SIG '' a+bm0w8EkFdMiXScMaQWtTcNKgq8dZPEVxdvMFZfhlRZ
'' SIG '' Nb3wEgDvcE8azEw4Nz6ByOsL3pX23X5JTRMXq6LIIRXp
'' SIG '' DTemFtVbHii5a9qixrO+DsjwhIo4qKOPLPCVO0Z7jiDb
'' SIG '' AqAdwlZzmvke8JyBQ3uY77c2wgIOBiSNIsCxdIHohc1I
'' SIG '' 48Ioa06fudkZT6wN1+cTS0UZIMUf3Y5Z91tyMyUbek8o
'' SIG '' PB36SyzPuYKwj7F1XjO7sGVNaarWx57SgzswUtTrmRk2
'' SIG '' oYIOPDCCDjgGCisGAQQBgjcDAwExgg4oMIIOJAYJKoZI
'' SIG '' hvcNAQcCoIIOFTCCDhECAQMxDTALBglghkgBZQMEAgEw
'' SIG '' ggEOBgsqhkiG9w0BCRABBKCB/gSB+zCB+AIBAQYLYIZI
'' SIG '' AYb4RQEHFwMwMTANBglghkgBZQMEAgEFAAQgQ6gldLcO
'' SIG '' ur4l8yO0i0DylOsO07Kkg+Jgwd+MS4Xis28CFGo85vGC
'' SIG '' k1kU4o4H92th5nHFUTgeGA8yMDE4MDkyMzE2MTYyM1ow
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
'' SIG '' M1owLwYJKoZIhvcNAQkEMSIEIBPA8G77/EL10bZs/mJb
'' SIG '' kt5hNROTHo6iZ+rL5PayX6MdMDcGCyqGSIb3DQEJEAIv
'' SIG '' MSgwJjAkMCIEIMR0znYAfQI5Tg2l5N58FMaA+eKCATz+
'' SIG '' 9lPvXbcf32H4MAsGCSqGSIb3DQEBAQSCAQBovsSF9bFu
'' SIG '' nPhTEqQ7bSB1/fnq2kSxB82DF0bVIBdqrmS4rhl6gmOl
'' SIG '' IjF5wLkftfH3qdcC+onWIwLm/EOyC3wHnfwkW0gZrW2U
'' SIG '' pN5FqItTN6VUmaIXV5EOvHzVvx8BoBlRQNLi8MG257M3
'' SIG '' RLGX6V4nwT14s1rWVJ1mybrJIIIZ2xWL00UijV+8j0s/
'' SIG '' nbIhLAdXp6T+PoQH/p4FR1nA6Vn25QNAn/9BepTTd8wM
'' SIG '' UeKG2ZsunOIvbewordbKTE9nkkS1hNlgREHwoJGf5zjU
'' SIG '' ARgOuSNe+5qWSLkAggAqNYg45gPtwuCzb+/yVLqRWKpj
'' SIG '' nNvQb5/Seq+unu/DzYWeDS6k
'' SIG '' End signature block
