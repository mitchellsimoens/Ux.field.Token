Ext.define('Ux.field.TokenInput', {
    extend : 'Ext.field.Input',
    xtype  : 'tokeninput',

    config : {
        type : 'text'
    },

    getTemplate : function() {
        var items = this.callParent();

        items.splice(0, 0, {
            reference : 'tokenEl',
            tag       : 'span',
            cls       : 'ux-tokens'
        });

        return items;
    },

    updateValue : function() {
        var input = this.input;

        if (input) {
            input.dom.value = '';
        }
    }
});