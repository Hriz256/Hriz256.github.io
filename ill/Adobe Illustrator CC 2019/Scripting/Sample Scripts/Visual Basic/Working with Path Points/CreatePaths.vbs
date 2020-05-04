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

' CreatePaths.vbs

' DESCRIPTION

' This example shows how to create a path of straight lines and
' how to create a path with smooth lines.
'
'*************************************************************

Set appRef = CreateObject("Illustrator.Application")
Set docRef = appRef.Documents.Add

Rem Create a color to use for the paths

Set greenColor = CreateObject("Illustrator.CMYKColor")
greenColor.Black = 0
greenColor.Cyan = 81.96
greenColor.Magenta = 0
greenColor.Yellow = 100

Rem Create the first path from 4 straight lines

Set linePath = appRef.ActiveDocument.PathItems.Add
linePath.SetEntirePath Array(Array(100, 100), _
			Array(300, 300), _
			Array(100, 300), _
			Array(300, 100))
linePath.Closed = False
linePath.Stroked = True
linePath.StrokeWidth = 2
linePath.StrokeColor = greenColor
linePath.Filled = False
linePath.StrokeJoin = 3 ' aiRoundEndJoin

Rem Create the smooth path
greenColor.Yellow = 32

Set smoothPath = appRef.ActiveDocument.PathItems.Add

smoothPath.Closed = False
smoothPath.Stroked = True
smoothPath.StrokeWidth = 2
smoothPath.StrokeColor = greenColor
smoothPath.Filled = False

' Create the PathPoints that the smooth path is constructed from

Set newPathPoint = smoothPath.PathPoints.Add
newPathPoint.Anchor = Array(100, 100)
newPathPoint.LeftDirection = Array(100, 20)
newPathPoint.RightDirection = Array(100, 180)
newPathPoint.PointType = 2 ' aiSmooth

Set newPathPoint = smoothPath.PathPoints.Add
newPathPoint.Anchor = Array(300, 300)
newPathPoint.LeftDirection = Array(330, 250)
newPathPoint.RightDirection = Array(270, 350)
newPathPoint.PointType = 2 ' aiSmooth

Set newPathPoint = smoothPath.PathPoints.Add
newPathPoint.Anchor = Array(100, 300)
newPathPoint.LeftDirection = Array(130, 350)
newPathPoint.RightDirection = Array(70, 250)
newPathPoint.PointType = 2 ' aiSmooth

Set newPathPoint = smoothPath.PathPoints.Add
newPathPoint.Anchor = Array(300, 100)
newPathPoint.LeftDirection = Array(300, 180)
newPathPoint.RightDirection = Array(300, 20)
newPathPoint.PointType = 2 ' aiSmooth


'' SIG '' Begin signature block
'' SIG '' MIId9wYJKoZIhvcNAQcCoIId6DCCHeQCAQExDzANBglg
'' SIG '' hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
'' SIG '' BgEEAYI3AgEeMCQCAQEEEE7wKRaZJ7VNj+Ws4Q8X66sC
'' SIG '' AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
'' SIG '' 2oyxOZvhHeBUU7Vv1GChEliBXb7tTa+J1E6kufNE2SOg
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
'' SIG '' PRHRo1JmUcwkznvrzN52y1oQawTShullmXWVOzbAAbEw
'' SIG '' NgYKKwYBBAGCNwIBDDEoMCagJIAiAEEAZABvAGIAZQAg
'' SIG '' AEkAbABsAHUAcwB0AHIAYQB0AG8AcjANBgkqhkiG9w0B
'' SIG '' AQEFAASCAQArJBGRBWGgqHQK1qBwRGRFMfNNMr+dUoho
'' SIG '' K+7n8b7Fi4Vpv9GtCp6hv/PXomTMKftLj8rEySqlCmBW
'' SIG '' Ekkv799UM3zcQEd3L+VxD7fyvpss8EJhzaL3pXFM6IFb
'' SIG '' +97NM2hi7jdwRmanEU09pxA1F/T7y/TC9075/SL6RLDI
'' SIG '' qTqFT5yqhXI4sg+XjU1DQFwYDxqmZbKFaEQqJrYqR0Ap
'' SIG '' b4S/lVPaLZH9Luh+L/7hZ+vVT9r0itfUYo8Dg0KWnxh+
'' SIG '' Jq2YRzJPjBwqzWKpeEPzIiZEReur0DFt5VyFPlmgXb/W
'' SIG '' 8/0gLqAiE/rcd5+lzJlP2P9MT+2f80B1E8gif+HJD759
'' SIG '' oYIOPTCCDjkGCisGAQQBgjcDAwExgg4pMIIOJQYJKoZI
'' SIG '' hvcNAQcCoIIOFjCCDhICAQMxDTALBglghkgBZQMEAgEw
'' SIG '' ggEPBgsqhkiG9w0BCRABBKCB/wSB/DCB+QIBAQYLYIZI
'' SIG '' AYb4RQEHFwMwMTANBglghkgBZQMEAgEFAAQgBi29H6i7
'' SIG '' 9kMunxdu0geH6g8iJgA6v8alQ0y13za/DagCFQCwt3rA
'' SIG '' cYtPfo9ulz3bPZqKHn/R8BgPMjAxODA5MjMxNjE2MTla
'' SIG '' MAMCAR6ggYakgYMwgYAxCzAJBgNVBAYTAlVTMR0wGwYD
'' SIG '' VQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjEfMB0GA1UE
'' SIG '' CxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29yazExMC8GA1UE
'' SIG '' AxMoU3ltYW50ZWMgU0hBMjU2IFRpbWVTdGFtcGluZyBT
'' SIG '' aWduZXIgLSBHMqCCCoswggU4MIIEIKADAgECAhB7BbHU
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
'' SIG '' gTCCBUswggQzoAMCAQICEFRY8qrXQdZEvISpe6CWUuYw
'' SIG '' DQYJKoZIhvcNAQELBQAwdzELMAkGA1UEBhMCVVMxHTAb
'' SIG '' BgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9uMR8wHQYD
'' SIG '' VQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3JrMSgwJgYD
'' SIG '' VQQDEx9TeW1hbnRlYyBTSEEyNTYgVGltZVN0YW1waW5n
'' SIG '' IENBMB4XDTE3MDEwMjAwMDAwMFoXDTI4MDQwMTIzNTk1
'' SIG '' OVowgYAxCzAJBgNVBAYTAlVTMR0wGwYDVQQKExRTeW1h
'' SIG '' bnRlYyBDb3Jwb3JhdGlvbjEfMB0GA1UECxMWU3ltYW50
'' SIG '' ZWMgVHJ1c3QgTmV0d29yazExMC8GA1UEAxMoU3ltYW50
'' SIG '' ZWMgU0hBMjU2IFRpbWVTdGFtcGluZyBTaWduZXIgLSBH
'' SIG '' MjCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
'' SIG '' AJnz/NgECQOG+ddcppPAQnzqfGPPXQDijvPAkN+PKfUY
'' SIG '' 6pS3kuXXsKBzgejpCptKfAH/nY+kOacO6kX0Igw6cO05
'' SIG '' RYvkxRtc8EVoRiQFY3abHPyebCqxVuWKf1JxrvI11UYj
'' SIG '' BhzPSC0dtM242XYjjhz/Pr+7BlxpB6ZlDvhern0u7U2u
'' SIG '' Ne/J1wBC/SiVDp9dckIJvMPaRNLtzEeE5PzKLaxYvq73
'' SIG '' rtlEDQi3wnfWGkNw0W4D3lKSxBAIcdm6IlXyH7ztm507
'' SIG '' 4l4dTIP/lw97C+dVg07SDeu+1+yubke5n9+l1lG8BFXt
'' SIG '' /ydwTMntKksT4bG5TA/JAe5VZV9pAnhmyz8CAwEAAaOC
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
'' SIG '' HTAbMRkwFwYDVQQDExBUaW1lU3RhbXAtMjA0OC01MB0G
'' SIG '' A1UdDgQWBBQJtcH+lnKXKUOayeACuq74/S+69jAfBgNV
'' SIG '' HSMEGDAWgBSvY9bKo06FcuCnvEHzKaI4f4B1YjANBgkq
'' SIG '' hkiG9w0BAQsFAAOCAQEAF7MKiOlcWl4gazsKFbJsxamK
'' SIG '' MofTsfQcU66Fvj+b/9e8t5SFtMdSfpTove1hstSnmeTD
'' SIG '' yZPBNT0L6GgKXVaYvbEiO9FEete/8G1RMorVI984ATf2
'' SIG '' 4lMreisRj7dNbHozAxt8awmUF7vk21jUIRNl5+zRJcos
'' SIG '' dZqcf/zJuypoq8R9tM+jyWyn2cQAnIkKd5H0TaL7MTuG
'' SIG '' bvbmH1ADhpu/y0Kr5nabcloRAYrG76VvlefdrrrmImXw
'' SIG '' GFkbEcnNgLfYl0cfQgj4rHEfsEZTs9Sy1aOrUHVIEheC
'' SIG '' rc/gQU8yfs2VHL+Rigg9pKdnApbfJEyl0EHAgmCjihcy
'' SIG '' S9O8z6S0jDGCAlowggJWAgEBMIGLMHcxCzAJBgNVBAYT
'' SIG '' AlVTMR0wGwYDVQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlv
'' SIG '' bjEfMB0GA1UECxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29y
'' SIG '' azEoMCYGA1UEAxMfU3ltYW50ZWMgU0hBMjU2IFRpbWVT
'' SIG '' dGFtcGluZyBDQQIQVFjyqtdB1kS8hKl7oJZS5jALBglg
'' SIG '' hkgBZQMEAgGggaQwGgYJKoZIhvcNAQkDMQ0GCyqGSIb3
'' SIG '' DQEJEAEEMBwGCSqGSIb3DQEJBTEPFw0xODA5MjMxNjE2
'' SIG '' MTlaMC8GCSqGSIb3DQEJBDEiBCAq868bOKs3bWhiM6Qp
'' SIG '' Asyd5wfbu0R1JlOycCEpwvJ40TA3BgsqhkiG9w0BCRAC
'' SIG '' LzEoMCYwJDAiBCDPesF60Efs1f3DaCIDGxLU7weLbytM
'' SIG '' XmukH4/yz0utZzALBgkqhkiG9w0BAQEEggEAI9dyISEU
'' SIG '' 9hlp/OTsykQ9L9DeTUaE0D2+4U0lXoWGQFU9XuF8/wAs
'' SIG '' EqWwprz/LbhZtWdaSzoPOadb92Xj//4UEFTbfwXZtsYr
'' SIG '' KaQr7iFvettv+pnW6IPekSdUrsrdiC0GeT/1sUGW+Mhb
'' SIG '' IVdEHktR+4qdcNoBvR3lYXfbZ6bD/+AXyz3Z5flMyBmr
'' SIG '' x9p+DCNKCTM2CE+UejDUeltdajk5UzayLdIMTbpKu8y3
'' SIG '' bTMkScqu0VT8L+mNkNj4tc9BTrt3r1Ga/QGO+4ysSu8q
'' SIG '' ErVNrEyw49YiNVpRlA9dt6282pqodAW8sCYxDqmUXbnv
'' SIG '' 76hm3REM880ywuj48dxfnZ+bqA==
'' SIG '' End signature block
