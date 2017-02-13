import CommentsList from "../../src/components/comments_list";
import {renderComponent, expect} from "../test_helper";

describe("Comments List", () => {
    let commentsList;

    beforeEach(() => {
        const props = {comments: ["test 1", "test 2", "third final test"]};
        commentsList = renderComponent(CommentsList, null, props);
    });

    it("displays each comment as li elements", () => {
        expect(commentsList.find('li').length).to.equal(3);
    });

    it("shows each provided comment", () => {
        expect(commentsList).to.contain('test 1');
        expect(commentsList).to.contain('test 2');
        expect(commentsList).to.contain('third final test');
    });

});