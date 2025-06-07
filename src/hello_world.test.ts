import { hello } from "./hello_word";


describe("test hello", () => {
 it("should return hello world", () => {
   expect(hello()).toBe("Hello world!");
 });
});
