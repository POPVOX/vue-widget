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

	formatPhoneNumber: (number) => {
		let onlyNumbers = number.replace(/[^\d]+/g, '')

		if (onlyNumbers.length !== 10)
		{
			alert('Please enter a valid phone number')
			return ''
		}

     	return onlyNumbers.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
	},

	fakeLoad: () => {
		Store.loading = true

		setTimeout(() => {
			Store.loading = false
		}, 2000)
	},

	showMessagePopup: (width, height) => {
		let leftPosition, topPosition
          
        leftPosition = (window.screen.width / 2) - ((width / 2) + 10)
        topPosition = (window.screen.height / 2) - ((height / 2) + 50)
        
        let windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,scrolling=no,location=no,directories=no"
        
        let win = window.open('/comments/message-popup', 'widgetMessagePopup', windowFeatures)

        pvoxGlobal.popupMessageOpen = true
	},

	mapWidgetStatusToStore: data => {
		Store.active = data.active
		Store.onAllowedUrl = Store.debug ? true : pvoxGlobal.embedUrl === data.allowedUrl
		Store.sandbox = data.sandbox
	},

	mapWidgetDataToStore: data => {
		Store.widgetHeader.headlines = data.widgetHeadlines
		Store.widgetFooter = data.widgetFooter
		Store.widgetData = data.widgetData
		Store.introViewComponent = data.introViewComponent
		Store.customField = data.customField
	},

	mapSocialMediaUserDataToStore: () => {
		Store.userData.firstName = pvoxGlobal.userObject.first_name,
		Store.userData.lastName = pvoxGlobal.userObject.last_name,
		Store.userData.photo = pvoxGlobal.userObject.photo
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