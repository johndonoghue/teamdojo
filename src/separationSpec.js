describe("Separation validation", function() {

	var programmers = {
		list: ['Bill', 'Bob', 'Jill'],
		names: {
			Bill: {
				skills: ['CS', 'JS'],
				recommendations: ['Bob']
			},
			Bob: {
				skills: ['CS', 'JS'],
				recommendations: ['Bill']
			},
			Jill: {
				skills: [],
				recommendations: ['Bob']
			}
		}
	};
	
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
	}

  it("should have Bill two degress from Jill",function(){
    var result = degrees(programmers);
    expect(result.toString()).toBe(degreesOfSeparation.toString());
  });

});