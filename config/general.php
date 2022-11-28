<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\config\GeneralConfig;
use craft\helpers\App;

$isDev = App::env('CRAFT_ENVIRONMENT') === 'dev';
$isStaging = App::env('CRAFT_ENVIRONMENT') === 'staging';
$isProd = App::env('CRAFT_ENVIRONMENT') === 'production';

return [
    "*" => [
        'defaultCpLanguage' => 'en_GB',
        'defaultSearchTermOptions' => [
            'subLeft' => true,
            'subRight' => true,
        ],
        'aliases' => [
            'basePath' => $_SERVER['DOCUMENT_ROOT'],
            'baseUrl' => strtolower((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https://' : 'http://') . $_SERVER['SERVER_NAME']),
        ],
        'defaultTokenDuration' => 'P10D',
        'defaultWeekStartDay' => 1,
        'enableCsrfProtection' => true,
        'enableGql' => false,
        'maxRevisions' => 10,
        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,
        'postCpLoginRedirect' => 'entries',
        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => App::env('SECURITY_KEY'),
        'verificationCodeDuration' => 'P3W',
        'useEmailAsUsername' => true,
    ],

    'production' => [
        'enableTemplateCaching' => true,
        'backupOnUpdate' => true,
        // Whether administrative changes should be allowed
        'allowAdminChanges' => (php_sapi_name() === 'cli'),
    ],

    'staging' => [
        'testToEmailAddress' => getenv("DEBUG_EMAIL"),
        'enableTemplateCaching' => false,
        'backupOnUpdate' => false,
        'allowAdminChanges' => (php_sapi_name() === 'cli'),
        'aliases' => [
            'basePath' => $_SERVER['DOCUMENT_ROOT'],
            "baseUrl" => App::env("BASE_URL"),
            "baseUrlNL" => App::env("BASE_URL") . "/nl",
            "baseUrlFR" => App::env("BASE_URL") . "/fr",
            "baseUrlEN" => App::env("BASE_URL") . "/en",
        ],
    ],

    'dev' => [
        'enableTemplateCaching' => false,
        'backupOnUpdate' => false,
        'devMode' => true,
        'aliases' => [
            'basePath' => $_SERVER['DOCUMENT_ROOT'],
            "baseUrl" => App::env("BASE_URL"),
            "baseUrlNL" => App::env("BASE_URL") . "/nl",
            "baseUrlFR" => App::env("BASE_URL") . "/fr",
            "baseUrlEN" => App::env("BASE_URL") . "/en",
        ]
    ],
];
