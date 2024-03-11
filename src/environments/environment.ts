/**
  The base file environment.ts, contains the default environment settings, The variable 'production' have the information 
 either the application running is in production mode or development mode. 
  Here we can initilize the configuration variables as well, like API Parent URL
  We can add variables as per our production need with different values as per our need, i.e in development mode the API URL
  is different or other configuration varible's values

  We can also create different named files to achieve this like 'environment.prod.ts' or 'environment.satging.ts'
 */

export const environment = {
    isProduction: true,
    apiUrl: 'https://my-json-server.typicode.com/fazalrahim/json_api_iq' // Parent URL, we can pass the object with forward slash '/' and get the object base information
};
