document.addEventListener("contextmenu",function(e){e.preventDefault()},!1),document.addEventListener("dragstart",function(e){e.preventDefault()},!1),document.addEventListener("dragend",function(e){e.preventDefault()},!1),document.addEventListener("dragover",function(e){e.preventDefault()},!1),document.addEventListener("dragenter",function(e){e.preventDefault()},!1),document.addEventListener("dragleave",function(e){e.preventDefault()},!1),document.addEventListener("drop",function(e){e.preventDefault()},!1);try{var CSLibrary=new CSInterface}catch(e){console.log(e.message)}function SendEvent(e,n){var t=new CSEvent("OnBoardingEvent","APPLICATION"),a={Type:"ReportInternalEvent",Data:{SMID:SMID,InternalEvent:e+n}};t.data=JSON.stringify(a),CSLibrary.dispatchEvent(t),console.log(t.data);var r=new CSEvent("OnBoardingEvent","APPLICATION");a={Type:"ButtonClickEvent",Data:{SMID:SMID,Button:n,UniqueID:e+n}};r.data=JSON.stringify(a),CSLibrary.dispatchEvent(r),console.log(r.data)}function ResizeLearnPanel(e,n){var t=new CSEvent("OnBoardingEvent","APPLICATION"),a={Type:"ResizeLearnPanel",Data:{Width:e,Height:n}};t.data=JSON.stringify(a),CSLibrary.dispatchEvent(t)}