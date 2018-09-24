import hello1 from '../src/hello1'

describe('hello1', function () {

    it('should return hello words for a given name', function () {
        expect(hello1('karma')).toBe('Hello1, karma!')
    })

})
