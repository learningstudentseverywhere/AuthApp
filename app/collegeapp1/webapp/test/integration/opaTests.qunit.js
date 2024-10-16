sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/auth1/collegeapp1/test/integration/FirstJourney',
		'com/auth1/collegeapp1/test/integration/pages/ProfessorsList',
		'com/auth1/collegeapp1/test/integration/pages/ProfessorsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProfessorsList, ProfessorsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/auth1/collegeapp1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProfessorsList: ProfessorsList,
					onTheProfessorsObjectPage: ProfessorsObjectPage
                }
            },
            opaJourney.run
        );
    }
);