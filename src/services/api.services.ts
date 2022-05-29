class ApiServices {
  private readonly basseURL = window.location.origin;

  public async get<T = any>(subpath: string): Promise<T | Error> {
    const res = await fetch(this.basseURL + subpath);
    return res.status >= 200 && res.status < 300
      ? await res.json()
      : new Error(res.statusText);
  }
}

export default new ApiServices();
