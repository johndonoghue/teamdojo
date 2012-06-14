function degrees(programmers) {
	//for each programmer in programmers
	//find separation from each other programmer
	
	var degreesOfSeparation = {
		Bill: {
			Bob: 1,
			Jill: 2
		},
		Bob: {
			Bill: 1,
			Jill: 1
		},
		Jill: {
			Bill: 2,
			Bob: 1
		}
	};
	
	return degreesOfSeparation;
	
}

function separation(people, root) {
	/*var queue = [];
	queue.add(root);
	root.visited = true;
	while queue.length > 0 {
		
	}*/
}