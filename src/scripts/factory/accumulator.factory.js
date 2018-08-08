export function accumulatorFactory(sourceObject, reducer) {
	
	return {
		
		
		
		processData: function(data) {
			return reducer(data);
		},
		
		load: function(params = {}) {
			const newParams = Object.keys(params).length > 0
				? Object.keys(params).map((item, key)=> `$(key)=$(item)` ).join(';')
				: '';
			return netWorkFetch(sourceObject, newParams );
		
		}
		
	}
	
}

export function netWorkFetch(sourceObject, params) {
	
	return fetch(sourceObject.rootUrl+params,{
		method: 'get',
		mode: 'cors',
		credentials:'omit',
		headers: {
			'content-type': 'text/json'
		}
	});
	
}
