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

' ExportAllExistingDatasets.vbs

' DESCRIPTION

' This sample exports all Datasets existing in the current 
' document and creates separate Illustrator files for each
' dataset.
'
'*************************************************************

Set appRef = CreateObject("Illustrator.Application")

const DESKTOP = &H0&
set myShell = CreateObject("Shell.Application")
set myDesktopFolder = myShell.Namespace(DESKTOP)
set myDesktopFolderItem = myDesktopFolder.Self

If (appRef.Documents.Count > 0) Then
	Set docRef = appRef.Documents(1)
	'loop thru datasets
	If docRef.DataSets.Count > 0 Then
	
		' Create folder object for path and save the dataset files.
		Set fileSysRef = CreateObject( "Scripting.FileSystemObject" )
		Set desktopFolder = fileSysRef.GetFolder(myDesktopFolderItem.Path)
		If (fileSysRef.FolderExists(desktopFolder & "\ExportedDatasets")) Then
			Set folderRef = fileSysRef.GetFolder( desktopFolder & "\ExportedDatasets")
		Else
			Set folderRef = desktopFolder.Subfolders.Add("ExportedDatasets")
		End If
				
		For i = 1 To docRef.DataSets.Count
			myPath = folderRef & "\" & i & ".pdf"
			docRef.DataSets(i).Display
			docRef.SaveAs (myPath)
		Next
		appRef.DoJavaScript "alert('Exported all datasets to the ExportedDatasets folder on the desktop.')"
		
	Else 
		appRef.DoJavaScript "alert('No datasets in this document!')"
	End If
Else
	appRef.DoJavaScript "alert('No document open. Please open a document with datasets.')"
End If

'' SIG '' Begin signature block
'' SIG '' MIId9wYJKoZIhvcNAQcCoIId6DCCHeQCAQExDzANBglg
'' SIG '' hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
'' SIG '' BgEEAYI3AgEeMCQCAQEEEE7wKRaZJ7VNj+Ws4Q8X66sC
'' SIG '' AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
'' SIG '' SPy0KGD9a461+ezTcg5ycXpmxVENciq6DJ1w7dvxgFmg
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
'' SIG '' wcW2qhCaRAcn6KrnmF6byWMJV4yCdIV7YouSIvcFLeIw
'' SIG '' NgYKKwYBBAGCNwIBDDEoMCagJIAiAEEAZABvAGIAZQAg
'' SIG '' AEkAbABsAHUAcwB0AHIAYQB0AG8AcjANBgkqhkiG9w0B
'' SIG '' AQEFAASCAQAsk1dZL1VhrT+WBSkP1D2yFHEAfw+nZQC8
'' SIG '' WCOZITWd5IwR+tXQ42R16VTpeu+Eg6g20ByX7KHZBoAi
'' SIG '' gizGkcAXxxegtlWDToFX06YEbtO8RVZug4ASemnZj3Xp
'' SIG '' 5/FtEW+korehBS7FaQ7nxOnv1j/IWPE6FS5qT58EaFvv
'' SIG '' KJyty7vewy7Ugzu2clszgGOUk/hVObRBmujzHVCBuIu7
'' SIG '' JxnxypTunChFfGI0s9+Q91fdlOdMFxVjyQ+S2o/bVZVR
'' SIG '' O+4r1TGXMOc05SEbvYgVeMV7cVCEdKIA/rZ84FxRnu9+
'' SIG '' 9cKDzQdJQSUqFdR/tvVdXizY+Yb7j3bVo5fImWywJHSU
'' SIG '' oYIOPTCCDjkGCisGAQQBgjcDAwExgg4pMIIOJQYJKoZI
'' SIG '' hvcNAQcCoIIOFjCCDhICAQMxDTALBglghkgBZQMEAgEw
'' SIG '' ggEPBgsqhkiG9w0BCRABBKCB/wSB/DCB+QIBAQYLYIZI
'' SIG '' AYb4RQEHFwMwMTANBglghkgBZQMEAgEFAAQgQMOFiVx7
'' SIG '' zcrXvebkgGhCtiz/jgBipU9puc3grsQ7YJQCFQDIDqT1
'' SIG '' kEszzhCt/HZVuZPhoHgJHRgPMjAxODA5MjMxNjE2MTla
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
'' SIG '' MTlaMC8GCSqGSIb3DQEJBDEiBCC+Gz+ZPHr6q5rm7l+0
'' SIG '' 5pYDl8FDIc83xH7d7nx6jm1lBTA3BgsqhkiG9w0BCRAC
'' SIG '' LzEoMCYwJDAiBCDPesF60Efs1f3DaCIDGxLU7weLbytM
'' SIG '' XmukH4/yz0utZzALBgkqhkiG9w0BAQEEggEAL7GIWls3
'' SIG '' gDTrXivW4Xdd1xCGS1upASUlmR97kCBj1cCfelStwSIT
'' SIG '' TG7DLJoTHFDcWgSbc9yOlwIlmoI71yHZ6p7YQE2rWnoX
'' SIG '' Kc3gQ3ggHBX/49gqaxrGk4gfpVuyipQfIwbCVzyDWfbK
'' SIG '' Nc+p5liiuO3SsPNnRPUDwYeLojAyptDr7G5AF/bBLBka
'' SIG '' H9EIU28zz+aP7dC3ZMNxEaRYqw5FkRBVBKvmhbnryr5b
'' SIG '' taBjsdVNxnZVuu6NIFDVy0sV2r+4QjjVjFVCLpgRpxLS
'' SIG '' jvf60YUuzrbUeZP5Ty7/lekkD7/3Rq3HkVIQLwUvEnyU
'' SIG '' FuvQYuDbfKW0jzwMuSRcR50Rig==
'' SIG '' End signature block
