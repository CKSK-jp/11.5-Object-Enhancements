describe('createAnimal function which will generate an animal Object', function () {

  it('takes in 3 strings, species, sound, and noise, and creates a dog object', function () {
    const dog = createAnimal('dog', 'bark', 'woof!');

    expect(dog.species).toEqual('dog');
    expect(typeof dog.bark).toEqual('function');
    expect(dog.bark()).toEqual('woof!');
  });

  it('takes in 3 strings, species, sound, and noise, and creates a cat object', function () {
    const cat = createAnimal('cat', 'meow', 'meeoww!');

    expect(cat.species).toEqual('cat');
    expect(typeof cat.meow).toEqual('function');
    expect(cat.meow()).toEqual('meeoww!');
  });
});