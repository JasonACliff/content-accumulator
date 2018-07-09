export function rss2(jsonObject) {
	
	return {
		
		source:{
			title: jsonObject.feed.title,
			link: jsonObject.feed.link,
			description: jsonObject.feed.description,
			image: jsonObject.feed.image
			
		},
		items : jsonObject.items.map(item => {
				return {
					title: item.title,
					link: item.link,
					pubDate: item.pubDate,
					author: item.author,
					thumbNail: item.thumbNail,
					content: item.content,
					categories: item.categories,
					image: item.image,
				}
			}
		)
		
	}
	
}