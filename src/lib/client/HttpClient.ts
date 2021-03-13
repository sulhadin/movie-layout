import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios'

declare module 'axios' {
    interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
    protected readonly instance: AxiosInstance

    protected constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        })

        this._initializeResponseInterceptor()
        this._initializeRequestInterceptor()
    }

    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError
        )
    }

    private _initializeRequestInterceptor = (): void => {
        this.instance.interceptors.request.use(
            this._handleRequest,
            this._handleError
        )
    }

    private _handleRequest = (config: AxiosRequestConfig) => {
        // Some implementation for header.
        return config
    }

    private _handleResponse = ({ data }: AxiosResponse) => data

    protected _handleError = (error: any) => Promise.reject(error)
}

export default HttpClient
