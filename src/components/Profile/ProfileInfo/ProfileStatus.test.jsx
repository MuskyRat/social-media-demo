import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Yoyoyoyo" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Yoyoyoyo");
    });

    test("after the creation a span should be displayed with a correct status", () => {
        const component = create(<ProfileStatus status="Yoyoyoyo" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after the creation an imput shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="Yoyoyoyo" />);
        const root = component.root;
        // let span = root.findByType("input");
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("after the creation a span should contain a correct status", () => {
        const component = create(<ProfileStatus status="Yoyoyoyo" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Yoyoyoyo");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Yoyoyoyo" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Yoyoyoyo");
    });

    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="Yoyoyoyo" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});