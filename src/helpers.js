import Store from './store'

export default {

	getQueryParam: param => {
		let vars = {};
		
		window.location.href.replace(location.hash,'').replace( 
			/[?&]+([^=&]+)=?([^&]*)?/gi,
			(m, key, value) => vars[key] = value !== undefined ? value : ''
		);

		if (param)
		{
			return vars[param] ? vars[param] : null
		}

		return vars
	},

	fakeLoad: () => {
		Store.loading = true

		setTimeout(() => {
			Store.loading = false
		}, 2000)
	},

	mapWidgetDataToStore: data => {
		Store.active = data.active
		Store.sandbox = data.sandbox
		Store.widgetHeader.headlines = data.widgetHeadlines
		Store.widgetFooter = data.widgetFooter
		Store.widgetData = data.widgetData
	},

	mapUserDataToStore: () => {
		Store.userData.firstName = pvoxGlobal.userObject.first_name,
		Store.userData.lastName = pvoxGlobal.userObject.last_name,
		Store.userData.prefix = pvoxGlobal.userObject.prefix,
		Store.userData.suffix = pvoxGlobal.userObject.suffix,
        Store.userData.zipCode = pvoxGlobal.userObject.zip_code,
        Store.userData.address = pvoxGlobal.userObject.address,
        Store.userData.address_2 = pvoxGlobal.userObject.address_2,
        Store.userData.city = pvoxGlobal.userObject.city,
        Store.userData.state = pvoxGlobal.userObject.state,
        Store.userData.phone = pvoxGlobal.userObject.phone,
        Store.userData.userID = pvoxGlobal.userObject.id,
        Store.userData.congressionalDistrict = pvoxGlobal.userObject.current_district
	}
}