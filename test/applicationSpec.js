const MockRouter = {
	"navigate": () => { return true; },
	"launch": () => { return true; }
};

describe("Given Augmented Presentation Application", () => {

	describe("Given an Application", () => {
		let app = null;
		beforeEach(() => {
			app = new Application.Application("Random-" + Math.random());
		});
		afterEach(() => {
			app = null;
		});

		it("has a random name", () => {
			expect(app.name).not.to.equal("untitled");
		});

		it("has a Mediator Registry", () => {
			expect(app.mediators instanceof Array).to.be.true;
		});

		it("can register a Mediator View", () => {
			const view = {};
			app.registerMediator(view);
			expect(app.mediators.length).to.not.equal(0);
		});

		it("can return a few registered Mediator Views", () => {
			//console.log("mediators: " + JSON.stringify(app.mediators);
			const view1 = {},
						view2 = {},
						view3 = {};

			app.registerMediator(view1);
			app.registerMediator(view2);
			app.registerMediator(view3);

			expect(app.mediators.length === 3).to.be.true;
		});

		it("has a Stylesheet Registry", () => {
			expect(app.stylesheets instanceof Array).to.be.true;
		});

		it("can register a Stylesheet", () => {
			app.registerStylesheet("x");
			expect(app.stylesheets.length > 0).to.be.true;
		});

		it("to be able to add metadata 'name'", () => {
			app.setMetadataItem("name", "test");
			expect(app.getMetadataItem("name")).to.equal("test");
		});

		it("can add a breadcrumb", () => {
			app.setCurrentBreadcrumb("www.augmentedjs.org", "main");
			expect(app.getCurrentBreadcrumb()).to.not.be.undefined;
		});

		it("stores only 2 breadcrumbs", () => {
			app.setCurrentBreadcrumb("www.augmentedjs.org", "main");
			app.setCurrentBreadcrumb("www.augmentedjs1.org", "main2");
			app.setCurrentBreadcrumb("www.augmentedjs2.org", "main3");
			expect(app.breadcrumbs.length).to.equal(2);
		});

		it("can get the breadcrumbs", () => {
			app.setCurrentBreadcrumb("www.augmentedjs.org", "main");
			app.setCurrentBreadcrumb("www.augmentedjs1.org", "main2");
			app.setCurrentBreadcrumb("www.augmentedjs2.org", "main3");
			expect(app.breadcrumbs).to.not.be.undefined;
		});

		it("can start", () => {
			const p = app.start();
			expect(p).to.not.be.undefined;
		});

		it("can navigate if a router exists", () => {
			app.router = MockRouter;
			const p = app.navigate("nowhere");
			expect(p).to.not.be.undefined;
		});

		it("can launch if a router exists", () => {
			app.router = MockRouter;
			const p = app.launch("nowhere");
			expect(p).to.not.be.undefined;
		});
	});
});
