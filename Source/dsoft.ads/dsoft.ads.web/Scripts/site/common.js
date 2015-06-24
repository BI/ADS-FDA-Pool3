﻿// Extend jquery with serializeForm to post json data to MVC controller
(function() {
    $.fn.serializeForm = function() {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function() {
                    if (o[this.name]) {
                        if (!o[this.name].push) {
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || '');
                    } else {
                        o[this.name] = this.value || '';
                    }
                });
        return o;
    };
})(jQuery)