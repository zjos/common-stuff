import { crmPlatformConnectConfig } from '@zjos28/common-dev-stuff/types/kris';

let localtoken: { token: string };
export const fetchAPI = async (url: string, method: string, crmConfig:crmPlatformConnectConfig, body?: any) => {
	const token = await getAuthToken(crmConfig);

	const requestOptions: RequestInit = {
		method: method,
		cache: 'no-cache',
		headers: {
			Authorization: `Bearer ${token.token}`,
			'Content-Type': 'application/json',
		},
		// body: JSON.stringify(body),
	};
	const response = await fetch(url, requestOptions);

	if (response.ok) {
		const data = await response.json();

		return data.value;
	} else {
		// throw new Error('Fout bij het ophalen van de data: ' + response.statusText);
		return { error: [{ error: 'Fout bij het ophalen van de data: ' + response.statusText }] };
	}
};

const getAuthToken = async (crmConfig: crmPlatformConnectConfig) => {
	console.log('getAuthToken');

	// Get Token uit localstorage of haal nieuw token op
	if (localtoken) {
		// Controleer token op geldigheid

		if (await isValidToken(localtoken.token, crmConfig.isvalid_token_url)) {
			// Als token nog geldig is, gebruik dit token
			console.log('🚀 ~ getAuthToken ~ localtoken:', 'Token is nog geldig');

			return localtoken;
		} else {
			// Als token niet meer geldig is, haal een nieuwe token op
			console.log('🚀 ~ getAuthToken ~ localtoken:', 'Token is verlopen');
			localtoken = await getNewToken(crmConfig);
		}
	} else {
		//haal nieuw token op
		localtoken = await getNewToken(crmConfig);
	}
	console.log('🚀 ~ getAuthToken ~ localtoken (new):', localtoken);
	return localtoken;
};

export const isValidToken = async (token: string, api_isvalidtoken_url: string) => {
	console.log('isValidToken');
	console.log('🚀 ~ isValidToken ~ token:', token);
	console.log('🚀 ~ isValidToken ~ api_isvalidtoken_url:', api_isvalidtoken_url)

	// Controleer token op geldigheid
	const response = await fetch(api_isvalidtoken_url, {
		cache: 'no-cache', 
		headers: { Authorization: `Bearer ${token}` },
	});

	console.log('response: ' + response.statusText);

	console.log('🚀 ~ isValidToken ~ respons.statusText:', response.status.toString() + ' - ' + response.statusText);
	if (response.status === 200) {
		return true;
	} else {
		return false;
	}
};

const getNewToken = async (crmConfig: crmPlatformConnectConfig) => {
	console.log('getNewToken');

	const tokenUrl = crmConfig.token_url;

	const requestBody = new URLSearchParams();
	requestBody.append('client_id', crmConfig.client_id);
	requestBody.append('client_secret', crmConfig.client_secret);
	requestBody.append('resource', crmConfig.resource);
	requestBody.append('grant_type', crmConfig.grant_type);
	console.log('🚀 ~ getNewToken ~ requestBody:', requestBody.toString());

	try {
		const response = await fetch(tokenUrl, {
			method: 'POST',
			cache: 'no-cache',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: requestBody.toString(),
		});

		if (response.ok) {
			const data = await response.json();
			const accessToken = await data.access_token;

			return { token: accessToken };
		} else {
			throw new Error('Fout bij ophalen nieuw token:' + response.statusText);
		}
	} catch (error) {
		console.error('Er is een fout opgetreden:', error);
		throw error;
	}
};
