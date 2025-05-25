/**
 * ADTP (Alula's Data Transfer Protocol) is a protocol made by me, Alula. It uses a JSON-based format for requests and responses.
 * It is designed to be simple and easy to use, while also being flexible enough to handle a wide range of use cases.
 * https://applepiecodes.github.io/adtp/
 * 
 * @example
 * ```ts
 * new RequestBuilder().setVersion(Version.Adtp2)
 *     .setMethod(Method.Read)
 * *     .setUri('/example')
 *     .addHeader('Content-Type', 'application/json')
 * *     .setContent(JSON.stringify({ key: 'value' }))
 *     .build();
 * ```
 * @example
 * ```ts
 * new ResponseBuilder().setVersion(Version.Adtp2)
 *     .setStatus(Status.Ok)
 *     .addHeader('Content-Type', 'application/json')
 * *     .setContent(JSON.stringify({ key: 'value' }))
 *     .build();
 * ```
 * 
 * @module
 */

/**
 * The Version enum defines the versions of the ADTP protocol.
 */
export enum Version {
    Adtp2 = 'ADTP/2.0',
}

/**
 * The Method enum defines the various operations that can be performed with ADTP.
 */
export enum Method {
    Check = "check",
    Read = "read",
    Create = "create",
    Update = "update",
    Append = "append",
    Destroy = "destroy",
    Auth = "auth",
}

/**
 * The RequestBuilder class is used to construct ADTP requests.
 */
export class RequestBuilder {
    /**
     * The version of the ADTP request.
     */
    version: Version;
    /**
     * The method of the ADTP request.
     */
    method: Method;
    /**
     * The headers of the ADTP request.
     */
    headers: Map<string, string>;
    /**
     * The URI of the ADTP request.
     */
    uri: string;
    /**
     * The content of the ADTP request.
     */
    content: string;

    /**
     * Constructs a new RequestBuilder with default values.
     */
    constructor() {
        this.version = Version.Adtp2;
        this.method = Method.Check;
        this.headers = new Map<string, string>();
        this.uri = '';
        this.content = '';
    }

    /**
     * Sets the version of the ADTP request.
     * @param version The version to set.
     * @returns The RequestBuilder instance for method chaining.
     */
    setVersion(version: Version): RequestBuilder {
        this.version = version;
        return this;
    }

    /**
     * Sets the method of the ADTP request.
     * @param method The method to set.
     * @returns The RequestBuilder instance for method chaining.
     */
    setMethod(method: Method): RequestBuilder {
        this.method = method;
        return this;
    }

    /**
     * Adds a header to the ADTP request.
     * @param key The header key.
     * @param value The header value.
     * @returns The RequestBuilder instance for method chaining.
     */
    addHeader(key: string, value: string): RequestBuilder {
        this.headers.set(key, value);
        return this;
    }

    /**
     * Sets the URI of the ADTP request.
     * @param uri The URI to set.
     * @returns The RequestBuilder instance for method chaining.
     */
    setUri(uri: string): RequestBuilder {
        this.uri = uri;
        return this;
    }

    /**
     * Sets the content of the ADTP request.
     * @param content The content to set.
     * @returns The RequestBuilder instance for method chaining.
     */
    setContent(content: string): RequestBuilder {
        this.content = content;
        return this;
    }

    /**
     * Builds the ADTP request as a JSON string.
     * @returns The JSON string representation of the ADTP request.
     */
    build(): string {
        return JSON.stringify(
            this
        );
    }
}

/**
 * The Status enum defines the various response statuses for ADTP.
 */
export enum Status {
    SwitchProtocols = 'switch-protocols',
    Ok = 'ok',
    Pending = 'pending',
    Redirect = 'redirect',
    Denied = 'denied',
    BadRequest = 'bad-request',
    Unauthorized = 'unauthorized',
    NotFound = 'not-found',
    TooManyRequests = 'too-many-requests',
    InternalError = 'internal-error',
}

/**
 * The ResponseBuilder class is used to construct ADTP responses.
 */
export class ResponseBuilder {
    /**
     * The version of the ADTP response.
     */
    version: Version;
    /**
     * The status of the ADTP response.
     */
    status: Status;
    /**
     * The headers of the ADTP response.
     */
    headers: Map<string, string>;
    /**
     * The content of the ADTP response.
     */
    content: string;

    /**
     * Constructs a new ResponseBuilder with default values.
     */
    constructor() {
        this.version = Version.Adtp2;
        this.status = Status.Ok;
        this.headers = new Map<string, string>();
        this.content = '';
    }

    /**
     * Sets the version of the ADTP response.
     * @param version The version to set.
     * @returns The ResponseBuilder instance for method chaining.
     */
    setVersion(version: Version): ResponseBuilder {
        this.version = version;
        return this;
    }

    /**
     * Sets the status of the ADTP response.
     * @param status The status to set.
     * @returns The ResponseBuilder instance for method chaining.
     */
    setStatus(status: Status): ResponseBuilder {
        this.status = status;
        return this;
    }

    /**
     * Adds a header to the ADTP response.
     * @param key The header key.
     * @param value The header value.
     * @returns The ResponseBuilder instance for method chaining.
     */
    addHeader(key: string, value: string): ResponseBuilder {
        this.headers.set(key, value);
        return this;
    }

    /**
     * Sets the content of the ADTP response.
     * @param content The content to set.
     * @returns The ResponseBuilder instance for method chaining.
     */
    setContent(content: string): ResponseBuilder {
        this.content = content;
        return this;
    }

    /**
     * Builds the ADTP response as a JSON string.
     * @returns The JSON string representation of the ADTP response.
     */
    build(): string {
        return JSON.stringify(
            this
        );
    }
}