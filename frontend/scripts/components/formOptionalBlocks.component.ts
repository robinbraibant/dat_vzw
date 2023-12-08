import {OptionalBlock} from "./optionalBlock.component";
import {DOMHelper} from "../utils/DomHelper";

export class FormOptionalBlocks {
    constructor() {
        const optionalBlock = Array.from(
            document.querySelectorAll('.js-form-optional-block')
        );
        optionalBlock.forEach((element, index) => {
            new OptionalBlock(element as HTMLElement, index);
        });

        DOMHelper.onDynamicContent(
            document.documentElement,
            'js-form-optional-block',
            (optionalBlocks) => {
                Array.from(optionalBlocks).forEach((block:HTMLElement, index) => {
                    new OptionalBlock(block,index);
                });
            }
        )
    }
}