
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

(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{600:function(module){!function(e,a){module.exports=a()}(this,function(){"use strict";return[{locale:"ru",pluralRuleFunction:function(e,a){var t=(e+"").split("."),r=t[0],o=!t[1],n=r.slice(-1),l=r.slice(-2);return a?"other":o&&1==n&&11!=l?"one":o&&2<=n&&4>=n&&(12>l||14<l)?"few":o&&0==n||o&&5<=n&&9>=n||o&&11<=l&&14>=l?"many":"other"},fields:{year:{displayName:"\u0433\u043E\u0434",relative:{0:"\u0432 \u044D\u0442\u043E\u043C \u0433\u043E\u0434\u0443",1:"\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u0433\u043E\u0434\u0443","-1":"\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u043C \u0433\u043E\u0434\u0443"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043E\u0434",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043E\u0434\u0430",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043B\u0435\u0442",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0433\u043E\u0434\u0430"},past:{one:"{0} \u0433\u043E\u0434 \u043D\u0430\u0437\u0430\u0434",few:"{0} \u0433\u043E\u0434\u0430 \u043D\u0430\u0437\u0430\u0434",many:"{0} \u043B\u0435\u0442 \u043D\u0430\u0437\u0430\u0434",other:"{0} \u0433\u043E\u0434\u0430 \u043D\u0430\u0437\u0430\u0434"}}},month:{displayName:"\u043C\u0435\u0441\u044F\u0446",relative:{0:"\u0432 \u044D\u0442\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0435",1:"\u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043C\u0435\u0441\u044F\u0446\u0435","-1":"\u0432 \u043F\u0440\u043E\u0448\u043B\u043E\u043C \u043C\u0435\u0441\u044F\u0446\u0435"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u043C\u0435\u0441\u044F\u0446",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u043C\u0435\u0441\u044F\u0446\u0430",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043C\u0435\u0441\u044F\u0446\u0435\u0432",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u043C\u0435\u0441\u044F\u0446\u0430"},past:{one:"{0} \u043C\u0435\u0441\u044F\u0446 \u043D\u0430\u0437\u0430\u0434",few:"{0} \u043C\u0435\u0441\u044F\u0446\u0430 \u043D\u0430\u0437\u0430\u0434",many:"{0} \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u043D\u0430\u0437\u0430\u0434",other:"{0} \u043C\u0435\u0441\u044F\u0446\u0430 \u043D\u0430\u0437\u0430\u0434"}}},day:{displayName:"\u0434\u0435\u043D\u044C",relative:{0:"\u0441\u0435\u0433\u043E\u0434\u043D\u044F",1:"\u0437\u0430\u0432\u0442\u0440\u0430",2:"\u043F\u043E\u0441\u043B\u0435\u0437\u0430\u0432\u0442\u0440\u0430","-2":"\u043F\u043E\u0437\u0430\u0432\u0447\u0435\u0440\u0430","-1":"\u0432\u0447\u0435\u0440\u0430"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u0435\u043D\u044C",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043D\u044F",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043D\u0435\u0439",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0434\u043D\u044F"},past:{one:"{0} \u0434\u0435\u043D\u044C \u043D\u0430\u0437\u0430\u0434",few:"{0} \u0434\u043D\u044F \u043D\u0430\u0437\u0430\u0434",many:"{0} \u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434",other:"{0} \u0434\u043D\u044F \u043D\u0430\u0437\u0430\u0434"}}},hour:{displayName:"\u0447\u0430\u0441",relative:{0:"\u0432 \u044D\u0442\u043E\u043C \u0447\u0430\u0441\u0435"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447\u0430\u0441",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447\u0430\u0441\u0430",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447\u0430\u0441\u043E\u0432",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0447\u0430\u0441\u0430"},past:{one:"{0} \u0447\u0430\u0441 \u043D\u0430\u0437\u0430\u0434",few:"{0} \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434",many:"{0} \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434",other:"{0} \u0447\u0430\u0441\u0430 \u043D\u0430\u0437\u0430\u0434"}}},minute:{displayName:"\u043C\u0438\u043D\u0443\u0442\u0430",relative:{0:"\u0432 \u044D\u0442\u0443 \u043C\u0438\u043D\u0443\u0442\u0443"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u043C\u0438\u043D\u0443\u0442\u0443",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u043C\u0438\u043D\u0443\u0442\u044B",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u043C\u0438\u043D\u0443\u0442",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u043C\u0438\u043D\u0443\u0442\u044B"},past:{one:"{0} \u043C\u0438\u043D\u0443\u0442\u0443 \u043D\u0430\u0437\u0430\u0434",few:"{0} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434",many:"{0} \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434",other:"{0} \u043C\u0438\u043D\u0443\u0442\u044B \u043D\u0430\u0437\u0430\u0434"}}},second:{displayName:"\u0441\u0435\u043A\u0443\u043D\u0434\u0430",relative:{0:"\u0441\u0435\u0439\u0447\u0430\u0441"},relativeTime:{future:{one:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",few:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u044B",many:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043A\u0443\u043D\u0434",other:"\u0447\u0435\u0440\u0435\u0437 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u044B"},past:{one:"{0} \u0441\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434",few:"{0} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434",many:"{0} \u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434",other:"{0} \u0441\u0435\u043A\u0443\u043D\u0434\u044B \u043D\u0430\u0437\u0430\u0434"}}}}},{locale:"ru-BY",parentLocale:"ru"},{locale:"ru-KG",parentLocale:"ru"},{locale:"ru-KZ",parentLocale:"ru"},{locale:"ru-MD",parentLocale:"ru"},{locale:"ru-UA",parentLocale:"ru"}]})}}]);