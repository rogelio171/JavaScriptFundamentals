class Toggable {

    constructor(element) {
        this.element = element
        this.element.innerHTML = 'Off'
        this.activated = false
        this.element.addEventListener('click', this.onClick.bind(this))
    }

    onClick() {
        this.activated = !this.activated
        this.toggleText()
    }

    toggleText() {
        this.element.innerHTML = this.activated ? 'On' : 'Off'
    }

}

const button = document.getElementById('offButton')

const newButton = new Toggable(button)