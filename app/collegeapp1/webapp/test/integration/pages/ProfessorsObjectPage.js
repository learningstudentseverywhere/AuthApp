sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.auth1.collegeapp1',
            componentId: 'ProfessorsObjectPage',
            contextPath: '/Professors'
        },
        CustomPageDefinitions
    );
});