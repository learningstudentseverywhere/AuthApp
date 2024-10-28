namespace authpractice;

using {managed} from '@sap/cds/common';


entity Professors{
    key professor_id:String;
        professor_name:String;
        to_Students : Association to  Student on to_Students.studentId = $self.professor_id;
}

entity Subjects:managed{
    key subject_id : String;
    key professor_id: String;
        subject_name : String;
}

@cds.autoexpose
entity Student{
    key studentId:String;
}