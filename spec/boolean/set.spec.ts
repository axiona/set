import SetBoolean from '../../dist/boolean/set.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('true', () => {

    expect(SetBoolean(new Set())).toBe(true);
});
