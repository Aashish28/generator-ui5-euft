jQuery.sap.declare("<%= namespaceUI5 %>.<%= projectname %>.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "<%= appid %>",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "<%= apppath %>"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.<%= appid %>.Component.extend("<%= namespaceUI5 %>.<%= projectname %>.Component", {
	metadata: {
		manifest: "json"
	}
});