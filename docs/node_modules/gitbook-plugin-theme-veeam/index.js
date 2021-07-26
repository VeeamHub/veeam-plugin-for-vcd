
module.exports = {
    blocks: {
        note: {
            process: function(block) {
                return '<div class="admonition note"><p class="first admonition-title">'+(block.args[0] || 'Note')+'</p><p class="last">'+block.body+"</p></div>";
            }
        },

        tip: {
            process: function(block) {
                return '<div class="admonition tip"><p class="first admonition-title">'+(block.args[0] || 'Tip')+'</p><p class="last">'+block.body+"</p></div>";
            }
        },

        warning: {
            process: function(block) {
                return '<div class="admonition warning"><p class="first admonition-title">'+(block.args[0] || 'Tip')+'</p><p class="last">'+block.body+"</p></div>";
            }
        },

        danger: {
            process: function(block) {
                return '<div class="admonition danger"><p class="first admonition-title">'+(block.args[0] || 'Tip')+'</p><p class="last">'+block.body+"</p></div>";
            }
        }
    }
};