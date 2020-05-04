
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

(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{576:function(module){!function(e,a){module.exports=a()}(this,function(){"use strict";return[{locale:"sr",pluralRuleFunction:function(e,a){var t=(e+"").split("."),r=t[0],o=t[1]||"",n=!t[1],i=r.slice(-1),l=r.slice(-2),s=o.slice(-1),u=o.slice(-2);return a?"other":n&&1==i&&11!=l||1==s&&11!=u?"one":n&&2<=i&&4>=i&&(12>l||14<l)||2<=s&&4>=s&&(12>u||14<u)?"few":"other"},fields:{year:{displayName:"\u0433\u043E\u0434\u0438\u043D\u0430",relative:{0:"\u043E\u0432\u0435 \u0433\u043E\u0434\u0438\u043D\u0435",1:"\u0441\u043B\u0435\u0434\u0435\u045B\u0435 \u0433\u043E\u0434\u0438\u043D\u0435","-1":"\u043F\u0440\u043E\u0448\u043B\u0435 \u0433\u043E\u0434\u0438\u043D\u0435"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0433\u043E\u0434\u0438\u043D\u0443",few:"\u0437\u0430 {0} \u0433\u043E\u0434\u0438\u043D\u0435",other:"\u0437\u0430 {0} \u0433\u043E\u0434\u0438\u043D\u0430"},past:{one:"\u043F\u0440\u0435 {0} \u0433\u043E\u0434\u0438\u043D\u0435",few:"\u043F\u0440\u0435 {0} \u0433\u043E\u0434\u0438\u043D\u0435",other:"\u043F\u0440\u0435 {0} \u0433\u043E\u0434\u0438\u043D\u0430"}}},month:{displayName:"\u043C\u0435\u0441\u0435\u0446",relative:{0:"\u043E\u0432\u043E\u0433 \u043C\u0435\u0441\u0435\u0446\u0430",1:"\u0441\u043B\u0435\u0434\u0435\u045B\u0435\u0433 \u043C\u0435\u0441\u0435\u0446\u0430","-1":"\u043F\u0440\u043E\u0448\u043B\u043E\u0433 \u043C\u0435\u0441\u0435\u0446\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043C\u0435\u0441\u0435\u0446",few:"\u0437\u0430 {0} \u043C\u0435\u0441\u0435\u0446\u0430",other:"\u0437\u0430 {0} \u043C\u0435\u0441\u0435\u0446\u0438"},past:{one:"\u043F\u0440\u0435 {0} \u043C\u0435\u0441\u0435\u0446\u0430",few:"\u043F\u0440\u0435 {0} \u043C\u0435\u0441\u0435\u0446\u0430",other:"\u043F\u0440\u0435 {0} \u043C\u0435\u0441\u0435\u0446\u0438"}}},day:{displayName:"\u0434\u0430\u043D",relative:{0:"\u0434\u0430\u043D\u0430\u0441",1:"\u0441\u0443\u0442\u0440\u0430",2:"\u043F\u0440\u0435\u043A\u043E\u0441\u0443\u0442\u0440\u0430","-2":"\u043F\u0440\u0435\u043A\u0458\u0443\u0447\u0435","-1":"\u0458\u0443\u0447\u0435"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0434\u0430\u043D",few:"\u0437\u0430 {0} \u0434\u0430\u043D\u0430",other:"\u0437\u0430 {0} \u0434\u0430\u043D\u0430"},past:{one:"\u043F\u0440\u0435 {0} \u0434\u0430\u043D\u0430",few:"\u043F\u0440\u0435 {0} \u0434\u0430\u043D\u0430",other:"\u043F\u0440\u0435 {0} \u0434\u0430\u043D\u0430"}}},hour:{displayName:"\u0441\u0430\u0442",relative:{0:"\u043E\u0432\u043E\u0433 \u0441\u0430\u0442\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0430\u0442",few:"\u0437\u0430 {0} \u0441\u0430\u0442\u0430",other:"\u0437\u0430 {0} \u0441\u0430\u0442\u0438"},past:{one:"\u043F\u0440\u0435 {0} \u0441\u0430\u0442\u0430",few:"\u043F\u0440\u0435 {0} \u0441\u0430\u0442\u0430",other:"\u043F\u0440\u0435 {0} \u0441\u0430\u0442\u0438"}}},minute:{displayName:"\u043C\u0438\u043D\u0443\u0442",relative:{0:"\u043E\u0432\u043E\u0433 \u043C\u0438\u043D\u0443\u0442\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u043C\u0438\u043D\u0443\u0442",few:"\u0437\u0430 {0} \u043C\u0438\u043D\u0443\u0442\u0430",other:"\u0437\u0430 {0} \u043C\u0438\u043D\u0443\u0442\u0430"},past:{one:"\u043F\u0440\u0435 {0} \u043C\u0438\u043D\u0443\u0442\u0430",few:"\u043F\u0440\u0435 {0} \u043C\u0438\u043D\u0443\u0442\u0430",other:"\u043F\u0440\u0435 {0} \u043C\u0438\u043D\u0443\u0442\u0430"}}},second:{displayName:"\u0441\u0435\u043A\u0443\u043D\u0434",relative:{0:"\u0441\u0430\u0434\u0430"},relativeTime:{future:{one:"\u0437\u0430 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u0443",few:"\u0437\u0430 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u0435",other:"\u0437\u0430 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u0438"},past:{one:"\u043F\u0440\u0435 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u0435",few:"\u043F\u0440\u0435 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u0435",other:"\u043F\u0440\u0435 {0} \u0441\u0435\u043A\u0443\u043D\u0434\u0438"}}}}},{locale:"sr-Cyrl",parentLocale:"sr"},{locale:"sr-Cyrl-BA",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-ME",parentLocale:"sr-Cyrl"},{locale:"sr-Cyrl-XK",parentLocale:"sr-Cyrl"},{locale:"sr-Latn",pluralRuleFunction:function(){return"other"},fields:{year:{displayName:"godina",relative:{0:"ove godine",1:"slede\u0107e godine","-1":"pro\u0161le godine"},relativeTime:{future:{one:"za {0} godinu",few:"za {0} godine",other:"za {0} godina"},past:{one:"pre {0} godine",few:"pre {0} godine",other:"pre {0} godina"}}},month:{displayName:"mesec",relative:{0:"ovog meseca",1:"slede\u0107eg meseca","-1":"pro\u0161log meseca"},relativeTime:{future:{one:"za {0} mesec",few:"za {0} meseca",other:"za {0} meseci"},past:{one:"pre {0} meseca",few:"pre {0} meseca",other:"pre {0} meseci"}}},day:{displayName:"dan",relative:{0:"danas",1:"sutra",2:"prekosutra","-2":"prekju\u010De","-1":"ju\u010De"},relativeTime:{future:{one:"za {0} dan",few:"za {0} dana",other:"za {0} dana"},past:{one:"pre {0} dana",few:"pre {0} dana",other:"pre {0} dana"}}},hour:{displayName:"sat",relative:{0:"ovog sata"},relativeTime:{future:{one:"za {0} sat",few:"za {0} sata",other:"za {0} sati"},past:{one:"pre {0} sata",few:"pre {0} sata",other:"pre {0} sati"}}},minute:{displayName:"minut",relative:{0:"ovog minuta"},relativeTime:{future:{one:"za {0} minut",few:"za {0} minuta",other:"za {0} minuta"},past:{one:"pre {0} minuta",few:"pre {0} minuta",other:"pre {0} minuta"}}},second:{displayName:"sekund",relative:{0:"sada"},relativeTime:{future:{one:"za {0} sekundu",few:"za {0} sekunde",other:"za {0} sekundi"},past:{one:"pre {0} sekunde",few:"pre {0} sekunde",other:"pre {0} sekundi"}}}}},{locale:"sr-Latn-BA",parentLocale:"sr-Latn"},{locale:"sr-Latn-ME",parentLocale:"sr-Latn"},{locale:"sr-Latn-XK",parentLocale:"sr-Latn"}]})}}]);