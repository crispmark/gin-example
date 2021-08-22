import * as the_navbar_component from "./the-navbar.component"
// @ponicode
describe("the_navbar_component.default.data", () => {
    test("0", () => {
        let callFunction: any = () => {
            the_navbar_component.default.data()
        }
    
        expect(callFunction).not.toThrow()
    })
})
