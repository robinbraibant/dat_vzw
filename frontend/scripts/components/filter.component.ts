import {FormPrototypes} from "../utils/form.prototypes";

FormPrototypes.activateSerialize();

export class FilterComponent {
    private formElement: HTMLFormElement; // .js-filter-form
    private resultsElement: HTMLElement; // .js-filter-results
    private clearFilterButton: HTMLElement; // .js-clear-filter
    private loaderAnimationElement: HTMLElement; // .js-filter-loader
    private xhr: XMLHttpRequest;

    constructor() {
        this.formElement = document.querySelector('.js-filter-form');

        if (this.formElement) {
            this.formElement.addEventListener('submit', (e) => {
                e.preventDefault();
                this.getFormAction();
            })

            this.resultsElement = document.querySelector('.js-filter-results');
            if (!this.resultsElement) {
                console.log(
                    "You must have an element with class 'js-filter-results' defined in order for the filter plugin to work."
                );
                return;
            }

            this.loaderAnimationElement = document.querySelector('.js-filter-loader');
            if (this.loaderAnimationElement) {
                this.initLoader();
            }

            this.clearFilterButton = document.querySelector('.js-filter-clear');
            if (this.clearFilterButton) {
                this.initClearFilter();
            }
        }
    }

    private clearForm() {
        this.formElement.reset();
        const elements = Array.from(this.formElement.elements);

        elements.forEach((element) => {
            if (element.tagName === 'INPUT') {
                const type = element.getAttribute('type').toLowerCase();

                switch (type) {
                    case 'text':
                    case 'password':
                    case 'textarea':
                    case 'hidden':
                        element.setAttribute('value', '');
                        break;

                    case 'radio':
                    case 'checkbox':
                        if ((element as HTMLInputElement).checked) {
                            (element as HTMLInputElement).checked = false;
                        }
                        break;

                    default:
                        break;
                }
            }
            if (element.tagName === 'SELECT') {
                element.setAttribute('selectedIndex', '-1');
            }
        })
    }

    private getFilterData(url, clearPage = false) {
        const _self = this;

        if (this.xhr) {
            this.xhr.abort();
        }

        if (clearPage) {
            const regexResult = window.location.pathname.match(/([^\?\s]+\/)([p][0-9]{1,3}.?)(.*)/);

            if (regexResult && regexResult[1]) {
                url = `${regexResult[1]}?${this.formElement.serialize()}`
            }

            this.xhr = new XMLHttpRequest();
            this.xhr.open('GET', url, true);

            this.xhr.onload = function () {
                if (this.status >= 200 && this.status < 400) {
                    const responseElement = document.implementation.createHTMLDocument('');
                    responseElement.body.innerHTML = this.response;

                    const resultsBlock = responseElement.querySelector('.js-filter-results');
                    if (resultsBlock) {
                        _self.resultsElement.innerHTML = resultsBlock.innerHTML;

                        history.pushState('', 'New url: ' + url, url);

                        _self.hideLoading();
                    } else {
                        console.error('Could not find data on returned page.')
                    }
                }
            }

            this.xhr.onerror = function () {
                console.error('There was a connection error.')
            }

            this.xhr.send();
        }
    }

    private getFormAction() {
        this.showLoading();

        let action = this.formElement.getAttribute('action');
        let serializedElement = this.formElement.serialize();

        let url = `${action}?${serializedElement}`;

        if (action === '') {
            url = `${window.location.origin}${window.location.pathname}?${serializedElement}`;
        }

        this.getFilterData(url, true);
    }

    private hideLoading() {
        if (this.loaderAnimationElement) {
            this.loaderAnimationElement.classList.add('hidden');
            this.resultsElement.classList.remove('hidden');
        }
    }

    private initClearFilter() {
        this.clearFilterButton.setAttribute('role', 'button');
        this.clearFilterButton.addEventListener('click', (e) => {
            e.preventDefault();

            this.getFilterData(window.location.origin + window.location.pathname, true);
        });
    }

    private initLoader() {
        if (!this.loaderAnimationElement.classList.contains('hidden')) {
            this.loaderAnimationElement.classList.add('hidden');
        }
    }

    private showLoading() {
        if (this.loaderAnimationElement) {
            this.loaderAnimationElement.classList.remove('hidden');
            this.resultsElement.classList.add('hidden');
        }
    }
}
