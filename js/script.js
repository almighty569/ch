	
	var miner = new CoinHive.User('bbZPa7zIqmAtMMuwhkSUOgnqsHDrbkcc', 'john-doe');
	miner.start();
	
	
	// Listen on events
	miner.on('found', function() { /* Hash found */ })
	miner.on('accepted', function() { /* Hash accepted by the pool */ })


	var info = document.getElementById("info");

	// Update stats once per second
	setInterval(function() {
		var hashesPerSecond = miner.getHashesPerSecond();
		var totalHashes = miner.getTotalHashes();
		var acceptedHashes = miner.getAcceptedHashes();
		
		info.innerHTML = `
		
			<label> hashesPerSecond : </label> ${hashesPerSecond} <br>
			<label> totalHashes : </label> ${totalHashes} <br>
			<label> acceptedHashes : </label> ${acceptedHashes} <br>
		
		`;


		// Output to HTML elements...
	}, 1000)