<?php

/**
 * This file is added to add a configuration when using the Feed Me plugin. This is needed to be able to test the feeds
 * locally.
 */

return [
    '*' => [
        'clientOptions' => [
            'verify' => false,
        ],
    ],
];