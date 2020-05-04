
/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2017 Adobe. All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{766:function(module){!function(e,a){module.exports=a()}(this,function(){"use strict";return[{locale:"ar",pluralRuleFunction:function(e,a){var r=(e+"").split("."),o=+r[0]==e&&r[0].slice(-2);return a?"other":0==e?"zero":1==e?"one":2==e?"two":3<=o&&10>=o?"few":11<=o&&99>=o?"many":"other"},fields:{year:{displayName:"\u0627\u0644\u0633\u0646\u0629",relative:{0:"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629",1:"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0642\u0627\u062F\u0645\u0629","-1":"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0645\u0627\u0636\u064A\u0629"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u0633\u0646\u0629",one:"\u062E\u0644\u0627\u0644 \u0633\u0646\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u062E\u0644\u0627\u0644 \u0633\u0646\u062A\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u0633\u0646\u0648\u0627\u062A",many:"\u062E\u0644\u0627\u0644 {0} \u0633\u0646\u0629",other:"\u062E\u0644\u0627\u0644 {0} \u0633\u0646\u0629"},past:{zero:"\u0642\u0628\u0644 {0} \u0633\u0646\u0629",one:"\u0642\u0628\u0644 \u0633\u0646\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u0642\u0628\u0644 \u0633\u0646\u062A\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u0633\u0646\u0648\u0627\u062A",many:"\u0642\u0628\u0644 {0} \u0633\u0646\u0629",other:"\u0642\u0628\u0644 {0} \u0633\u0646\u0629"}}},month:{displayName:"\u0627\u0644\u0634\u0647\u0631",relative:{0:"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",1:"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0642\u0627\u062F\u0645","-1":"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u0634\u0647\u0631",one:"\u062E\u0644\u0627\u0644 \u0634\u0647\u0631 \u0648\u0627\u062D\u062F",two:"\u062E\u0644\u0627\u0644 \u0634\u0647\u0631\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u0623\u0634\u0647\u0631",many:"\u062E\u0644\u0627\u0644 {0} \u0634\u0647\u0631\u064B\u0627",other:"\u062E\u0644\u0627\u0644 {0} \u0634\u0647\u0631"},past:{zero:"\u0642\u0628\u0644 {0} \u0634\u0647\u0631",one:"\u0642\u0628\u0644 \u0634\u0647\u0631 \u0648\u0627\u062D\u062F",two:"\u0642\u0628\u0644 \u0634\u0647\u0631\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u0623\u0634\u0647\u0631",many:"\u0642\u0628\u0644 {0} \u0634\u0647\u0631\u064B\u0627",other:"\u0642\u0628\u0644 {0} \u0634\u0647\u0631"}}},day:{displayName:"\u064A\u0648\u0645",relative:{0:"\u0627\u0644\u064A\u0648\u0645",1:"\u063A\u062F\u064B\u0627",2:"\u0628\u0639\u062F \u0627\u0644\u063A\u062F","-2":"\u0623\u0648\u0644 \u0623\u0645\u0633","-1":"\u0623\u0645\u0633"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u064A\u0648\u0645",one:"\u062E\u0644\u0627\u0644 \u064A\u0648\u0645 \u0648\u0627\u062D\u062F",two:"\u062E\u0644\u0627\u0644 \u064A\u0648\u0645\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u0623\u064A\u0627\u0645",many:"\u062E\u0644\u0627\u0644 {0} \u064A\u0648\u0645\u064B\u0627",other:"\u062E\u0644\u0627\u0644 {0} \u064A\u0648\u0645"},past:{zero:"\u0642\u0628\u0644 {0} \u064A\u0648\u0645",one:"\u0642\u0628\u0644 \u064A\u0648\u0645 \u0648\u0627\u062D\u062F",two:"\u0642\u0628\u0644 \u064A\u0648\u0645\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u0623\u064A\u0627\u0645",many:"\u0642\u0628\u0644 {0} \u064A\u0648\u0645\u064B\u0627",other:"\u0642\u0628\u0644 {0} \u064A\u0648\u0645"}}},hour:{displayName:"\u0627\u0644\u0633\u0627\u0639\u0627\u062A",relative:{0:"\u0627\u0644\u0633\u0627\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u0633\u0627\u0639\u0629",one:"\u062E\u0644\u0627\u0644 \u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u062E\u0644\u0627\u0644 \u0633\u0627\u0639\u062A\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u0633\u0627\u0639\u0627\u062A",many:"\u062E\u0644\u0627\u0644 {0} \u0633\u0627\u0639\u0629",other:"\u062E\u0644\u0627\u0644 {0} \u0633\u0627\u0639\u0629"},past:{zero:"\u0642\u0628\u0644 {0} \u0633\u0627\u0639\u0629",one:"\u0642\u0628\u0644 \u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u0642\u0628\u0644 \u0633\u0627\u0639\u062A\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u0633\u0627\u0639\u0627\u062A",many:"\u0642\u0628\u0644 {0} \u0633\u0627\u0639\u0629",other:"\u0642\u0628\u0644 {0} \u0633\u0627\u0639\u0629"}}},minute:{displayName:"\u0627\u0644\u062F\u0642\u0627\u0626\u0642",relative:{0:"\u0647\u0630\u0647 \u0627\u0644\u062F\u0642\u064A\u0642\u0629"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u062F\u0642\u064A\u0642\u0629",one:"\u062E\u0644\u0627\u0644 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u062E\u0644\u0627\u0644 \u062F\u0642\u064A\u0642\u062A\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u062F\u0642\u0627\u0626\u0642",many:"\u062E\u0644\u0627\u0644 {0} \u062F\u0642\u064A\u0642\u0629",other:"\u062E\u0644\u0627\u0644 {0} \u062F\u0642\u064A\u0642\u0629"},past:{zero:"\u0642\u0628\u0644 {0} \u062F\u0642\u064A\u0642\u0629",one:"\u0642\u0628\u0644 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u0642\u0628\u0644 \u062F\u0642\u064A\u0642\u062A\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u062F\u0642\u0627\u0626\u0642",many:"\u0642\u0628\u0644 {0} \u062F\u0642\u064A\u0642\u0629",other:"\u0642\u0628\u0644 {0} \u062F\u0642\u064A\u0642\u0629"}}},second:{displayName:"\u0627\u0644\u062B\u0648\u0627\u0646\u064A",relative:{0:"\u0627\u0644\u0622\u0646"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u062B\u0627\u0646\u064A\u0629",one:"\u062E\u0644\u0627\u0644 \u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u062E\u0644\u0627\u0644 \u062B\u0627\u0646\u064A\u062A\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u062B\u0648\u0627\u0646\u064D",many:"\u062E\u0644\u0627\u0644 {0} \u062B\u0627\u0646\u064A\u0629",other:"\u062E\u0644\u0627\u0644 {0} \u062B\u0627\u0646\u064A\u0629"},past:{zero:"\u0642\u0628\u0644 {0} \u062B\u0627\u0646\u064A\u0629",one:"\u0642\u0628\u0644 \u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u0642\u0628\u0644 \u062B\u0627\u0646\u064A\u062A\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u062B\u0648\u0627\u0646\u0650",many:"\u0642\u0628\u0644 {0} \u062B\u0627\u0646\u064A\u0629",other:"\u0642\u0628\u0644 {0} \u062B\u0627\u0646\u064A\u0629"}}}}},{locale:"ar-AE",parentLocale:"ar",fields:{year:{displayName:"\u0627\u0644\u0633\u0646\u0629",relative:{0:"\u0647\u0630\u0647 \u0627\u0644\u0633\u0646\u0629",1:"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062A\u0627\u0644\u064A\u0629","-1":"\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u0645\u0627\u0636\u064A\u0629"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u0633\u0646\u0629",one:"\u062E\u0644\u0627\u0644 \u0633\u0646\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u062E\u0644\u0627\u0644 \u0633\u0646\u062A\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u0633\u0646\u0648\u0627\u062A",many:"\u062E\u0644\u0627\u0644 {0} \u0633\u0646\u0629",other:"\u062E\u0644\u0627\u0644 {0} \u0633\u0646\u0629"},past:{zero:"\u0642\u0628\u0644 {0} \u0633\u0646\u0629",one:"\u0642\u0628\u0644 \u0633\u0646\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u0642\u0628\u0644 \u0633\u0646\u062A\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u0633\u0646\u0648\u0627\u062A",many:"\u0642\u0628\u0644 {0} \u0633\u0646\u0629",other:"\u0642\u0628\u0644 {0} \u0633\u0646\u0629"}}},month:{displayName:"\u0627\u0644\u0634\u0647\u0631",relative:{0:"\u0647\u0630\u0627 \u0627\u0644\u0634\u0647\u0631",1:"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0642\u0627\u062F\u0645","-1":"\u0627\u0644\u0634\u0647\u0631 \u0627\u0644\u0645\u0627\u0636\u064A"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u0634\u0647\u0631",one:"\u062E\u0644\u0627\u0644 \u0634\u0647\u0631 \u0648\u0627\u062D\u062F",two:"\u062E\u0644\u0627\u0644 \u0634\u0647\u0631\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u0623\u0634\u0647\u0631",many:"\u062E\u0644\u0627\u0644 {0} \u0634\u0647\u0631\u064B\u0627",other:"\u062E\u0644\u0627\u0644 {0} \u0634\u0647\u0631"},past:{zero:"\u0642\u0628\u0644 {0} \u0634\u0647\u0631",one:"\u0642\u0628\u0644 \u0634\u0647\u0631 \u0648\u0627\u062D\u062F",two:"\u0642\u0628\u0644 \u0634\u0647\u0631\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u0623\u0634\u0647\u0631",many:"\u0642\u0628\u0644 {0} \u0634\u0647\u0631\u064B\u0627",other:"\u0642\u0628\u0644 {0} \u0634\u0647\u0631"}}},day:{displayName:"\u064A\u0648\u0645",relative:{0:"\u0627\u0644\u064A\u0648\u0645",1:"\u063A\u062F\u064B\u0627",2:"\u0628\u0639\u062F \u0627\u0644\u063A\u062F","-2":"\u0623\u0648\u0644 \u0623\u0645\u0633","-1":"\u0623\u0645\u0633"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u064A\u0648\u0645",one:"\u062E\u0644\u0627\u0644 \u064A\u0648\u0645 \u0648\u0627\u062D\u062F",two:"\u062E\u0644\u0627\u0644 \u064A\u0648\u0645\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u0623\u064A\u0627\u0645",many:"\u062E\u0644\u0627\u0644 {0} \u064A\u0648\u0645\u064B\u0627",other:"\u062E\u0644\u0627\u0644 {0} \u064A\u0648\u0645"},past:{zero:"\u0642\u0628\u0644 {0} \u064A\u0648\u0645",one:"\u0642\u0628\u0644 \u064A\u0648\u0645 \u0648\u0627\u062D\u062F",two:"\u0642\u0628\u0644 \u064A\u0648\u0645\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u0623\u064A\u0627\u0645",many:"\u0642\u0628\u0644 {0} \u064A\u0648\u0645\u064B\u0627",other:"\u0642\u0628\u0644 {0} \u064A\u0648\u0645"}}},hour:{displayName:"\u0627\u0644\u0633\u0627\u0639\u0627\u062A",relative:{0:"\u0627\u0644\u0633\u0627\u0639\u0629 \u0627\u0644\u062D\u0627\u0644\u064A\u0629"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u0633\u0627\u0639\u0629",one:"\u062E\u0644\u0627\u0644 \u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u062E\u0644\u0627\u0644 \u0633\u0627\u0639\u062A\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u0633\u0627\u0639\u0627\u062A",many:"\u062E\u0644\u0627\u0644 {0} \u0633\u0627\u0639\u0629",other:"\u062E\u0644\u0627\u0644 {0} \u0633\u0627\u0639\u0629"},past:{zero:"\u0642\u0628\u0644 {0} \u0633\u0627\u0639\u0629",one:"\u0642\u0628\u0644 \u0633\u0627\u0639\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u0642\u0628\u0644 \u0633\u0627\u0639\u062A\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u0633\u0627\u0639\u0627\u062A",many:"\u0642\u0628\u0644 {0} \u0633\u0627\u0639\u0629",other:"\u0642\u0628\u0644 {0} \u0633\u0627\u0639\u0629"}}},minute:{displayName:"\u0627\u0644\u062F\u0642\u0627\u0626\u0642",relative:{0:"\u0647\u0630\u0647 \u0627\u0644\u062F\u0642\u064A\u0642\u0629"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u062F\u0642\u064A\u0642\u0629",one:"\u062E\u0644\u0627\u0644 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u062E\u0644\u0627\u0644 \u062F\u0642\u064A\u0642\u062A\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u062F\u0642\u0627\u0626\u0642",many:"\u062E\u0644\u0627\u0644 {0} \u062F\u0642\u064A\u0642\u0629",other:"\u062E\u0644\u0627\u0644 {0} \u062F\u0642\u064A\u0642\u0629"},past:{zero:"\u0642\u0628\u0644 {0} \u062F\u0642\u064A\u0642\u0629",one:"\u0642\u0628\u0644 \u062F\u0642\u064A\u0642\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u0642\u0628\u0644 \u062F\u0642\u064A\u0642\u062A\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u062F\u0642\u0627\u0626\u0642",many:"\u0642\u0628\u0644 {0} \u062F\u0642\u064A\u0642\u0629",other:"\u0642\u0628\u0644 {0} \u062F\u0642\u064A\u0642\u0629"}}},second:{displayName:"\u0627\u0644\u062B\u0648\u0627\u0646\u064A",relative:{0:"\u0627\u0644\u0622\u0646"},relativeTime:{future:{zero:"\u062E\u0644\u0627\u0644 {0} \u062B\u0627\u0646\u064A\u0629",one:"\u062E\u0644\u0627\u0644 \u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u062E\u0644\u0627\u0644 \u062B\u0627\u0646\u064A\u062A\u064A\u0646",few:"\u062E\u0644\u0627\u0644 {0} \u062B\u0648\u0627\u0646\u064D",many:"\u062E\u0644\u0627\u0644 {0} \u062B\u0627\u0646\u064A\u0629",other:"\u062E\u0644\u0627\u0644 {0} \u062B\u0627\u0646\u064A\u0629"},past:{zero:"\u0642\u0628\u0644 {0} \u062B\u0627\u0646\u064A\u0629",one:"\u0642\u0628\u0644 \u062B\u0627\u0646\u064A\u0629 \u0648\u0627\u062D\u062F\u0629",two:"\u0642\u0628\u0644 \u062B\u0627\u0646\u064A\u062A\u064A\u0646",few:"\u0642\u0628\u0644 {0} \u062B\u0648\u0627\u0646\u0650",many:"\u0642\u0628\u0644 {0} \u062B\u0627\u0646\u064A\u0629",other:"\u0642\u0628\u0644 {0} \u062B\u0627\u0646\u064A\u0629"}}}}},{locale:"ar-BH",parentLocale:"ar"},{locale:"ar-DJ",parentLocale:"ar"},{locale:"ar-DZ",parentLocale:"ar"},{locale:"ar-EG",parentLocale:"ar"},{locale:"ar-EH",parentLocale:"ar"},{locale:"ar-ER",parentLocale:"ar"},{locale:"ar-IL",parentLocale:"ar"},{locale:"ar-IQ",parentLocale:"ar"},{locale:"ar-JO",parentLocale:"ar"},{locale:"ar-KM",parentLocale:"ar"},{locale:"ar-KW",parentLocale:"ar"},{locale:"ar-LB",parentLocale:"ar"},{locale:"ar-LY",parentLocale:"ar"},{locale:"ar-MA",parentLocale:"ar"},{locale:"ar-MR",parentLocale:"ar"},{locale:"ar-OM",parentLocale:"ar"},{locale:"ar-PS",parentLocale:"ar"},{locale:"ar-QA",parentLocale:"ar"},{locale:"ar-SA",parentLocale:"ar"},{locale:"ar-SD",parentLocale:"ar"},{locale:"ar-SO",parentLocale:"ar"},{locale:"ar-SS",parentLocale:"ar"},{locale:"ar-SY",parentLocale:"ar"},{locale:"ar-TD",parentLocale:"ar"},{locale:"ar-TN",parentLocale:"ar"},{locale:"ar-YE",parentLocale:"ar"}]})}}]);