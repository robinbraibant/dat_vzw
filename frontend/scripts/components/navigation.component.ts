export class NavigationComponent {

    private bodyTag: HTMLBodyElement;
    private navButton: HTMLButtonElement;
    private mainNavItems: Array<any>;

    constructor() {
        this.bodyTag = document.querySelector('body');
        this.navButton = document.querySelector('.mobilenav__toggle');

        this.mainNavItems = Array.from(document.querySelectorAll('.mainnav__item.has-children'));
        if (this.mainNavItems) {
            this.mainnavItemsInit();
        }

        if (this.navButton) {
            this.mobilenavToggle();
        }
    }

    private mobilenavToggle() {
        if (!('ontouchstart' in window)) {
            this.navButton.addEventListener('click', () => {
                const bodyTag = document.querySelector('body');
                bodyTag.classList.toggle('has-open-navigation');
            });
        }
        this.navButton.addEventListener('touchstart', () => {
            const bodyTag = document.querySelector('body');
            bodyTag.classList.toggle('has-open-navigation');
        });
    }

    private mainnavItemsInit() {
        this.mainNavItems.forEach(e => {
            const button = e.querySelector('.subnav__toggle');
            const child = e.querySelector('.subnav');
            this.addEvents(e, button, child);
        })
    }

    private addEvents(e, button, child) {
        if (!('ontouchstart' in window)) {
            e.addEventListener('mouseenter', () => {
                child.setAttribute('aria-hidden', false);
            });
            e.addEventListener('mouseleave', () => {
                child.setAttribute('aria-hidden', true);
            });
        }

        button.addEventListener('touchstart', () => {
            if (child.getAttribute('aria-hidden') === 'true') {
                e.classList = 'mainnav__item has-children is-opened';
                return child.setAttribute('aria-hidden', false);
            }
            e.classList = 'mainnav__item has-children';
            return child.setAttribute('aria-hidden', true);
        });
    }
}