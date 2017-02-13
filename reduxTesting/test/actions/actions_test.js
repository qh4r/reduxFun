import {expect} from '../test_helper';
import {SAVE_COMMENT} from "../../src/actions/types";
import {saveComment} from "../../src/actions/index";


describe('actions', () => {

    describe('saveComment', () => {
        let test;

        beforeEach(() => {
            test = saveComment('test');
        });

        it('has correct type', () => {
            expect(test.type).to.equal(SAVE_COMMENT);
        });

        it('has correct payload', () => {
            expect(test.payload).to.equal('test');
        });
    });

});