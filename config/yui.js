var isProduction = process.env.NODE_ENV === 'production',
    version      = require('../package').version,

    YUI_VERSION = '3.10.0';

exports.version = YUI_VERSION;
exports.config  = {
    combine: isProduction,
    filter : isProduction ? 'min' : 'raw',
    root   : YUI_VERSION + '/',

    modules: {
    },

    groups: {
        'app': {
            combine  : isProduction,
            comboBase: '/combo/' + version + '?',
            base     : '/',
            root     : '/',

            modules: {

                'le-home': {
                    use: ['le-main']
                },

                'gumshoe': {
                  path: 'js/gumshoe.js'
                },

                'smoothscroll': {
                  path: 'js/smoothscroll.js'
                },

                'le-main': {
                    path    : 'js/main.js',
                    requires: ['node-base']
                },

                'autoprefixer': {
                  path : 'js/autoprefixer.js',
                  requires: ['node-base']
                },

                'le-rsvp': {
                    path    : 'js/rsvp.js',
                    requires: [
                        'le-main',
                        'app-base',
                        'app-content',
                        'app-transitions',
                        'escape',
                        'event-focus',
                        'io-queue',
                        'model',
                        'model-list',
                        'model-sync-rest',
                        'selector-css3',
                        'view',
                        'promise'
                    ]
                },

                'le-wedding': {
                    path: 'js/wedding.js',
                    requires: ['le-main', 'event-resize', 'graphics']
                }
            }
        }
    }
};
