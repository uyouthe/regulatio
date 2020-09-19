export default (element, filterFunction) => {
    const eventTypes = [
        'input',
        'keydown',
        'keyup',
        'mousedown',
        'mouseup',
        'select',
        'contextmenu',
        'drop',
    ]

    const regulate = function () {
        if (filterFunction(this.value)) {
            this.oldValue = this.value
            this.oldSelectionStart = this.selectionStart
            this.oldSelectionEnd = this.selectionEnd
        } else if (this.hasOwnProperty('oldValue')) {
            this.value = this.oldValue
            this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd)
        } else {
            this.value = ''
        }
    }

    eventTypes.forEach(eventType => {
        element.addEventListener(eventType, regulate)
    })

    return () => eventTypes.forEach(eventType => {
        element.removeEventListener(eventType, regulate)
    })
}
