import {renderComponent, expect} from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe("Comment Box tests", () => {
    let box;
    beforeEach(() => {
        box = renderComponent(CommentBox);
    });

    it("has proper class", () => {
        expect(box).to.have.class("comment-box")
    });

    it("has a text area", () => {
        expect(box.find('textarea')).to.exist;
    });

    it("has a button", () => {
        expect(box.find("button")).to.exist;
    });

    describe("handling form input", () => {

        //ten before each dotyczy tylko tego describe
        beforeEach(() => {
           box.find('textarea').simulate('change', 'input test');
        });

        it("shows text that was entered", () => {
            expect(box.find('textarea')).to.have.value('input test');
        });

        it("clears input when submitted", () => {
            box.simulate('submit');
            expect(box.find('textarea')).to.have.value('');
        });

    });

});