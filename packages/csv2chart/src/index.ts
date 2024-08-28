import https from 'https';
import csv from 'csv-parser';
import { Data, GetDataResponseType } from './types';

export const getData = async (url: string): Promise<GetDataResponseType> => {
  let headers: string[] = [];
  const results: Data[] = [];
  return new Promise<GetDataResponseType>((resolve, reject) => {
    https
      .get(url, (response) => {
        if (response.statusCode !== 200) {
          return reject(
            new Error(
              `Failed to get data, status code: ${response.statusCode}`,
            ),
          );
        }
        response
          .pipe(csv())
          .on('headers', (headersList: string[]) => {
            headers = headersList;
          })
          .on('data', (data: Data) => {
            for (const key in data) {
              const value = data[key];
              if (typeof value === 'string' && !isNaN(Number(value))) {
                data[key] = Number(value);
              }
              results.push(data);
            }
          })
          .on('end', () => {
            resolve({ headers, results });
          })
          .on('error', (error: Error) => {
            reject(error);
          });
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};
