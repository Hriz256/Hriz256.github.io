function SendEvent(e,n){var t=new CSEvent("PropertiesPanelOnBoardingEvent","APPLICATION"),i={Data:e,Type:n};t.data=JSON.stringify(i),CSLibrary.dispatchEvent(t)}function SwitchToPreviousWorkspaceClicked(){SendEvent("","SwitchToPreviousWorkspace")}function DismissClicked(){SendEvent("","PropertiesPanelCardDismiss")}function SendHeightEvent(e){var n=window.frameElement,t=element.parentElement;n.height=t.scrollHeight,SendEvent(t.offsetHeight.toString(),e),console.log("height updated called for = "+e)}