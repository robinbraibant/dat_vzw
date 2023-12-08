export class ToTopComponent {
    private button: HTMLInputElement;

    constructor() {
        this.initScrollToTop();
        this.initScrollEvent();
    }

    private initScrollToTop() {
        this.button = document.querySelector('.button--to-top');
        if (this.button) {
            this.button.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
                this.button.blur();
            })
        }
    }

    private initScrollEvent() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                this.button.style.visibility = 'visible';
            } else {
                this.button.style.visibility = 'hidden';
            }
        })
    }
}
