'use server';
import { crmPlatformConnectConfig } from '@zjos28/common-dev-stuff/types/kris';
import { fetchAPI } from '../data';
export const getDossierTypes = async (crmConfig: crmPlatformConnectConfig, code?: string) => {
	console.log('🚀 xxxxx ~ getDossierTypes ~ codeaaaaaaaaaaaaaaa:', code)
	console.log('getDossierTypes');

	//TODO config ophalen ahv crmName
	let api_url = crmConfig.api_url;
	if (code) {
		//ophalen van 1 bepaald dossiertype
		api_url += `/ao_dossiertypes?$filter=ao_code eq '${code}'`;
	} else {
		//ophalen van alle dossiertypes
		api_url += '/ao_dossiertypes?$select=ao_beschrijving,ao_code,ao_name&$orderby=ao_code';
	}
	console.log('🚀 ~ getDossierTypes ~ url:', api_url);
	const res = await fetchAPI(api_url, 'GET', crmConfig);

	return res;
};
