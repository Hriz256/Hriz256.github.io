var CSLibrary=new CSInterface;function SendEvent(e,t){var n=new CSEvent("VariablesPaletteOnBoardingEvent","APPLICATION"),a={Data:e,Type:t};n.data=JSON.stringify(a),CSLibrary.dispatchEvent(n)}function InformClientAboutPopupHeight(e){SendEvent(document.documentElement.offsetHeight.toString(),e)}function ToastLearnMoreClicked(){SendEvent("","VariablesPaletteToastLearnMoreClicked")}function ShowMeClicked(){SendEvent("","VariablesPaletteToastShowPanelClicked")}function ToastDismissClicked(){SendEvent("","VariablesPaletteToastDismissClicked")}function OkayClicked(){SendEvent("","VariablesPaletteOkayClicked")}function LearnMoreClicked(){SendEvent("","VariablesPaletteCoachLearnMoreClicked")}