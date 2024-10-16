//@ui5-bundle com/auth/collegeapp/Component-preload.js
sap.ui.require.preload({
	"com/auth/collegeapp/Component.js":function(){
sap.ui.define(["sap/ovp/app/Component"],function(e){"use strict";return e.extend("com.auth.collegeapp.Component",{metadata:{manifest:"json"}})});
},
	"com/auth/collegeapp/i18n/i18n.properties":'# This is the resource bundle for com.auth.collegeapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=College Application\n\n#YDES: Application description\nappDescription=College Application\n\n#XFLD,57\nflpTitle=College Application\n',
	"com/auth/collegeapp/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"com.auth.collegeapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:ovp","version":"1.15.1","toolsId":"a8a361f7-a466-482f-a831-4daecaaa7b57"},"dataSources":{"mainService":{"uri":"odata/v4/college/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"ZCollegeApp-display":{"semanticObject":"ZCollegeApp","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.129.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{},"sap.ovp":{},"sap.ui.rta":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.auth.collegeapp.i18n.i18n"}},"mainModel":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[],"targets":{}}},"sap.ovp":{"globalFilterModel":"mainModel","globalFilterEntityType":"Professors","containerLayout":"resizable","enableLiveFilter":true,"considerAnalyticalParameters":false,"cards":{},"globalFilterControlType":"MacroFilterBar"},"sap.fiori":{"registrationIds":[],"archeType":"analytical"}}'
});
//# sourceMappingURL=Component-preload.js.map