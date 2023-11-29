const apiUrl = "https://reqres.in/api/users?delay=3";

const showUsersBtn = document.querySelector("#show-users-btn");
const initialSpinnerRef = document.querySelector("#initial-spinner");

const usersDataContainerRef = document.querySelector("#users-data-container");

const printUsersArray = (usersArray) => {
	let userCardsArray = usersArray.map((user) => {
		return `
		<div class="user-card">
			<div class="user-card-body text-white">
				<div class="user-card-bg"></div>
				<div
					class="user-card-info d-flex flex-column justify-content-center"
				>
					<div class="user-card-img">
						<img src="${user.avatar}" alt="user image profile" />
					</div>
					<h4 class="mb-0 mt-3">${user.first_name + " " + user.last_name}</h4>
					<p class="fs-6 mt-2 mb-0">${user.email}</p>
				</div>
			</div>
		</div>
		`;
	});
	userCardsArray = userCardsArray.join("");

	return (usersDataContainerRef.innerHTML = userCardsArray);
};

/**
 * Returns the object associated with the "usersDataWithTimeStamp" key in the Local Storage
 * @returns an empty object if the key "usersDataWithTimeStamp" does not exist in the Local Storage
 */
const readLocalStorage = () => {
	const usersDataWithTimeStamp = JSON.parse(
		localStorage.getItem("usersDataWithTimeStamp")
	);
	return usersDataWithTimeStamp;
};

/**
 * Saves the data in the local storage with the key "usersDataWithTimeStamp"
 * @param {*} data object with the users array
 *
 */
const saveUsersDataLocalStorage = (data) => {
	const timeStamp = new Date().getTime();
	const usersDataWithTimeStamp = { users: data, timeStamp: timeStamp };
	localStorage.setItem(
		"usersDataWithTimeStamp",
		JSON.stringify(usersDataWithTimeStamp)
	);
};

/**
 * Makes a get request with the apiUrl constant
 * Saves the resolve in the LocalStorage with the key "usersDataWithTimeStamp"
 * Prints the error in console if it exists
 * @returns an array with the users data
 */
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

/**
 * Compares the difference between a time stamp with the current time stamp.
 * @param {*} dataTimeStamp The time stamp to compare with the current time stamp
 * @returns boolean true if the difference is less than 60000ms, false otherwise
 */
const timeStampValidity = (dataTimeStamp) => {
	const currentTime = new Date().getTime();
	const TimeDifference = currentTime - dataTimeStamp;
	return TimeDifference <= 60000;
};
// console.log(checkUsersDataTimeValidity(new Date().getTime() - 70));

/**
 * Reads the Local Storage "usersDataWithTimeStamp" object and compares their time stamp
 * with the current time stamp
 * @returns boolean true if the difference is less than 60000ms, false otherwise
 */
const validateLocalStorageData = () => {
	const usersDataWithTimeStamp = readLocalStorage();
	const timeStamp = usersDataWithTimeStamp
		? usersDataWithTimeStamp.timeStamp
		: 0;

	return timeStampValidity(timeStamp);
};

// getUsersData();
// setTimeout(validateLocalStorageData, 70000);

// 27/11/2023 Se comprobaron las funciones creadas hasta este punto todo ok

const titleRef = document.querySelector("#title");

/**
 * Validates if the app needs update the users data at the start of the app
 * and prints the users data at the DOM.
 */
const startApp = async () => {
	if (validateLocalStorageData()) {
		const userData = readLocalStorage().users;
		printUsersArray(userData);
	} else {
		const usersData = await getUsersData();
		printUsersArray(usersData);
	}
	titleRef.classList.remove("mt-45");
	initialSpinnerRef.classList.add("d-none");
};

/**Inicia el flujo de la app y cambia estilos a botón inicial */
showUsersBtn.addEventListener("click", () => {
	initialSpinnerRef.classList.remove("d-none");
	showUsersBtn.classList.add("d-none");
	startApp();
});
