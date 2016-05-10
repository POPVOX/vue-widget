export default {

	loading: true,
	active: true,
	sandbox: false,
	onAllowedUrl: true,
	userLoggedIn: pvoxGlobal.loggedInUser,
	allViews: ['Page1', 'Page2', 'Page3', 'Page4', 'Page5'],
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
		customLetter: '',
		talkingPointHeadline: '',
		talkingPoints: '',
		widgetID: pvoxGlobal.widgetID,
		billID: '',
		origin: ''
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
        congressionalDistrict: '',
        state: '',
        position: ''
	},

	techDetails: {
		referer: pvoxGlobal.referer,
		'ipAddress': pvoxGlobal.ipAddress,
		'visitHash': pvoxGlobal.visitHash
	}
}