describe('Hello world', () => {

    beforeEach(() => {
        expected = "Hello world!";
    });

    afterEach(() => {
        expected = "";
    });

    it('says hello 1', () => {
        expect(helloWorld())
            .toEqual(expected);
    });

    fit('says hello 2', () => {
        expect(helloWorld())
            .toEqual(expected);
    });
});