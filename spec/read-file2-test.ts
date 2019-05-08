import readFile from '../src/read-file'

describe('hello', function () {

  it('should return hello words for a given name', function () {
    expect(readFile('package.json')).toContain('scripts')
  })

})
