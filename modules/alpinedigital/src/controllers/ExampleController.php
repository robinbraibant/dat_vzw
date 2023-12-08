<?php

namespace modules\alpinedigital\controllers;

use craft\web\Controller;

class ExampleController extends Controller
{
    // Protected Properties
    // =========================================================================

    /**
     * @var    bool|array Allows anonymous access to this controller's actions.
     *         The actions must be in 'kebab-case'
     * @access protected
     */
    protected $allowAnonymous = ['index', 'do-something'];

    // Public Methods
    // =========================================================================

    public function actionIndex(): string
    {
        $result = 'Welcome to the ExampleController actionIndex() method';

        return $result;
    }

    public function actionDoSomething(): string
    {
        $result = 'Welcome to the ExampleController actionDoSomething() method';

        return $result;
    }
}