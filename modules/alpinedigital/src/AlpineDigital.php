<?php

namespace modules\alpinedigital;

use Craft;
use craft\console\Application as ConsoleApplication;
use craft\events\TemplateEvent;
use craft\web\twig\variables\CraftVariable;
use craft\web\View;
use modules\alpinedigital\assetbundles\AlpineDigital\AlpineDigitalAsset;
use modules\alpinedigital\variables\AlpineDigitalVariable;
use yii\base\Event;
use yii\base\Module;

class AlpineDigital extends Module {

    public static AlpineDigital $instance;

    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/alpinedigital', $this->getBasePath());

        // Set this as the global instance of this module class
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    public function init()
    {
        parent::init();
        self::$instance = $this;

        // Add in our console commands
        if (Craft::$app instanceof ConsoleApplication) {
            $this->controllerNamespace = 'modules\alpinedigital\console\controllers';
        } else {
            $this->controllerNamespace = 'modules\alpinedigital\controllers';
        }

        //Set the alpinedigital variable
        Event::on(CraftVariable::class, CraftVariable::EVENT_INIT, function (Event $event) {
            /** @var CraftVariable $variable */
            $variable = $event->sender;
            $variable->set('alpinedigital', AlpineDigitalVariable::class);
        });

        //Register the alpinedigital Assetbundle
        if (Craft::$app->getRequest()->getIsCpRequest()) {
            Event::on(View::class, View::EVENT_BEFORE_RENDER_TEMPLATE, function(TemplateEvent $event) {
                Craft::$app->getView()->registerAssetBundle(AlpineDigitalAsset::class);
            });
        }
    }
}