var CSLibrary=new CSInterface;function InformClientAboutPopupHeight(t){var n=new CSEvent("InAppUpdateUIOnBoardingEvent","APPLICATION"),e={Data:document.documentElement.offsetHeight.toString(),Type:t};n.data=JSON.stringify(e),CSLibrary.dispatchEvent(n)}