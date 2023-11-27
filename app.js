const apiUrl = "https://reqres.in/api/users?delay=3";

const readLocalStorage = () => {
	const usersDataWithTimeStamp = JSON.parse(
		localStorage.getItem("usersDataWithTimeStamp")
	);
	// console.log(usersData);
	return usersDataWithTimeStamp;
};

const saveUsersDataLocalStorage = (data) => {
	const timeStamp = new Date().getTime();
	const usersDataWithTimeStamp = { users: data, timeStamp: timeStamp };
	localStorage.setItem(
		"usersDataWithTimeStamp",
		JSON.stringify(usersDataWithTimeStamp)
	);
};
const getUsersData = async () => {
	let usersData;
	try {
		const response = await fetch(apiUrl);
		const dataResponse = await response.json();
		usersData = dataResponse.data;
		saveUsersDataLocalStorage(usersData);
	} catch (error) {
		console.log(error);
	}

	return usersData;
};

const checkTimeStampValidity = (dataTimeStamp) => {
	const currentTime = new Date().getTime();
	const TimeDifference = currentTime - dataTimeStamp;
	return TimeDifference >= 60000 ? false : true;
};
// console.log(checkUsersDataTimeValidity(new Date().getTime() - 70));

const validateLocalStorageData = () => {
	const usersDataWithTimeStamp = readLocalStorage();
	const timeStamp = usersDataWithTimeStamp
		? usersDataWithTimeStamp.timeStamp
		: 0;

	return console.log(checkTimeStampValidity(timeStamp));
};

// getUsersData();
// setTimeout(validateLocalStorageData, 70000);

// 27/11/2023 Se comprobaron las funciones creadas hasta este punto todo ok
