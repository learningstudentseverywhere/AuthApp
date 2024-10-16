sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'com.auth1.collegeapp1',
            componentId: 'ProfessorsList',
            contextPath: '/Professors'
        },
        CustomPageDefinitions
    );
});