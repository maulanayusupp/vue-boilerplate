// Languages
export const languages = [
	{ value: 'en', label: 'English' },
	{ value: 'no', label: 'Norsk' },
];

// File MIME Types
export const fileTypes = {
	document: ['application/pdf', 'application/msword', 'application/vnd.ms-excel'],
	video: ['video/mp4'],
	image: ['image/png', 'image/jpg', 'image/jpeg'],
};

// User Excel Schema
export const schema = {
	EMAIL: {
		prop: 'email',
		type: String,
		required: true,
	},
	PASSWORD: {
		prop: 'password',
		type: String,
		required: true,
		parse(value) {
			const passwordString = String(value);
			return passwordString;
		},
	},
	LANGUAGE: {
		prop: 'language',
		type: String,
		required: true,
	},
	'FIRST NAME': {
		prop: 'firstName',
		type: String,
		required: true,
	},
	'LAST NAME': {
		prop: 'lastName',
		type: String,
		required: true,
	},
	GENDER: {
		prop: 'gender',
		type: String,
		required: true,
	},
	ROLES: {
		prop: 'roles',
		type: String,
		required: true,
	},
};

// Roles Options
export const ROLES_OPTIONS = [
	{ key: 'super_admin', label: 'Super Admin' },
	{ key: 'client', label: 'Client' },
	{ key: 'production_house', label: 'Production House' },
	{ key: 'freelancer', label: 'Freelancer' },
];

// Category Type Options
export const CATEGORY_TYPE_OPTIONS = [
	{ key: 'article', label: 'Article' },
	{ key: 'job', label: 'Job' },
	{ key: 'offer', label: 'Offer' },
];

// Master Type Options
export const MASTER_TYPE_OPTIONS = [
	{ key: 'skill', label: 'Skill' },
	{ key: 'job', label: 'Job' },
	{ key: 'region', label: 'Region' },
	{ key: 'asset', label: 'Asset' },
];

// Dummy Global Terms & Condition
export const dummyTerms = /* html */`
	<ol>
		<li>Office working hours, from Monday to Friday, 08:00 to 16:00</li>
		<li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
		<li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
		<li>Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond</li>
		<li>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain</li>
	</ol>
`;
