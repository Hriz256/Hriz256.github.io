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

' SymbolsFromPageItems.vbs

' DESCRIPTION

' This script will group all of the page items of a document 
' into a new group and then use that new group to create a new 
' symbol and symbol instances.
'
'*************************************************************

' NOTE: Please open a document with pageItems in it before 
'       running this script.

'*************************************************************

Set appRef = CreateObject("Illustrator.Application")

If (appRef.Documents.Count = 0)Then
    myMsg = "alert(""No document open, creating..."")"
    appRef.DoJavaScript myMsg
    Set docRef = appRef.Documents.Add
Else
    Set docRef = appRef.Documents(1)
End if

if(docRef.PageItems.Count = 0) Then
    myMsg = "alert(""No item in document, creating..."")"
    appRef.DoJavaScript myMsg
    Set pathArt = docRef.PathItems.Star(100, 225, 100, 50, 5)
End if
    
    numItems = docRef.PageItems.Count
    
    Set groupRef = docRef.GroupItems.Add
    groupRef.Move docRef, 2
    
    For i = numItems To 1 Step -1
        docRef.PageItems(i).Move groupRef, 2
    Next
    myMsg = "alert(""Duplicating item(s)..."")"
    appRef.DoJavaScript myMsg
    Set symbolRef = docRef.Symbols.Add(docRef.PageItems(1))
    
    Set symbolItemRef = docRef.SymbolItems.Add(symbolRef)
    symbolItemRef.Name = "MyNewSymbolItem"
    symbolItemRef.Duplicate
'' SIG '' Begin signature block
'' SIG '' MIId9gYJKoZIhvcNAQcCoIId5zCCHeMCAQExDzANBglg
'' SIG '' hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
'' SIG '' BgEEAYI3AgEeMCQCAQEEEE7wKRaZJ7VNj+Ws4Q8X66sC
'' SIG '' AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
'' SIG '' mHQQyKy4Xm6tc35EgzIREk8SplBA72/eaJCv4EihVVSg
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
'' SIG '' EQlITW8D4ZlymagblfBHTryqD8cnLI198M/vSQI4IJww
'' SIG '' NgYKKwYBBAGCNwIBDDEoMCagJIAiAEEAZABvAGIAZQAg
'' SIG '' AEkAbABsAHUAcwB0AHIAYQB0AG8AcjANBgkqhkiG9w0B
'' SIG '' AQEFAASCAQCHGrRN4Is/35p4qYZK/st9T0bMnBeWhc+h
'' SIG '' whjXjbwHLPqNc555h6bW9kRnNXjlhN7E3GfDbKIBinlG
'' SIG '' mFokuSPo6ccFc/Q8kyhfUD39oZOmpt5D6MfHWKS2jQtL
'' SIG '' HSrV6yEeBNIAuY42SGB43XEeL7s8wT3/2BjifVN1SCZq
'' SIG '' wKpgAXLDtqwcjKjJVGm1RC1aXmADf2CAFbw3DpOey9bQ
'' SIG '' t53/fmikMmTchWXK2lG6TumsspKJq33v23Jj9MTHp8oc
'' SIG '' VNEXM82mi3yFdAbb/XnXzwL4lXXFcz/ZfE8oykeflWoV
'' SIG '' NMGATyWeY0qcv41z7A7YLQBgMCd71A+n7MDY8kBovJ0X
'' SIG '' oYIOPDCCDjgGCisGAQQBgjcDAwExgg4oMIIOJAYJKoZI
'' SIG '' hvcNAQcCoIIOFTCCDhECAQMxDTALBglghkgBZQMEAgEw
'' SIG '' ggEOBgsqhkiG9w0BCRABBKCB/gSB+zCB+AIBAQYLYIZI
'' SIG '' AYb4RQEHFwMwMTANBglghkgBZQMEAgEFAAQgTBeeF2/u
'' SIG '' ja9sPScGJcPpOxGcs44nz6QR1gMyZDi1RtYCFFkxYE7n
'' SIG '' FHO3PQQwATGyfxIYPnyNGA8yMDE4MDkyMzE2MTYyMVow
'' SIG '' AwIBHqCBhqSBgzCBgDELMAkGA1UEBhMCVVMxHTAbBgNV
'' SIG '' BAoTFFN5bWFudGVjIENvcnBvcmF0aW9uMR8wHQYDVQQL
'' SIG '' ExZTeW1hbnRlYyBUcnVzdCBOZXR3b3JrMTEwLwYDVQQD
'' SIG '' EyhTeW1hbnRlYyBTSEEyNTYgVGltZVN0YW1waW5nIFNp
'' SIG '' Z25lciAtIEcyoIIKizCCBTgwggQgoAMCAQICEHsFsdRJ
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
'' SIG '' MIIFSzCCBDOgAwIBAgIQVFjyqtdB1kS8hKl7oJZS5jAN
'' SIG '' BgkqhkiG9w0BAQsFADB3MQswCQYDVQQGEwJVUzEdMBsG
'' SIG '' A1UEChMUU3ltYW50ZWMgQ29ycG9yYXRpb24xHzAdBgNV
'' SIG '' BAsTFlN5bWFudGVjIFRydXN0IE5ldHdvcmsxKDAmBgNV
'' SIG '' BAMTH1N5bWFudGVjIFNIQTI1NiBUaW1lU3RhbXBpbmcg
'' SIG '' Q0EwHhcNMTcwMTAyMDAwMDAwWhcNMjgwNDAxMjM1OTU5
'' SIG '' WjCBgDELMAkGA1UEBhMCVVMxHTAbBgNVBAoTFFN5bWFu
'' SIG '' dGVjIENvcnBvcmF0aW9uMR8wHQYDVQQLExZTeW1hbnRl
'' SIG '' YyBUcnVzdCBOZXR3b3JrMTEwLwYDVQQDEyhTeW1hbnRl
'' SIG '' YyBTSEEyNTYgVGltZVN0YW1waW5nIFNpZ25lciAtIEcy
'' SIG '' MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
'' SIG '' mfP82AQJA4b511ymk8BCfOp8Y89dAOKO88CQ348p9Rjq
'' SIG '' lLeS5dewoHOB6OkKm0p8Af+dj6Q5pw7qRfQiDDpw7TlF
'' SIG '' i+TFG1zwRWhGJAVjdpsc/J5sKrFW5Yp/UnGu8jXVRiMG
'' SIG '' HM9ILR20zbjZdiOOHP8+v7sGXGkHpmUO+F6ufS7tTa41
'' SIG '' 78nXAEL9KJUOn11yQgm8w9pE0u3MR4Tk/MotrFi+rveu
'' SIG '' 2UQNCLfCd9YaQ3DRbgPeUpLEEAhx2boiVfIfvO2bnTvi
'' SIG '' Xh1Mg/+XD3sL51WDTtIN677X7K5uR7mf36XWUbwEVe3/
'' SIG '' J3BMye0qSxPhsblMD8kB7lVlX2kCeGbLPwIDAQABo4IB
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
'' SIG '' MBsxGTAXBgNVBAMTEFRpbWVTdGFtcC0yMDQ4LTUwHQYD
'' SIG '' VR0OBBYEFAm1wf6WcpcpQ5rJ4AK6rvj9L7r2MB8GA1Ud
'' SIG '' IwQYMBaAFK9j1sqjToVy4Ke8QfMpojh/gHViMA0GCSqG
'' SIG '' SIb3DQEBCwUAA4IBAQAXswqI6VxaXiBrOwoVsmzFqYoy
'' SIG '' h9Ox9BxTroW+P5v/17y3lIW0x1J+lOi97WGy1KeZ5MPJ
'' SIG '' k8E1PQvoaApdVpi9sSI70UR617/wbVEyitUj3zgBN/bi
'' SIG '' Uyt6KxGPt01sejMDG3xrCZQXu+TbWNQhE2Xn7NElyix1
'' SIG '' mpx//Mm7KmirxH20z6PJbKfZxACciQp3kfRNovsxO4Zu
'' SIG '' 9uYfUAOGm7/LQqvmdptyWhEBisbvpW+V592uuuYiZfAY
'' SIG '' WRsRyc2At9iXRx9CCPiscR+wRlOz1LLVo6tQdUgSF4Kt
'' SIG '' z+BBTzJ+zZUcv5GKCD2kp2cClt8kTKXQQcCCYKOKFzJL
'' SIG '' 07zPpLSMMYICWjCCAlYCAQEwgYswdzELMAkGA1UEBhMC
'' SIG '' VVMxHTAbBgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9u
'' SIG '' MR8wHQYDVQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3Jr
'' SIG '' MSgwJgYDVQQDEx9TeW1hbnRlYyBTSEEyNTYgVGltZVN0
'' SIG '' YW1waW5nIENBAhBUWPKq10HWRLyEqXugllLmMAsGCWCG
'' SIG '' SAFlAwQCAaCBpDAaBgkqhkiG9w0BCQMxDQYLKoZIhvcN
'' SIG '' AQkQAQQwHAYJKoZIhvcNAQkFMQ8XDTE4MDkyMzE2MTYy
'' SIG '' MVowLwYJKoZIhvcNAQkEMSIEINhy8QN8oKPB7U2ah+mS
'' SIG '' 4iILHpHrVYs9rSByEiSrjRdTMDcGCyqGSIb3DQEJEAIv
'' SIG '' MSgwJjAkMCIEIM96wXrQR+zV/cNoIgMbEtTvB4tvK0xe
'' SIG '' a6Qfj/LPS61nMAsGCSqGSIb3DQEBAQSCAQAM3vi7i+vv
'' SIG '' oL55OA8Xop3LIs3JAXWwjtzC91p5VwlO6948cU6uuIJB
'' SIG '' Cog65SESFnw9D1eZq0Ji3Q4/9flB/91yeypKvCsIa+pS
'' SIG '' SlsjB3H8edeW5yBx366xqYk56WaUnP5Xewo5UwX95Z35
'' SIG '' z/eo4rdm26Y+3YgNRwcxjYVPOSwicivaFviP5Au/Vcyb
'' SIG '' 0InDjh8Fj/d227Joy87TPWqd6nSB7JAEV2860s8Ncdrd
'' SIG '' zG8A5ce236sprHo54v5AT/UnYMoaeNnMjt+SsBm9wL1B
'' SIG '' yxzJXX3g93uPxIyP5VRiupEwwWimeCZBcG/ySAgDkbDJ
'' SIG '' Wiua8OWDQjO5IIycmrrl/42O
'' SIG '' End signature block
