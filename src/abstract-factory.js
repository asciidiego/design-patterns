/**

Intent: Provide an interface for creating families of related or
dependent objects without specifying their concrete classes.

Also known as: Kit.

Applicability: a system shold be independent of how its products are
created, composed, and represented.
**/

class ButtonFactory {
    constructor() {
	if(new.target === ButtonFactory) {
	    throw new Error('Cannot instantiate an abstract class');
	}
    }
}

module.exports = {
    ButtonFactory: ButtonFactory,
}
