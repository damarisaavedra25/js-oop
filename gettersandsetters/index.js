function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    this.defaultLocation = function () {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y)
                throw new Error('Ínvalid Location');
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();