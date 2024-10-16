using {college as service} from './cat-service';

annotate service.Professors with @UI:{
    SelectionFields  : [
        professor_id,
        professor_name
    ],
    LineItem  : [
        {
            $Type:'UI.DataField',
            Value:professor_id
        },
        {
            $Type:'UI.DataField',
            Value:professor_name
        }
    ],
};