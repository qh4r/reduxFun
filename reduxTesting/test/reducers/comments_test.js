import {expect} from '../test_helper';
import commentsReducer from "../../src/reducers/comments";
import {SAVE_COMMENT} from "../../src/actions/types";


describe("Comments reducer", () => {

    it("Handels default action", () => {
        let result = commentsReducer();
        expect(result).to.be.instanceof(Array);
    });

    it("Handels SAVE_COMMENT action", () => {
        let action = {type: SAVE_COMMENT, payload: "new val"}
        let result = commentsReducer(["old val"], action);
        expect(result.length).to.equal(2);
        expect(result[1]).to.equal("new val");
        expect(result).to.eql(["old val", "new val"]); // deep porownanie wartosci
    })
});