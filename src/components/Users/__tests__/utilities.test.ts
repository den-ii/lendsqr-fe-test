import { status } from '../utilities'

describe("Status change", () => {
    it("status", () => {
        expect(status("2072-12-27T03:44:22.522Z", ""))
            .toHaveProperty("status");

    });
});