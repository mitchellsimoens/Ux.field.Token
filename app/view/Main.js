Ext.define('TokenField.view.Main', {
    extend : 'Ext.form.Panel',
    xtype  : 'main',

    requires : [
        'Ext.form.FieldSet',
        'Ux.field.Token'
    ],

    config : {
        items : [
            {
                xtype : 'fieldset',
                title : 'A Form with some Tags',
                items : [
                    {
                        xtype : 'textfield',
                        label : 'Text',
                        value : 'Enter comma separated values into the field below'
                    },
                    {
                        xtype : 'tokenfield',
                        label : 'Tags',
                        value : 'red,green,blue'
                    },
                    {
                        xtype   : 'button',
                        docked  : 'bottom',
                        text    : 'Test setValue',
                        ui      : 'action',
                        handler : function(button) {
                            var fieldset   = button.up('fieldset'),
                                tokenfield = fieldset.child('tokenfield');

                            tokenfield.setValue(['mitch', 'greg']);
                        }
                    }
                ]
            }
        ]
    }
});
