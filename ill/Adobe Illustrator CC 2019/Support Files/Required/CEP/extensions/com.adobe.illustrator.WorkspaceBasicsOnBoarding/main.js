var csInterface = new CSInterface();
var resourceBundle = undefined;

//Stop right click.
document.addEventListener("contextmenu", function (e) {
                e.preventDefault();
}, false);
//stop all drag drop support.
document.addEventListener("dragstart", function (e) {
                e.preventDefault();
}, false);

document.addEventListener("dragend", function (e) {
                e.preventDefault();
}, false);

document.addEventListener("dragover", function (e) {
                e.preventDefault();
}, false);

document.addEventListener("dragenter", function (e) {
                e.preventDefault();
}, false);

document.addEventListener("dragleave", function (e) {
                e.preventDefault();
}, false);
document.addEventListener("drop", function (e) {
                e.preventDefault();
}, false);

var localize = function(key, resourceBundle) {
	var localizedStr = resourceBundle[key];
	if (localizedStr) {
		var index = 1;
		while (localizedStr.indexOf("$" + index) !== -1) {
			localizedStr = localizedStr.replace("$" + index, arguments[index]);
			index++;
    	}
    	return localizedStr;
  	} else {
    	return '';
  	}
};

$(document).ready(function readyEvent() {
	resourceBundle = csInterface.initResourceBundle();
});

function SendEvent(data, type) {
    var rsp_event = new CSEvent("PropertiesPanelOnBoardingEvent", "APPLICATION");
    var jsonObj = {
        "Data": data,
        "Type": type
    };
    rsp_event.data = JSON.stringify(jsonObj);
    csInterface.dispatchEvent(rsp_event);
}

function SkipTourClickedFromWorkspaceCard() {
    SendEvent('', "WorkspaceCardSkipTour");
    window.__adobe_cep__.closeExtension();
}

function OkayClickedFromWorkspaceCard() {
    SendEvent('', "WorkspaceCardOkay");
    window.__adobe_cep__.closeExtension();
}
