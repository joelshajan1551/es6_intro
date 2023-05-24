function addressMaker(address) {
  const { city, state } = address;
  const newadress = {
    city,
    state,
    country: "united States",
  };
  console.log(`${newadress.city}, ${newadress.state}, ${newadress.country}`);
}

addressMaker({ city: "adimali", state: "kerala" });
