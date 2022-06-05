import { Response } from "@/types/respose.type";

class ApiServices {
  private readonly basseURL = "http://localhost:5555/api/";
  //   private readonly basseURL = window.location.origin + "/api/";

  public async get<T = any>(subpath: string): Promise<T> {
    const res = await fetch(this.basseURL + subpath, {});

    return await res.json();
  }
}

export const apiService = new ApiServices();
