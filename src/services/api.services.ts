import { Response } from "@/types/respose.type";

class ApiServices {
  // private readonly basseURL = "http://localhost:5555/api/";
  private readonly basseURL = window.location.origin + "/api/";

  public async get<T = any>(subpath: string): Promise<T> {
    const res = await fetch(this.basseURL + subpath, {});

    return await res.json();
  }

  public async post<Tbody>(
    subpath: string,
    body?: Tbody
  ): Promise<globalThis.Response> {
    return fetch(this.basseURL + subpath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });
  }

  public async put<Tbody>(
    subpath: string,
    body?: Tbody
  ): Promise<globalThis.Response> {
    return fetch(this.basseURL + subpath, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });
  }

  public async delete(subpath: string): Promise<globalThis.Response> {
    return fetch(this.basseURL + subpath, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  }
}

export const apiService = new ApiServices();
