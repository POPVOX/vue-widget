export default {

	debug: true,

	loading: true,
	active: true,
	sandbox: false,
	onAllowedUrl: true,
	userLoggedIn: pvoxGlobal.loggedInUser,
	introViewComponent: '',
	allViews: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5', 'WrapUp'],
	currentView: '',
	currentIndex: 0,
	widgetTrackURL: '/track/widget',

	widgetHeader: {
		headlines: '',
	},

	widgetFooter: {
		footerText: '',
	},

	widgetData: {
		billTitle: '',
		position: '',
		userPosition: '',
		customLetter: '',
		talkingPointHeadline: '',
		talkingPoints: '',
		videoUrl: '',
		widgetID: pvoxGlobal.widgetID,
		position: '',
		billID: '',
		origin: '',
		restrictedToState: ''
	},

	customField: {
		type: '',
		text: '',
		values: '',
		selectedValue: ''
	},

	userData: {
		firstName: '',
		lastName: '',
		email: '',
		prefix: '',
		suffix: '',
        zipCode: '',
        address: '',
        address_2: '',
        city: '',
        phone: '',
        message: '',     
        userID: '',
        password: '',
        congressionalDistrict: '',
        state: '',
        photo: '',
        isNewUser: false
	},

	techDetails: {
		referer: pvoxGlobal.referer,
		ipAddress: pvoxGlobal.ipAddress,
		visitHash: pvoxGlobal.visitHash
	}
}