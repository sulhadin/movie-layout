import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'

class HttpClient {
    instance: AxiosInstance

    constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        })

        this._initializeResponseInterceptor()
        this._initializeRequestInterceptor()
    }

    _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError
        )
    }

    _initializeRequestInterceptor = (): void => {
        this.instance.interceptors.request.use(
            this._handleRequest,
            this._handleError
        )
    }

    _handleRequest = (config: AxiosRequestConfig) => {
        // Some implementation for header.
        return config
    }

    _handleResponse = ({ data }: AxiosResponse) => data

    _handleError = (error: any) => Promise.reject(error)
}

export default HttpClient
