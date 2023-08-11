function generateQueryParams(paramsObject: Record<string, any>): string {
    const queryParams: string[] = [];
  
    for (const key in paramsObject) {
      if (paramsObject.hasOwnProperty(key)) {
        const value = paramsObject[key];
        queryParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
      }
    }
  
    return queryParams.join('&');
  }

export default generateQueryParams