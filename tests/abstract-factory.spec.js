const assert = require('assert');

const {
    ButtonFactory
} = require('../src/abstract-factory');

it('should not be able to instantiate abstract class', () => {
    const shouldThrowWhenCreatingInstance = () => {
        new ButtonFactory();
    }
    assert.throws(shouldThrowWhenCreatingInstance, /abstract/);
});

it('should implement concrete grayscale button factory', () => {

    const createConcreteButtonFactory = () => {
        function GrayscaleButtonFactory() {};
        GrayscaleButtonFactory.prototype = Object.create(
            ButtonFactory.prototype);
    }

    assert.doesNotThrow(createConcreteButtonFactory);
});
