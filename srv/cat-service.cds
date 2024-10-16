using {authpractice as my} from '../db/data-model';



service college{

    @odata.draft.enabled: true
    @requires           : 'Admin'
    entity Professors as projection on my.Professors;
    
    @requires: 'authenticated-user'
    entity Subjects as projection on my.Subjects;
}