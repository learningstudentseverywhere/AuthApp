using college as service from '../../srv/cat-service';
annotate service.Professors with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'professor_id',
                Value : professor_id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'professor_name',
                Value : professor_name,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ]
);

