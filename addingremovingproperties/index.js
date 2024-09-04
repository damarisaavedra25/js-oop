function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(10);
// user.token = ásdd';
// dot notation
circle.location = {x:1};
//bracket notation
const propertyName = 'location';
circle['location'] = {x: 1};

delete circle.location;