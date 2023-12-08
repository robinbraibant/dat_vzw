export class OptionalBlock {
    private changeListener: EventListener;
    private controllerName: string;
    private controllerValue: string;
    private element: HTMLElement;
    private inputElements: NodeListOf<HTMLElement>;

    constructor(element: HTMLElement, index) {
        this.element = element;
        element.classList.remove('js-form-optional-block');
        this.controllerValue = element.getAttribute('data-controller-value');
        this.controllerName = element.getAttribute("data-controller-name");
        if (!this.controllerValue || !this.controllerName) {
            console.error(
                `Make sure you define "data-controller-value" and "data-controller-name" on your optional block`
            );
            return;
        }
        this.inputElements = document.getElementsByName(this.controllerName);
        this.changeListener = this.changeAction.bind(this);
        Array.from(this.inputElements).forEach((input: HTMLInputElement) => {
            input.addEventListener('change', this.changeListener)
            if (input.checked) {
                element.classList.add('display-none')
                this.disableAllFormElements();
            }
        })

    }

    private toggle(event: Event) {
        const inputElement = event.target as HTMLInputElement;
        const inputValue = inputElement.value;
        let isVisible = this.controllerValue.indexOf("" + inputValue) < 0;

        if (inputElement.type.toLowerCase() === 'checkbox') {
            isVisible = !inputElement.checked;
            if (this.controllerValue === "false") {
                isVisible = inputElement.checked;
            }
        }

        if (isVisible) {
            this.element.classList.add('display-none');
        } else {
            this.element.classList.remove('display-none')
        }

        this.disableAllFormElements();
    }


    private disableAllFormElements() {
        const disableElements = this.element.querySelectorAll(
            "input, textarea, select"
        );
        Array.from(disableElements).forEach((element: HTMLElement) => {
            if (this.element.classList.contains("display-none")) {
                if (element.hasAttribute("required")) {
                    element.removeAttribute("required");
                    element.setAttribute("data-has-required", "true");
                }
                element.setAttribute("disabled", "disabled");
            } else {
                if (element.hasAttribute("data-has-required")) {
                    element.setAttribute("required", "required");
                    element.removeAttribute("data-has-required");
                }
                element.removeAttribute("disabled");
            }
        });
    }

    private changeAction(event: Event) {
        event.stopPropagation();
        this.toggle(event)
    }
}