import isValidCommitMessage from "../isValidCommitMesage";

test("should be able to correctly validate the commit message", () => {
    expect(isValidCommitMessage("🚧 wip: menu must open on shortcut press")).toBe(true);
    expect(isValidCommitMessage("🔥 delete(menus): menu must open on shortcut press")).toBe(true);
    expect(isValidCommitMessage("🐛 bug: fixing something")).toBe(true);
    expect(isValidCommitMessage("✅ tests: something: should work")).toBe(true);
    expect(isValidCommitMessage(":construction_worker: find a way to force emojis")).toBe(true);
    expect(isValidCommitMessage("tests: something: should work")).toBe(false);
});
