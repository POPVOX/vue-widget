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

	mapWidgetDataToStore: data => {
		console.log(data)
		Store.active = data.active
		Store.sandbox = data.sandbox
		Store.widgetHeader.headlines = data.widgetHeadlines
		Store.widgetFooter = data.widgetFooter
		Store.widgetData = data.widgetData
	}
}