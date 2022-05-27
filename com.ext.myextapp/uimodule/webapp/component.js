jQuery.sap.declare("com.ext.myextapp.Component");

// use the load function for getting the optimized preload file if present
sap.ui.component.load({
	name: "fin.gl.journalentry.upload",
	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/FIN_GLJE_UPLD"
		// we use a URL relative to our own component
		// extension application is deployed with customer namespace
});

this.fin.gl.journalentry.upload.Component.extend("com.ext.myextapp.Component", {
	metadata: {
		manifest: "json"
	}
});