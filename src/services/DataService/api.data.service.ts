import axios, { AxiosError } from 'axios';
import StatusCode from 'status-code-enum';
import { ConfigService } from '../ConfigService/config.service';

const client = axios.create({
  baseURL: ConfigService.config.baseUrl,
  timeout: 1000,
  headers: {}
});

async function GET(url: string) {
  try {
    const response = await client.get(url);
    console.log(response);
    if (response.status === StatusCode.SuccessOK) {
      return response.data;
    }
  } catch (error: any) {
    const e = error as AxiosError;
    console.error(e.message);
  }
}

async function POST(url: string, data?: any) {
  try {
    const response = await client.post(url, data);
    if (response.status === StatusCode.SuccessOK) {
      return response.data;
    }
  } catch (error: any) {
    const e = error as AxiosError;
    console.error(e.message);
  }
}

async function PUT(url: string, data?: any) {
  try {
    const response = await client.put(url, data);
    if (response.status === StatusCode.SuccessOK) {
      return response.data;
    }
  } catch (error: any) {
    const e = error as AxiosError;
    console.error(e.message);
  }
}

async function PATCH(url: string, data?: any) {
  try {
    const response = await client.patch(url, data);
    if (response.status === StatusCode.SuccessOK) {
      return response.data;
    }
  } catch (error: any) {
    const e = error as AxiosError;
    console.error(e.message);
  }
}

async function DELETE(url: string) {
  try {
    const response = await client.delete(url);
    if (response.status === StatusCode.SuccessOK) {
      return response.data;
    }
  } catch (error: any) {
    const e = error as AxiosError;
    console.error(e.message);
  }
}

async function OPTIONS(url: string) {
  try {
    const response = await client.options(url);
    if (response.status === StatusCode.SuccessOK) {
      return response.data;
    }
  } catch (error: any) {
    const e = error as AxiosError;
    console.error(e.message);
  }
}

export const API = {
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
  OPTIONS
};
