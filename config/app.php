<?php
/**
 * Yii Application Config
 *
 * Edit this file at your own risk!
 *
 * The array returned by this file will get merged with
 * vendor/craftcms/cms/src/config/app.php and app.[web|console].php, when
 * Craft's bootstrap script is defining the configuration for the entire
 * application.
 *
 * You can define custom modules and system components, and even override the
 * built-in system components.
 *
 * If you want to modify the application config for *only* web requests or
 * *only* console requests, create an app.web.php or app.console.php file in
 * your config/ folder, alongside this one.
 */

use craft\helpers\App;
use craft\mail\transportadapters\Smtp;
use craftcms\postmark\Adapter;

return [
    '*' => [
        'modules' => [
            'alpinedigital' => [
                'class' => \modules\alpinedigital\AlpineDigital::class
            ],
        ],
        'bootstrap' => ['alpinedigital']
    ],

    /* The mailer component overwrites the settings in the Craft backend. The Postmark adapter will be used. */
    'production' => [
        'components' => [
            'mailer' => function () {
                $settings = App::mailSettings();
                $settings->transportType = Adapter::class;
                $settings->transportSettings = [
                    'token' => getenv("POSTMARK_API_KEY")
                ];
                return Craft::createObject(App::mailerConfig($settings));
            }
        ]
    ],

    /* The mailer component overwrites the settings in the Craft backend. The Postmark adapter will be used. In
    config/general.php, a debug email address is defined. This will be used as the receiver address for all email send
    from a staging environment */
    'staging' => [
        'components' => [
            'mailer' => function () {
                $settings = App::mailSettings();
                $settings->transportType = Adapter::class;
                $settings->transportSettings = [
                    'token' => getenv("POSTMARK_API_KEY")
                ];
                return Craft::createObject(App::mailerConfig($settings));
            }
        ]
    ],

    /* The mailer component overwrites the settings in the Craft backend. A local mail client will be used */
    'dev' => [
        'components' => [
            'mailer' => function () {
                $settings = App::mailSettings();
                $settings->transportType = Smtp::class;
                $settings->transportSettings = [
                    'host' => '127.0.0.1',
                    'port' => '1025',
                    'useAuthentication' => false,
                ];
                return Craft::createObject(App::mailerConfig($settings));
            }
        ]
    ],
];
