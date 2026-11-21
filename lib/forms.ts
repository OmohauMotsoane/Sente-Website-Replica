// The site's forms, as the original published them. A form sends only these fields, under
// these names (whatever receives the submissions reads them); `traps` are fields people never
// see: a submission that fills one in is a bot's, answered as sent and kept nowhere.
export interface SiteForm {
	name: string;
	pages: string[];
	fields: string[];
	traps: string[];
}

export const FORMS: Record<string, SiteForm> = {
	"form": {
		name: "a form of First Name, Last Name, Email, Company Name",
		pages: ["/contact"],
		fields: ["First Name","Last Name","Email","Company Name"],
		traps: ["website","company","message","subject","title","description","feedback","notes","details","remarks","comments"],
	},
};
