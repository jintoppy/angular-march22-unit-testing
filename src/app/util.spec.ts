import { Util } from './util';

xdescribe('Util', () => {
    beforeEach(() => {
        console.log('Util before each');
    });
    afterEach(() => {
        console.log('Util after each');
    });
    describe('add', () => {        
        it('should add two numbers', () => {
            const result = Util.add(10, 20);
            expect(result).toBe(30);
        });
        it('should return same number if only one argument', () => {
            const result = Util.add(10);
            expect(result).toBe(10);
        });
        it('should call log method', () => {
            //spy
            spyOn(Util, 'log');
            Util.add(10, 20);
            expect(Util.log).toHaveBeenCalledWith('add: result30');
        });
    });
    describe('sub', () => {
        it('should subtract two number', () => {
            const result = Util.postiveSub(20,10);
            expect(result).toBe(10);
        });
        it('should return 0 if result is negative', () => {
            const result = Util.postiveSub(10,20);
            expect(result).toBe(0);
        });
    });

    describe('log', () => {
        it('should log message passed', () => {
            spyOn(console, 'log');
            Util.log('hello');
            expect(console.log).toHaveBeenCalledWith('hello');
        });
    });
});