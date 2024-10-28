using {authpractice as my} from '../db/data-model';



service college{

    @odata.draft.enabled: true
    @requires           : 'Admin'
    entity Professors as projection on my.Professors;
    
    @requires: 'authenticated-user'
    @(restrict:[
        {
            grant:['READ','CREATE'],to:'Student',where:'professor_id = $user'
        }
    ])
    entity Subjects as projection on my.Subjects;
}

@protocol:'none'
service Sample{
    entity Professors as projection on my.Professors;
}