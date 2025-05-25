export enum Version {
    Adtp2 = 'ADTP/2.0',
}

export enum Method {
    Check = "check",
    Read = "read",
    Create = "create",
    Update = "update",
    Append = "append",
    Destroy = "destroy",
    Auth = "auth",
}

export class RequestBuilder {
    version: Version;
    method: Method;
    headers: Map<string, string>;
    uri: string;
    content: string;

    constructor() {
        this.version = Version.Adtp2;
        this.method = Method.Check;
        this.headers = new Map<string, string>();
        this.uri = '';
        this.content = '';
    }

    setVersion(version: Version): RequestBuilder {
        this.version = version;
        return this;
    }

    setMethod(method: Method): RequestBuilder {
        this.method = method;
        return this;
    }

    addHeader(key: string, value: string): RequestBuilder {
        this.headers.set(key, value);
        return this;
    }

    setUri(uri: string): RequestBuilder {
        this.uri = uri;
        return this;
    }

    setContent(content: string): RequestBuilder {
        this.content = content;
        return this;
    }

    build(): string {
        return JSON.stringify(
            this
        );
    }
}

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

export class ResponseBuilder {
    version: Version;
    status: Status;
    headers: Map<string, string>;
    content: string;

    constructor() {
        this.version = Version.Adtp2;
        this.status = Status.Ok;
        this.headers = new Map<string, string>();
        this.content = '';
    }

    setVersion(version: Version): ResponseBuilder {
        this.version = version;
        return this;
    }

    setStatus(status: Status): ResponseBuilder {
        this.status = status;
        return this;
    }

    addHeader(key: string, value: string): ResponseBuilder {
        this.headers.set(key, value);
        return this;
    }

    setContent(content: string): ResponseBuilder {
        this.content = content;
        return this;
    }

    build(): string {
        return JSON.stringify(
            this
        );
    }
}