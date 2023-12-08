<?php

namespace modules\alpinedigital\assetbundles\AlpineDigital;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class AlpineDigitalAsset extends AssetBundle {
    public function init()
    {
        $this->sourcePath = "@modules/alpinedigital/assetbundles/AlpineDigital/dist";

        $this->depends = [
            CpAsset::class
        ];

        $this->css = [
          'css/AlpineDigital.css'
        ];

        parent::init();
    }
}