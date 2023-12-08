<?php

return [
    "fields" => [
        "contentBuilder" => [
            "groups" => [
                [
                    "label" => "Content",
                    "types" => ["redactor", "textImage", "columns", "titleBlock", "coreImage", "image", "gallery", "video", "form", "usps"]
                ],
                [
                    "label" => "Contact",
                    "types" => ["contact"]
                ],
                [
                    "label" => "Blog",
                    "types" => ["blogAll", "blogLatest"]
                ],
                [
                    "label" => "Cases",
                    "types" => ["casesAll", "casesLatest"]
                ],
                [
                    "label" => "Diensten",
                    "types" => ["servicesAll", "servicesLatest"]
                ],
                [
                    "label" => "Entries overzicht",
                    "types" => [
                        "overviews"
                    ]
                ],
                [
                    "label" => "Klanten",
                    "types" => ["clientsAll", "reviews", "reviewImage"]
                ],
                [
                    "label" => "Team",
                    "types" => ["team"]
                ]
            ]
        ]
    ]
];
