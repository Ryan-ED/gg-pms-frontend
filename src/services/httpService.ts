// src/services/httpService.ts

const BASE_URL = 'http://localhost:5000/api'; // Replace with your API URL

// Create a custom error class to handle API errors
class HttpError extends Error {
  constructor(public status: number, public statusText: string, public body: any) {
    super(statusText);
  }
}

// Define a utility function to handle HTTP responses
const handleResponse = async <T>(response: Response): Promise<T> => {
  // Check if the response has JSON content type
  const contentType = response.headers.get('content-type');
  
  // Handle error status
  if (!response.ok) {
    // If the response is not OK, try to parse the error message
    const errorMessage = contentType?.includes('application/json')
      ? await response.json() // If it's JSON, parse it
      : await response.text(); // Otherwise, treat it as plain text

    // Throw the error message so it can be caught in your catch block
    throw new Error(errorMessage || 'Unknown error occurred during file upload');
  }

  // If the response is JSON, parse it
  if (contentType?.includes('application/json')) {
    return response.json(); // Parse and return the JSON data
  }

  // Otherwise, return the response as plain text or another format
  return response.text() as unknown as T; // Cast it to type T if necessary
};


// Define an interface for common request options
interface RequestOptions {
  headers?: Record<string, string>;
}

// The HttpService class contains methods for making HTTP requests
const httpService = {
  get: async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    return handleResponse<T>(response); // Return a Promise of type T
  },

  post: async <T>(url: string, body: any, options: RequestOptions = {}): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  },

  put: async <T>(url: string, body: any, options: RequestOptions = {}): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(body),
    });
    return handleResponse<T>(response);
  },

  delete: async <T>(url: string, options: RequestOptions = {}): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    return handleResponse<T>(response);
  },

  downloadFile: async (url: string, fileName?: string, options: RequestOptions = {}): Promise<void> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: {
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new HttpError(response.status, response.statusText, await response.text());
    }

    // Read the response as a Blob (binary data)
    const blob = await response.blob();

    // Create a temporary link element to initiate the download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    
    const contentDisposition = response.headers.get('Content-Disposition');
    const responseFileName = contentDisposition?.split('filename=')[1];
          
    link.download = fileName ?? responseFileName ?? 'download'; // Set the download filename

    // Programmatically trigger a click on the link to start the download
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the link after the download starts
    document.body.removeChild(link);
  },

  uploadFile: async <T>(url: string, body: FormData, options: RequestOptions = {}): Promise<T> => {
    const response = await fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: {
        ...options.headers,
      },
      body,
    });
    return handleResponse<T>(response);
  },
};

export default httpService;
