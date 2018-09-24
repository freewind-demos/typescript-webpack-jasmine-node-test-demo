import hello2 from '../src/hello2'

describe('hello1', function () {

    it('should return hello words for a given name', function () {
        expect(hello2('karma')).toBe('Hello2, karma!')
    })

})
