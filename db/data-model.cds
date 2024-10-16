namespace authpractice;




entity Professors{
    key professor_id:String;
        professor_name:String;
}

entity Subjects{
    key subject_id : String;
    key professor_id: String;
        subject_name : String;
}