const drone = {
  model: "Falcon-7",
  charge: 75,
};

drone.status= function () {
    	return this.charge*2;
  };

