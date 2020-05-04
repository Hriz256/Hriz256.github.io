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

' ExportAsDWG.vbs

' DESCRIPTION

' Creates a new document and exports it to AutoCAD DWG file.

' ************************************************************/

Set appRef = CreateObject("Illustrator.Application")
Set fileSystemObject = CreateObject("Scripting.FileSystemObject")
Set docRef = appRef.Documents.Add
Set groupItems = docRef.GroupItems
Set groupRef = groupItems.Add
Set pathItems = groupRef.PathItems

' Create new drawing on artboard.
Set pathRef1 = pathItems.Add
pathRef1.SetEntirePath(Array(Array(52.37, 438.33),Array(262.7, 395.03),Array(262.7, 481.63),Array(52.37, 438.33),Array(262.7, 438.33)))
								
Set pathRef2 = pathItems.Add
pathRef2.SetEntirePath(Array(Array(306, 691.97),Array(262.7, 481.63),Array(349.3, 481.63),Array(306, 691.97),Array(306, 481.63)))
								
Set pathRef3 = pathItems.Add
pathRef3.SetEntirePath(Array(Array(559.63, 438.33),Array(349.3, 481.63),Array(349.3, 395.03),Array(559.63, 438.33),Array(349.3, 438.33)))
								
Set pathRef4 = pathItems.Add
pathRef4.SetEntirePath(Array(Array(306, 184.7),Array(349.3, 395.03),Array(262.7, 395.03),Array(306, 184.7),Array(306, 395.03)))		

' Add a new layer containing art

Set layerRef = docRef.Layers.Add
Set pathItems = layerRef.PathItems
						
Set pathRef5 = pathItems.Add
pathRef5.SetEntirePath(Array(Array(262.7, 481.63),Array(349.3, 395.03)))
								
Set pathRef6 = pathItems.Add
pathRef6.SetEntirePath(Array(Array(262.7, 395.03),Array(349.3, 481.63)))
							

' Creating a folder browser in VBScript can be a problem (relying on either Windows API calls
' or use of ActiveX controls which may not be present on a given system). Instead, use
' Illustrator's built-in JavaScript to display a file browser. DoJavaScript can return a value,
' in this example it's the platform specific full path to the chosen export folder.
' Export document to DWG file.
doJavaScript = "var destFolder = Folder.selectDialog(""Select the folder to export the AutoCAD DWG file to:""); if (destFolder) folderPath = destFolder.fsName;"
destFolder = appRef.DoJavaScript(doJavaScript)
If (fileSystemObject.FolderExists(destFolder)) Then
	destFile = destFolder + "\ExportAsDWG.dwg"
	Set exportAutoCADOptions = CreateObject("Illustrator.ExportOptionsAutoCAD")
	exportAutoCADOptions.ExportFileFormat = 1 'aiDWG
	exportAutoCADOptions.ExportOption = 1 ' aiMaximumEditability
	exportAutoCADOptions.version = 3 ' aiAutoCADRelease18
	docRef.Export destFile, 8, exportAutoCADOptions
End If
'' SIG '' Begin signature block
'' SIG '' MIId9wYJKoZIhvcNAQcCoIId6DCCHeQCAQExDzANBglg
'' SIG '' hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
'' SIG '' BgEEAYI3AgEeMCQCAQEEEE7wKRaZJ7VNj+Ws4Q8X66sC
'' SIG '' AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
'' SIG '' k+wi+++3PqFwVYo4iM3iQsaSAlGSbfk9KjHVo3fkk2ig
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
'' SIG '' kjCCEI4CAQEwgYAwbDELMAkGA1UEBhMCVVMxFTATBgNV
'' SIG '' BAoTDERpZ2lDZXJ0IEluYzEZMBcGA1UECxMQd3d3LmRp
'' SIG '' Z2ljZXJ0LmNvbTErMCkGA1UEAxMiRGlnaUNlcnQgRVYg
'' SIG '' Q29kZSBTaWduaW5nIENBIChTSEEyKQIQCyi/yoIU43Oh
'' SIG '' IKQWlL0I0TANBglghkgBZQMEAgEFAKCBojAZBgkqhkiG
'' SIG '' 9w0BCQMxDAYKKwYBBAGCNwIBBDAcBgorBgEEAYI3AgEL
'' SIG '' MQ4wDAYKKwYBBAGCNwIBFTAvBgkqhkiG9w0BCQQxIgQg
'' SIG '' hJS3HCwo3Kz6xVizjUSZvP0Y9wFhoAerElII/2r4osww
'' SIG '' NgYKKwYBBAGCNwIBDDEoMCagJIAiAEEAZABvAGIAZQAg
'' SIG '' AEkAbABsAHUAcwB0AHIAYQB0AG8AcjANBgkqhkiG9w0B
'' SIG '' AQEFAASCAQCL6xrZZuOT4dJGmq1CFfwEwVciQj/MZlE0
'' SIG '' N3vi7WpxKOPtplCu02Uwuzx+Vl9ap3LhiVPcRwiGSAuE
'' SIG '' v8gwCKi10ZzEcSZSUJHeA5wz0C6egTkTJeR+Sv0zoxAO
'' SIG '' eA+cf8mu0EbdyhDSnwEW58mB26CasbLhM3ri1jlWUplz
'' SIG '' NMzEbXZkEsoOe5Jyyrgm9V7sI0tjxXzaZzCX9Zdxwwhz
'' SIG '' mH63lV8MTnQkoQ6YfKUC3pOJsTysVvFOkFXc314RqiwZ
'' SIG '' vneOt0rITbLanc5/sD0K5bqq+VESGYhFso6keOrJzqXb
'' SIG '' ETmkeHGFS+D4I1PwJp4yhWfRbOl5qpYT4CICuNFH5cEw
'' SIG '' oYIOPTCCDjkGCisGAQQBgjcDAwExgg4pMIIOJQYJKoZI
'' SIG '' hvcNAQcCoIIOFjCCDhICAQMxDTALBglghkgBZQMEAgEw
'' SIG '' ggEPBgsqhkiG9w0BCRABBKCB/wSB/DCB+QIBAQYLYIZI
'' SIG '' AYb4RQEHFwMwMTANBglghkgBZQMEAgEFAAQgz9HmBUGL
'' SIG '' ei82b9Snm/tW+5JXAY9YTVUvfO2hICsO9VACFQClJnHe
'' SIG '' CpyIlEZDGbgjFv4CbkY0fxgPMjAxODA5MjMxNjE2Mjla
'' SIG '' MAMCAR6ggYakgYMwgYAxCzAJBgNVBAYTAlVTMR0wGwYD
'' SIG '' VQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjEfMB0GA1UE
'' SIG '' CxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29yazExMC8GA1UE
'' SIG '' AxMoU3ltYW50ZWMgU0hBMjU2IFRpbWVTdGFtcGluZyBT
'' SIG '' aWduZXIgLSBHM6CCCoswggU4MIIEIKADAgECAhB7BbHU
'' SIG '' SWhRRPfJidKcGZ0SMA0GCSqGSIb3DQEBCwUAMIG9MQsw
'' SIG '' CQYDVQQGEwJVUzEXMBUGA1UEChMOVmVyaVNpZ24sIElu
'' SIG '' Yy4xHzAdBgNVBAsTFlZlcmlTaWduIFRydXN0IE5ldHdv
'' SIG '' cmsxOjA4BgNVBAsTMShjKSAyMDA4IFZlcmlTaWduLCBJ
'' SIG '' bmMuIC0gRm9yIGF1dGhvcml6ZWQgdXNlIG9ubHkxODA2
'' SIG '' BgNVBAMTL1ZlcmlTaWduIFVuaXZlcnNhbCBSb290IENl
'' SIG '' cnRpZmljYXRpb24gQXV0aG9yaXR5MB4XDTE2MDExMjAw
'' SIG '' MDAwMFoXDTMxMDExMTIzNTk1OVowdzELMAkGA1UEBhMC
'' SIG '' VVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9u
'' SIG '' MR8wHQYDVQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3Jr
'' SIG '' MSgwJgYDVQQDEx9TeW1hbnRlYyBTSEEyNTYgVGltZVN0
'' SIG '' YW1waW5nIENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
'' SIG '' MIIBCgKCAQEAu1mdWVVPnYxyXRqBoutV87ABrTxxrDKP
'' SIG '' BWuGmicAMpdqTclkFEspu8LZKbku7GOz4c8/C1aQ+GIb
'' SIG '' fuumB+Lef15tQDjUkQbnQXx5HMvLrRu/2JWR8/DubPit
'' SIG '' ljkuf8EnuHg5xYSl7e2vh47Ojcdt6tKYtTofHjmdw/Sa
'' SIG '' qPSE4cTRfHHGBim0P+SDDSbDewg+TfkKtzNJ/8o71PWy
'' SIG '' m0vhiJka9cDpMxTW38eA25Hu/rySV3J39M2ozP4J9ZM3
'' SIG '' vpWIasXc9LFL1M7oCZFftYR5NYp4rBkyjyPBMkEbWQ6p
'' SIG '' PrHM+dYr77fY5NUdbRE6kvaTyZzjSO67Uw7UNpeGeMWh
'' SIG '' NwIDAQABo4IBdzCCAXMwDgYDVR0PAQH/BAQDAgEGMBIG
'' SIG '' A1UdEwEB/wQIMAYBAf8CAQAwZgYDVR0gBF8wXTBbBgtg
'' SIG '' hkgBhvhFAQcXAzBMMCMGCCsGAQUFBwIBFhdodHRwczov
'' SIG '' L2Quc3ltY2IuY29tL2NwczAlBggrBgEFBQcCAjAZGhdo
'' SIG '' dHRwczovL2Quc3ltY2IuY29tL3JwYTAuBggrBgEFBQcB
'' SIG '' AQQiMCAwHgYIKwYBBQUHMAGGEmh0dHA6Ly9zLnN5bWNk
'' SIG '' LmNvbTA2BgNVHR8ELzAtMCugKaAnhiVodHRwOi8vcy5z
'' SIG '' eW1jYi5jb20vdW5pdmVyc2FsLXJvb3QuY3JsMBMGA1Ud
'' SIG '' JQQMMAoGCCsGAQUFBwMIMCgGA1UdEQQhMB+kHTAbMRkw
'' SIG '' FwYDVQQDExBUaW1lU3RhbXAtMjA0OC0zMB0GA1UdDgQW
'' SIG '' BBSvY9bKo06FcuCnvEHzKaI4f4B1YjAfBgNVHSMEGDAW
'' SIG '' gBS2d/ppSEefUxLVwuoHMnYH0ZcHGTANBgkqhkiG9w0B
'' SIG '' AQsFAAOCAQEAdeqwLdU0GVwyRf4O4dRPpnjBb9fq3dxP
'' SIG '' 86HIgYj3p48V5kApreZd9KLZVmSEcTAq3R5hF2YgVgaY
'' SIG '' GY1dcfL4l7wJ/RyRR8ni6I0D+8yQL9YKbE4z7Na0k8hM
'' SIG '' kGNIOUAhxN3WbomYPLWYl+ipBrcJyY9TV0GQL+EeTU7c
'' SIG '' yhB4bEJu8LbF+GFcUvVO9muN90p6vvPN/QPX2fYDqA/j
'' SIG '' U/cKdezGdS6qZoUEmbf4Blfhxg726K/a7JsYH6q54zoA
'' SIG '' v86KlMsB257HOLsPUqvR45QDYApNoP4nbRQy/D+XQOG/
'' SIG '' mYnb5DkUvdrk08PqK1qzlVhVBH3HmuwjA42FKtL/rqlh
'' SIG '' gTCCBUswggQzoAMCAQICEHvU5a+6zAc/oQEjBCJBTRIw
'' SIG '' DQYJKoZIhvcNAQELBQAwdzELMAkGA1UEBhMCVVMxHTAb
'' SIG '' BgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9uMR8wHQYD
'' SIG '' VQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3JrMSgwJgYD
'' SIG '' VQQDEx9TeW1hbnRlYyBTSEEyNTYgVGltZVN0YW1waW5n
'' SIG '' IENBMB4XDTE3MTIyMzAwMDAwMFoXDTI5MDMyMjIzNTk1
'' SIG '' OVowgYAxCzAJBgNVBAYTAlVTMR0wGwYDVQQKExRTeW1h
'' SIG '' bnRlYyBDb3Jwb3JhdGlvbjEfMB0GA1UECxMWU3ltYW50
'' SIG '' ZWMgVHJ1c3QgTmV0d29yazExMC8GA1UEAxMoU3ltYW50
'' SIG '' ZWMgU0hBMjU2IFRpbWVTdGFtcGluZyBTaWduZXIgLSBH
'' SIG '' MzCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
'' SIG '' AK8Oiqr43L9pe1QXcUcJvY08gfh0FXdnkJz93k4Cnkt2
'' SIG '' 9uU2PmXVJCBtMPndHYPpPydKM05tForkjUCNIqq+pwsb
'' SIG '' 0ge2PLUaJCj4G3JRPcgJiCYIOvn6QyN1R3AMs19bjwgd
'' SIG '' ckhXZU2vAjxA9/TdMjiTP+UspvNZI8uA3hNN+RDJqgoY
'' SIG '' bFVhV9HxAizEtavybCPSnw0PGWythWJp/U6FwYpSMatb
'' SIG '' 2Ml0UuNXbCK/VX9vygarP0q3InZl7Ow28paVgSYs/buY
'' SIG '' qgE4068lQJsJU/ApV4VYXuqFSEEhh+XetNMmsntAU1h5
'' SIG '' jlIxBk2UA0XEzjwD7LcA8joixbRv5e+wipsCAwEAAaOC
'' SIG '' AccwggHDMAwGA1UdEwEB/wQCMAAwZgYDVR0gBF8wXTBb
'' SIG '' BgtghkgBhvhFAQcXAzBMMCMGCCsGAQUFBwIBFhdodHRw
'' SIG '' czovL2Quc3ltY2IuY29tL2NwczAlBggrBgEFBQcCAjAZ
'' SIG '' GhdodHRwczovL2Quc3ltY2IuY29tL3JwYTBABgNVHR8E
'' SIG '' OTA3MDWgM6Axhi9odHRwOi8vdHMtY3JsLndzLnN5bWFu
'' SIG '' dGVjLmNvbS9zaGEyNTYtdHNzLWNhLmNybDAWBgNVHSUB
'' SIG '' Af8EDDAKBggrBgEFBQcDCDAOBgNVHQ8BAf8EBAMCB4Aw
'' SIG '' dwYIKwYBBQUHAQEEazBpMCoGCCsGAQUFBzABhh5odHRw
'' SIG '' Oi8vdHMtb2NzcC53cy5zeW1hbnRlYy5jb20wOwYIKwYB
'' SIG '' BQUHMAKGL2h0dHA6Ly90cy1haWEud3Muc3ltYW50ZWMu
'' SIG '' Y29tL3NoYTI1Ni10c3MtY2EuY2VyMCgGA1UdEQQhMB+k
'' SIG '' HTAbMRkwFwYDVQQDExBUaW1lU3RhbXAtMjA0OC02MB0G
'' SIG '' A1UdDgQWBBSlEwGpn4XMG24WHl87Map5NgB7HTAfBgNV
'' SIG '' HSMEGDAWgBSvY9bKo06FcuCnvEHzKaI4f4B1YjANBgkq
'' SIG '' hkiG9w0BAQsFAAOCAQEARp6v8LiiX6KZSM+oJ0shzbK5
'' SIG '' pnJwYy/jVSl7OUZO535lBliLvFeKkg0I2BC6NiT6Cnv7
'' SIG '' O9Niv0qUFeaC24pUbf8o/mfPcT/mMwnZolkQ9B5K/mXM
'' SIG '' 3tRr41IpdQBKK6XMy5voqU33tBdZkkHDtz+G5vbAf0Q8
'' SIG '' RlwXWuOkO9VpJtUhfeGAZ35irLdOLhWa5Zwjr1sR6nGp
'' SIG '' QfkNeTipoQ3PtLHaPpp6xyLFdM3fRwmGxPyRJbIblumF
'' SIG '' COjd6nRgbmClVnoNyERY3Ob5SBSe5b/eAL13sZgUchQk
'' SIG '' 38cRLB8AP8NLFMZnHMweBqOQX1xUiz7jM1uCD8W3hgJO
'' SIG '' cZ/pZkU/djGCAlowggJWAgEBMIGLMHcxCzAJBgNVBAYT
'' SIG '' AlVTMR0wGwYDVQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlv
'' SIG '' bjEfMB0GA1UECxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29y
'' SIG '' azEoMCYGA1UEAxMfU3ltYW50ZWMgU0hBMjU2IFRpbWVT
'' SIG '' dGFtcGluZyBDQQIQe9Tlr7rMBz+hASMEIkFNEjALBglg
'' SIG '' hkgBZQMEAgGggaQwGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
'' SIG '' DQEJEAEEMBwGCSqGSIb3DQEJBTEPFw0xODA5MjMxNjE2
'' SIG '' MjlaMC8GCSqGSIb3DQEJBDEiBCC7u19lQ4+Zo1XtmNaT
'' SIG '' b1li8fYqzpLW3UBMvf5KZZKFDzA3BgsqhkiG9w0BCRAC
'' SIG '' LzEoMCYwJDAiBCDEdM52AH0COU4NpeTefBTGgPniggE8
'' SIG '' /vZT7123H99h+DALBgkqhkiG9w0BAQEEggEAlqsVpLHf
'' SIG '' /HMmT9YGKEWul8+jga4dJdledHgud4VcImmkVp7w7Dvg
'' SIG '' MP2m0q2gaIw2gnXIItow5f3DDRB65QQ5oo0GzN3LZypn
'' SIG '' Kp/Gy8oJIbTZbA9bASL4PHKOeDtE5Qh3tbG6YR7+N2PT
'' SIG '' fHhJp1wnh9ileiICQYvngLuD8K4E2B5ENEgKDYFWpaNU
'' SIG '' rl3tWyufnwXsA1vl1Ra3ohXTxzso1BE4lCrLkwVRpOy2
'' SIG '' UXdvHsBFNjFSh6OOWfLr0O6THI0qs6BuUdUpxOR0whL3
'' SIG '' 6aA9RI1S9tmV2zR+bBbamGzBIWvqC0g7vXsCF1iSKH3A
'' SIG '' xc/KV5YE7MZPRdtajJd+M7C8Sg==
'' SIG '' End signature block