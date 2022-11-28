export class NavigationComponent {

    private bodyTag: HTMLBodyElement;
    private navButton: HTMLButtonElement;
    private mainNavItems: Array<any>;
    private subNavItems: Array<any>;

    constructor() {
        // this.bodyTag = document.querySelector('body');
        // this.navButton = document.querySelector('.mobilenav__toggle');

        this.mainNavItems = Array.from(document.querySelectorAll('.mainnav__item.has-children'));
        if (this.mainNavItems) {
            this.mainnavItemsInit();
        }

        // this.subNavItems = Array.from(document.querySelectorAll('.subnav__item.has-children'));
        // if (this.subNavItems) {
        //     this.subNavItemsInit()
        // }
        //
        // if (this.navButton) {
        //     this.mobilenavToggle();
        // }
    }

    // private mobilenavToggle() {
    //     this.navButton.addEventListener('click', () => {
    //         let bodyTag = document.querySelector('body');
    //         bodyTag.classList.toggle('has-open-navigation');
    //     });
    // }

    private mainnavItemsInit() {
        this.mainNavItems.forEach(e => {
            let button = e.querySelector('.subnav-toggle');
            let child = e.querySelector('.subnav');
            this.addEvents(e, button, child);
        })
    }

    // private subNavItemsInit() {
    //     this.subNavItems.forEach(e => {
    //         let button = e.querySelector('.subnav-toggle');
    //         let child = e.querySelector('.subnav');
    //         this.addEvents(e, button, child);
    //     });
    // }

    private addEvents(e, button, child) {
        // e.addEventListener('mouseenter', () => {
        //     child.setAttribute('aria-hidden', false);
        // });
        // e.addEventListener('mouseleave', () => {
        //     child.setAttribute('aria-hidden', true);
        // });
        if (button) {
            button.addEventListener('click', () => {
                if (child.getAttribute('aria-hidden') === 'true') {
                    e.classList = 'mainnav__item has-children is-opened';
                    child.style.display = 'block'
                    child.setAttribute('aria-hidden', false);
                } else {
                    e.classList = 'mainnav__item has-children';
                    child.style.display = 'none';
                    child.setAttribute('aria-hidden', true);
                }
            });
        }
    }
}